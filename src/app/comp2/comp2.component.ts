import { TestDirectiveDirective } from './../appDirectives/test-directive.directive';
import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, ContentChild, OnInit, ElementRef, Renderer2, AfterContentInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, AfterContentInit {

  @ContentChild('childPara') childPar!: ElementRef;
  @ViewChild(TestDirectiveDirective) myDir!: TestDirectiveDirective;

  constructor(private renderer: Renderer2) { 
    
  }

  username:string = 'YESSSS';

  ngOnInit(): void {
  }

  clickMe() {
    // alert(this.username)
    let text = this.renderer.createText('This text is from renderer');
    this.renderer.appendChild(this.childPar.nativeElement, text)
  }

  ngAfterContentInit() {
      this.renderer.setStyle(this.childPar.nativeElement, 'color', 'green')
  }

  changeColor(color:string) {
    this.myDir.changeBg(color);
  }

}
