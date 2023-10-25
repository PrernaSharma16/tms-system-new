import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from './login-form.model';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.css']
})
export class LoginBodyComponent {
  loginForm: FormGroup;
  loginData: LoginForm; // Use the interface for form data

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      role: [null, Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    // Access form data through this.loginForm.value
    this.loginData = this.loginForm.value as LoginForm;
    console.log('User Role:', this.loginData.role);
    console.log('Username:', this.loginData.username);
    console.log('Password:', this.loginData.password);
  }

}
