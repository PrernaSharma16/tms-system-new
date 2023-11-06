import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent {

  requiredFields = {
    firstname: false,
    lastname: false,
    gender: false,
    dob: false,
    rollno: false,
    location: false,
    courseid: false,
    coursename: false,
    coursedesc: false,
    trainername: false,
    softwarereq: false,
    startdate: false,
    enddate: false,
  };


  showRequired(fieldName: string) {
    if (!this[fieldName]) {
      this.requiredFields[fieldName] = true;
    }
  }
  
  hideRequired(fieldName: string) {
    if (!this[fieldName]) {
      this.requiredFields[fieldName] = false;
    }
  }
  
  clearRequired(fieldName: any) {
    if (!this[fieldName]) {
      this.requiredFields[fieldName] = false;
    } else {
      this.requiredFields[fieldName] = true;
    }
  }


  isEditing: boolean = false;
  editedFirstName: string;
  editedLastName: string;
  editedGender: string;
  editedDOB: string;
  editedRollNo: number;
  editedLocation: string;

  isEdit: boolean = false;
  editCourseId: string;
  editCourseName: string;
  editCourseDesc: string;
  editTrainerName: string;
  editSoftwareReq: string;
  editStartDate: string;
  editEndDate: string;
 

   startEdit() {
    this.isEdit = true;
    this.editCourseId = '1';
    this.editCourseName = 'Course';
    this.editCourseDesc = 'Desc';
    this.editTrainerName = 'Trainer';
    this.editSoftwareReq = 'Software';
    this.editStartDate = '2023-01-01';
    this.editEndDate = '2023-12-31';
    
  }

  Edit()
  {
    this.isEdit = false;
 
  }

  cancel()
  {
    this.isEdit = false;
    
  }

  startEditing() {
  
    this.isEditing = true;
    this.editedFirstName = 'Yash';
    this.editedLastName = 'Gole';
    this.editedGender = 'male';
    this.editedDOB = 'date';
  }

  saveEdit() {
       this.isEditing = false;
       
  }

  cancelEdit() {
    this.isEditing = false;
     }

     constructor(private router: Router){}
     logout(){
      window.alert("Confirm logout ?");
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.router.navigate(['/login']);

  }
}
