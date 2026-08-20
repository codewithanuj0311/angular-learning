import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private designService: DesignUtilityService) {
    this.designService.username.subscribe((uname)=> {
      this.username = uname;
    })
   }

  username:any;

  ngOnInit(): void {
  }

}
