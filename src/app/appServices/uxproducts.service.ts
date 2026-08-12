import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UxproductsService {

  constructor(private http: HttpClient) { }
  url:string = 'https://my-learning-project-da6f3-default-rtdb.firebaseio.com/products.json';
  saveProduct(products: any[]) {
  //  return this.http.post(this.url, products);
   return this.http.put(this.url, products);
  }

  fetchProduct() {
    return this.http.get(this.url);
  }

  getDataTitle() {
    return this.http.get('https://my-learning-project-da6f3-default-rtdb.firebaseio.com/dataTitle.json');
  }
}
