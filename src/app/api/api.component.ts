import { UxproductsService } from './../appServices/uxproducts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {


  constructor(private uxservice: UxproductsService) {

  }
  fetching:boolean = false;
  dataTitle:any = this.uxservice.getDataTitle();

  ngOnInit() {
    this.fetchProduct()

  }

  productId = '';
  productName = '';
  productPrice: number | null = null;

  products:any[] = [

  ];


  addProduct() {

    // Don't add empty products
    if (
      !this.productId.trim() ||
      !this.productName.trim() ||
      this.productPrice === null
    ) {
      return;
    }

    this.products.push({
      id: this.productId,
      name: this.productName,
      price: this.productPrice
    });

    // Clear inputs
    this.productId = '';
    this.productName = '';
    this.productPrice = null;
  }


  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.saveProduct();
  }

  saveProduct() {
    this.uxservice.saveProduct(this.products).subscribe((response)=> {
      console.log(response);
    }, (error)=> {
      console.log(error);
    });
  }

  // fetchProduct() {
  //   this.uxservice.fetchProduct().subscribe((response)=> {
  //     const data = JSON.stringify(response);
  //     this.products = JSON.parse(data);
  //   }, (error)=> console.log(error))

  // }

  fetchProduct() {
    this.fetching = true;
    this.uxservice.fetchProduct().subscribe({
      next: (response)=> {
        const data = JSON.stringify(response);
        this.products = JSON.parse(data);
        this.fetching = false;
      },
      error: (error)=> {
        console.log(error);
        this.fetching = false;
      }
    })
  }

}
