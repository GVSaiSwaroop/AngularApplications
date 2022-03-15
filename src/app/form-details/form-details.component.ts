import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDetailsService } from '../form-details.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  applicationForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(40)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    gender:new FormControl(),
    address:new FormGroup({
      street:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    branch:new FormControl(),
    cards:new FormArray([
    ])
  })
  get cardsFormArray()
  {
    return this.applicationForm.get("cards") as FormArray;
  }

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

  addtocart()
  {
    this.cardsFormArray.push(
      new FormGroup({
        cardnumber:new FormControl(null,[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),       
        expirydate:new FormControl(),
        cvv:new FormControl(),
      })
    )
    console.log(this.applicationForm)
  }
  delete(i:any)
  {
    this.cardsFormArray.removeAt(i)
  }

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

  submit()
  {
    console.log(this.applicationForm)
  }

  constructor(private formDetailsService:FormDetailsService) {
    this.applicationForm.get('branch')?.valueChanges.subscribe(
      data=>{
        if(data=='MPC')
        {
          this.applicationForm.addControl('mathematics',new FormControl);
          this.applicationForm.addControl('physics',new FormControl);
          this.applicationForm.addControl('chemistry',new FormControl);
          this.applicationForm.removeControl('civics');
          this.applicationForm.removeControl('economics');
          this.applicationForm.removeControl('commerce');

        }
        else
        {
          this.applicationForm.addControl('civics',new FormControl);
          this.applicationForm.addControl('economics',new FormControl);
          this.applicationForm.addControl('commerce',new FormControl);
          this.applicationForm.removeControl('mathematics');
          this.applicationForm.removeControl('physics');
          this.applicationForm.removeControl('chemistry');

        }
        console.log(this.applicationForm)
      }
    )
   }

  ngOnInit(): void {
  }

}
