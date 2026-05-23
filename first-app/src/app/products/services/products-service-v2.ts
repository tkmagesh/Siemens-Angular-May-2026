import { Injectable, signal } from "@angular/core";
import { Product } from "../models/Product";
import { ProductsService } from "./products-service";
import { IProductsService } from "./Iproducts-services";

// Using Interfaces for abstraction
/* 
@Injectable({
    providedIn : 'root'
})
export class ProductsServiceV2 implements IProductsService {
    products = signal<Product[]>([
        // Electronics & Gadgets
        { id: "prod-001", name: "QuantumX Wireless Earbuds", category: "Electronics" },
        { id: "prod-002", name: "SonicWave Bluetooth Speaker", category: "Electronics" },
        { id: "prod-003", name: "ApexCharge Power Bank", category: "Electronics" },
        { id: "prod-004", name: "TitanView 4K Monitor", category: "Electronics" },
        { id: "prod-005", name: "AeroGlide Wireless Mouse", category: "Electronics" }
    ])

    categories = new Set(['Stationary', 'Utencils'])

    addNew(newProduct : Product){
        newProduct.id = `prod-${this.products().length + 1}`
        this.products.update(list => [...list, newProduct])
    }
} */

// Using Inheritence for abstraction
@Injectable({
    providedIn: 'root'
})
export class ProductsServiceV2 extends ProductsService {

    override products = signal<Product[]>([
        // Electronics & Gadgets
        { id: "prod-001", name: "QuantumX Wireless Earbuds", category: "Electronics" },
        { id: "prod-002", name: "SonicWave Bluetooth Speaker", category: "Electronics" },
        { id: "prod-003", name: "ApexCharge Power Bank", category: "Electronics" },
        { id: "prod-004", name: "TitanView 4K Monitor", category: "Electronics" },
        { id: "prod-005", name: "AeroGlide Wireless Mouse", category: "Electronics" }
    ])

    override categories = new Set(['Stationary', 'Utencils'])

    // below code commented to use the base implemetation of ProductsService
    /* addNew(newProduct: Product) {
        newProduct.id = `prod-${this.products().length + 1}`
        this.products.update(list => [...list, newProduct])
    } */
}