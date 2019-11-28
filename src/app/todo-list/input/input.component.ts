import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "todo-input",
  template: `
    <mat-form-field class="example-full-width" appearance="outline">
      <mat-label>Add Todo</mat-label>
      <input
        matInput
        class="todo-input"
        placeholder="Add Todo"
        [value]="title"
        (keyup.enter)="changeTitle($event.target.value)"
        #inputElement
      />
    </mat-form-field>
    <button
      class="add-button"
      mat-stroked-button
      color="primary"
      (click)="changeTitle(inputElement.value)"
    >
      Add
    </button>
  `,
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title: string = "";

  constructor() {}

  ngOnInit() {}

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
