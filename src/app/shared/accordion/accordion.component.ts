import { Component,inject,OnInit,OnDestroy } from '@angular/core';
import { AccordionTriggerDirective } from '../../core/directive/accordion-trigger.directive';
import { Experience } from '../../core/experience';
import { ExperienceService } from '../../core/service/experience.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements OnInit, OnDestroy {
   experiences: Experience[] = [];
   private subsscription!:Subscription 
   private experienceService = inject(ExperienceService)
  ngOnInit(): void {
    this.subsscription= this.experienceService.getExperiences().subscribe({
      next: (experiences) => {
        this.experiences = experiences;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  ngOnDestroy(): void {
    if(this.subsscription){
      this.subsscription.unsubscribe()
    }
  }
}
