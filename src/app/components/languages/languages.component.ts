import { Component,inject } from '@angular/core';
import { Language } from '../../core/language';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-languages',
  imports: [],
  template: `
    <!-- Country Selector Component Container -->
<div class="relative w-36 text-gray-200">
  <!-- Selected Item Button -->
  <!-- The blue border indicates this element is active/open -->
  <button (click)="toggleDropdown()"
    class="flex items-center justify-between w-full p-3  dark:bg-background-dark rounded-lg"
  >
    <div class="flex items-center">
      <!-- Uk Flag -->
      <img
        [src]="selectedLanguage.flagUrl"
        [alt]="selectedLanguage.name + ' flag'"
        class="w-5 h-5 rounded-full mr-3"
      />
      <span class="text-accent dark:text-foreground hover:text-blue-500 hover:font-bold font-inter not:italic">{{selectedLanguage.code.toUpperCase()}}</span>
    </div>
    <!-- Chevron Up Icon (indicating the dropdown is open) -->
    <svg
      class="w-5 h-5 text-black dark:text-foreground cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clip-rule="evenodd"
        transform="rotate(180 10 10)"
      />
    </svg>
  </button>
  <!-- Dropdown Menu -->
  @if (isOpen) {
  <div
    class="absolute top-full mt-1 w-full bg-white dark:bg-background-dark rounded-lg shadow-lg z-10"
  >
    <ul class="text-dark dark:text-primary">
      <!-- Dropdown Item -->
      @for (lang of languages ; track lang.id) { 
        
      <li class="flex items-center p-3 cursor-pointer hover:bg-background-dark hover:dark:bg-gray-700/50
        " (click)="selectLanguage(lang)">
        <img
          [src]="lang.flagUrl"
          [alt]="lang.name + ' flag'"
          class="w-5 h-5 rounded-full mr-3"
        />
        <span class="font-medium text-accent dark:text-foreground hover:text-blue-500 hover:font-bold">
          {{ lang.code.toUpperCase() }}
        </span>
      </li>
      }
    </ul>
  </div>
  }
</div>

  `,
  styles: ``
})
export class LanguagesComponent {
  private translate: TranslateService = inject(TranslateService);
  isOpen: boolean = false;
  selectedLanguage = {
    id: 1,
    code: 'en',
    name: 'United Kingdom',
    flagUrl: 'https://flagcdn.com/w40/gb.png'
  };

  languages: Language[] = [
    { id:1,code: 'en', name: 'United Kingdom', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    {id:2, code: 'pl', name: 'Poland', flagUrl: 'https://flagcdn.com/w40/pl.png' },
    { id:3, code: 'de', name: 'Germany', flagUrl: 'https://flagcdn.com/w40/de.png' },
  ];


  /**
   * Toggles the dropdown menu's open/closed state.
   * If the dropdown is currently open, it will be closed and vice versa.
   */

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Selects a language from the dropdown menu.
   * This method updates the selected language and closes the dropdown.
   * @param language - The language object to select.
   */
  selectLanguage(language: Language): void {
    this.selectedLanguage = language;
    this.translate.use(language.code);
    //console.log(`Language changed to: ${language.code}`);
    this.isOpen = false;
  }
}
