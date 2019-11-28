import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { InputComponent } from './todo-list/input/input.component';
import { ItemComponent } from './todo-list/item/item.component';
import { ListManagerComponent } from './todo-list/list-manager/list-manager.component';
import { TodoListService } from './todo-list/todo-list.service';
import { TodoListStorageService } from './todo-list/todo-list-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [TodoListService, TodoListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
