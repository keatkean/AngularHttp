import { Component, OnInit } from '@angular/core';
import {GitHubService} from './github.service';
import {Repos} from './repos';

@Component({
  selector: 'app-angular-httpget',
  templateUrl: './angular-httpget.component.html',
  styleUrls: ['./angular-httpget.component.css']
})
export class AngularHttpgetComponent implements OnInit {
  userName = 'tektutorialshub';
  pageNo  = '1';
  sortOn = 'description';
  repos: Repos[];
  loading = false;
  errorMessage;

  constructor(private githubService: GitHubService) {
  }

  ngOnInit(): void {
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName, this.pageNo, this.sortOn)
      .subscribe((response) => {this.repos = response; },
        (error) => {
          this.errorMessage = error.message; this.loading = false;
        },
        () => {this.loading = false; });
    // this.loading = true;
    // this.errorMessage = '';
    // this.githubService.getRepos(this.userName)
    //   .subscribe(
    //     (response) => {                           // next() callback
    //       console.log('response received');
    //       this.repos = response;
    //     },
    //     (error) => {                              // error() callback
    //       console.error('Request failed with error');
    //       this.errorMessage = error;
    //       this.loading = false;
    //     },
    //     () => {                                   // complete() callback
    //       console.error('Request completed');      // This is actually not needed
    //       this.loading = false;
    //     });
  }
}
