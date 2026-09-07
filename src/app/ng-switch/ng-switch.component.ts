import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }
  selectedProduct: string = '';

  getProduct(event:any) {
    console.log(event);
    this.selectedProduct = event.target.value;
  }
  ngOnInit(): void {
  }

}
