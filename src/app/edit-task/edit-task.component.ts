import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule, RouterLink],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent implements OnInit {
  task: Task = { id: 0, title: '', description: '' }; 

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.taskService.getTaskById(id) || { id: 0, title: '', description: '' }; 
  }

  updateTask(): void {
    this.taskService.updateTask(this.task);
  }
}
