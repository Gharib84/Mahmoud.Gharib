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
    class="flex items-center justify-between w-full p-3  dark:bg-background-dark rounded-lg"
  >
    <div class="flex items-center">
      <!-- Uk Flag -->
      <img
        src="https://flagcdn.com/w40/gb.png"
        alt="United Kingdom flag"
        class="w-5 h-5 rounded-full mr-3"
      />
      <span class="text-accent dark:text-foreground hover:text-blue-500 hover:font-bold font-inter not:italic">UK</span>
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
  <div
    class="absolute top-full mt-1 w-full dark:bg-background-dark rounded-lg shadow-lg z-10"
  >
    <ul class="text-dark dark:text-primary">
      <!-- Dropdown Item -->
      <li class="flex items-center p-3 cursor-pointer hover:bg-background-dark hover:dark:bg-gray-700/50">
        <img
          src="https://flagcdn.com/w40/pl.png"
          alt="United Kingdom flag"
          class="w-5 h-5 rounded-full mr-3"
        />
        <span class="font-medium text-accent dark:text-foreground hover:text-blue-500 hover:font-bold">PL</span>
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
