import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() selectProduct: string = '';
  @Input() productSelected: boolean = false;

  @Output() productName = new EventEmitter<string>();

  prodName: string = '';

  addToCart() {
    this.prodName = this.selectProduct;
    this.productName.emit(this.prodName)
  }

  ngOnInit(): void {
  }

}
