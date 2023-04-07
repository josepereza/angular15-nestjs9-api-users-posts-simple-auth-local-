import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  constructor(private httpClient: HttpClient) {}

  login(usuario: any) {
    return this.httpClient.post('http://localhost:3000/auth/login', usuario);
  }
  getAll() {
    const url = 'http://localhost:3000/user/users';
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const body = { username, password };
    console.log('mi body', body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
       
    return this.httpClient.post(url, body, httpOptions );
  }
}
