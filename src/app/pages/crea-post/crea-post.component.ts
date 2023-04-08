import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-crea-post',
  templateUrl: './crea-post.component.html',
  styleUrls: ['./crea-post.component.css']
})
export class CreaPostComponent {
  userId:number=0
  constructor(private fb:FormBuilder, private userService:UserService){
    this.userId = +localStorage.getItem('userId')!;
  
 
    
  }
  
  postForm=this.fb.group({
    title:[''],
    content:[''],
    userId:[0]
  }
  )
  enviarPost(){
    this.postForm.patchValue({userId:this.userId})
    console.log(this.postForm.value)
    this.userService.crearPost(this.postForm.value).subscribe(data=>{
      console.log('registro agregado', data)
    })
  }
}
