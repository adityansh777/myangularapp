import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './services/routeguard/route-guard.service';
import { TodoComponent } from './components/todo/todo.component';
import { SignupComponent } from './components/signup/signup.component';
// import { MainwelcomeComponent } from './components/mainwelcome/mainwelcome.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [RouteGuardService],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: LoginComponent },
  {
    path: 'todos',
    component: ListTodosComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'todos/:id',
    component: TodoComponent,
    canActivate: [RouteGuardService],
  },

  { path: '**', component: ErrorComponent },
];
