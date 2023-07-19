import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css']
})
export class Products2Component implements OnInit{
  
  products:any;

  constructor(private common:CommonService){
    // this.products = common.Products;
    // console.log(this.products);
    
  }

  ngOnInit(): void {
    this.common.get("products").subscribe((result: any) => {
      this.products = result;
      console.log(this.products);
      
    })
    
  }
  

}
