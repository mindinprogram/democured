import { Component } from '@angular/core';
import {ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'democurd';
  constructor(
    private vcr : ViewContainerRef,
    private cfr : ComponentFactoryResolver){}
    async LoadAdmin()
    {
      this.vcr.clear();
      const{AdminListComponent} = await import ('./admin-list/admin-list.component');
      this.vcr.createComponent(this.cfr.resolveComponentFactory(AdminListComponent));
    }
  logout()
  {
  localStorage.removeItem('currentUser');
  }
}
