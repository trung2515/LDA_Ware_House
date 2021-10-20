import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DevExtremeModule, DxPopupModule,DxSelectBoxModule  } from 'devextreme-angular';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WarehouseReportComponent } from './pages/warehouse-report/warehouse-report.component';
import { ConsumptionReportComponent } from './pages/consumption-report/consumption-report.component';
import { TransportationReportComponent } from './pages/transportation-report/transportation-report.component';
import { WarehouseManagerComponent } from './pages/warehouse-manager/warehouse-manager.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { TestComponent } from './pages/test/test.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    WarehouseReportComponent,
    ConsumptionReportComponent,
    TransportationReportComponent,
    WarehouseManagerComponent,
    ConfigurationComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DevExtremeModule,
    DxPopupModule,
    DxSelectBoxModule

  ]
})
export class AdminModule { }
