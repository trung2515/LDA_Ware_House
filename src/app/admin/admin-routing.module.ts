import { ErrorBagComponent } from './pages/error-bag-report/report/error-bag.component'
import { MenuConfirmComponent } from '../shipping-unit/pages/menu-confirm/menu.component'
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
import { ConsignmentManagementComponent } from './pages/consignment-management/consignment-management.component'
// import { MinuteManagerComponent } from './pages/minute-manager/minute-manager.component'
import { OrderRegistrationComponent } from '../order/pages/order-registration/order-registration.component'
import { WareHouseInventoryComponent } from './pages/warehouse-report-pda/report/warehouse-inventory.component'
import { OrderComponent } from './pages/order/report/order.component'
import { WorkflowManagementComponent } from './pages/workflow-management/workflow-management.component'
import { MinutesComponent } from './components/minutes/minutes.component';
import { LineComponent } from './components/line/line.component'
import { ImportWareHouseComponent } from './pages/report-component/import-ware-house/import-ware-house.component'
import { ExportWareHouseComponent } from './pages/report-component/import-ware-house/export-ware-house/export-ware-house.component'
import { UnloadUploadByDeviceComponent } from './pages/report-component/import-ware-house/transportation/unload-upload-by-device/unload-upload-by-device.component'
import { TransportationComponent } from './pages/report-component/import-ware-house/transportation/transportation.component'
import { ReportInventoryComponent } from './pages/report-component/report-inventory/report-inventory.component'
import { ErrorReportComponent } from './pages/report-component/error-report/error-report.component'
import { ReportLotComponent } from './pages/report-component/report-lot/report-lot.component'
import { ReportOrderComponent } from './pages/report-component/report-order/report-order.component'
import { ReportTransferComponent } from './pages/report-component/report-transfer/report-transfer.component'
import { ConfigUserComponent } from './pages/config-user/config-user.component'
import { ImportReportAdminComponent } from './pages/report-forAdmin-component/import-report-admin/import-report-admin.component'
import { ExportReportAdminComponent } from './pages/report-forAdmin-component/export-report-admin/export-report-admin.component'

import { TransportReportV2Component } from './pages/report-forAdmin-component/transport-report-v2/transport-report-v2.component'
import { DashboardInpExpComponent } from './pages/dashboard/dashboard-inp-exp/dashboard-inp-exp.component'
import { DashboardTransportComponent } from './pages/dashboard/dashboard-transport/dashboard-transport.component'


ReasonComponent
JobComponent
BillComponent
const routes: Routes = [
  { path: 'test', component: TestComponent },
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Thống kê',
    },
    component: AdminLayoutComponent,
    children: [
      { path: '',   data: { breadcrumb: 'Thống kê xuất nhập'},component: DashboardInpExpComponent },
      { path: 'dashboard-transport', data: { breadcrumb: 'Thống kê vận chuyển'}, component: DashboardTransportComponent },
      ],
  },
  {
    path: 'configuration',
    data: {
      breadcrumb: 'Cấu hình',
    },
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
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
          { path: 'minutes', component: MinutesComponent },
          { path: 'line', component:  LineComponent},
          { path: '**', pathMatch: 'full', redirectTo: 'product-category' },
      
        ],
        
      },
   
    ],
  },
  {
    path: 'config-user',
    data: {
      breadcrumb: 'Cấu hình tài khoản'
    },
    component: ConfigUserComponent,
 
  },
  {
    path: 'work-management',
    data: {
      breadcrumb: 'Quản lí công việc'
    },
    component: AdminLayoutComponent,
    children: [{ path: '', component: WorkflowManagementComponent }],
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
        component: ConsignmentManagementComponent,
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
        path: 'error-report',
        data: {
          breadcrumb: 'Báo cáo bao lỗi',
        },
        component: ErrorBagComponent,
      },
      {
        path: 'transportation-report1',
        data: {
          breadcrumb: 'Báo cáo vận chuyển',
        },
        component: TransportationReportComponent,
      },
      {
        path: 'warehouse-report',
        data: {
          breadcrumb: 'Báo cáo sản lượng đóng bao',
        },
        component: WarehouseReportComponent,
      },
      {
        path: 'consumption-report',
        data: {
          breadcrumb: 'Nhập xuất tồn sản phẩm',
        },
        component: ConsumptionReportComponent,
      },
      {
        path: 'order-report',
        data: {
          breadcrumb: 'Báo cáo đơn hàng',
        },
        component: OrderComponent,
      },
      {
        path: 'import-report',
        data: {
          breadcrumb: 'Báo cáo nhập kho',
        },
        component: ImportWareHouseComponent,
      }, 
      {
        path: 'export-report',
        data: {
          breadcrumb: 'Báo cáo xuất kho',
        },
        component: ExportWareHouseComponent,
      },
      {
        path: 'transportation-report',
        data: {
          breadcrumb: 'Báo cáo vận chuyển',
        },
        component:TransportationComponent ,
      }, 
      {
        path: 'inventory-report',
        data: {
          breadcrumb: 'Báo cáo tồn kho',
        },
        component:ReportInventoryComponent ,
      },
      {
        path: 'newerror-report',
        data: {
          breadcrumb: 'Báo cáo lỗi',
        },
        component:ErrorReportComponent ,
      },
      {
        path: 'lot-report',
        data: {
          breadcrumb: 'Báo cáo lô hàng',
        },
        component:ReportLotComponent ,
      },
      {
        path: 'newOrder-report',
        data: {
          breadcrumb: 'Báo cáo đơn hàng',
        },
        component:ReportOrderComponent ,
      },
      {
        path: 'transfer-report',
        data: {
          breadcrumb: 'Báo cáo điều chuyển',
        },
        component:ReportTransferComponent ,
      },
      {
        path: 'import-report-v2',
        data: {
          breadcrumb: 'Báo cáo nhập kho v2',
        },
        component: ImportReportAdminComponent,
      }, 
      {
        path: 'export-report-v2',
        data: {
          breadcrumb: 'Báo cáo xuất kho v2',
        },
        component: ExportReportAdminComponent,
      }, 
      {
        path: 'transport-report-v2',
        data: {
          breadcrumb: 'Báo cáo vận chuyển v2',
        },
        component: TransportReportV2Component,
      }, 
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
