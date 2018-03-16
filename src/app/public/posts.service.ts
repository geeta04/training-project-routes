import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostsService {
  

  constructor(private http:HttpClient) { 
    
    }
    getPosts(){
      return this.http.get('http://jsonplaceholder.typicode.com/posts');
   

  }
  getPost(postId){
    return this.http.get('http://jsonplaceholder.typicode.com/posts/'+postId);
 

}
createPost(postId)
{
  return this.http.post('http://jsonplaceholder.typicode.com/posts/',postId);
}
createPosts(postId)
{
  return this.http.post('http://jsonplaceholder.typicode.com/posts/',postId);
}
}

