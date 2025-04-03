import { Component } from '@angular/core';
import { TasksServiceService } from '../../../tasks-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../../task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  imports: [FormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent {
  task: any = { id: null, title: '', description: '', completed: false };
  taskId: number | null = null;

  constructor(private taskService: TasksServiceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params,": params")      
      if (params['id']) {
        this.taskId = params['id'];
        console.log("Task i D : ",this.taskId)
        this.taskService.getTasks().subscribe(tasks => {
          console.log("In Edit : ",tasks)
          var id = parseInt(params['id'])
          this.task = tasks.find(t => t.id == id); 
           // Find task by ID
          console.log("this.task : ",this.task)
        });
      }
    });
  }

  saveTask() {
    console.log
    if (this.taskId) {
      this.taskService.updateTask(this.task).subscribe();
      this.router.navigate(['/task_list']);  // Redirect to task list
    }
  }
}
