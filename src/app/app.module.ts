import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { FormsMineralModule } from './forms-mineral/forms-mineral.module';
import { ShippingUnitRoutingModule } from './shipping-unit/shipping-unit-routing.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AdminModule,
    FormsMineralModule,
    ShippingUnitRoutingModule,
    LoginModule,
    BrowserAnimationsModule
    // GrpcCoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
