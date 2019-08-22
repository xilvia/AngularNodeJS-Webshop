import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductListComponent } from './page/product-list/product-list.component'; //ezzel lehet baj
import { ProductDetailsComponent } from './page/product-details/product-details.component'; //ezzel lehet baj


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'products', component: ProductListComponent}, //ezzel lehet baj. És majd innen ágazuk le az id-s termékoldalakra
  {path: 'products/{{products[k].id}}', component: ProductDetailsComponent}, //ezzel lehet baj. így szoktuk ezt? :)
  {path: 'admin/order', component: OrderAdminComponent},
  {path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
