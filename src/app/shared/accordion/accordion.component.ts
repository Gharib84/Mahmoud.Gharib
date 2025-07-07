import { Component,inject,OnInit,OnDestroy } from '@angular/core';
import { AccordionTriggerDirective } from '../../core/directive/accordion-trigger.directive';
import { Experience } from '../../core/experience';
import { ExperienceService } from '../../core/service/experience.service';
import { Subscription } from 'rxjs';
import {TranslatePipe,TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-accordion',
  imports: [TranslatePipe, AccordionTriggerDirective],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements OnInit, OnDestroy {
   experiences: Experience[] = [];
   private subsscription!:Subscription 
   private experienceService = inject(ExperienceService);
   polishExperiences: Experience[] = [];
   deutschExperiences: Experience[] = [];
   private translateService = inject(TranslateService);
  ngOnInit(): void {
    this.subsscription= this.experienceService.getExperiences().subscribe({
      next: (experiences) => {
        this.experiences = experiences;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.subsscription= this.experienceService.getPolishExperiences().subscribe({
      next: (polishExperiences) => {
        this.polishExperiences = polishExperiences;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.subsscription= this.experienceService.getDetuchExperiences().subscribe({
      next: (deutschExperiences) => {
        this.deutschExperiences = deutschExperiences;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  ngOnDestroy(): void {
    if(this.subsscription){
      this.subsscription.unsubscribe()
    }
  }

  get ExperienceObje():Experience[] {
    const currentLang = this.translateService.currentLang;
    if (currentLang === 'en') {
      return this.experiences;
    } else if (currentLang === 'pl') {
      return this.polishExperiences;
    } else if (currentLang === 'de') {
      return this.deutschExperiences
    }
    return [];
  }
  
}
