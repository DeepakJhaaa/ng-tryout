import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

export interface DetailsModel {
  title: any;
  product: any;
}

@Component({
  selector: 'app-modal-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent
  implements DetailsModel {
  title: string;
  product: any;
  constructor(modalService: BsModalService) { }
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
