import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpclient:HttpClient) { }
  
  id:number;
  private headers =new Headers ({'Content-Type': 'application/json'});

  products =[];
  fetchdata = function() {
    this.httpclient.get("http://localhost:5555/product").subscribe(
      (res:Response) => {
        this.products = res;
      }
    )
    
  }

  DeleteProduct =function(id){
    if (confirm("Are You Sure?")){
      const url = `${"http://localhost:5555/product"}/${id}`;
      return this.httpclient.delete(url, {headers:this.headers}).subscribe(
        (res:Response) =>{
        this.fetchdata();
      }
    )
    }
  }

  UpdateProduct=function(id){
    console.log("Update Process")
  }
  ngOnInit() {
    this.fetchdata();
  }

}
