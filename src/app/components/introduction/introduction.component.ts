import { Component, inject } from '@angular/core';
import { AboutMe } from '../../core/about-me';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AboutPl } from '../../core/about-pl';
import { AboutDe } from '../../core/about-de';
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

  aboutDe: AboutDe = {
    aboutMe: `Vielseitiger Full-Stack-Entwickler mit über 2 Jahren Erfahrung in der Erstellung skalierbarer Lösungen 
      in den Ökosystemen TypeScript, Python und PHP. Erfahren in NestJS, Django und Symfony, 
      mit Schwerpunkt auf Backend-APIs, datengestützten Anwendungen und plattformübergreifender Webentwicklung. 
      Nachweisliche Erfolge bei der Optimierung der API-Leistung um 40 % durch Abfrageoptimierung, 
      Reduzierung der Serverkosten um 30 % durch Python-Automatisierungsskripte 
      und Bereitstellung von über 3 produktionsreifen Apps mit 95 % Kundenzufriedenheit. 
      Versiert im Entwurf von RESTful-Mikroservices, der Integration von Drittanbieter-APIs 
      und der Pflege robuster CI/CD-Pipelines mit Docker und AWS.`,
  }

  /**
   * A computed property that returns the correct about object
   * based on the current language selected by the user.
   *
   * @returns The about object in the currently selected language.
   */
    get aboutObj(): AboutMe | AboutPl | AboutDe {
    if (this.translateService.currentLang === 'pl') {
      return this.aboutPl;
    } else if (this.translateService.currentLang === 'de') {
      return this.aboutDe;
    } else {
      return this.aboutMe;
    }
  }
}
