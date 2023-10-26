import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { createForm } from '../create-user/create.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
  createForm: FormGroup;
  createData: createForm;

  constructor(private fb:FormBuilder) {
    this.createForm = this.fb.group({
      courseid: ['', Validators.required],
      coursename: ['', Validators.required]
    });

  }

}
