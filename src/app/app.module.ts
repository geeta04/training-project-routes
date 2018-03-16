import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {RouterModule, Routes} from '@angular/router';


import{ HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import{ PostsService } from './public/posts.service';

export const appRoutes: Routes=[


];






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  
  
    SharedModule,
    PublicModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
