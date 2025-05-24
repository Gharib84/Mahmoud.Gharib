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
  toggleOpen(): void {
    this.ariaExpanded = !this.ariaExpanded;
    const button = this.el.nativeElement;
    const panelId = button.getAttribute('aria-controls');
    if (panelId) {
      const parent = button.parentNode?.parentNode;
      const panel = parent?.querySelector(`#${panelId}`);
      if (panel) {
        if (this.ariaExpanded) {
          this.renderer.removeAttribute(panel, 'hidden');
        } else {
          this.renderer.setAttribute(panel, 'hidden', 'true');
        }
      }
    }
  }
}
