import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})
export class LeftPaneComponent implements OnInit {
  private allPosts:any;

  constructor( private postservice:PostsService) { }

  ngOnInit() {
    this.postservice.getPosts().subscribe(data => {
      console.log(data);
      this.allPosts=data;
    });
   
  }

}
