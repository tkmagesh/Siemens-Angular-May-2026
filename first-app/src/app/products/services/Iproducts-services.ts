import { WritableSignal } from "@angular/core";
import { Product } from "../models/Product";

export interface IProductsService {
    products : WritableSignal<Product[]>
    categories : Set<string>
    addNew : (newProduct: Product) => void
}