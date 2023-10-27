import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginurl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  login(role: string, username: string, password: string) : Observable<string>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const body = {role: role, username: username, password: password};
    return this.http.post<string>(this.loginurl, body, httpOptions);
  }
}
