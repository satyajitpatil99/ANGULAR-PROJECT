import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  totalOrders = 0;
  totalProducts = 0;
  productsdata:any;
  ordersdata:any;

  constructor(private common:CommonService){}

  ngOnInit(): void {
    this.common.get("products").subscribe((result:any)=>{
      this.productsdata = result.length;
    })
    this.common.get("orders").subscribe((result:any)=>{
      this.ordersdata = result.length;
    })

    if(this.productsdata != null){
      this.common.get("products").subscribe((result:any)=>{
        this.totalProducts = result.length;
      })
      this.common.updateCount(this.totalProducts);
    }
    if(this.ordersdata != null){
      this.common.get("ordres").subscribe((result:any)=>{
        this.totalOrders = result.length;
      })
      this.common.updateCount(this.totalOrders);
    }
  }



}
