import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule ,RouterLink, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] | undefined;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getAllTasks();
  }
}