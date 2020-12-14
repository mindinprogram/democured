import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {UserserviceService} from './userservice.service';
import { UpdateComponent } from './update/update.component';
import { SearchFilterPipe } from './search-filter.pipe';
import {AdminModule} from './admin/admin.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CustomestyleDirective } from './customestyle.directive';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UsersComponent,
    UpdateComponent,
    SearchFilterPipe,
    AdminListComponent,
    CustomestyleDirective,
    
  ],
  imports: [
    BrowserModule,AdminModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,
    MatCardModule,MatGridListModule,MatButtonModule,MatSidenavModule,
    MatIconModule,MatToolbarModule,BrowserAnimationsModule,
    MatTabsModule, MatNativeDateModule,MatDatepickerModule,
    MatCheckboxModule,MatInputModule,MatDialogModule,
    MatListModule,HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
