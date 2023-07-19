import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product: any;
  productdata: any = [];
  counter: any = 1;
  add = 1;

  constructor(private common: CommonService, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.common.get("products/" + this.id).subscribe((result: any) => {
      this.product = result;
    });
    this.productdata = [];
    if (localStorage.getItem("data") != null) {
      this.productdata = JSON.parse(localStorage.getItem("data") || '[]');
    }
  }

  cart(id: number) {
    let found = false;
    for (let i = 0; i < this.productdata.length; i++) {
      if (this.productdata[i].id == id) {
        found = true;
        break;
      }
    }
    if (!found) {
      let pro = {
        id: this.product.id,
        title: this.product.title,
        category: this.product.category,
        price: this.product.price,
        mrp: this.product.mrp,
        image: this.product.image,
        quantity: this.counter,
      }
      this.productdata.push(pro);
      localStorage.setItem("data", JSON.stringify(this.productdata));
      this.common.updateCount(this.productdata.length);
      alert("product added");
    }
    else {
      alert("product already added");
    }
  }


  minus() {
    if (this.counter > 1) {
      this.counter -= this.add;
    }
  }
  plus() {
    this.counter += this.add
  }


}
