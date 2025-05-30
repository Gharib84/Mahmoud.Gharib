import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <div class="contact px-5 py-5 lg:px-0 w-full h-full flex flex-row justify-between items-center">
      <h2 class="text-lg font-bold  text-black dark:text-primary font-inter self-center">&copy;{{currentYear}}</h2>
       <ul class="flex flex-row justify-between items-center">
        <li class="mr-4">
          <a href="https://github.com/Gharib84" aria-label="GitHub">
            <i class="pi pi-github text-lg text-background-dark dark:text-primary"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mo-gharib/"      aria-label="LinkedIn">
            <i class="pi pi-linkedin text-lg dark:text-primary text-background-dark"></i>
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: ``
})
export class ContactComponent {
  currentYear: number = new Date().getFullYear();
}
