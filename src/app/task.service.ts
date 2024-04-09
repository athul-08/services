import { Injectable } from '@angular/core';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks(): Task[] {
    throw new Error('Method not implemented.');
  }
  tasks: Task[] = [];
  lastId: number = 0;

  constructor() { }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }
  
  
  addTask(title: string, description: string): void {
    const newTask: Task = {
      id: ++this.lastId,
      title,
      description
    };
    this.tasks.push(newTask);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
