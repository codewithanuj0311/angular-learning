// import { MessageService } from './../appServices/message.service';
import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private designservice: DesignUtilityService) { }
  products: any = [];
  ngOnInit(): void {
    this.designservice.getData().subscribe((data)=> {
      this.products = data
    })
  }

  btnClick() {
    this.designservice.msgAlert()
    // const msgService = new MessageService;
    // msgService.msgAlert();
  }

  // msgAlert() {
  //   alert('Thanks for buying this product')
  // }
}
