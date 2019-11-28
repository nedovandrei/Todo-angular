import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../todo-list.service';

@Component({
  selector: "todo-list-manager",
  template: `
    <mat-card class="todo-app">
      <mat-card-header>
        <mat-card-title>
          {{ title }}
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <todo-input (submit)="addItem($event)"></todo-input>

        <mat-list>
          <mat-list-item *ngFor="let item of todoList">
            <todo-item
              class="todo-item"
              [todoItem]="item"
              (remove)="removeItem($event)"
              (checkItem)="checkItem($event)"
            ></todo-item>
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ["./list-manager.component.scss"]
})
export class ListManagerComponent implements OnInit {
  title = "Todo List";
  todoList;

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title): void {
    this.todoList = this.todoListService.addItem({ title: title, isComplete: false });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

  checkItem(item) {
    this.todoList = this.todoListService.checkItem(item);
  }
}
