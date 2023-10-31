import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
import { LoginService } from '../login-body/login.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent {

  formData: any = 
  {

    id: undefined,
    coursename: '',
    courseduration: '',
    coursedescription: ''



  };

  constructor(private loginService: LoginService) {}

}
