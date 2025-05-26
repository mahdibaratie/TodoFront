import { IPerson } from "./../IPerson";
 import { Injectable } from "@angular/core";
 import { HttpClient, HttpErrorResponse } from "@angular/common/http";
 import { Observable, throwError } from "rxjs";
 import { catchError, retry } from "rxjs/operators";

 @Injectable({
   providedIn: "root"
 })
 export class PersonServicesService {
   constructor(private http: HttpClient) {}

   private url: string = "https://localhost:7056/api/User";

   getData(): Observable<IPerson[]> {
     return this.http
       .get<IPerson[]>(this.url)
       .pipe(retry(3), catchError(this.showError));
   }

   deleteData(id: number): Observable<any> {
     const deleteUrl = `https://localhost:7056/api/User/${id}`;
     return this.http
       .delete(deleteUrl)
       .pipe(catchError(this.showError));
   }

   addData(item: IPerson): Observable<IPerson> {
     return this.http.post<IPerson>('https://localhost:7056/api/User', item).pipe(
       catchError(this.showError)
     );
     console.log(item);
   }


   showError(errorResponse: HttpErrorResponse) {
     if (errorResponse.error instanceof ErrorEvent) {
       console.error("client side error", errorResponse.error.message);
     } else {
       console.error("Server side Error", errorResponse.error.message);
     }
     return throwError("Please Try again , this issue");
   }
 }
