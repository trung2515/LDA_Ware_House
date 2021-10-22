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
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { TypeBagComponent } from './components/type-bag/type-bag.component';
import { IdBagComponent } from './components/id-bag/id-bag.component';
import { WarehouseCategoryComponent } from './components/warehouse-category/warehouse-category.component';
import { PartnerComponent } from './components/partner/partner.component';
import { PacketUnitComponent } from './components/packet-unit/packet-unit.component';
import { DeviceCategoryComponent } from './components/device-category/device-category.component';
import { BillComponent } from './components/bill/bill.component';
import { JobComponent } from './components/job/job.component';
import { ReasonComponent } from './components/reason/reason.component';
import { ConfigurationLayoutComponent } from './layouts/configuration-layout/configuration-layout.component';


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
    TestComponent,
    ProductCategoryComponent,
    TypeBagComponent,
    IdBagComponent,
    WarehouseCategoryComponent,
    PartnerComponent,
    PacketUnitComponent,
    DeviceCategoryComponent,
    BillComponent,
    JobComponent,
    ReasonComponent,
    ConfigurationLayoutComponent
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