import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { LoginService } from '../login-body/login.service';
import { CourseService } from  './course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit{

  courses: any[] = [];
  constructor(private courseService: CourseService, private router: Router){}

  ngOnInit(): void {
    this.courseService.getCourse().subscribe(
      response => {
        this.courses = response;
        console.log(response.keys);

      },
      error => {
        console.error('Error fetching courses', error);
      }
      
    );
  }

  logout(){
    window.alert("Confirm logout ?");
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

}
