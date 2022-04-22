import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TodoListService } from '../todo-list.service';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  @ViewChild('f', { static: false }) tdForm!: NgForm;

  constructor(private tdService: TodoListService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const inputForm = form.value;
    const newTodo = new ToDo(inputForm.name);
    this.tdService.addTodo(newTodo);
    form.reset();
  }
}
