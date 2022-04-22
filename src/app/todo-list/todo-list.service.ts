import { ToDo } from '../todo-list/todo.model';
import { Subject } from 'rxjs';

export class TodoListService {
  todosChanged = new Subject<ToDo[]>();
  todosCompleted = new Subject<ToDo[]>();
  private completedTodos: ToDo[] = [];

  private todos: ToDo[] = [
    new ToDo('Sleep zzzz'),
    new ToDo('Menu UI'),
    new ToDo('kbase'),
    new ToDo('eat'),
  ];

  getTodos() {
    return this.todos.slice();
  }

  getTodo(index: number) {
    return this.todos[index];
  }

  addTodo(todo: ToDo) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos.slice());
    console.log('todos changed in add to: ', this.todosChanged);
  }

  updateTodo(index: number, newTodo: ToDo) {
    this.todos[index] = newTodo;
    this.todosChanged.next(this.todos.slice());
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.todosChanged.next(this.todos.slice());
  }

  deleteCompletedTodo(index: number) {
    this.completedTodos.splice(index, 1);
    this.todosCompleted.next(this.completedTodos.slice());
  }

  completedTodo(index: number, completeTodo: ToDo) {
    this.deleteTodo(index);
    this.completedTodos.push(completeTodo);
    this.todosCompleted.next(this.completedTodos.slice());
  }

  getCompletedTodo() {
    return this.completedTodos;
  }
}
