import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  {path:'',component:LoginBodyComponent},
  {path:'login',component:LoginBodyComponent},
  {path:'teacher',component:TeacherViewComponent},
  {path:'student',component:StudentViewComponent},
  {path:'sample',component:SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
