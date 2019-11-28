import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "todo-item",
  template: `
    <div class="todo-item-content">
      <span class="todo-title" [ngClass]="{ 'todo-complete': todoItem.isComplete }">
        {{ todoItem.title }}
      </span>
    
      <div class="todo-events">
        <button type="checkbox" mat-stroked-button color="{{ todoItem.isComplete ? 'primary' : 'accent'}}" (click)="itemChecked()" >{{ todoItem.isComplete ? "Not Done" : "Done"}}</button>

        <button color="warn" mat-stroked-button (click)="removeItem()">
          Remove
        </button>
      </div>
    </div>
  `,
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() checkItem: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  itemChecked() {
    this.todoItem.isComplete = !this.todoItem.isComplete;
    this.checkItem.emit(this.todoItem);
  }
}
