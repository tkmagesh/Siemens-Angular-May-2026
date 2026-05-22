import { Component, input, output, signal } from "@angular/core";
import { Product } from "../models/Product";

@Component({
    selector : 'app-product-editor',
    template : `
        <div class="product-section">
            <h3>Add New</h3>
            <label>Product Name :</label>
            <input
                type="text"
                [value]="newProduct().name"
                (input)="onNewProductNameInput($any($event.target).value)"
            >
            <label> Category :</label>
            <select (input)="onNewProductCategoryInput($any($event.target).value)">
                <option value="" [selected]="newProduct().category === ''">-- Select --</option>
                @for (category of categories(); track category) {
                    <option [value]=category [selected]="newProduct().category === category">{{category}}</option>
                }
            </select>
            <button (click)="onAddClick()">Add</button>
            <button (click)="onClearClick()">Clear</button>
        </div>
    `,
    styles: [`.product-section {
        border: 1px solid gray;
        padding: 10px;
        width: 100%;
        margin-bottom: 20px;
    }`],
    imports : []
})
export class ProductEditor {
    newProduct = signal<Product>({ id: '', name: '', category: '' })

    categories = input<Set<string>>(new Set())

    create = output<Product>()

    onClearClick(){
        this.newProduct.update(() => ({ id: '', name: '', category: '' }))
    }

    onNewProductNameInput(newProductName : string){
        this.newProduct.update(p => ({ ...p, name: newProductName }))
    }

    onNewProductCategoryInput(newProductCategory: string) {
        this.newProduct.update(p => ({ ...p, category: newProductCategory }))
    }

    onAddClick() {
        this.create.emit(this.newProduct())
    }

}