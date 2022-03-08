import { SharedModule } from './../shared/shared.module'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuOrderComponent } from './pages/menu-order/menu-order.component'
import { ResearchOrderComponent } from './pages/research-order/research-order.component'
import { OrderRegistrationComponent } from './pages/order-registration/order-registration.component'
import { HeaderBarComponent } from './pages/components/header-bar/header-bar.component'
import { OrderRoutingModule } from './order-routing.module';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [
    HeaderBarComponent,
    MenuOrderComponent,
    ResearchOrderComponent,
    OrderRegistrationComponent,
    RegistrationComponent,
   
  ],
  imports: [CommonModule, OrderRoutingModule, SharedModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class OrderModule {}
