import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.css']
})

export class LoginBodyComponent implements OnInit{

  loginForm: FormGroup;
  isLoading = false;


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
    this.isLoading = true;

    const user = this.loginForm.value;
    
    const loadingContainer = document.getElementById('loadingContainer');
    if (loadingContainer) {
      loadingContainer.style.display = 'block';
    }
    this.http.post<any>('http://localhost:8080/login', user).subscribe(
      response => {
        if(response.token){
          console.log('Login successfull', response);
          console.log('Token', response.token);
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', user.role);
          //alert('Login successfull');

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
          this.router.navigate(['/'])
        }

        this.isLoading = false;
        if (loadingContainer) {
          loadingContainer.style.display = 'none';
        }
      },
      error => {
        alert('An error occurred while processing your request');
        this.isLoading = false;
        if (loadingContainer){
          loadingContainer.style.display = 'none';
        }
      }
    );
  }

}

  


