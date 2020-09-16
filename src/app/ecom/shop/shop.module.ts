import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShoppingBagService } from './common/shopping.service';
import { ShoppingService } from './common/shop.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditComponent } from './common/modal/edit.component';
import { DetailsComponent } from './common/modal/details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ShopRoutingModule,
    ModalModule
  ],
  declarations: [
    ShoppingComponent,
    EditComponent,
    DetailsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  providers: [ShoppingService, ShoppingBagService],
  entryComponents: [EditComponent, DetailsComponent],
  bootstrap: [ShoppingComponent]
})
export class ShoppingModule { }
