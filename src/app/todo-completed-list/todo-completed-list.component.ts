import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ToDo } from '../todo-list/todo.model';
import { TodoListService } from '../todo-list/todo-list.service';

@Component({
  selector: 'app-todo-completed-list',
  templateUrl: './todo-completed-list.component.html',
  styleUrls: ['./todo-completed-list.component.css'],
})
export class TodoCompletedListComponent implements OnInit {
  completedTodos: ToDo[];
  private subscription: Subscription;
  constructor(private tdService: TodoListService) {}

  ngOnInit() {
    this.completedTodos = this.tdService.getCompletedTodo();
    this.subscription = this.tdService.todosCompleted.subscribe(
      (completedTodos: ToDo[]) => {
        this.completedTodos = completedTodos;
      }
    );
  }

  onDelete(index: number) {
    this.tdService.deleteCompletedTodo(index);
  }

  onMoveBacktoTodo(index: number, moveToTodo: ToDo) {
    const newTodo = new ToDo(moveToTodo.name);
    this.tdService.deleteCompletedTodo(index);
    this.tdService.addTodo(newTodo);
  }
}
