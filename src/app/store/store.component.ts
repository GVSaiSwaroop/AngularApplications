import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products:any=[];

  constructor(private storeService:StoreService) {
    this.storeService.getproducts().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (error:any)=>{
        alert("server down")
      }

    )

   }

  ngOnInit(): void {
  }

}
