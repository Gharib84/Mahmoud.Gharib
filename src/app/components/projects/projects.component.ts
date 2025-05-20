import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PageSection } from '../../core/page-section';
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  pageSection: PageSection = {
    title: 'Projects'
  }

}
