// import { MessageService } from './../appServices/message.service';
import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private desginService: DesignUtilityService) { }
  products: any = [];
  ngOnInit(): void {
    this.products = (this.desginService.property)
  }

  btnClick() {
    this.desginService.msgAlert()
  }

  // msgAlert() {
  //   alert('Thanks for buying this product')
  // }

}
