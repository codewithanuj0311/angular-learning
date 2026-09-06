import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  username: {name:string}[] = [];


  addUser(name:string) {
    if(this.username.length == 3)
    this.router.navigate(['product'])
    this.username.push({
      name: name
    });

  }

  deleteUser(index:number) {
    this.username.splice(index, 1);
  }

  products = [
    {
      name: 'Anuj',
      age: 27,
      gender: 'Male'
    },
    {
      name: 'Rahul',
      age: 24,
      gender: 'Male'
    },
    {
      name: 'Priya',
      age: 26,
      gender: 'Female'
    },
    {
      name: 'Sneha',
      age: 23,
      gender: 'Female'
    },
    {
      name: 'Amit',
      age: 29,
      gender: 'Male'
    }
  ];

}
