import { Component } from '@angular/core';
import { TasksServiceService } from '../../../tasks-service.service';
import { Router } from '@angular/router';
import { Task } from '../../../task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  imports: [FormsModule],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {

  newTask: Task = { id: null, title: '', description: '', completed: false };

  constructor(private taskService: TasksServiceService, private router: Router) {}

  createTask() {
    console.log("Increate Task component")
    if (this.newTask.title && this.newTask.description) {
      this.taskService.addTask(this.newTask).subscribe();
      console.log("cretae called. complete")
      this.router.navigate(['/task_list']);  // Redirect to task list
    }
  }

}
