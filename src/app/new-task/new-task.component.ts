import {Component} from '@angular/core';
import {TaskService} from "../service/task.service";
import {TaskDto} from "../dto/task-dto";

@Component({
  selector: 'app-new-task',
  template: `
    <form (ngSubmit)="onSubmit(txtElm)">
      <label for="new-task" class="block text-m font-medium text-gray-900 m-2">Enter New Task :</label>
      <div class="m-2 flex gap-3">
        <input #txtElm
               ngModel
               type="text" id="new-task"
               name="txt"
               class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               placeholder="Ex :- Complete Angular App"
               required>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          ADD
        </button>
      </div>
    </form>
  `,
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  constructor(private taskService: TaskService) {

  }

  onSubmit(txtElm: HTMLInputElement) {
    const description = txtElm.value.trim();

    if (!description) {
      txtElm.focus();
      txtElm.select();
      return;
    }

    this.taskService.addTask(new TaskDto(
      this.taskService.getAllTasks().length + 1,
      description
    ))
    txtElm.value = '';
    txtElm.focus();
  }
}
