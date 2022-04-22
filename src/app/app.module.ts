import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-list/todo-add/todo-add.component';
import { TodoCompletedListComponent } from './todo-completed-list/todo-completed-list.component';
import { TodoListService } from './todo-list/todo-list.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoCompletedListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TodoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
