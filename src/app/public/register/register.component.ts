import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { PostsService } from '../posts.service';
import{Registration } from '../registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
 private formObject:Registration = new Registration('','','','','');
  constructor( private posts: PostsService) { }

  ngOnInit() {
  }
 
submit()
{
  console.log(JSON.stringify (this.formObject));
  this.posts.createPost(this.formObject).subscribe( data => {        
    console.log(data);
  

});
}
}