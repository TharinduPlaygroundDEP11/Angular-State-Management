import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <app-header-component [title]="'State Management in Angular'"
                          [fontsize]="'text-4xl'"
                          [color]="'text-red-500'">

    </app-header-component>
  `
})
export class AppComponent {

}
