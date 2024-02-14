import { Component } from '@angular/core';
import {TaskService} from "../service/task.service";
import {TaskDto} from "../dto/task-dto";

@Component({
  selector: 'app-task-list',
  template: `
    <div class="p-2">
      @for (task of taskList; track task.id) {
        <app-task [task]="task"/>
      } @empty {
        <p class="text-center mt-3">The Task List is Empty!</p>
      }
    </div>
  `,
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  taskList: TaskDto[];

  constructor(private taskService: TaskService) {
    this.taskList = taskService.getAllTasks();
  }

  // deleteTask(taskId:number) {
  //   const index = this.taskList.findIndex(t => t.id === taskId);
  //   this.taskList.splice(index, 1);
  // }
}
