import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCourse() {
    return this.http.get<any[]>(`${this.baseUrl}/getCourse`);
  }

  deleteCourse(course_id: number) {
    const url = `${this.baseUrl}/deleteCourse/${course_id}`;
    return this.http.delete(url);

  }
}
