import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'
import { ConfigurationComponent } from './pages/configuration/configuration.component'
import { TestComponent } from './pages/test/test.component'
import { ConsumptionReportComponent } from './pages/consumption-report/consumption-report.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { TransportationReportComponent } from './pages/transportation-report/transportation-report.component'
import { WarehouseManagerComponent } from './pages/warehouse-manager/warehouse-manager.component'
import { WarehouseReportComponent } from './pages/warehouse-report/warehouse-report.component'
import { ShiftComponent } from './pages/shift/shift.component'
import { ConfigurationLayoutComponent } from './layouts/configuration-layout/configuration-layout.component'
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
import { ParcelComponent } from './pages/parcel/parcel.component'
import { LoginComponent } from './login/login.component'
ReasonComponent
JobComponent
BillComponent
const routes: Routes = [
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Thống kê',
    },
    component: AdminLayoutComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
  {
    path: 'configuration',
    data: {
      breadcrumb: 'Cài đặt hệ thống',
    },
    component: ConfigurationLayoutComponent,
    children: [
      { path: 'product-category', component: ProductCategoryComponent },
      { path: 'type-bag', component: TypeBagComponent },
      { path: 'id-bag', component: IdBagComponent },
      { path: 'warehouse-category', component: WarehouseCategoryComponent },
      { path: 'partner', component: PartnerComponent },
      { path: 'packet-unit', component: PacketUnitComponent },
      { path: 'device-category', component: DeviceCategoryComponent },
      { path: 'bill', component: BillComponent },
      { path: 'job', component: JobComponent },
      { path: 'reason', component: ReasonComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'product-category' },
    ],
  },
  {
    path: 'warehouse-control',
    data: {
      breadcrumb: 'Quản lý kho',
    },
    component: AdminLayoutComponent,
    children: [
      {
        path: 'shift',
        data: {
          breadcrumb: 'Ca làm việc',
        },
        component: ShiftComponent,
      },
      {
        path: 'parcel',
        data: {
          breadcrumb: 'Lô hàng',
        },
        component: ParcelComponent,
      },
      { path: '**', pathMatch: 'full', redirectTo: 'shift' },
    ],
  },
  {
    path: 'report',
    data: {
      breadcrumb: 'Báo cáo',
    },
    component: AdminLayoutComponent,
    children: [
      {
        path: 'consumption-report',
        data: {
          breadcrumb: 'Báo cáo nhập xuất',
        },
        component: ConsumptionReportComponent,
      },
      {
        path: 'transportation-report',
        data: {
          breadcrumb: 'Báo cáo vận chuyển',
        },
        component: TransportationReportComponent,
      },
      {
        path: 'warehouse-report',
        data: {
          breadcrumb: 'Báo cáo kho',
        },
        component: WarehouseReportComponent,
      },
      { path: '**', pathMatch: 'full', redirectTo: 'warehouse-report' },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
