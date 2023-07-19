import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

declare var Razorpay :any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  // show cart data variable
  total: any;
  items: any;
  subtotal: any = 0;
  delivery:any=0;
  diss:any=0;
  dissDisplay:any=0
  totalbill:any=0;
  bill:any;
  id:any;
  order:any;

  // reactive form variable
  formdata:any;

  constructor(private common:CommonService){}

  ngOnInit(): void {
    this.show();
    this.subTotal();
    this.formData();
    this.deliveryCharges();
    this.disscount();
    this.totalBill();
  }

  formData(){
    this.formdata = new FormGroup({
      name: new FormControl("",Validators.compose([Validators.required,Validators.pattern(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/),Validators.maxLength(20)])),
      mobileno: new FormControl("",Validators.compose([Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)])),
      email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
      address: new FormControl("",Validators.compose([Validators.required,Validators.pattern(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/),Validators.maxLength(20)])),
      city: new FormControl("",Validators.compose([Validators.required,Validators.pattern(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/),Validators.maxLength(10)])),
      pincode: new FormControl("",Validators.compose([Validators.required,Validators.pattern(/^[1-9][0-9]{5}$/)])),
    })
  }
  checkoutDetails(data:any){
    this.order = {...this.formdata.value,total:this.totalbill, products:this.items,Status:"Pending"}
    console.log(this.order);

    // data["products"]= this.items;
    // data["Status"]= "pending";
    this.common.post("orders",this.order).subscribe((result:any)=>{
      alert("Address Add Successful");
      this.id = result.id;
      console.log(this.id);


      // start payment gateway
      this.options.amount = "200";//(this.totalbill * 100).toString();
      this.options.prefill.name = this.order.name;
      this.options.prefill.email = this.order.email;
      this.options.prefill.contact = this.order.mobileno;

      var razorpay = new Razorpay(this.options);
      razorpay.open();
      razorpay.on('payment.failed',(response:any)=>{
        alert("Payment Failed ")
        console.log(response);

      });
    })

  }

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

  options = {
    "key": "rzp_live_Ay9af2dQeUH8A6",
    "amount": "200",
    "name": "Prathmesh kanekar",
    "description": "Web Development",
    "image": "https://www.abhijitgatade.com/assets/img/favicon.png",
    "order_id":"",
    "handler": function (response: any){
        var event = new CustomEvent("payment.success",
            {
                detail: response,
                bubbles: true,
                cancelable: true
            }
        );
        window.dispatchEvent(event);
    },

    "prefill": {
        "name": "Prathmesh Kanekar",
        "email": "prathmeshkanekar@gmail.com",
        "contact": "9561645462"
    },
    "notes": {
        "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
    };

    @HostListener('window:payment.success',['$event'] )
    onPaymentSuccess(event:any):void{
      console.log("Payment Recivied");

      this.common.put("orders/"+this.id,{Status:"Paid"}).subscribe((result:any)=>{
        console.log("Status updated ");
        console.log(result);


      })

    }
}
