import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from './../common/modal/details.component';
import { EditComponent } from './../common/modal/edit.component';
import { ShoppingService } from './../common/shop.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingItems: any;
  confirmResult: any;
  productsInCart: any;
  products: any;
  p_price: any;
  quantity: Number = 1;

  constructor(
    public modalService: BsModalService,
    private _shoppingService: ShoppingService
  ) { }

  ngOnInit() {
    this._shoppingService.getProductsInCart().subscribe(
      data => {
        console.log('Cart Component');
        console.log(data);
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
    this.getShoppingBagItems();
  }

  // ngOnChanges() {
  //   this.getCheckout();
  // }
  getShoppingBagItems() {
    // this._shoppingService.getShoppingItems().subscribe(shoppingItems => {
    //   this.shoppingItems = shoppingItems;
    //   this.getCheckout();
    // });
  }

  addItem(product) {
    // this.modalService.show(DetailsComponent,
    //   {
    //     title: 'Add to Bag',
    //     product: product
    //   }
    // )
    //   .subscribe(isConfirmed => {
    //     // Get dialog result
    //     this.confirmResult = isConfirmed;
    //   });
  }

  editItem(product) {
    // this.dialogService
    //   .addDialog(
    //     EditComponent,
    //     {
    //       title: 'Edit Product',
    //       product: product
    //     },
    //     {
    //       backdropColor: 'rgba(238, 238, 238, .9)'
    //     }
    //   )
    //   .subscribe(isConfirmed => {
    //     // Get dialog result
    //     this.confirmResult = isConfirmed;
    //   });
  }

  deleteItem(products) {
    console.log(products);
  }
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
