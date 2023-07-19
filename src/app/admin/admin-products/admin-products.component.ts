import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{

  id:any
  products:any;
  constructor(private common:CommonService){
  }
  ngOnInit(): void {

this.load();

 }

 load(){
  this.common.get("products").subscribe((result: any) => {
    this.products = result;
    console.log(this.products);

  })
 }

 deleteProduct(id:number){
  if(confirm("sure to delete")){
    this.common.delete("products/"+id).subscribe((result: any) => {
      this.load();
    })
    this.common.updateCount(this.products.length);
  }

 }
}
