import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit{

  id:any;
  productdata:any;
  image:any;
  data:any;

  constructor(private common:CommonService,private router:Router,private route:ActivatedRoute){
   this.id = this.route.snapshot.paramMap.get("id");
  }


  ngOnInit(): void {
     this.productdata = new FormGroup({
      title: new FormControl(),
      category: new FormControl(),
      price: new FormControl(),
      mrp: new FormControl(),
      image: new FormControl(),
      // image: new FormControl(this.image),
      description: new FormControl(),
      });

      if(this.id != null){
        this.common.get("products/" + this.id).subscribe((result:any)=>{
          this.data = result;
          console.log(result);
          this.productdata.patchValue({
            title:result.title,
            category:result.category,
            price:result.price,
            mrp:result.mrp,
            image:result.image,
            // image:result.image,
            description:result.description,
          })

        })
      }

  }
    

  save(data:any){
    if(this.id == null){
      this.common.post("products", data).subscribe((result:any)=>{
        console.log(result);
        this.router.navigate(['/admin/products']);
      })
      this.common.updateCount(this.data.length);
    }
    else{
      this.common.put("products/"+this.id,data).subscribe((result:any)=>{
        console.log(result);
        this.router.navigate(['/admin/products']);
      })
    }
  }

  imageUpload(img:any){
    this.image=img.target.files[0];
  }
}
