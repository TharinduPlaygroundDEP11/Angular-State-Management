import { Component } from '@angular/core';

export type TaskType = {
  id:number,
  description:string,
  status:boolean
}

@Component({
  selector: 'app-task-list',
  template: `
    <div class="p-2">
      @for (task of taskList; track task.id) {
        <app-task [task]="task" (onDelete)="deleteTask($event)"/>
      } @empty {
        <p class="text-center mt-3">The Task List is Empty!</p>
      }
    </div>
  `,
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  taskList: TaskType[] = [
    {id:1, description:'Task 1', status: true},
    {id:2, description:'Task 2', status: false},
    {id:3, description:'Task 3', status: false},
    {id:4, description:'Task 4', status: true},
    {id:5, description:'Task 5', status: false}
  ];

  deleteTask(taskId:number) {
    const index = this.taskList.findIndex(t => t.id === taskId);
    this.taskList.splice(index, 1);
  }
}
