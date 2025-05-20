import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PageSection } from '../../core/page-section';
@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
  export class ExperienceComponent {

  pageSection: PageSection = {
    title: 'Experience'
  }
}
