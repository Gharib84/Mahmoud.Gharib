import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,IntroductionComponent,ProjectsComponent,ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  isDarkMode = false;

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
  }
}
