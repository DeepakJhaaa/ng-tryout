import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../common/shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  filters: any;
  constructor(private _shoppingService: ShoppingService) {}

  ngOnInit() {
    console.log('products-list ngInit called.');
    this._shoppingService.getProducts().subscribe(
      data => {
        console.log(data);
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );

    this._shoppingService.getFilters().subscribe(
      data => {
        console.log(data);
        this.filters = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  calculateDiscount(final, mrp) {
    let discount = (1 - final / mrp) * 100;
    discount = parseFloat(discount.toFixed(2));
    return discount;
  }
}
