import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  dynName:string = 'Anuj';
  status: boolean = true;
  name:string = 'Kapil';
  statusDesiable:boolean = true;
  myMethod()
 {
  return 'I can make this ' + this.dynName;
 }

  ngOnInit(): void {
  }

}
