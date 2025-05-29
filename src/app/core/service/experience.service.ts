import { Injectable } from '@angular/core';
import { Experience } from '../../core/experience';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experiences: Experience[] = [
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
  constructor() { }

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }
}
