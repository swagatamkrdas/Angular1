import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient) { }
  isAdded : boolean = false;
  addedProductMessage : string= "New Product is Added Successfully";
  productobj : object = {};

  addNewProduct = function(value){
    this.productobj = {
      "name": value.name,
      "color": value.color
    }
    this.http.post("http://localhost:5555/product/",this.productobj).subscribe(
      (res:Response) => {
        this.isAdded = true;
    })
  }

  ngOnInit() {
  }

}
