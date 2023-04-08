import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaPostComponent } from './pages/crea-post/crea-post.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'users', component:UsersComponent,canActivate: [UserGuard] 
  },
  {
    path:'posts', component:PostsComponent,canActivate: [UserGuard]
  },
  {
    path:'creaPost', component:CreaPostComponent,canActivate: [UserGuard]
  },
  {
    path: '**',
    redirectTo: '/users',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
