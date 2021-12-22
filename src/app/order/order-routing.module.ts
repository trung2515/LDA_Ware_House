import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuOrderComponent } from './pages/menu-order/menu-order.component';
import { OrderRegistrationComponent } from './pages/order-registration/order-registration.component';
import { ResearchOrderComponent } from './pages/research-order/research-order.component';
const routes: Routes = [
  {
    path: '',
    component: MenuOrderComponent
  },

  {
    path: 'order-registration',
    component: OrderRegistrationComponent
  },
  {
    path: 'research-order',
    component: ResearchOrderComponent
  },


  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
