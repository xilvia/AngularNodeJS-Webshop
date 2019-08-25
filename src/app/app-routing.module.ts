import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductsDetailsComponent } from './page/product-details/product-details.component';
import { ProductListComponent } from './page/product-list/product-list.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'order-admin', component: OrderAdminComponent },
  { path: 'products', component: ProductListComponent},
  { path: 'product-details', component: ProductsDetailsComponent},
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
