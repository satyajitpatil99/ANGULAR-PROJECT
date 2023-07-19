import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  count = 0;
  constructor(private common:CommonService){}
  ngOnInit(): void {
    this.common.currentCountValue.subscribe(count=>{
      this.count = count;
    });

    if(localStorage.getItem("data") != null){
      let data = JSON.parse(localStorage.getItem("data") || '[]');
      this.common.updateCount(data.length);
    }
  }


}
