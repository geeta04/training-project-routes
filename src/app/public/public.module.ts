import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PostsComponent } from './posts/posts.component';

import { LeftPaneComponent } from './left-pane/left-pane.component';
import { DetailsComponent } from './details/details.component';
import{ HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


export const appRoutespublic:Routes=[
  {path:'work' , component:WorkComponent},
  {path:'expertise',component:ExpertiseComponent},
  {path:'resources', component:ResourcesComponent},
  {path:'about',component:AboutComponent},
  {path:'posts',component:PostsComponent},
  {path:'posts/:postId',component:PostsComponent},
  {path:'register',component:RegisterComponent},
  {path:'register',component:RegisterComponent}, 
   {path:'reactive',component:ReactiveFormsComponent}

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutespublic)
  ],
  providers:[ PostsService],
  declarations: [WorkComponent, ExpertiseComponent, ResourcesComponent, AboutComponent, PostsComponent, LeftPaneComponent, DetailsComponent, RegisterComponent, ReactiveFormsComponent]
})
export class PublicModule { }
