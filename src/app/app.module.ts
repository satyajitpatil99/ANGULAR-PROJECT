import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { AsideComponent } from './structure/aside/aside.component';
import { ProductsComponent } from './navbar/products/products.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { Products2Component } from './navbar/products2/products2.component';
import { ProductDetailComponent } from './navbar/product-detail/product-detail.component';
import { AdminLoginComponent } from './navbar/admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './navbar/cart/cart.component';
import { CheckoutComponent } from './navbar/checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    Products2Component,
    ProductDetailComponent,
    AdminLoginComponent,

    CartComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
