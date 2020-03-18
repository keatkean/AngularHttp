// import {Injectable} from '@angular/core';
// import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
// import {Observable} from 'rxjs';
//
//
// @Injectable()
// export class AppHttpInterceptor implements HttpInterceptor {
//   constructor() {
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = 'invalid token';
//     req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
//
//     return next.handle(req)
//       .map(resp => {
//         // on Response
//         if (resp instanceof HttpResponse) {
//           // Do whatever you want with the response.
//           return resp;
//         }
//       }).catch(err => {
//         // onError
//         console.log(err);
//         if (err instanceof HttpErrorResponse) {
//           console.log(err.status);
//           console.log(err.statusText);
//           if (err.status === 401) {
//             // redirect the user to login page
//             // 401 unauthorised user
//           }
//         }
//         return Observable.of(err);
//       });
//   }
// }
