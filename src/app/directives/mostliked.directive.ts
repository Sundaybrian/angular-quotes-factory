import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMostliked]'
})
export class MostlikedDirective {

  @Input() appMostliked: string;

  constructor(private elem: ElementRef) {
  }


  private liked(val: string) {
    this.elem.nativeElement.style.borderColor = this.appMostliked;

  }

}
