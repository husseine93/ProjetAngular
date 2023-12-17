import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { birthdateValidator } from 'src/app/validators/birthdate.validator';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.authentificationService
      .sendRegisterForm(this.registerForm.value)
      .subscribe((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
      });
  }
}
