import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-angular-httpclient',
  templateUrl: './angular-httpclient.component.html',
  styleUrls: ['./angular-httpclient.component.css']
})
export class AngularHttpclientComponent implements OnInit {

  userName = 'tektutorialshub';
  baseURL = 'https://api.github.com/';
  repos: Repos[];


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getRepos();
  }


  public getRepos() {

    return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
      .subscribe(
        (response) => {                           // Next callback
          console.log('response received');
          console.log(response);
          this.repos = response;
        },
        (error) => {                              // Error callback
          console.error('Request failed with error');
          alert(error);
        },
        () => {                                   // Complete callback
          console.log('Request completed');
        });
  }

}

export class Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
}
