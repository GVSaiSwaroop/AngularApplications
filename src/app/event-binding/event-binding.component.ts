import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {


  sum(){
    alert("ok")
  
  }

  x=6;
  y=7;
  summation(){
    alert(this.x+this.y);
  }
  sub(){
    alert(this.x-this.y);
  }
  mul(){
    alert(this.x*this.y);
  }
  division(){
    alert(this.x/this.y);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
