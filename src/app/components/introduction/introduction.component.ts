import { Component } from '@angular/core';
import { AboutMe } from '../../core/about-me';
import { TranslatePipe,TranslateDirective } from '@ngx-translate/core';
import { AboutPl } from '../../core/about-pl';
@Component({
  selector: 'app-introduction',
  imports: [TranslatePipe],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
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
}
