import { Component,inject } from '@angular/core';
import { AboutMe } from '../../core/about-me';
import { TranslatePipe,TranslateDirective,TranslateService } from '@ngx-translate/core';
import { AboutPl } from '../../core/about-pl';
@Component({
  selector: 'app-introduction',
  imports: [TranslatePipe],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
  private translateService = inject(TranslateService);
  aboutMe: AboutMe = {
    about: `Versatile Full-Stack Developer with 2+ years of   experience building scalable 
      solutions across TypeScript, Python, and PHP ecosystems. 
      Skilled in NestJS, Django, and Symfony, with a focus on  backend APIs, 
      data-driven applications, and cross-platform web development. 
      Proven success in optimizing API performance by 40% through query optimization, 
      reducing server costs by 30% via Python automation  scripts, 
      and delivering 3+ production-grade apps with 95% client  satisfaction. 
      Adept at designing RESTful microservices, integrating  third-party APIs, 
      and maintaining robust CI/CD pipelines with Docker and AWS.`,
  }

  aboutPl: AboutPl = {
    aboutMe: `Wszechstronny programista Full-Stack z ponad 2-letnim doświadczeniem w tworzeniu skalowalnych rozwiązań 
      w ekosystemach TypeScript, Python i PHP. Biegły w NestJS, Django i Symfony, 
      z naciskiem na backendowe API, aplikacje oparte na danych i rozwój aplikacji internetowych wieloplatformowych. 
      Udokumentowane sukcesy w optymalizacji wydajności API o 40% dzięki optymalizacji zapytań, 
      redukcji kosztów serwera o 30% dzięki skryptom automatyzacji Pythona oraz dostarczeniu ponad 3 aplikacji produkcyjnych 
      z 95% satysfakcją klienta. Biegły w projektowaniu mikroserwisów RESTful, integracji z interfejsami API stron trzecich 
      oraz utrzymywaniu solidnych potoków CI/CD z Dockerem i AWS.`,
  }

  get aboutObj(): AboutMe | AboutPl {
    return this.translateService.currentLang === 'pl' ? this.aboutPl : this.aboutMe;
  }
}
