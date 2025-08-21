import { Injectable,signal } from '@angular/core';
import { ProjectDetail } from '../project-detail';
@Injectable({
  providedIn: 'root'
})
export class ProjectsDetailService {
  private projectsDetails = signal<ProjectDetail[]>([
    {
      id: 1,
      title: 'Portfolio',
      description: 'My personal portfolio website showcasing my skills and projects.',
      image: 'assets/images/portfolio.png',
      link: 'https://my-portfolio.com',
      techStack: ['Angular', 'TypeScript', 'CSS'],
      githubLink: 'https://github.com/yourusername/my-portfolio'
    },
    {
      id: 2,
      title: 'E-commerce App',
      description: 'A full-featured e-commerce application with user authentication and payment integration.',
      image: 'assets/images/ecommerce.png',
      link: 'https://my-ecommerce-app.com',
      techStack: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/my-ecommerce-app'
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'A blogging platform where users can create and share articles.',
      image: 'assets/images/blog.png',
      link: 'https://my-blog-platform.com',
      techStack: ['Vue.js', 'Express', 'MySQL'],
      githubLink: ' https://github.com/yourusername/my-blog-platform'
    },    
  ]);  
}
