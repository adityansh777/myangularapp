import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { LogoutComponent } from './components/logout/logout.component';
// import { MainwelcomeComponent } from './components/mainwelcome/mainwelcome.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'todos', component: ListTodosComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent },
];
