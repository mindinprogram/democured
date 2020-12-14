import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginsComponent } from './logins/logins.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [LoginsComponent,RegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
