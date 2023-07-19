import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  total: any;
  items: any;
  subtotal: any = 0;
  delivery:any=0;
  diss:any=0;
  dissDisplay:any=0
  totalbill:any=0;
  bill:any;

  constructor() {}


  show() {
    this.items = JSON.parse(localStorage.getItem("data") || '[]');
  }

  subTotal() {
    let sub = 0;

    for (let i = 0; i < this.items.length; i++) {
      this.total = this.items[i].price * this.items[i].quantity;
      this.subtotal = sub += this.total;

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
    this.totalbill = this.subtotal + this.delivery - (this.subtotal*this.diss/100);

  }
}
