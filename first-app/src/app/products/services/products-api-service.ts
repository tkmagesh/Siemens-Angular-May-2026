import { Injectable, signal } from "@angular/core";
import { Product } from "../models/Product";
import { IProductsService } from "./Iproducts-services";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsAPIService {
    

    constructor(private httpClient: HttpClient){

    }

    categories = new Set<string>()

    getAll() : Observable<Product[]> {
        return this.httpClient
            .get<Product[]>('http://localhost:3000/products')
    }
}