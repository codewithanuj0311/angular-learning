import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  
  
  @HostListener('click') myClick() {
    alert('Anuj')
  }

  @HostBinding('style.backgroundColor') bgColor!:string;
  @HostBinding('class.myClass') className !:boolean;

  @HostListener('click') myColor() {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green')
    this.bgColor = 'red';
    this.className = true;
  }

  constructor(private el:ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
   }
   
   changeBg(color:string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
   }
}
