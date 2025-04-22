import { Component,OnInit,OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy { 
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
    this.toggleDarkMode()
  }
  ngOnDestroy() {
    // Cleanup logic can go here
  }

}
