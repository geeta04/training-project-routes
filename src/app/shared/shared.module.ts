import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import  {RouterModule, Routes} from '@angular/router';

export const appRoutes1: Routes=[
  
  
  ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes1)
  ],
  exports:[
    NavBarComponent,
    
  ],

  
  declarations: [NavBarComponent]
})
export class SharedModule { }
