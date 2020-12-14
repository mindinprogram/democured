import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }
  hide = true;
  ngOnInit(): void {
  }
  login =  new FormGroup({
   
    username: new FormControl ('', [Validators.required,]),
    pwd: new FormControl ('', [Validators.required,Validators.minLength(6),Validators.maxLength(12)])
   

});

get username(){return this.login.get('username')}
get pwd(){return this.login.get('pwd')}

 
  onSubmit()
  {
    
    console.warn(this.login.value);
    localStorage.setItem('currentUser',JSON.stringify({values:this.login.value}));
    this.router.navigate(['/user']);
    // this.login.reset();
  }
}

