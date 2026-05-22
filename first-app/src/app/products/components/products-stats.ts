import { KeyValuePipe } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import { Product } from "../models/Product";

@Component({
    selector : 'app-products-stats',
    template : `
        <div class="product-section">
            <h3>
                Product Stats
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Category </th>
                        <th>Products #</th>
                    </tr>
                </thead>
                <tbody>
                    @for (pStat of stats() | keyvalue; track pStat.key) {
                    <tr>
                        <td>{{pStat.key}}</td>
                        <td>{{pStat.value}}</td>
                    </tr>
                }

                </tbody>
            </table>
        </div>
    `,
    styles: [`.product-section {
        border: 1px solid gray;
        padding: 10px;
        width: 100%;
        margin-bottom: 20px;
    }`],
    imports : [KeyValuePipe]
})
export class ProductsStats {
    products = input<Product[]>([])

    stats = computed(() => this.products().reduce<Record<string, number>>((stats, p) => ({ ...stats, [p.category]: !stats[p.category] ? 1 : stats[p.category] + 1 }), {}))
}