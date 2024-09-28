import { Routes } from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component:NoTaskComponent
  },
  // {
  //   path: 'tasks', //<your-domain>/tasks
  //   component: TasksComponent,
  // },
  {
    path: 'users/:userId', //<your-domain>/user/<uId>
    component: UserTasksComponent
  }
];
