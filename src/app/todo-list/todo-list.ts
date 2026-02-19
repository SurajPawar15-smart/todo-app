import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
