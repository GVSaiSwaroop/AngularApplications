import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-new',
  templateUrl: './vehicle-new.component.html',
  styleUrls: ['./vehicle-new.component.css']
})
export class VehicleNewComponent implements OnInit {

  vehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    id:new FormControl(),
  })

  submit(){
    this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Posted Successfully")
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }

    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

  update(){
    this.vehicleService.UpdateVehicle(this.vehicleForm.value.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Updated Successfully")
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }

  constructor(private vehicleService:VehicleService) { }

  ngOnInit(): void {
  }

}
