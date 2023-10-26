import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createForm } from '../create-user/create.model';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  createForm: FormGroup;
  createData: createForm;

  constructor(private fb:FormBuilder) {
    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      location:['',Validators.required],
      date: [null, Validators.required]

    })

  }


}
