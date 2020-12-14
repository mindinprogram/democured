import { Component, OnInit ,ViewChild} from '@angular/core';
import {RegisterComponent} from '../register/register.component'
@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  constructor() { }
  count:number =5;
  @ViewChild(RegisterComponent) childre: RegisterComponent;
  increase()  
  {
    this.count=this.count+1;
   // this.childre.increament();
  }
  updateincrease(countchange:number)
  {
    this.count=countchange;
  }
  
  ngOnInit(): void {
  }

}
