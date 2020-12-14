import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {UserserviceService} from '../userservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private us: UserserviceService) { }
  hide = true;
  public usercolor = 'red';
  ngOnInit(): void {
  }
  register = new FormGroup({
    firstname: new FormControl ('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    lastname: new FormControl ('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    emailadd: new FormControl ('', [Validators.required,Validators.email]),
    username: new FormControl ('', [Validators.required,]),
    password: new FormControl ('', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    phoneno: new FormControl ('', [Validators.required,Validators.pattern('[0-9]*')]),

});

  // matcher = new MyErrorStateMatcher();

  get firstname(){return this.register.get('firstname')}
get lastname(){return this.register.get('lastname')}
get emailadd(){return this.register.get('emailadd')}
get username(){return this.register.get('username')}
get password(){return this.register.get('password')}
get phoneno(){return this.register.get('phoneno')}


onSubmit()
  {
    this.firstname.validator
    console.warn(this.register.value);
    this.us.saveUser(this.register.value).subscribe(()=>
    {
      console.warn("registered succesfully");
    })
    
    this.register.reset();
  }
}
