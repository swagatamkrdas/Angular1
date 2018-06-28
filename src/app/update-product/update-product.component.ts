import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router, ActivatedRoute} from "@angular/router";
import { parse } from 'url';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data : object ={};
  productobj : object = {};
  products = [];
  isUpdated : boolean = false;
  updateProductMessage : string= "Product is Updated Successfully";

  constructor(private router : Router, private route: ActivatedRoute, private httpclient:HttpClient) { }

  updateNewProduct(product){
    console.log(product)
    }
    

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
  });
  this.httpclient.get("http://localhost:5555/product").subscribe(
      (res:Response) => {
//        this.products = res['_body'];
        this.products = res;
        for(var i = 0; i < this.products.length; i++){
          if(parseInt(this.products[i].id) === this.id){
            this.data =this.products[i];
            break;
          }
        }
      }
    )

}
