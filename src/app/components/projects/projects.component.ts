import { Component,inject } from '@angular/core';
import { TranslatePipe,TranslateService } from '@ngx-translate/core';
import { PageSection } from '../../core/page-section';
import { ProjectsDetailService } from '../../core/service/projects-detail.service';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  pageSection: PageSection = {
    title: 'Projects'
  }
  private translate = inject(TranslateService);
  protected readonly projects = inject(ProjectsDetailService);

  /**
   * A computed property that returns the correct list of projects
   * based on the current language selected by the user.
   *
   * @returns An array of ProjectDetail objects in the currently selected language.
   * /
  get projectsList() {
    if (this.translate.currentLang === 'pl') {
      return this.projects.projectsListPl;
    } else if (this.translate.currentLang === 'de') {
      return this.projects.projectsListDe;
    } else {
      return this.projects.projectsList;
    }
  }
  */  

   get projectsList() {
    if (this.translate.currentLang === 'pl') {
      return this.projects.polishProjectsDetails();
    } else if (this.translate.currentLang === 'de') {
      return this.projects.germanProjectsDetails();
    } else {
      return this.projects.projectsDetails();
    }
  }

} 
