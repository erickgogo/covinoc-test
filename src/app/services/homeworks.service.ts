import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Homework } from '../models/homework';
import { Observable } from 'rxjs';
const host = 'https://608adc0d737e470017b7410f.mockapi.io';
@Injectable({
  providedIn: 'root',
})
export class HomeworksService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(host + '/api/v1/todos');
  }
  create(homework: Homework): Observable<any> {
    return this.http.post(host + '/api/v1/todos', homework);
  }
  update(idHomework: string, homework: Homework): Observable<any> {
    return this.http.put(host + '/api/v1/todos/' + idHomework, homework);
  }
  delete(idHomework: string): Observable<any> {
    return this.http.delete(host + '/api/v1/todos/' + idHomework);
  }
}
