import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPackagingFiftyComponent } from './pages/add-packaging-fifty/add-packaging-fifty.component';
import { AddPackagingOneComponent } from './pages/add-packaging-one/add-packaging-one.component';
import { MenuConfirmComponent } from './pages/menu-confirm/menu.component';
import { OrderRegistrationComponent } from './pages/order-registration/order-registration.component';
import { ResearchOrderComponent } from './pages/research-order/research-order.component';
const routes: Routes = [
  {
    path: '',
    component: MenuConfirmComponent
  },
  {
    path: 'registration',
    component: MenuConfirmComponent
  },

  {
    path: 'order-registration',
    component: OrderRegistrationComponent
  },
  {
    path: 'research-order',
    component: ResearchOrderComponent
  },

  {
    path: 'registration/add-packaging-one',
    component: AddPackagingOneComponent
  },
  {
    path: 'registration/add-packaging-fifty',
    component: AddPackagingFiftyComponent
  },

  { path: '**', pathMatch: 'full', redirectTo: 'registration' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingUnitRoutingModule {}
