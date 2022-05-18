import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = `${environment.URL_API}/Users`;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http
      .get(this.api)
      .pipe(catchError(this.handleError), map(this.jsonDataToUsers));
  }

  getUser(id: number): Observable<User> {
    return this.http.get(`${this.api}/${id}`).pipe(
      catchError(this.handleError),
      map(this.jsonDataToUser)
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post(`${this.api}`, user).pipe(
      catchError(this.handleError),
      map(this.jsonDataToUser)
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(`${this.api}/${user.id}`, user).pipe(
      catchError(throwError),
      map(this.jsonDataToUser)
    );
  }

  deleteUser(id: number): Observable<User> {
    return this.http.get(`${this.api}/${id}`).pipe(
      catchError(this.handleError),
      map(this.jsonDataToAny)
    );
  }

  private handleError(error: any): Observable<any> {
    return throwError(error);
  }

  private jsonDataToUser(jsonData: any): User {
    return jsonData as User;
  }

  private jsonDataToUsers(jsonData: any): User[] {
    const data: User[] = [];
    jsonData.forEach((ele: User) => {
      data.push(ele)
    });
    return data;
  }

  private jsonDataToAny(jsonData: any): any {
    return jsonData as any;
  }
}
