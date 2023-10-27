import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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


  // Function to start editing
  startEditing() {
    this.isEditing = true;
    // Initialize edited values with current data
    this.editedFirstName = 'Yash'; // Replace with actual data
    this.editedLastName = 'Gole'; // Replace with actual data
    this.editedGender = 'male'; // Replace with actual data
    this.editedDOB = 'date'; // Replace with actual data
  


  }

  // Function to save the edit
  saveEdit() {
    // Implement logic to save the edited data (e.g., make an API call)
    this.isEditing = false;
  }

  // Function to cancel the edit
  cancelEdit() {
    this.isEditing = false;
    // Optionally, reset edited values to the original data
    // this.editedFirstName = '';
    // this.editedLastName = '';
    // this.editedGender = '';
    // this.editedDOB = '';
    // this.editedLocation = '';
  }
}
