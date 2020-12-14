import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private us: UserserviceService) { }
  byusername;
   public data : any =[];
  ngOnInit(): void {
     this.us.getuserlist().subscribe((result)=>
     {
       console.warn(result)
       this.data= result
     })
  }
  deleteuser(id)
  {
    this.data.splice(id -1,1)
    this.us.deleteuser(id).subscribe((result)=>{
      console.warn("Deleted");
    })
  }
}