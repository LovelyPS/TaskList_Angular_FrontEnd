import { Component } from '@angular/core';
import { Task } from '../../../task.model';
import { TasksServiceService } from '../../../tasks-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks: Task[] = [];

  constructor(private taskService: TasksServiceService, private router: Router) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks)
      this.tasks = tasks;
    });
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }

  goToTaskEdit(taskId: number) {
    this.router.navigate(['/task-edit', taskId]);  // Navigate programmatically
  }
  createTask() {
    this.router.navigate(['/task-create']);  // Navigate programmatically
  }
}
