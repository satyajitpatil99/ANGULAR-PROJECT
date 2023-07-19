import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:"", component:LandingComponent , children:[
    {path:"dashboard" , component:DashboardComponent},
    {path:"product" , component:AdminProductComponent},
    {path:"product/:id" , component:AdminProductComponent},
    {path:"products" , component:AdminProductsComponent},
    {path:"order" , component:OrderComponent},
    {path:"order-details/:id" , component:OrderDetailsComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
