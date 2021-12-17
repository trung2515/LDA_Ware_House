import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { FormsMineralModule } from './forms-mineral/forms-mineral.module';
import { ShippingUnitRoutingModule } from './shipping-unit/shipping-unit-routing.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AdminModule,
    FormsMineralModule,
    ShippingUnitRoutingModule,
    LoginModule,
    // GrpcCoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
