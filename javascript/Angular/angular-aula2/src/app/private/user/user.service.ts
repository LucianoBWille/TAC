import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserListResponse } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static URL = "https://reqres.in/api/users?page=2"

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<UserListResponse>(UserService.URL)
  }
}
