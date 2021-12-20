import { SharedModule } from './shared/shared.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { FormsMineralModule } from './forms-mineral/forms-mineral.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShippingUnitModule } from './shipping-unit/shipping-unit.module';

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
    ShippingUnitModule,
    LoginModule,
    // GrpcCoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]

})
export class AppModule { }
