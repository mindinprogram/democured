import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl = 'http://localhost:3000/registration';
  constructor(private http: HttpClient) { }

  getuserlist() 
  {
    return this.http.get(this.baseUrl);
  }

  saveUser(data)
  {
    return this.http.post(this.baseUrl,data);
  }
  updateUser(id,data)
  {
    return this.http.put(`${this.baseUrl}/${id}`,data);
  }
  getuserbyid(id)
  {
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  deleteuser(id)
  {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

