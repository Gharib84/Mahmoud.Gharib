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
      company: 'Company A',
      platform: 'Platform X',
      type: 'Full-time',
      title: 'Full Stack Developer',
      start: '03-2023',
      end: '11-2024',
      tasks: [
        'Developed web applications using Angular and Node.js',
        'Implemented RESTful APIs using Express.js',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Optimized API performance using query optimization techniques',
        'Contributed to code reviews and provided constructive feedback to fellow developers'
      ]
    },
    {
      id: 2,
      company: 'Company B',
      platform: 'Platform Y',
      type: 'Part-time',
      title: 'Front-end Developer',
      start: 'present',
      tasks: [
        'Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Optimized API performance using query optimization techniques',
        'Contributed to code reviews and provided constructive feedback to fellow developers'
      ]
    }
  ];
  constructor() { }

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }
}
