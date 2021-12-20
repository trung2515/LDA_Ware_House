import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOrderComponent } from './pages/menu-order/menu-order.component';
import { ResearchOrderComponent } from './pages/research-order/research-order.component';
import { OrderRegistrationComponent } from './pages/order-registration/order-registration.component';
import { HeaderBarComponent } from './pages/components/header-bar/header-bar.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [
    HeaderBarComponent,
    MenuOrderComponent,
    ResearchOrderComponent,
    OrderRegistrationComponent
  ],
  imports: [CommonModule, OrderRoutingModule, SharedModule]
})
export class OrderModule {}
