import { Injectable } from '@angular/core';
import { Experience } from '../../core/experience';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
   readonly experiences: Experience[] = [
    {
      id: 1,
      company: 'Eko Okna S.A. Poland',
      type: 'Full-time',
      title: 'FullStack Engineer',
      start: 'Mar 2023',
      end: 'Nov 2024',
      tasks: [
        "Collaborated with cross-functional teams to design, develop and maintain System ERP ensuring responsive user-friendly interfaces and efficient backend systems.",
        "Worked with technologies such as HTML, CSS, JavaScript to create dynamic, responsive user interfaces.",
        "Developed and optimized server-side logic using Symfony, PHP to enhance performance and scalability.",
        "Integrated databases like MySQL, PostgreSQL, MongoDB and ensured seamless communication between the front end and back end.",
        "Utilized RESTful APIs and third-party libraries for enhanced functionality and to integrate external services.",
        "Participated in code reviews and collaborated with senior developers to follow best practices in software development.",
        "Used version control systems (e.g., Git) to manage and document development workflows.",
        "Assisted in debugging and resolving issues across the stack, both on the client and server sides",
        "Worked in an Agile environment, contributing to sprints and actively participating in daily stand-ups,retrospectives, and sprint planning.",
        "Optimized database performance using Doctrine ORM, reducing data retrieval times by 40% and improving query performance through indexing and caching strategies.",
        "Implemented MVC architecture in large-scale projects, ensuring clean code structure and reducing bug rates by 20% through modular and maintainable design.",
        "Enhanced user interfaces with HTML, CSS, and JavaScript, increasing user engagement by 25% and reducing page load times by 30% through responsive design and optimization."
      ]
    },
    {
      id: 2,
      company: 'Freelance',
      platform: 'Platform Y',
      type: 'Part-time',
      title: 'FullStack Engineer Self-Employed',
      start: 'present',
      tasks: [
        "A full-stack progressive web application for booking travel trips online",
        "designed and developed from scratch using modern technologies.",
        " This app allows users to browse book and manage travel trips effortlessly.",
        "Built with: Angular (18+), NestJS, TypeORM, MySQL, Swagger, Material Design, Spartan UI.",
        "Front-End: Implemented a responsive and intuitive user interface using Angular, Material Design, and Spartan UI, ensuring a smooth and consistent UX across devices.",
        "Back-End: Developed a RESTful API using NestJS and TypeORM with MySQL for data persistence. Ensured scalability and maintainability of the backend architecture.",
        "Utilized RESTful APIs and third-party libraries for enhanced functionality and to integrate external services.",
        "Back-End: Developed a RESTful API using NestJS and TypeORM with MySQL for data persistence. Ensured scalability and maintainability of the backend architecture.",
        "API Documentation: Designed and documented the entire API from scratch using Swagger for better developer collaboration and ease of integration.",
        "Progressive Web App (PWA): Enabled offline capabilities and push notifications, providing a native-like experience for users.",
        "Challenges Overcome: Optimized performance for large data sets and managed complex booking workflows."
      ]
    }
  ];

  readonly polishExperiences: Experience[] = [
    {
      id: 1,
      company: 'Eko Okna S.A. Polska',
      type: 'Pełnoetatowa',
      title: 'Inżynier FullStack',
      start: 'Marzec 2023',
      end: 'Listopad 2024',
      tasks: [
        "Współpraca z zespołami międzyfunkcyjnymi w celu projektowania, rozwijania i utrzymywania Systemu ERP, zapewniając responsywne interfejsy użytkownika i wydajne systemy backendowe.",
        "Praca z technologiami takimi jak HTML, CSS, JavaScript w celu tworzenia dynamicznych, responsywnych interfejsów użytkownika.",
        "Rozwój i optymalizacja logiki po stronie serwera przy użyciu Symfony, PHP w celu zwiększenia wydajności i skalowalności.",
        "Integracja baz danych takich jak MySQL, PostgreSQL, MongoDB i zapewnienie płynnej komunikacji między front-endem a back-endem.",
        "Wykorzystanie RESTful API i bibliotek zewnętrznych w celu zwiększenia funkcjonalności i integracji usług zewnętrznych.",
        "Udział w przeglądach kodu i współpraca z starszymi programistami w celu przestrzegania najlepszych praktyk w zakresie rozwoju oprogramowania.",
        "Używanie systemów kontroli wersji (np. Git) do zarządzania i dokumentowania przepływów pracy w rozwoju.",
        "Pomoc w debugowaniu i rozwiązywaniu problemów w całym stosie, zarówno po stronie klienta, jak i serwera.",
        "Praca w środowisku Agile, udział w sprintach i aktywne uczestnictwo w codziennych spotkaniach, retrospektywach i planowaniu sprintów.",
        "Optymalizacja wydajności bazy danych przy użyciu Doctrine ORM, co pozwoliło na skrócenie czasu pobierania danych o 40% i poprawę wydajności zapytań dzięki indeksowaniu i strategiom buforowania.",
        "Wdrożenie architektury MVC w dużych projektach, co zapewniło czystą strukturę kodu i zmniejszyło wskaźniki błędów o 20% dzięki modułowemu i łatwemu do utrzymania projektowi.",
        "Udoskonalenie interfejsów użytkownika za pomocą HTML, CSS i JavaScript, co zwiększyło zaangażowanie użytkowników o 25% i skróciło czas ładowania stron o 30% dzięki responsywnemu projektowaniu i optymalizacji."
      ]
    },
    {
      id: 2,
      company: 'Freelance',
      platform: 'Platforma Y',
      type: 'Część etatu',
      title: 'Inżynier FullStack Samozatrudniony',
      start: 'obecnie',
      tasks: [
        "Aplikacja typu progressive web application do rezerwacji podróży online, zaprojektowana i rozwinięta od podstaw z wykorzystaniem nowoczesnych technologii.",
        "Aplikacja ta umożliwia użytkownikom przeglądanie, rezerwowanie i zarządzanie podróżami w sposób łatwy i wygodny.",
        "Zbudowana z użyciem: Angular (18+), NestJS, TypeORM, MySQL, Swagger, Material Design, Spartan UI.",
        "Front-End: Implementacja responsywnego i intuicyjnego interfejsu użytkownika przy użyciu Angular, Material Design i Spartan UI, zapewniającego płynne i spójne doświadczenie użytkownika na różnych urządzeniach.",
        "Back-End: Rozwój RESTful API przy użyciu NestJS i TypeORM z MySQL do przechowywania danych. Zapewnienie skalowalności i łatwości utrzymania architektury backendu.",
        "Wykorzystanie RESTful API i bibliotek zewnętrznych w celu zwiększenia funkcjonalności i integracji usług zewnętrznych.",
        "Dokumentacja API: Projektowanie i dokumentowanie całego API od podstaw przy użyciu Swaggera w celu lepszej współpracy z programistami i łatwiejszej integracji.",
        "Progressive Web App (PWA): Włączenie możliwości pracy offline i powiadomień push, co zapewnia użytkownikom doświadczenie podobne do aplikacji natywnych.",
        "Pokonane wyzwania: Optymalizacja wydajności dla dużych zbiorów danych i zarządzanie złożonymi procesami rezerwacji."
      ]
    }
  ];

  readonly deutschExperiences: Experience[] = [
    {
      id: 1,
      company: 'Eko Okna S.A. Deutschland',
      type: 'Vollzeit',
      title: 'FullStack Ingenieur',
      start: 'März 2023',
      end: 'November 2024',
      tasks: [
        "Zusammenarbeit mit funktionsübergreifenden Teams zur Gestaltung, Entwicklung und Wartung des ERP-Systems, um reaktionsschnelle, benutzerfreundliche Oberflächen und effiziente Backend-Systeme zu gewährleisten.",
        "Arbeit mit Technologien wie HTML, CSS, JavaScript zur Erstellung dynamischer, reaktionsschneller Benutzeroberflächen.",
        "Entwicklung und Optimierung der serverseitigen Logik mit Symfony, PHP zur Verbesserung der Leistung und Skalierbarkeit   .",
        "Integration von Datenbanken wie MySQL, PostgreSQL, MongoDB und Gewährleistung einer nahtlosen Kommunikation zwischen Frontend und Backend.",
        "Nutzung von RESTful APIs und Drittanbieter-Bibliotheken zur Verbesserung der Funktionalität und Integration externer Dienste.",
        "Teilnahme an Code-Reviews und Zusammenarbeit mit Senior-Entwicklern, um bewährte Verfahren in der Softwareentwicklung zu befolgen.",
        "Verwendung von Versionskontrollsystemen (z.B. Git), um Entwicklungs-Workflows zu verwalten und zu dokumentieren.",
        "Unterstützung bei der Fehlersuche und Behebung von Problemen im gesamten Stack, sowohl auf der Client- als auch auf der Serverseite.",
        "Arbeit in einer agilen Umgebung, Beitrag zu Sprints und aktive Teilnahme an täglichen Stand-ups, Retrospektiven und Sprint-Planung.",
        "Optimierung der Datenbankleistung mit Doctrine ORM, wodurch die Datenabrufzeiten um 40% verkürzt und die Abfrageleistung durch Indizierung und Caching-Strateg um 30% verbessert wurden.",    
        "Implementierung der Architektur MVC in großen Projekten, wodurch eine sauberer Code-Struktur und eine Reduktion der Fehlerwahrscheinlichkeit um 20% erreicht wurde.",    
        "Verbesserung der Benutzerinterface mit HTML, CSS und JavaScript, wodurch die Interaktion mit Benutzern um 25% verbessert wurde und die Ladezeit der Seiten um 30% reduziert wurde."]
    },
    {
      id: 2,
      company: 'Freelance',
      platform: 'Plattform Y',
      type: 'Teilzeit',
      title: 'FullStack Ingenieur Selbstständig',
      start: 'present',
      tasks: [ 
        "Eine progressive Webanwendung für die Online-Buchung von Reisen, die von Grund auf neu mit modernen Technologien entwickelt wurde.",
        "Diese App ermöglicht es Benutzern, Reisen einfach zu durchsuchen, zu buchen und zu verwalten.",
        "Entwickelt mit: Angular (18+), NestJS, TypeORM, MySQL, Swagger, Material Design, Spartan UI.",
        "Front-End: Implementierung einer responsiven und intuitiven Benutzeroberfläche mit Angular, Material Design und Spartan UI, um ein reibungsloses und konsistentes Benutzererlebnis auf verschiedenen Geräten zu gewährleisten.",
        "Back-End: Entwicklung einer RESTful API mit NestJS und TypeORM mit MySQL für die Datenspeicherung. Gewährleistung der Skalierbarkeit und Wartbarkeit der Backend-Architektur.",
        "Nutzung von RESTful APIs und Drittanbieter-Bibliotheken zur Verbesserung der Funktionalität und Integration externer Dienste.",
        "API-Dokumentation: Entwurf und Dokumentation der gesamten API von Grund auf neu mit Swagger für eine bessere Zusammenarbeit zwischen Entwicklern und eine einfachere Integration.",
        "Progressive Web App (PWA): Aktivierung von Offline-Funktionen und Push-Benachrichtigungen, um den Benutzern ein natives Erlebnis zu bieten.",
        "Überwundene Herausforderungen: Optimierung der Leistung für große Datensätze und Verwaltung komplexer Buchungsabläufe."    
      ]
    },
  ];

  constructor() { }

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }

  getPolishExperiences(): Observable<Experience[]> {
    return of(this.polishExperiences);
  }

  getDetuchExperiences(): Observable<Experience[]> {
    return of(this.deutschExperiences);
  }  
}
