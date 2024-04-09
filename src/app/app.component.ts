import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, EditTaskComponent,TaskListComponent,AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task';
}
