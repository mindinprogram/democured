import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomestyle]'
})
export class CustomestyleDirective {

  constructor(private el: ElementRef) 
  { console.warn("customeDirectiveworking");
    el.nativeElement.style.color="red",
    el.nativeElement.style.background="yellow"
  }

}
