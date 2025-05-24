import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAccordionTrigger]'
})
export class AccordionTriggerDirective {
  @HostBinding('attr.aria-expanded') ariaExpanded = false;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click')
  toggleOpen() {
    this.ariaExpanded = !this.ariaExpanded;
  }

}
