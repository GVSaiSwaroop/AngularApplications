import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.css']
})
export class OrderFoodComponent implements OnInit {
  orderfood:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    mobile:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.[A-Z])(?=.[!@#\$%\^&\*])(?=.{9,})/)]),
    address:new FormGroup({
      street:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      pincode:new FormControl(null,[Validators.required]),
    }),
    items:new FormArray([]),
    details:new FormControl(),

  })
  get itemsFormArray(){
    return this.orderfood.get('items') as FormArray;
  }

  addtocart()
  {
    this.itemsFormArray.push(
      new FormGroup({
        name:new FormControl(null,[Validators.required]),
        quantity:new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),  
      })
    )  
  }
  delete(i:any)
  {
    this.itemsFormArray.removeAt(i)
  }

  submit()
  {
    this.orderfood.markAllAsTouched();
    console.log(this.orderfood);
  }
  


  constructor() { 
    this.orderfood.get('details')?.valueChanges.subscribe(
      data=>{
        if(data=='card')
        {
          this.orderfood.addControl('cardnumber',new FormControl(null,[Validators.required]));
          this.orderfood.addControl('expiry',new FormControl(null,[Validators.required]));
          this.orderfood.addControl('cvv',new FormControl(null,[Validators.required]));
          this.orderfood.removeControl('upiId');

        }
        else
        {
          this.orderfood.addControl('upiId',new FormControl(null,[Validators.required]));
          this.orderfood.removeControl('cardnumber');
          this.orderfood.removeControl('expiry');
          this.orderfood.removeControl('cvv');


        }
        console.log(this.orderfood)
      }
    )
   }

  

  ngOnInit(): void {
  }

}
