import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './structure/aside/aside.component';
import { ProductsComponent } from './navbar/products/products.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { Products2Component } from './navbar/products2/products2.component';
import { ProductDetailComponent } from './navbar/product-detail/product-detail.component';
import { AdminLoginComponent } from './navbar/admin-login/admin-login.component';
import { CartComponent } from './navbar/cart/cart.component';
import { CheckoutComponent } from './navbar/checkout/checkout.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path:"" , component:AsideComponent},
  {path:"admin", canActivate:[AuthGuard], loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
  { path:"products" , component:ProductsComponent},
  { path:"products2" , component:Products2Component},
  { path:"productdetail/:id" , component:ProductDetailComponent},
  { path:"about" , component:AboutComponent},
  { path:"contact" , component:ContactComponent},
  { path:"cart" , component:CartComponent},
  { path:"adminlogin" , component:AdminLoginComponent},
  { path:"checkout" , component:CheckoutComponent},
   {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
