import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  private apiUrl = 'http://127.0.0.1:8000/api/tasks/';

  constructor(private http: HttpClient) {
    // Initialize with some dummy tasks for testing
    // this.tasks = [
    //   { id: 1, title: 'Task 1', description: 'Description of Task 1', completed: false },
    //   { id: 2, title: 'Task 2', description: 'Description of Task 2', completed: false }
    // ];
    // this.tasksSubject.next(this.tasks);
  }

  getTasks(): Observable<Task[]> {
    // return this.tasksSubject.asObservable();
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task) {
    // task.id = this.tasks.length + 1;  // Auto-increment ID
    // this.tasks.push(task);
    // this.tasksSubject.next(this.tasks);
    console.log("Increate Task add task : ",task)
     
    var res = this.http.post<Task>(this.apiUrl, task);
    console.log("Response : ",res)
    return res;
  }

  updateTask(updatedTask: Task) {
    // const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    // if (index !== -1) {
    //   this.tasks[index] = updatedTask;
    //   this.tasksSubject.next(this.tasks);
    // }
    return this.http.put<Task>(`${this.apiUrl}${updatedTask.id}/`, updatedTask);
  }

  // Delete a task
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
