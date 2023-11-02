import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmsService {

  constructor() { }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
