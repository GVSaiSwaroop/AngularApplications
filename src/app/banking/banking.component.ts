import { Component, OnInit } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
  details:any=[];
  search="";
  filter()
  {
    this.bankingService.getfiltereddetails(this.search).subscribe(
      (data:any)=>{
        this.details=data;
      },
      (error:any)=>{
        alert("server down")
      }
    )
  }


  constructor(private bankingService:BankingService) 
  {
    this.bankingService.getBankdetails().subscribe(
    (data:any)=>{
      this.details=data;
    },
    (error:any)=>{
      alert("server down")
    }
  )
 }

  ngOnInit(): void {
  }

}
