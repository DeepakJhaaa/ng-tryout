import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShoppingBagService {
  shoppingItems: any;
  private cartUrl = '/assets/data/products.json';

  constructor(private httpClient: HttpClient) { }

  getShoppingItems() {
    return this.httpClient.get(this.cartUrl);
  }
}
