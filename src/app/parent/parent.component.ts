import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  selectedProduct: string = '';
  productSelected: boolean = false;
  addedProduct: string = '';
  
  ngOnInit(): void {
  }

  onProductSelection(prod:string) {
    this.productSelected = true;
    this.selectedProduct = prod;
  }

  addToCart(event:any) {
    this.addedProduct = event;
  }

  
}
