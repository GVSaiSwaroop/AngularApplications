import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

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

  a=6;
  square(){
    alert(this.a*this.a);
  }
  cube(){
    alert(this.a*this.a*this.a);
  }


  h=6;
  w=7;
  area(){
    alert(this.h*this.w);
  }
  perimeter(){
    alert(2*(this.h+this.w));
  }



  names:any=[];
  name="";
  showname(){
    this.names.push(this.name);
  }


  comments:any=[];
  comment="";
  showcomment(){
    this.comments.push(this.comment);
  }

  products:any=[];
  entername="";
  quantity="";
  addtocart(){
  let product={
    entername:this.entername,
    quantity:this.quantity,
  }
  this.products.push(product)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
