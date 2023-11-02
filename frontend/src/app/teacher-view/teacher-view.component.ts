import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent {


 

  showFirstNameRequired: boolean = false; 
  showLastNameRequired: boolean = false;
  showGenderRequired: boolean = false;
  showDOBRequired: boolean = false;
  showRollNoRequired: boolean = false;
  showLocationRequired: boolean = false;

  showRequired(fieldName: any) {
    if (fieldName === 'firstname' && !this[fieldName]) {
      this.showFirstNameRequired = true;
    }

    if (fieldName === 'lastname' && !this[fieldName]) {
      this.showLastNameRequired = true;
    }

    if (fieldName === 'gender' && !this[fieldName]) {
      this.showGenderRequired = true;
    }

    if (fieldName === 'dob' && !this[fieldName]) {
      this.showDOBRequired = true;
    }

    if (fieldName === 'rollno' && !this[fieldName]) {
      this.showRollNoRequired = true;
    }

    if (fieldName === 'location' && !this[fieldName]) {
      this.showLocationRequired = true;
    }
  }

  hideRequired(fieldName: any) {
    if (fieldName === 'firstname' && !this[fieldName]) {
      this.showFirstNameRequired = false;
    }

    if (fieldName === 'lastname' && !this[fieldName]) {
      this.showLastNameRequired = false;
    }

    if (fieldName === 'gender') {
      this.showGenderRequired = false;
    }

    if (fieldName === 'dob') {
      this.showDOBRequired = false;
    }

    if (fieldName === 'rollno') {
      this.showRollNoRequired = false;
    }

    if (fieldName === 'location') {
      this.showLocationRequired = false;
    }
  }
  


 showCourseIdRequired: boolean = false;
 showCourseNameRequired: boolean = false;
 showCourseDescRequired: boolean = false;
 showTrainerNameRequired: boolean = false;
 showSoftwareReqRequired: boolean = false;
 showStartDateRequired: boolean = false;
 showEndDateRequired: boolean = false;

 Required(fieldName:any)
 {
    if(fieldName === 'courseid'  && !this[fieldName])
    {
      this.showCourseIdRequired = true;
    }

    if(fieldName === 'coursename'  && !this[fieldName])
    {
      this.showCourseNameRequired = true;
    }

    if(fieldName === 'coursedesc'  && !this[fieldName])
    {
      this.showCourseDescRequired = true;
    }

    if(fieldName === 'trainername'  && !this[fieldName])
    {
      this.showTrainerNameRequired = true;
    }

    if(fieldName === 'softwarereq'  && !this[fieldName])
    {
      this.showSoftwareReqRequired = true;
    }

    if(fieldName === 'startdate'  && !this[fieldName])
    {
      this.showStartDateRequired = true;
    }

    if(fieldName === 'enddate'  && !this[fieldName])
    {
      this.showEndDateRequired = true;
    }

 }

 hide(fieldName:any)
 {
  if(fieldName === 'courseid')
  {
    this.showCourseIdRequired = false; 
  }

  if(fieldName === 'coursename')
  {
    this.showCourseNameRequired = false;
  }

  if(fieldName === 'coursedesc')
  {
    this.showCourseDescRequired = false;
  }

  if(fieldName === 'trainername')
  {
    this.showTrainerNameRequired = false;
  }

  if(fieldName === 'softwarereq')
  {
    this.showSoftwareReqRequired = false;
  }

  if(fieldName === 'startdate')
  {
    this.showStartDateRequired = false;
  }

  if(fieldName === 'enddate')
  {
    this.showEndDateRequired = false;
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
}
