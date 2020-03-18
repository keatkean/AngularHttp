import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularHttpclientComponent } from './angular-httpclient/angular-httpclient.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AngularHttpgetComponent } from './angular-httpget/angular-httpget.component';
import {FormsModule} from '@angular/forms';
import { AngularHttppostComponent } from './angular-httppost/angular-httppost.component';
import {GitHubService} from './angular-httpget/github.service';


@NgModule({
  declarations: [
    AppComponent,
    AngularHttpclientComponent,
    AngularHttpgetComponent,
    AngularHttppostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitHubService],
  // providers: [GitHubService,{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AppHttpInterceptor,
  //   multi: true
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
