import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import {Repos} from './repos';


@Injectable()
export class GitHubService {

  baseURL = 'https://api.github.com/';

  constructor(private http: HttpClient) {
  }

  getRepos(userName: string, PageNo: string, SortOn: string): Observable<Repos[]> {
    const params = new HttpParams()
      .set('page', PageNo)
      .set('sort', SortOn);

    console.log(params.toString());
    return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos', {params});
  }

  getReposTypedResponse(userName: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos');
  }

  getReposUrlParameter(userName: string): Observable<Repos[]> {

    const params = new HttpParams()
      .set('sort', 'description')
      .set('page', '2');

    return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos', { params })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
            console.error(err);
            throw err;
          }
        )
      );
  }

  getReposUrlParameter2(userName: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos?sort=description&page=2')
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
            console.error(err);
            throw err;
          }
        )
      );
  }

  getReposHeaders(userName: string): Observable<Repos[]> {

    const params = new HttpParams()
      .set('sort', 'description')
      .set('page', '2');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');


    return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos', { params, headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
            console.error(err);
            throw err;
          }
        )
      );
  }

  getReposWithCookies(userName: string): Observable<Repos[]> {

    const params = new HttpParams()
      .set('sort', 'description')
      .set('page', '2');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');


    return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos', { params, headers, withCredentials: true })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
            console.error(err);
            throw err;
          }
        )
      );
  }

  getReposMap(userName: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
      .pipe(
        map((data) => {
          // You can perform some transformation here
          return data;
        }),
        catchError((err, caught) => {
            console.error(err);
            throw err;
          }
        )
      );
  }

  getReposCatchError(userName: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(this.baseURL + 'usersY/' + userName + '/repos')
      .pipe(
        catchError((err) => {
            console.error(err);
            throw err;
          }
        )
      );
  }

  getReposRawResponse(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos', { observe: 'response' });
  }

  getReposEventResponse(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos', { observe: 'events', reportProgress: true });
  }
}
