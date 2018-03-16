import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '../posts.service';
import { Observable } from  'rxjs/Observable';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userForm: FormGroup;
  titleErrorMessage: String;
  

  

  constructor(private fb:FormBuilder,private posts:PostsService) { 

  this.initialzeErrorMessages();

  }

  ngOnInit() {
    this.userForm= this.fb.group({
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      contact: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
      email: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required]]
    });
  }

  initialzeErrorMessages(){
    this.titleErrorMessage="Field is Required";

  }
  submitform()
  { console.log(this.userForm);
    console.log(JSON.stringify(this.userForm.value));
    
        this.posts.createPosts(this.userForm.value).subscribe( data => {        
        console.log(data);
 
    
  
        });


}
}