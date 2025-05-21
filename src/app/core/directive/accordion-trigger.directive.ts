import { Directive,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAccordionTrigger]'
})
export class AccordionTriggerDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

}
