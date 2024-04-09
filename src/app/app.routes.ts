import { Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    { path: '', component: TaskListComponent },
    { path: 'add', component: AddTaskComponent },
    { path: 'edit/:id', component: EditTaskComponent }
];
