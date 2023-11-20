import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../core/todos.service';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces/todo';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './molecules/item-list/item-list.component';
import { UpdatedItemComponent } from './molecules/updated-item/updated-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemListComponent, UpdatedItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  public todoList$!: Observable<Todo[]>;
  public updatedTask$!: Observable<Todo | null>;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoList$ = this.todosService.getTodos();
  }

  markTaskAsDone(item: Todo): void {
    this.updatedTask$ = this.todosService.updateTask(item);
  }
}
