import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from '../student-view/course.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent {

  newStudent = {
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    rollno:'',
    location: ''
  };



  

  isEditing: boolean = false;
  editedFirstName: string;
  editedLastName: string;
  editedGender: string;
  editedDOB: string;
  editedRollNo: number;
  editedLocation: string;
  editedRowIndex: number = -1;


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
       this.editedRowIndex = -1;
  }

  
  cancelEdit() {
    this.isEditing = false;
    this.editedRowIndex = -1;
     }
}
