import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductAdminComponent } from './page/product-admin/product-admin.component';
import { EditProductAdminComponent } from './page/edit-product-admin/edit-product-admin.component';
import { AddProductAdminComponent } from './page/add-product-admin/add-product-admin.component';
import { AdminFilterPipe } from './pipe/admin-filter.pipe';
import { DeleteFilterPipe } from './pipe/delete-filter.pipe';
import { AdminSorterPipe } from './pipe/admin-sorter.pipe';
import { EditOrderAdminComponent } from './page/edit-order-admin/edit-order-admin.component';
import { AddOrderAdminComponent } from './page/add-order-admin/add-order-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OrderAdminComponent,
    ProductAdminComponent,
    EditProductAdminComponent,
    AddProductAdminComponent,
    AdminFilterPipe,
    DeleteFilterPipe,
    AdminSorterPipe,
    AddOrderAdminComponent,
    EditOrderAdminComponent
  ],
  imports: [FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
