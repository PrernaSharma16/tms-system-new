import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginBodyComponent } from './login-body/login-body.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    LoginBodyComponent,
    LoginFooterComponent,
    CreateUserComponent,
    StudentViewComponent,
    TeacherViewComponent,
    CreateTeacherComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
