import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {


  name="";
  email="";
  dob="";
  number="";
  city="";
  age=0;
  balance=0;
  persons:any=[]
  SignUp(){
     let person={
       name:this.name,
       email:this.email,
       number:this.number,
       city:this.city,
       age:this.age,
       balance:this.balance,
       dob:this.dob,
     }
     this.persons.push(person);
  }
  delete(i:any){
    this.persons.splice(i,1)
  }

  /*json concept*/
  a={name:'Swaroop',age:20}
  /*end*/

  constructor() { }

  ngOnInit(): void {
  }

}
