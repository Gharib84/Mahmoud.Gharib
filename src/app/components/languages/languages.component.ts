import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  imports: [],
  template: `
    <!-- Country Selector Component Container -->
<div class="relative w-36 text-gray-200">
  <!-- Selected Item Button -->
  <!-- The blue border indicates this element is active/open -->
  <button
    class="flex items-center justify-between w-full p-3   bg-foreground dark:bg-background-dark rounded-lg"
  >
    <div class="flex items-center">
      <!-- Denmark Flag -->
      <img
        src="https://flagcdn.com/w40/dk.png"
        alt="Denmark flag"
        class="w-4 h-4 rounded-full mr-3"
      />
      <span class="font-foreground">DK</span>
    </div>
    <!-- Chevron Up Icon (indicating the dropdown is open) -->
    <svg
      class="w-5 h-5 text-gray-400 cursor-pointer"
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
  <div
    class="absolute top-full mt-0 w-full bg-background-dark rounded-lg shadow-lg z-10"
  >
    <ul class="text-dark dark:text-primary hidden">
      <!-- Dropdown Item -->
      <li class="flex items-center p-3 cursor-pointer hover:bg-gray-700/50">
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="United Kingdom flag"
          class="w-6 h-6 rounded-full mr-3"
        />
        <span class="font-medium">UK</span>
      </li>
      <!-- Dropdown Item -->
      <li class="flex items-center p-3 cursor-pointer hover:bg-gray-700/50">
        <img
          src="https://flagcdn.com/w40/de.png"
          alt="Germany flag"
          class="w-6 h-6 rounded-full mr-3"
        />
        <span class="font-medium">DE</span>
      </li>     
    </ul>
  </div>
</div>

  `,
  styles: ``
})
export class LanguagesComponent {

}
