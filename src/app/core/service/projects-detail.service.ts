import { Injectable,signal } from '@angular/core';
import { ProjectDetail } from '../project-detail';
@Injectable({
  providedIn: 'root'
})
export class ProjectsDetailService {
  private projectsDetails = signal<ProjectDetail[]>([
    {
      id: 1,
      title: 'E-commerce API',
      description: 'A full-featured e-commerce Api.',
      image: 'assets/images/ecommerce.png',
      link: {
        github: 'https://github.com/yourusername/my-ecommerce-app'
      },
      techStack: ['Nest', 'TypeORM', 'PostgreSQL', 'Swagger', 'JWT'],
      githubLink: 'https://github.com/Gharib84/E-Commerce-API'
    },
    {
      id: 2,
      title: 'Dev News Blog',
      description: 'A lightweight Angular application that integrates with the Dev.to API.',
      image: 'assets/images/blog.png',
      link: {
        demo: 'https://dev-news-two.vercel.app/',
        github: 'https://github.com/Gharib84/Dev-news'
      },
      techStack: ['Angular', 'Firebase', 'Dev.to API', 'Tailwind CSS'],
    },
      {
      id: 3,
      title: 'Portfolio',
      description: 'My personal portfolio website.',
      image: 'assets/images/portfolio.png',
      link: {
        demo: 'https://my-portfolio.com',
        github: 'https://github.com/Gharib84/Portfolio-25'
      },
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    },    
  ]); 
  
/**
 * Returns an observable of ProjectDetail[] which contains the details of all the projects.
 * @returns {Observable<ProjectDetail[]>} An observable of ProjectDetail[].
 */
  getProjectsDetails() {
    return this.projectsDetails();
  }
}
