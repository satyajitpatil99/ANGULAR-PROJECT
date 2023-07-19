import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  id:any
  products:any;
  constructor(private common:CommonService){
    // this.products = common.Products;
  }
  ngOnInit(): void {

  

    this.common.get("products").subscribe((result: any) => {
      this.products = result;
      console.log(this.products);
      
    })

  }
}
