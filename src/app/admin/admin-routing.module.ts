import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../admin/register/register.component';
import {LoginsComponent} from  '../admin/logins/logins.component'


const routes: Routes = [
  {path: 'login', component: LoginsComponent},
  {path: 'registers',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
