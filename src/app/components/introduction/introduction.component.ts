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
