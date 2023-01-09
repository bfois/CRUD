import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

   }

   postProduct(data:Products){
    return this.http.post<Products>("http://localhost:3000/productList/", data);
   }
   getProduct(){
    return this.http.get<Products[]>("http://localhost:3000/productList/")
   }
   updateProduct(data: Products, id:number){
    return this.http.put<Products>("http://localhost:3000/productList/"+id, data)
   }
   deleteProduct(id:number){
    return this.http.delete<Products>("http://localhost:3000/productList/"+id)
   }
}
