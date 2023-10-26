import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent {
  isEditing: boolean = false;
  editedFirstName: string;
  editedLastName: string;
  editedGender: string;
  editedDOB: string;
  editedLocation: string;
 
  isEdit:boolean = false;
  editLocation: string;
  editName: string;
  editDesc: string;

  startEdit()
  {
    this.isEdit = true;
    this.editName = 'yash';
    this.editDesc = 'Course 1';
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
