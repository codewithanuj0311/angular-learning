import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myClick(event:any) {
    this.message = 'Your order is added in cart';
  }
  message:string ='';
  product:string = '';
  msg:string = '';
  myProduct(name:any) {
    // console.log(event);
    // this.product = event.target.textContent + ' is added in your cart';
    this.msg = name.value;
  }
}
