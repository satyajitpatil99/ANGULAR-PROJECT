import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  orders:any;
  product:any;

  constructor(private common:CommonService){}
  ngOnInit(): void {
    this.common.get("orders").subscribe((result:any)=>{
      this.orders = result;
      this.product=result.products;
      console.log(this.orders);

    })

  }


}
