import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Person } from './person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ApiService {

  baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getPeople(): Observable<Person[]> {
    console.log('getPeople ' + this.baseURL + 'people');
    return this.http.get<Person[]>(this.baseURL + 'people');
  }

  // addPerson(person: Person): Observable<any> {
  //   const headers = { 'content-type': 'application/json'};
  //   const body = JSON.stringify(person);
  //   console.log(body);
  //   return this.http.post(this.baseURL + 'people', body, {headers});
  // }

  addPerson(person: Person): Observable<Person> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post<Person>(this.baseURL + 'people', body, {headers});
  }

  addPerson2(person: Person): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(person);

    return this.http.post(this.baseURL + 'people', body, {headers , observe: 'response'});
    // return this.http.post(this.baseURL + 'people', body, {headers, observe: 'response', reportProgress: true});
  }

  addPerson3(person: Person): Observable<Person> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post<Person>(this.baseURL + 'people', body, {headers});
  }

  // addPerson4(person: Person): Observable<ArrayBuffer> {
  //   const headers = { 'content-type': 'application/json'};
  //   const body = JSON.stringify(person);
  //
  //   return this.http.post<Person>(this.baseURL + 'people', body, { headers, responseType: 'text'});
  // }

  addPerson5(person: Person): Observable<Person> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(person);

    return this.http.post<Person>(this.baseURL + 'people', body, {headers})
      .pipe(
        catchError((err) => {
            console.error(err);
            throw err;
          }
        ));
  }

  addPerson6(person: Person): Observable<Person> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(person);

    return this.http.post<Person>(this.baseURL + 'people', body, {headers})
      .pipe(
        map((data) => {
          // You can perform some transformation here
          return data;
        }),
        catchError((err) => {
            console.error(err);
            throw err;
          }
        ));
  }

  addPerson7(person: Person): Observable<Person> {
    const headers = { 'content-type': 'application/json'};

    const params = new HttpParams()
      .set('para1', 'value1')
      .set('para2', 'value2');
    const body = JSON.stringify(person);

    return this.http.post<Person>(this.baseURL + 'people', body, {headers, params});

  }
  addPerson8(person: Person): Observable<Person> {
    const headers = { 'content-type': 'application/json'};


    const body = JSON.stringify(person);

    return this.http.post<Person>(this.baseURL + 'people?para1=value1&para2=value2', body, {headers});

  }

  // Adding headers
  getPeopleWithHeaders(): Observable<Person[]> {
    const headers = { 'content-type': 'application/json'};
    console.log(headers);
    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }

  // Set method
  getPeopleWithSet(): Observable<Person[]> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    console.log(headers);
    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }

  // This wont work
  getPeopleWithImmutable(): Observable<Person[]> {
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');

    console.log(headers);
    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }

  getPeopleWithImmutable1(): Observable<Person[]> {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    headers = headers.set('Access-Control-Allow-Origin', '*');

    console.log(headers);
    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }


  getPeopleAppend(): Observable<Person[]> {
    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('content-type', 'application/x-www-form-urlencoded');
    headers = headers.append('customer-header', 'custom');
    console.log(headers);
    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }

  getPeopleHas(): Observable<Person[]> {
    let headers = new HttpHeaders();
    // headers=headers.append('content-type','application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*');
    if (!headers.has('content-type')) {
      headers = headers.append('content-type', 'application/json');
    }

    console.log(headers);
    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }


  getPeopleGet(): Observable<Person[]> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    const h = headers.get('content-type');
    if (h == null) {
      console.log('content type header not present');
    } else {
      console.log(h);
    }


    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }

  getPeopleGetAll(): Observable<Person[]> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .append('content-type', 'application/x-www-form-urlencoded');

    const h = headers.getAll('content-type');
    console.log(h);


    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }

  getPeopleKeys(): Observable<Person[]> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .append('content-type', 'application/x-www-form-urlencoded');

    const h = headers.keys();
    console.log(h);


    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }

  getPeopleDelete(): Observable<Person[]> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .append('content-type', 'application/x-www-form-urlencoded');


    headers = headers.delete('content-type', 'application/json');

    // headers=headers.delete("content-type")


    console.log(headers);


    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }


  getPeopleFromObject(): Observable<Person[]> {

    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'}  );

    console.log(headers);


    return this.http.get<Person[]>(this.baseURL + 'people', {headers});
  }
}
