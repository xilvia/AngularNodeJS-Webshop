import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductListComponent } from './page/product-list/product-list.component'; //ez oké
import { ProductDetailsComponent } from './page/product-details/product-details.component'; //ezzel én nem kezdtem semmit, ez majd az egyes aloldalakhoz kell.
import { BadurlComponent } from './page/badurl/badurl.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'products', component: ProductListComponent}, //ez okés
  {path: 'products/{{?????}}', component: ProductDetailsComponent}, //ide jönnének az egyéni oldalak route-jai, nem tudom, ez hogy szokás.  
  {path: 'admin/order', component: OrderAdminComponent},
  {path: '**', component: BadurlComponent}, //ez okés
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
