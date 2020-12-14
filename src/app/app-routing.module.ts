import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
     path: '',
     component:RegistrationComponent,
    
  },
  {
    path: 'Login',
    component: LoginComponent  },
    {
      path: 'register',
      component: RegistrationComponent
    },
    {
      path: 'user',
      component: UsersComponent
    },
    {
      path: 'update/:id',
      component:  UpdateComponent
    },
    {
      path:"admin",loadChildren:() => import('./admin/admin.module').then(mod => mod.AdminModule)
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
