import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { BadurlComponent } from './page/badurl/badurl.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'order-admin', component: OrderAdminComponent },
  { path: 'products', component: ProductListComponent},
  { path: 'product-details', component: ProductDetailsComponent},
  { path: '**', component: IndexComponent }
  {path: '**', component: BadurlComponent}, //ez okés
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
