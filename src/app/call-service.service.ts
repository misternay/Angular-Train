import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee'
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
@Injectable()
export class CallServiceService {
  mockData:Employee[]=[
    {id:1, name:'Nay'},
    {id:2, name: 'Odd'}
  ];
  constructor(private http:HttpClient) { }
  
  getData(): Observable<Employee[]>{
    return this.http.get<Employee[]>('').pipe(
      tap(res => console.log(res)),
      catchError(err => of(this.mockData))
    );
  }
}
