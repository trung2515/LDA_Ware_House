import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './admin/login/login.component';
import { SharedModule } from './shared/shared.module';
import { FormsMineralModule } from './forms-mineral/forms-mineral.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AdminModule,
    FormsMineralModule,
    SharedModule
    // GrpcCoreModule.forRoot(),
  ]
})
export class AppModule { }
