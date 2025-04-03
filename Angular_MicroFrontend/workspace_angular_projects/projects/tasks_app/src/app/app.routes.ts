import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

export const routes: Routes = [ // Main route for app1
    { path: 'task_list', component: TaskListComponent },  // Example of another route
    { path: 'task-create', component: TaskCreateComponent },
    { path: 'task-edit/:id', component: TaskEditComponent },
    { path: '', redirectTo: '/task_list', pathMatch: 'full' }
];
