import { RedirectCommand, Router, Routes } from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { canLeaveEditPage, NewTaskComponent } from './app/tasks/new-task/new-task.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { inject } from '@angular/core';

function dummyCanMatch(){
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if(shouldGetAccess !== 0.5){
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unathorized'));
}

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
    component: UserTasksComponent,
    children:[
      {
        path:'',
        redirectTo:'tasks',
        pathMatch:'prefix'
      },
      {
        path:'tasks', //<your-domain>/users/<uId>/tasks
        component:TasksComponent
      },
      {
        path:'tasks/new',
        component:NewTaskComponent,
        canDeactivate: [canLeaveEditPage]
      }
    ],
    canMatch:[dummyCanMatch],
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];
