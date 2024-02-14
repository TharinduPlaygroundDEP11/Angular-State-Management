import { Injectable } from '@angular/core';
import {TaskDto} from "../dto/task-dto";


@Injectable()
export class TaskService {

  private taskList: Array<TaskDto> = [
    new TaskDto(1, "First Task", true),
    new TaskDto(2, "Second Task"),
    new TaskDto(3, "Third Task", true),
    new TaskDto(4, "Forth Task"),
    new TaskDto(5, "Fifth Task", true),
  ];

  addTask(task:TaskDto) {
    this.taskList.push(task);
  }

  deleteTask(task:TaskDto) {
    const index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }

  getAllTasks() {
    return this.taskList;
  }

  constructor() { }
}
