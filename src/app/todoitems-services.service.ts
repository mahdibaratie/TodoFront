import { TodoItem } from "./../TodoItems";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TodoServicesService {
  constructor(private http: HttpClient) { }

  private url: string = "https://localhost:7056/api/Todo?mode=1";

  getData(): Observable<TodoItem[]> {
    return this.http
      .get<TodoItem[]>(this.url)
      .pipe(retry(3), catchError(this.showError));
  }

  deleteData(id: number): Observable<any> {
    const deleteUrl = `https://localhost:7056/api/Todo/${id}`;
    return this.http
      .delete(deleteUrl)
      .pipe(catchError(this.showError));
  }

  addData(item: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>('https://localhost:7056/api/Todo', item).pipe(
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
