import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

export interface EditModel {
  title: any;
  product: any;
}

@Component({
  selector: 'app-modal-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent {
  title: any;
  product: any;
  constructor(dialogService: BsModalService) {
    // super(dialogService);
  }

  confirm() {
    // on click on confirm button we set dialog result as true,
    // ten we can get dialog result from caller code
    this.product = this.product;
    // this.close();
  }
  cancel() {
    // this.result = false;
    // this.close();
  }
}
