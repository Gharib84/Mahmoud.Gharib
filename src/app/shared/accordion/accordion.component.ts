import { Component } from '@angular/core';
import { AccordionTriggerDirective } from '../../core/directive/accordion-trigger.directive';
@Component({
  selector: 'app-accordion',
  imports: [AccordionTriggerDirective],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

}
