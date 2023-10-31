import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from './login-form.model';
import { LoginService } from './login.service';
import { StudentViewComponent } from '../student-view/student-view.component';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.css']
})

export class LoginBodyComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      role: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid){
      return;
    }
    const user = this.loginForm.value;
    this.http.post<any>('http://localhost:8080/login', user).subscribe(
      response => {
        if(response.status === 'success'){
          console.log('Login successfull');
          alert('Login successfull');

          if(user.role === 'student'){
            this.router.navigate(['student']);
          } else if (user.role === 'teacher'){
            this.router.navigate(['teacher']);
          }else{
            console.error('Unknown role: ', user.role);
          }

        }else{
          console.log('Login failed');
          alert('Login failed. Invalid username or password');
        }
      },
      error => {
        alert('An error occurred while processing your request');
      }
    );
  }

}

  


