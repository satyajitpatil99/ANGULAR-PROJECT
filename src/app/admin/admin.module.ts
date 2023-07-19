import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing/landing.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingComponent,
    OrderDetailsComponent,
    AdminProductsComponent,
    AdminProductComponent,
    OrderComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
