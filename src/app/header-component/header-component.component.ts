import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-component',
  template: `
    <h1 class="{{ fontsize }} font-medium
                py-2 border-b-2 {{ color }} flex justify-between items-center">
      <span class="hover:text-emerald-500">{{ title }}</span>
      <button class="relative inline-flex items-center
      justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
      text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500
      group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white
      focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      (click)="onClick()">
        <span class="relative px-5 py-2.5 transition-all ease-in
        duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Click Me</span>
      </button>
    </h1>
  `,
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  @Input()
  title!: string;

  @Input()
  fontsize: string = 'text-3xl';

  @Input()
  color: string = 'text-sky-500';

  onClick() {
    const colors = ['red', 'green', 'blue', 'amber', 'purple', 'orange']
    this.color = `text-${colors[Math.floor(Math.random()*colors.length)]}-500`;
  }
}
