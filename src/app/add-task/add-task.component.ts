import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,RouterLink],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.title.trim() && this.description.trim()) {
      this.taskService.addTask(this.title.trim(), this.description.trim());
      this.title = '';
      this.description = '';
    }
  }
}