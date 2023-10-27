import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from './login-body/login-form.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl ='http://localhost:8080';

  constructor(private http: HttpClient) { }
  
  createUser(loginForm: LoginForm) {
    return this.http.post(`${this.baseUrl}`, loginForm);
  }

}
