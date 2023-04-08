import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts:any=''
constructor(private userService:UserService){
userService.getPostUser().subscribe((data:any)=>{
  this.posts=data[0].posts
  console.log('mi data',this.posts)
})
}
}
