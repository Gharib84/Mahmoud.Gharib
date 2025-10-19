import { Injectable,signal } from '@angular/core';
import { ProjectDetail } from '../project-detail';
@Injectable({
  providedIn: 'root'
})
export class ProjectsDetailService {
  public readonly projectsDetails = signal<ProjectDetail[]>([
    {
      id: 1,
      title: 'E-commerce API',
      description: 'E-Commerce-API is a robust and scalable RESTful API designed to power modern e-commerce platforms.',
      image: 'images/Api-Ecommerce.png',
      link: {
        github: 'https://github.com/Gharib84/E-Commerce-API'
      },
      techStack: ['Nest', 'TypeORM', 'PostgreSQL', 'Swagger', 'JWT'],
      githubLink: 'https://github.com/Gharib84/E-Commerce-API'
    },
    {
      id: 2,
      title: 'Dev News Blog',
      description: 'A lightweight Angular application that integrates with the Dev.to API.',
      image: 'images/devNews.png',
      link: {
        demo: 'https://dev-news-two.vercel.app/',
        github: 'https://dev-news-two.vercel.app/'
      },
      techStack: ['Angular', 'Firebase', 'Dev.to API', 'Tailwind CSS'],
      githubLink: 'https://dev-news-two.vercel.app/'
    },
      {
      id: 3,
      title: 'Portfolio',
      description: 'My personal portfolio website.',
      image: 'images/Portfolio.png',
      link: {
        demo: 'https://my-portfolio.com',
        github: 'https://github.com/Gharib84/Portfolio-25'
      },
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/Gharib84/Portfolio-25'

    },
    {
      id: 4,
      title: 'Progressive Online Bokking System',
      description: 'A Progressive Web Application (PWA) for online booking and reservations of trips.',
      image: 'images/travel.png',
      link: {
        github: 'https://github.com/Gharib84/Progressive-Travel-Booking-App'
      },
      techStack: ['Nest', 'TypeORM', 'Mysql', 'Swagger', 'JWT', 'Docker','Angular', 'Tailwind CSS','TypeScript','Primeng','NgRx'],
      githubLink: 'https://github.com/Gharib84/Progressive-Travel-Booking-App'

    }    
  ]);
  
  readonly polishProjectsDetails = signal<ProjectDetail[]>([
    {
      id: 1,
      title: 'System Zarządzania Magazynem',
      description: 'Aplikacja do zarządzania stanem magazynowym, umożliwiająca śledzenie produktów, zamówień i dostaw.',
      image: 'images/Api-Ecommerce.png',
      link: {
        github: 'https://github.com/Gharib84/E-Commerce-API'
      },
      techStack: ['Nest', 'TypeORM', 'PostgreSQL', 'Swagger', 'JWT'],
      githubLink: 'https://github.com/Gharib84/E-Commerce-API'
    },
    {
      id: 2,
      title: 'Aplikacja Blogowa',
      description: 'Lekka aplikacja Angular integrująca się z API Dev.to.',
      image: 'images/devNews.png',
      link: {
        demo: 'https://dev-news-two.vercel.app/',
        github: 'https://dev-news-two.vercel.app/'
      },
      techStack: ['Angular', 'Firebase', 'Dev.to API', 'Tailwind CSS'],
      githubLink: 'https://dev-news-two.vercel.app/'
    },
      {
      id: 3,
      title: 'Portfolio',
      description: 'Moja osobista strona portfolio.',
      image: 'images/Portfolio.png',
      link: {
        demo: 'https://my-portfolio.com',
        github: 'https://github.com/Gharib84/Portfolio-25'
      },
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/Gharib84/Portfolio-25'

    },
    {
      id: 4,
      title: 'Progresywny System Rezerwacji Online',
      description: 'Progresywna aplikacja internetowa (PWA) do rezerwacji i rezerwacji wycieczek.',
      image: 'images/travel.png',
      link: {
        github: 'https://github.com/Gharib84/Progressive-Travel-Booking-App'
      },
      techStack: ['Nest', 'TypeORM', 'Mysql', 'Swagger', 'JWT', 'Docker','Angular', 'Tailwind CSS','TypeScript','Primeng','NgRx'],
      githubLink: 'https://github.com/Gharib84/Progressive-Travel-Booking-App'

    }    
  ]);

  readonly germanProjectsDetails = signal<ProjectDetail[]>([
    {
      id: 1,
      title: 'Lagerverwaltungssystem',
      description: 'Eine Anwendung zur Verwaltung des Lagerbestands, die die Verfolgung von Produkten, Bestellungen und Lieferungen ermöglicht.',
      image: 'images/Api-Ecommerce.png',
      link: {
        github: 'https://github.com/Gharib84/E-Commerce-API'
      },
      techStack: ['Nest', 'TypeORM', 'PostgreSQL', 'Swagger', 'JWT'],
      githubLink: 'https://github.com/Gharib84/E-Commerce-API'
    },
    {
      id: 2,
      title: 'Blog-Anwendung',
      description: 'Eine leichte Angular-Anwendung, die sich in die Dev.to-API integriert.',
      image: 'images/devNews.png',
      link: {
        demo: 'https://dev-news-two.vercel.app/',
        github: 'https://dev-news-two.vercel.app/'
      },
      techStack: ['Angular', 'Firebase', 'Dev.to API', 'Tailwind CSS'],
      githubLink: 'https://dev-news-two.vercel.app/'
    },
      {
      id: 3,
      title: 'Portfolio',
      description: 'Meine persönliche Portfolio-Website.',
      image: 'images/Portfolio.png',
      link: {
        demo: 'https://my-portfolio.com',
        github: ' https://github.com/Gharib84/Portfolio-25'
      },
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/Gharib84/Portfolio-25'

    }, 
    {
      id: 4,
      title: 'Progressives Online-Buchungssystem',
      description: 'Eine Progressive Web App (PWA) für Online-Buchungen und Reservierungen von Reisen.',
      image: 'images/travel.png',
      link: {
        github: 'https://github.com/Gharib84/Progressive-Travel-Booking-App'
      },
      techStack: ['Nest', 'TypeORM', 'Mysql', 'Swagger', 'JWT', 'Docker','Angular', 'Tailwind CSS','TypeScript','Primeng','NgRx'],    
      githubLink: 'https://github.com/Gharib84/Progressive-Travel-Booking-App'  
    }    
  ]);
  
/**
 * Returns an observable of ProjectDetail[] which contains the details of all the projects.
 * @returns {Observable<ProjectDetail[]>} An observable of ProjectDetail[].
 */
  getProjectsDetails() {
    return this.projectsDetails();
  }
}
