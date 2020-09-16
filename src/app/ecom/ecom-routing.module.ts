import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcomComponent } from './ecom.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: EcomComponent,
    children: [
      {
        path: 'shop',
        loadChildren: () => import('./shop/shop.module').then((m) => m.ShoppingModule),
        pathMatch: 'full'
      },
      {
        path: 'store',
        loadChildren: () => import('./store/store.module').then((m) => m.StoreModule),
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcomRoutingModule { }
