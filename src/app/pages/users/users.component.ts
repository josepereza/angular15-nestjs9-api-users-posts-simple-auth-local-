import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usuarios:any=[]
  constructor(private userService:UserService){
this.userService.getAll().subscribe(data=>{
  this.usuarios=data
  console.log(data)
})
  }

}
