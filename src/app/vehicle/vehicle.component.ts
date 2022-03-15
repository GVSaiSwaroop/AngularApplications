import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

  vehicles:any=[];
  search="";

  filter()
  {
    this.vehicleService.getfilteredvehicles(this.search).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

  sortBy="";
  order="";
  sort()
  {
    this.vehicleService.getsortvehicles(this.sortBy,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

  pages="";
  limit="";
  get()
  {
    this.vehicleService.getsomevehicles(this.pages,this.limit).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

  delete(id:any)
  {
    this.vehicleService.deletevehiclesdata(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully")
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

  constructor(private vehicleService:VehicleService) {
    this.vehicleService.getvehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("server down")
      }
    )
    
  }
  ngOnInit(): void {
  }

}
