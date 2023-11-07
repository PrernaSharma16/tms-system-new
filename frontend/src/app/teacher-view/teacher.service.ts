import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private studentAddedSubject = new Subject<void>();
  private courseAddedSubject = new Subject<void>();

  private baseurl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getStudent(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}/getStudent`);
  }

  getCourse(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/getCourse`);
  }

  insertCourse(course: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/insertCourse`, course);
  }

  insertStudent(student: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/insertStudent`, student);
  }

  studentAdded(): Observable<void> {
    return this.studentAddedSubject.asObservable();
  }

  notifyStudentAdded() {
    this.studentAddedSubject.next();
  }

  courseAdded(): Observable<void> {
    return this.courseAddedSubject.asObservable();
  }

  notifyCourseAdded() {
    this.courseAddedSubject.next();
  }
}
