import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {Person} from './person';

@Component({
  selector: 'app-angular-httppost',
  templateUrl: './angular-httppost.component.html',
  styleUrls: ['./angular-httppost.component.css']
})
export class AngularHttppostComponent implements OnInit {

  people: Person[];
  person = new Person();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.refreshPeople();
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data);
        this.people = data;
      });

  }

  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        this.person = new Person();
        this.refreshPeople();
      });
  }

}
