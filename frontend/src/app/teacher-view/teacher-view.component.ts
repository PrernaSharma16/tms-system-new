import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {

  students: any[] = [];
  courses: any[] = [];


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
 showCourseDurationRequired: boolean = false;
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

    if(fieldName === 'courseduration' && !this[fieldName])
    {
      this.showCourseDurationRequired = true;
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
  editCourseDuration: string;
  editCourseDesc: string;
  editTrainerName: string;
  editSoftwareReq: string;
  editStartDate: string;
  editEndDate: string;
 

   startEdit() {
    this.isEdit = true;
    this.editCourseId = '';
    this.editCourseName = '';
    this.editCourseDuration = '';
    this.editCourseDesc = '';
    this.editTrainerName = '';
    this.editSoftwareReq = '';
    this.editStartDate = '';
    this.editEndDate = '';
    
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
    this.editedFirstName = '';
    this.editedLastName = '';
    this.editedGender = '';
    this.editedDOB = '';
  }

  saveEdit() {
       this.isEditing = false;
       
  }

  cancelEdit() {
    this.isEditing = false;
     }

  constructor(private router: Router, private teacherService: TeacherService){}

     ngOnInit(): void {
         this.teacherService.getStudent().subscribe(
          (response) => {
            this.students = response;
          },
          (error) => {
            console.error('Error fetching students', error);
          }
         );

         this.teacherService.getCourse().subscribe(
          (response) => {
            this.courses = response;
          },
          (error) => {
            console.error('Error fetching courses', error);
          }
         )
         this.teacherService.courseAdded().subscribe(() =>{
          this.reloadCourses();
         })

         this.teacherService.studentAdded().subscribe(() =>{
          this.reloadStudents();
         });
     }
     
     logout(){
      window.alert("Confirm logout ?");
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.router.navigate(['/login']);

  }
  insertCourse() {
    const course_id = (document.getElementById('courseid') as HTMLInputElement).value;
    const course_name = (document.getElementById('coursename') as HTMLInputElement).value;
    const course_desc = (document.getElementById('coursedesc') as HTMLInputElement).value;
    const trainer_name = (document.getElementById('trainername') as HTMLInputElement).value;
    const software_req = (document.getElementById('softwarereq') as HTMLInputElement).value;
    const start_date = (document.getElementById('startdate') as HTMLInputElement).value;
    const end_date = (document.getElementById('enddate') as HTMLInputElement).value;

    const courseData ={
      course_id,
      course_name,
      course_desc,
      trainer_name,
      software_req,
      start_date,
      end_date
    };

    this.teacherService.insertCourse(courseData).subscribe(
      (response) => {
        this.courses.push(response);
        this.editCourseId = '';
        this.editCourseName = '';
        this.editCourseDesc = '';
        this.editTrainerName = '';
        this.editSoftwareReq = '';
        this.editStartDate = '';
        this.editEndDate = '';
        this.teacherService.notifyCourseAdded();
        
      },
      (error) => {
        console.error('Error adding course', error);
      }
    )
  }

  insertStudent() {
    const firstname = (document.getElementById('firstname') as HTMLInputElement).value;
    const lastname = (document.getElementById('lastname') as HTMLInputElement).value;
    const rollno = (document.getElementById('rollno') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    
    const studentData = {
      firstname,
      lastname,
      rollno,
      gender,
      dob,
      location
    };
    this.teacherService.insertStudent(studentData).subscribe(
      (response) => {
        this.students.push(response);
        this.editedFirstName = '';
        this.editedLastName = '';
        this.editedGender = '';
        this.editedDOB = '';
        this.editedRollNo = null;
        this.editedLocation = '';
        this.teacherService.notifyStudentAdded();
      },
      (error) => {
        console.error('Error adding student', error);
      }
    );
  }
  
  reloadStudents() {
    this.teacherService.getStudent().subscribe(
      (response) => {
        this.students = response;
      },
      (error) => {
        console.error('Error fetching students', error);
      }
    )
  }

  reloadCourses() {
    this.teacherService.getCourse().subscribe(
      (response) => {
        this.courses = response;
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    )
  }

}
