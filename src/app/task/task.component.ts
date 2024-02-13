import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskType} from "../task-list/task-list.component";

@Component({
  selector: 'app-task',
  template: `
    <div class="p-2">
      <div class="flex justify-between items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input [checked]="task.status" id="bordered-checkbox-{{ task.id }}" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="bordered-checkbox-{{ task.id }}" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 hover:cursor-pointer">
          {{ task.description }}
        </label>
        <button (click)="handleDelete()"
                type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
      </div>
    </div>
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input()
  task!: TaskType;

  @Output()
  onDelete = new EventEmitter<number>();

  handleDelete() {
    this.onDelete.emit(this.task.id);
  }
}
