import { Injectable } from '@angular/core';
import {TaskDto} from "../dto/task-dto";


@Injectable()
export class TaskService {

  private taskList: Array<TaskDto> = [];

  addTask(task:TaskDto) {
    this.taskList.push(task);
  }

  deleteTask(task:TaskDto) {
    const index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }

  getAllTasks(task: TaskDto) {
    return this.taskList;
  }

  constructor() { }
}
