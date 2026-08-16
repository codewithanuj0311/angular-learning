import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { 
    this.designUtilityService.username.subscribe((uname)=> {
      this,this.username = uname;
    })
  }

  username:any;

  ngOnInit(): void {
  }

  addUser(name:string) {
    this.designUtilityService.username.next(name)
  }

}
