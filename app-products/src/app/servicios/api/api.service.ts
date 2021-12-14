import { productI } from './../../modelos/product.interface';
import { registerI } from './../../modelos/register.products.interface';
import { Injectable } from '@angular/core';
import { listaproductosI } from '../../modelos/listaproductos.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://eco-back.herokuapp.com/api/v1/"
/* Recuerda importar el HttpClientModule en app.module.ts para que no de error */

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<listaproductosI[]>{
    let direccion = this.url + "products"
    return this.http.get<listaproductosI[]>(direccion)
  }

  createNewProduct(body:registerI):Observable<any>{
    let direccion = this.url + "products"
    return this.http.post(direccion, body)
  }

  getSingleProduct(id:any):Observable<any>{
    let direccion = this.url + "products/"+id
    return this.http.get(direccion)
  }

  putSingleProduct(id:any, form:productI):Observable<any>{
    let direccion = this.url + "products/" + id
    return this.http.put(direccion, form)
  }

  deletePatch(id:any):Observable<any>{
    let direccion = this.url + "products/" + id
    return this.http.patch(direccion, id)
  }
}
