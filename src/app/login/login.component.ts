import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.authentificationService
      .sendLoginForm(this.loginForm.value)
      .subscribe((user) => {
        if (!user.length) {
          alert('Email ou mot de passe incorrect');
          return;
        }
        localStorage.setItem('user', JSON.stringify(user[0]));
        this.router.navigate(['/']);
      });
  }
}
