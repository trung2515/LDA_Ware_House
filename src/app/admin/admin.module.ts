import { ErrorBagComponent } from './pages/error-bag-report/report/error-bag.component';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  DevExtremeModule,
  DxPopupModule,
  DxSelectBoxModule,
} from 'devextreme-angular'
import { AdminRoutingModule } from './admin-routing.module'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { WarehouseReportComponent } from './pages/warehouse-report/warehouse-report.component'
import { ConsumptionReportComponent } from './pages/consumption-report/consumption-report.component'
import { TransportationReportComponent } from './pages/transportation-report/transportation-report.component'
import { WarehouseManagerComponent } from './pages/warehouse-manager/warehouse-manager.component'
import { ConfigurationComponent } from './pages/configuration/configuration.component'
import { TestComponent } from './pages/test/test.component'
import { ProductCategoryComponent } from './components/product-category/product-category.component'
import { TypeBagComponent } from './components/type-bag/type-bag.component'
import { IdBagComponent } from './components/id-bag/id-bag.component'
import { WarehouseCategoryComponent } from './components/warehouse-category/warehouse-category.component'
import { PartnerComponent } from './components/partner/partner.component'
import { PacketUnitComponent } from './components/packet-unit/packet-unit.component'
import { DeviceCategoryComponent } from './components/device-category/device-category.component'
import { BillComponent } from './components/bill/bill.component'
import { JobComponent } from './components/job/job.component'
import { ReasonComponent } from './components/reason/reason.component'
import { ConfigurationLayoutComponent } from './layouts/configuration-layout/configuration-layout.component'
import { ShiftComponent } from './pages/shift/shift.component'
import { ConsignmentManagementComponent } from './pages/consignment-management/consignment-management.component'
import { HeaderReportComponent } from './components/header-report/header-report.component'
import { SharedModule } from '../shared/shared.module'
import { CoreModule } from '../core/core.module'
import { BarCharComponent } from './pages/dashboard/components/bar-char/bar-char.component'
import { LineCharComponent } from './pages/dashboard/components/line-char/line-char.component'
import { CardComponent } from './pages/dashboard/component/card.component'
import { BreadcrumbComponent } from './layouts/breadcrumb/breadcrumb.component'
import { FilterBarDashboardComponent } from './pages/dashboard/components/filter-bar-dashboard/filter-bar-dashboard.component'
import { MenuConfirmComponent } from '../shipping-unit/pages/menu-confirm/menu.component'
import { ShiftService } from './pages/shift/services/shift.service'
import { WareHouseInventoryComponent } from './pages/warehouse-report-pda/report/warehouse-inventory.component'
import { OrderComponent } from './pages/order/report/order.component'
import { WorkflowManagementComponent } from './pages/workflow-management/workflow-management.component';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent,
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
    ConfigurationLayoutComponent,
    ShiftComponent,
    ConsignmentManagementComponent,
    HeaderReportComponent,
    FilterBarDashboardComponent,
    BarCharComponent,
    LineCharComponent,
    BreadcrumbComponent,
    MenuConfirmComponent,
    WareHouseInventoryComponent,
    OrderComponent,
    ErrorBagComponent,
    WorkflowManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [ShiftService],
})
export class AdminModule {}
