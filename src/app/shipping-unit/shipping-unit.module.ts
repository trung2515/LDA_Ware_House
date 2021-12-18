import { AddPackagingFiftyComponent } from './pages/add-packaging-fifty/add-packaging-fifty.component';
import { ShippingUnitComponent } from './shipping-unit.component';
import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { FormsModule } from '@angular/forms';
import { ShippingUnitRoutingModule } from './shipping-unit-routing.module';
import { ResearchOrderComponent } from './pages/research-order/research-order.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ShippingUnitService } from './services/shipping-unit-service.service';
import { OrderRegistrationComponent } from './pages/order-registration/order-registration.component';
import { AddPackagingOneComponent } from './pages/add-packaging-one/add-packaging-one.component';
import { EditingPackagingInfoComponent } from './pages/editing-packaging-info/editing-packaging-info.component';
@NgModule({
  declarations: [
    ShippingUnitComponent,
    ResearchOrderComponent,
    HeaderBarComponent,
    OrderRegistrationComponent,
    AddPackagingOneComponent,
    AddPackagingFiftyComponent,
    EditingPackagingInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // FormsMineralRoutingModule,
    ShippingUnitRoutingModule,
    SharedModule,
  ],
  providers: [ShippingUnitService],
})
export class ShippingUnitModule { }
