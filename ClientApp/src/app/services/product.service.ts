import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product'
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {


    products: Observable<Product[]>

    productUrl: string = 'https://localhost:44345/api/Product/GetProducts';
    constructor(private http: HttpClient) { }


    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.productUrl}`);
    }

}
