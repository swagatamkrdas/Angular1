import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const myRoutes : Routes = [
  { path: "",component: HomeComponent},
  { path: "product",component: ProductComponent},
  { path: "updateproduct/:id",component: UpdateProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
