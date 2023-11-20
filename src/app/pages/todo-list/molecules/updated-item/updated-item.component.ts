import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../../../interfaces/todo';

@Component({
  selector: 'app-updated-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './updated-item.component.html',
  styleUrl: './updated-item.component.css'
})
export class UpdatedItemComponent {
  @Input() updatedTask!: Todo;
}
