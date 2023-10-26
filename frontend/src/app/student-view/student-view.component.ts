import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService) {}

}
