import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <app-header-component [title]="'State Management in Angular'"
                          [fontsize]="'text-4xl'"
                          [color]="'text-blue-500'">

    </app-header-component>
    <app-new-task />
    <app-task-list/>
  `
})
export class AppComponent {

}
