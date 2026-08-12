import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http: HttpClient) { }

  msgAlert() {
    alert('Thankls from the service side');
}

username = new BehaviorSubject('Anuj');

// property:any = [
//   {
//     name: 'Anuj',
//     id: '001'
//   },
//   {
//     name: 'Rahul',
//     id: '002'
//   },
//   {
//     name: 'Priya',
//     id: '003'
//   },
//   {
//     name: 'Sneha',
//     id: '004'
//   },
//   {
//     name: 'Amit',
//     id: '005'
//   }
// ];
 getData(): Observable<any> {
  return this.http.get('https://jsonplaceholder.typicode.com/users');
 }
property: any = [];
}
