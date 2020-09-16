import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DetailsComponent } from './common/modal/details.component';
import { EditComponent } from './common/modal/edit.component';
import { ShoppingBagService } from './common/shopping.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShoppingComponent implements OnInit {
  shoppingItems: any;
  confirmResult: any;
  productsInCart: any;
  p_price: any;

  constructor(
    public _shoppingService: ShoppingBagService,
    public modalService: BsModalService
  ) {
    alert("Shopping");
  }

  ngOnInit() {
    // this.getShoppingBagItems();
  }

  ngOnChanges() {
    this.getCheckout();
  }
  getShoppingBagItems() {
    this._shoppingService.getShoppingItems().subscribe(shoppingItems => {
      this.shoppingItems = shoppingItems;
      this.getCheckout();
    });
  }

  addItem(product) {
    // this.modalService.show(DetailsComponent,
    //   {
    //     title: 'Add to Bag',
    //     product: product
    //   }
    // )
    //   .subscribe(isConfirmed => {
    //     this.confirmResult = isConfirmed;
    //   });
  }

  editItem(product) {
    // this.modalService.show(EditComponent,
    //   {
    //     title: 'Edit Product',
    //     product: product
    //   }
    // )
    //   .subscribe(isConfirmed => {
    //     // Get dialog result
    //     this.confirmResult = isConfirmed;
    //   });
  }
  /*
  // Funtionality SUBTOTAL is under getCheckout()
  // Functionality of Discount is under getCheckout()
  // Functionality of Estimated Toal is under getCheckout()
   */
  getCheckout() {
    const checkout = {
      discount: 0 as number,
      subtotal: 0 as number,
      numOfItem: 0 as number,
      total: 0 as number
    };

    for (let i = 0; i < this.shoppingItems.productsInCart.length; i++) {
      if (this.shoppingItems.productsInCart[i].p_price) {
        checkout.subtotal +=
          this.shoppingItems.productsInCart[i].p_price *
          this.shoppingItems.productsInCart[i].p_quantity;
        checkout.numOfItem += parseInt(
          this.shoppingItems.productsInCart[i].p_quantity,
          0
        );
      }
    }
    if (checkout.numOfItem === 3) {
      checkout.discount = checkout.subtotal - checkout.subtotal * 0.95;
    } else if (checkout.numOfItem >= 4 && checkout.numOfItem <= 10) {
      checkout.discount = checkout.subtotal - checkout.subtotal * 0.9;
    } else if (checkout.numOfItem > 10) {
      checkout.discount = checkout.subtotal - checkout.subtotal * 0.75;
    }
    checkout.total = checkout.subtotal - checkout.discount;
    return checkout;
  }
}
