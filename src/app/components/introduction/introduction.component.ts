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
    about: `Full-stack engineer 2.6+ of experience plus 2 years of technical School, previous role i worked with an
internal system erp at Eko Okna in Poland ,is old legacy code base written since 2017 using symfony
3+ , i was responsible for building new functions 70% and fixed back-end and front end bugs 30%
current role im freelance build progressive travel booking app via angular 20 with nest js my aim to
resolve some issues that face guests in Egypt with booking a trip etc im strong in typescript php
python docker postgres sql mysql angular nest symfony. I finished vocational school program in
computer science technik informatyk 2017 with A technical diploma 2025 reference number 351203`,
  }

  aboutPl: AboutPl = {
    aboutMe: `Inżynier full-stack z ponad 2,6 roku doświadczenia plus 2 lata szkoły technicznej. Poprzednia rola: pracowałem z wewnętrznym systemem ERP w Eko Okna w Polsce, to stary legacy codebase pisany od 2017 w Symfony 3+, odpowiadałem za budowanie nowych funkcji (70%) i naprawę błędów back-endu oraz front-endu (30%). Aktualna rola: jako freelancer buduję progresywną aplikację do bookingu podróży w Angular 20 z NestJS, celem jest rozwiązanie problemów, z jakimi borykają się goście w Egipcie przy rezerwacji wyjazdów itp. Jestem mocny w TypeScript, PHP, Python, Docker, PostgreSQL, MySQL, Angular, Nest, Symfony. Ukończyłem program szkoły zawodowej w informatyce „Technik Informatyk” w 2017 z dyplomem technicznym na ocenę A, numer referencyjny 351203 z 2025.`,
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
