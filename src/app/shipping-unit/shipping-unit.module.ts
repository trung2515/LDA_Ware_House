import { AddPackagingFiftyComponent } from './pages/add-packaging-fifty/add-packaging-fifty.component';
import { ShippingUnitComponent } from './shipping-unit.component';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { FormsModule } from '@angular/forms';
import { ShippingUnitRoutingModule } from './shipping-unit-routing.module';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ShippingUnitService } from './services/shipping-unit-service.service';
import { AddPackagingOneComponent } from './pages/add-packaging-one/add-packaging-one.component';
import { EditingPackagingInfoComponent } from './pages/editing-packaging-info/editing-packaging-info.component';
import { ListTypeOneComponent } from './pages/list-type-one/list-type-one.component';
import { ListTypeFiftyComponent } from './pages/list-type-fifty/list-type-fifty.component';
import { OptionStatusComponent } from './components/option-status/option-status.component';
import { OptionItemComponent } from './components/option-item/option-item.component';

@NgModule({
  declarations: [
    ShippingUnitComponent,
    HeaderBarComponent,
    AddPackagingOneComponent,
    AddPackagingFiftyComponent,
    EditingPackagingInfoComponent,
    ListTypeOneComponent,
    ListTypeFiftyComponent,
    OptionStatusComponent,
    OptionItemComponent
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
