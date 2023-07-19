import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseurl = "https://644bb85217e2663b9df67c2d.mockapi.io/";

  countVariable = new BehaviorSubject(0);
  currentCountValue = this.countVariable.asObservable();


  constructor(private httpClient:HttpClient) {

  }

  updateCount(count:number){
    this.countVariable.next(count);
  }



  get(url: string) {
    return this.httpClient.get(this.baseurl + url);
  }

  post(url:string,data:any){
    return this.httpClient.post(this.baseurl + url,data);
  }

  delete(url: string) {
    return this.httpClient.delete(this.baseurl + url);
  }

  put(url:string,data:any){
    return this.httpClient.put(this.baseurl + url,data);
  }


}
