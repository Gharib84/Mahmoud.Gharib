import { Component,OnInit,OnDestroy, inject,ViewChild, ElementRef} from '@angular/core';

import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { LanguagesComponent } from '../languages/languages.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [TranslatePipe, LanguagesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy { 
  readonly router = inject(Router);
   @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLInputElement>;
  constructor() {}
  isDarkMode: boolean = false;

/**
 * Toggles the dark mode state of the application. Updates the `isDarkMode` 
 * property, applies or removes the 'dark' class from the document body, 
 * and saves the current dark mode state to local storage.
 */

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }
  ngOnInit() {
    // Initialization logic can go here
    const saveMode = localStorage.getItem('darkMode');
    if(saveMode){
      this.isDarkMode = saveMode === 'true';
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    }
  }
  ngOnDestroy() {
    // Cleanup logic can go here
  }

  navigateToSection() {
    return this.router.navigate(['/']);
  }

    closeMenu(): void {
    if (this.menuToggle?.nativeElement) {
      this.menuToggle.nativeElement.checked = false;
    }
  }

}
