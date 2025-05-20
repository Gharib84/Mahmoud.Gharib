import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PageSection } from '../../core/page-section';
import { AccordionComponent } from '../../shared/accordion/accordion.component';
@Component({
  selector: 'app-experience',
  imports: [TranslatePipe, AccordionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
  export class ExperienceComponent {

  pageSection: PageSection = {
    title: 'Experience'
  }
}
