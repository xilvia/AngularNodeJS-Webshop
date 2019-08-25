import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { NavComponent } from '../app/nav/nav.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { BadurlComponent } from './page/badurl/badurl.component';
import { SliderComponent } from './page/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OrderAdminComponent,
    ProductDetailsComponent,
    NavComponent,
    ProductListComponent,
    BadurlComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
