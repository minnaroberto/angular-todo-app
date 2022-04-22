import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ToDo } from './todo.model';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) tdForm!: NgForm;
  completedTodos: ToDo[];
  todos: ToDo[];
  private subscription: Subscription;

  constructor(private tdService: TodoListService) {}

  ngOnInit() {
    this.todos = this.tdService.getTodos();
    this.subscription = this.tdService.todosChanged.subscribe(
      (todos: ToDo[]) => {
        this.todos = todos;
      }
    );
    this.completedTodos = this.tdService.getCompletedTodo();
    this.subscription = this.tdService.todosCompleted.subscribe(
      (completedTodos: ToDo[]) => {
        this.completedTodos = completedTodos;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(index: number) {
    this.tdService.deleteTodo(index);
  }

  onComplete(index: number, completeTodo: ToDo) {
    const changedTodo = new ToDo(completeTodo.name);
    this.tdService.completedTodo(index, changedTodo);
  }
}
