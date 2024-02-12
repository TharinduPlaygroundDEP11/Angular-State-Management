import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-component',
  template: `
    <h1 class="{{ fontsize }} font-medium text-center py-2 border-b-2
    {{ color }} hover:text-emerald-500">{{ title }}</h1>
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

}
