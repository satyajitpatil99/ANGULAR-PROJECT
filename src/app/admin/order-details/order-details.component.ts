import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order:any;
  // products:any;
  id:any;

  constructor(private common:CommonService, private route: ActivatedRoute){
    this.id = route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.common.get("orders/" + this.id).subscribe((result: any) => {
      this.order = result;
      console.log(result);

    });
    console.log(this.id);

  }
}
