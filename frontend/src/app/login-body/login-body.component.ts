import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from './login-form.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.css']
})

export class LoginBodyComponent implements OnInit{

  loginForm: FormGroup;
  loginData: LoginForm; // Use the interface for form data

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) {
    // this.loginForm = this.fb.group({
    //   role: [null, Validators.required],
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // }); 
   }

  onSubmit(){
    console.log('Username: '+this.loginForm.get('username').value);
    console.log('Password: '+this.loginForm.get('password').value);
    console.log('role: '+this.loginForm.get('role').value);

    this.loginService.login(this.loginForm.get('username').value, this.loginForm.get('password').value, this.loginForm.get('role').value).subscribe(
      (response: any) => {
        if(response.status === 'success'){
          console.log('Login successfull');
        }else{
          console.log('Invalid credentials. Please try again');
        }

      },
      (error) =>{
        console.error('Error: ', error)
      }
    );
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      role: [null, Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

}

  


