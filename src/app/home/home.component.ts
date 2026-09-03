import { DesignUtilityService } from './../appServices/design-utility.service';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  @ViewChild('box') box!: ElementRef;
  @ViewChild(Comp2Component) child!: Comp2Component;

  constructor(private renderer: Renderer2) {

   }


  username:any;

  // @HostListener('click') myClick() {
  //   alert('Anuj')
  // }

  @HostListener('window:scroll', ['$event']) myScroll() {
    console.log('scrolling')
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
      // console.log(this.box);
      // this.box.nativeElement.style.backgroundColor = 'red';
      // this.box.nativeElement.classList.add('Anuj')

      ////Using Renderer2
      this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.box.nativeElement, 'color', 'white');
      this.renderer.setAttribute(this.box.nativeElement, 'title', 'Yes this is the title')

      console.log(this.child)

      //////////////
      

  }



  changeChildMethod() {
    this.child.clickMe()
  }

  changeChildProp() {
    this.child.username = 'Nooo';
  }

}
