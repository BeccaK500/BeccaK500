import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

const HttpOptions = {
  headers: new HttpHeaders(
    {
      Authorisation : 'Bearer  ' + localStorage.getItem('Token')
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;


constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {

  return this.http.get<User[]>(this.baseUrl + 'users', HttpOptions);
}

getUser(id: string): Observable<User> {

  return this.http.get<User>(this.baseUrl + 'users/' + id, HttpOptions);
}

}
