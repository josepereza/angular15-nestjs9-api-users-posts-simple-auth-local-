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

  register(usuario: any) {
    return this.httpClient.post('http://localhost:3000/user', usuario);
  }
  
  crearPost(post:any){
    console.log('mi post',post)
  return this.httpClient.post('http://localhost:3000/post',post)
  }
  isLoggedIn(): boolean {
    // Aquí implementa la lógica para verificar si el usuario está autenticado.
    // Por ejemplo, leyendo los datos de usuario del almacenamiento local.
    const userData = localStorage.getItem('username');
    return !!userData;
  }
  getUser(username:any){
    return this.httpClient.get(`http://localhost:3000/user/getuser/${username}`)
  }
  getPostUser(){
    const userData = localStorage.getItem('username');
    return this.httpClient.get(`http://localhost:3000/user/getuser/${userData}`)
  }
}
