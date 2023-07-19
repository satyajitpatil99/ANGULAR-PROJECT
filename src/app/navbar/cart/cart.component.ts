import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productTotal: any;
  items: any;
  data: any;
  count: any;
  add: any;
  subtotal: any = 0;
  delete:any;
  delivery:any=0;
  diss:any=0;
  dissDisplay:any=0
  total:any=0;
  bill:any;

  constructor(private common:CommonService){}

  ngOnInit(): void {
    this.show();
    this.subTotal();
    this.deliveryCharges();
    this.disscount();
    this.totalBill();
  }

  show() {
    this.items = JSON.parse(localStorage.getItem("data") || '[]');
  }

  minus(index: number) {
    if (this.items[index].quantity > 1)
    this.items[index].quantity -= 1;
    this.subTotal();
    this.quantityChanged();
    this.deliveryCharges();
    this.disscount();
    this.totalBill();
  }
  plus(index: number) {
    this.items[index].quantity += 1;
    this.subTotal();
    this.quantityChanged();
    this.deliveryCharges();
    this.disscount();
    this.totalBill();
  }
  quantityChanged() {
    localStorage.setItem("data", JSON.stringify(this.items));
  }

  deleteCartItem(id:number) {
    this.items = this.items.filter((item:any)=>{
      if(item.id != id){
        return item;
      }
    })
    localStorage.setItem("data",JSON.stringify(this.items));
    this.common.updateCount(this.items.length);
    this.subTotal();
  }

  subTotal() {
    let sub = 0;

    for (let i = 0; i < this.items.length; i++) {
      this.productTotal = this.items[i].price * this.items[i].quantity;
      this.subtotal = sub += this.productTotal;

    }
  }
  deliveryCharges(){
    if(this.items == ""){
      this.delivery = 0;
    }
    else if(this.subtotal <= "1000"){
      this.delivery = 100;
    }
    else{
      this.delivery = 0;
    }
  }
  disscount(){
    if(this.subtotal <= "1000"){
      this.diss = 0;
      this.dissDisplay = 0;
    }
    else if(this.subtotal <= "3000"){
      this.diss = 5;
      this.dissDisplay = 0.05;
    }
    else if(this.subtotal <= "5000"){
      this.diss = 10;
      this.dissDisplay = 0.10;
    }
    else {
      this.diss = 25;
      this.dissDisplay = 0.25;
    }
  }
  totalBill(){
    this.total = this.subtotal + this.delivery - (this.subtotal*this.diss/100);

  }

}
