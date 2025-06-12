import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, IntroductionComponent, ProjectsComponent, ExperienceComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private translate: TranslateService = inject(TranslateService);
  title = 'portfolio';
  isDarkMode = false;
  constructor() {
    this.translate.addLangs(['en', 'pl', 'de']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
    

  /**
   * Toggles the theme between light and dark mode
   * and saves the preference in local storage.
   */
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  ngOnInit() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      this.isDarkMode = savedMode === 'true';
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    }

    this.translate.addLangs(['pl','de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
