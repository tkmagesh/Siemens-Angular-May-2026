import { SlicePipe } from "@angular/common";
import { Component, computed, input, signal } from "@angular/core";
import { Product } from "../models/Product";

@Component({
    selector : 'app-products-list',
    template : `
        <div class="product-section">
            <div>
                <label >Filter by Category</label>
                <select (input)="selectedCategory.set($any($event.target).value)">
                    <option value="">-- Select --</option>
                    @for (category of categories(); track category) {
                        <option [value]=category>{{category}}</option>
                    }
                </select>
            </div>

            <ul>
                @for (product of (productNames() | slice:pageStart():pageEnd()); track product.id){
                    <li>{{product.name}} - [{{product.category}}]</li>
                }
            </ul>
            <div>Page # : {{currPage()}}, Total Pages : {{totalPages()}}</div>
            <label>Page Size :</label>
            <select (input)="pageSize.set($any($event.target).value)">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>

            <button [disabled]="currPage() === 1" (click)="currPage.set(currPage() - 1)">Prev</button>
            <button [disabled]="currPage() === totalPages()" (click)="currPage.set(currPage() + 1)">Next</button>
        </div>
    `,
    styles: [`.product-section {
        border: 1px solid gray;
        padding: 10px;
        width: 100%;
        margin-bottom: 20px;
    }`],
    imports : [SlicePipe]
})
export class ProductsList {

    list = input<Product[]>([])
    categories = input<Set<string>>(new Set())
    selectedCategory = signal('')

    productNames = computed(() =>
        this.selectedCategory() !== ''
            ? this.list().filter(p => p.category === this.selectedCategory())
            : this.list()
    );

    


    // pagination
    currPage = signal(1)
    pageSize = signal(10);
    totalPages = computed(() => this.productNames().length % this.pageSize() === 0 ? Math.floor(this.productNames().length / this.pageSize()) : Math.floor(this.productNames().length / this.pageSize()) + 1)
    pageStart = computed(() => ((this.currPage() - 1) * this.pageSize()))
    pageEnd = computed(() => (this.currPage() * this.pageSize()) - 1)

}