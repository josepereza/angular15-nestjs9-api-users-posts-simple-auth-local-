import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.fb.nonNullable.group({
    username: [''],
    password: [''],
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  login() {
    this.userService.login(this.loginForm.value).subscribe((data: any) => {
      console.log('data del login', data);
      console.log('form',this.loginForm.value.username)
      localStorage.setItem('username', this.loginForm.value.username!);
      localStorage.setItem('password',this.loginForm.value.password!);

     
      this.router.navigate(['/users']);
    });
  }
}
