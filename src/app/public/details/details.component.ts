import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
private postdetail:any={};
  constructor(private route:ActivatedRoute, private posts:PostsService) { }

  ngOnInit() {
    this.route.params.subscribe(data =>{
      this.posts.getPost(data['postId']).subscribe(data =>{
        this.postdetail=data;
      });
    });
  }

}
