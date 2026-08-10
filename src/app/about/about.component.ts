import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  nameSearch:string = '';

  ngOnInit(): void {
  }
  value:string = 'anuj rajsfsf';
  date = new Date();

  products:any[] = [
    {
      productName: 'Laptop',
      price: '7000 Rs',
      availability: 'Available'
    },
    {
      productName: 'Wireless Mouse',
      price: '1700 Rs',
      availability: 'Not Available'
    },
    {
      productName: 'Mechanical Keyboard',
      price: '900 Rs',
      availability: 'Available'
    },
    {
      productName: 'Monitor',
      price: '12000 Rs',
      availability: 'Available'
    },
    {
      productName: 'USB-C Hub',
      price: '1500 Rs',
      availability: 'Not Available'
    },
    {
      productName: 'Webcam',
      price: '2500 Rs',
      availability: 'Available'
    },
    {
      productName: 'Bluetooth Speaker',
      price: '3200 Rs',
      availability: 'Available'
    },
    {
      productName: 'External Hard Drive',
      price: '5500 Rs',
      availability: 'Not Available'
    }
  ];

  addPro(value:string) {
    this.products.push({
      productName: value,
      price: '17000',
      availability: 'Available'
    })
  }

}
