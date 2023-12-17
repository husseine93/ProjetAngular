import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  sendRegisterForm(registerForm: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, registerForm);
  }

  sendLoginForm(loginForm: any): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/users?email=${loginForm.email}&password=${loginForm.password}`
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('user');
  }

}
