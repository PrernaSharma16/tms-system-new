import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { StudentViewComponent } from './student-view/student-view.component';


const routes: Routes = [
  {path:'',component:LoginBodyComponent},
  {path:'create',component:CreateUserComponent},
  {path:'teacher',component:TeacherViewComponent},
  {path:'student',component:StudentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
