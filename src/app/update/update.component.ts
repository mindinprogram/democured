import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {UserserviceService} from '../userservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private us: UserserviceService,private router: ActivatedRoute) { }
  hide = true;
  update = new FormGroup({
    firstname: new FormControl ('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    lastname: new FormControl ('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    emailadd: new FormControl ('', [Validators.required,Validators.email]),
    username: new FormControl ('', [Validators.required,]),
    password: new FormControl ('', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    phoneno: new FormControl ('', [Validators.required,Validators.pattern('[0-9]*')]),

});
  ngOnInit(): void {
    this.us.getuserbyid(this.router.snapshot.params.id).subscribe((result)=>
    {
      this.update = new FormGroup({
        firstname: new FormControl (result['firstname'], [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
        lastname: new FormControl (result['lastname'], [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
        emailadd: new FormControl (result['emailadd'], [Validators.required,Validators.email]),
        username: new FormControl (result['username'], [Validators.required,]),
        password: new FormControl (result['password'], [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
        phoneno: new FormControl (result['phoneno'], [Validators.required,Validators.pattern('[0-9]*')])
     });
    });
}
get firstname(){return this.update.get('firstname')}
get lastname(){return this.update.get('lastname')}
get emailadd(){return this.update.get('emailadd')}
get username(){return this.update.get('username')}
get password(){return this.update.get('password')}
get phoneno(){return this.update.get('phoneno')}

onSubmit()
{
  this.us.updateUser(this.router.snapshot.params.id,this.update.value).subscribe((result)=>
  {
    console.warn("update successfully")
  })
}
}
