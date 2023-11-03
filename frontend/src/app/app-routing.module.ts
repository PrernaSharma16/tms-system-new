import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { SampleComponent } from './sample/sample.component';
import { AuthGuard } from './auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  {path:'',component:LoginBodyComponent},
  // {path:'login',component:LoginBodyComponent,canActivate: [AuthGuard], data: {role: 'student'}},
  {path:'login',component:LoginBodyComponent,canActivate: [AuthGuard]},
  {path:'teacher',component:TeacherViewComponent,canActivate: [AuthGuard], data: {role: 'teacher'}},
  {path:'student',component:StudentViewComponent, canActivate: [AuthGuard], data: {role: 'student'}},
  {path:'sample',component:SampleComponent},
  {path:'error',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
