import { Component, OnInit,Input, Output, EventEmitter ,HostBinding,HostListener } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor() { }
 @Input('count') count : number;
 @HostBinding('style.color') color = 'red';
 @HostListener('click') function ()
 {
  this.color="blue"; 
 }
 @HostListener('mouseover') kfunction  ()
 {
  this.color="orange"; 
 }
 
 @Output()countchange :EventEmitter<number>= new EventEmitter()
 increament()
 {
   this.count ++;
   this.countchange.emit(this.count)
 }
  ngOnInit(): void {
  }

}
