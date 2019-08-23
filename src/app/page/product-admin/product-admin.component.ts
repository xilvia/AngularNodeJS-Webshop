import { Component, OnInit } from '@angular/core';
import { ProductAdminService } from 'src/app/service/product-admin.service';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {
  title:string ="Product DataBase";
  counter:number;
  filterPhrase:string="";

  list$: Observable<Product[]>= this.productAdService.getAll();
  constructor( private productAdService: ProductAdminService) {
  
    }
    removeProduct(id){
      this.productAdService.remove(id).forEach((data)=>{
        console.log(data);
      this.counter++;
      })
    
    
    }
ngOnInit(){

}
   }

