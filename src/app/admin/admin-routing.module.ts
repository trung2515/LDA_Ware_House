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
      breadcrumb: 'Th???ng k??',
    },
    component: AdminLayoutComponent,
    children: [
      { path: '',   data: { breadcrumb: 'Th???ng k?? xu???t nh???p'},component: DashboardInpExpComponent },
      { path: 'dashboard-transport', data: { breadcrumb: 'Th???ng k?? v???n chuy???n'}, component: DashboardTransportComponent },
      ],
  },
  {
    path: 'configuration',
    data: {
      breadcrumb: 'C???u h??nh',
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
      breadcrumb: 'C???u h??nh t??i kho???n'
    },
    component: ConfigUserComponent,
 
  },
  {
    path: 'work-management',
    data: {
      breadcrumb: 'Qu???n l?? c??ng vi???c'
    },
    component: AdminLayoutComponent,
    children: [{ path: '', component: WorkflowManagementComponent }],
  },
  {
    path: 'warehouse-control',
    data: {
      breadcrumb: 'Qu???n l?? kho',
    },
    component: AdminLayoutComponent,
    children: [
      {
        path: 'shift',
        data: {
          breadcrumb: 'Ca l??m vi???c',
        },
        component: ShiftComponent,

      },
      {
        path: 'parcel',
        data: {
          breadcrumb: 'L?? h??ng',
        },
        component: ConsignmentManagementComponent,
      },

      { path: '**', pathMatch: 'full', redirectTo: 'shift' },
    ],
  },
  {
    path: 'report',
    data: {
      breadcrumb: 'B??o c??o',
    },
    component: AdminLayoutComponent,
    children: [
      {
        path: 'error-report',
        data: {
          breadcrumb: 'B??o c??o bao l???i',
        },
        component: ErrorBagComponent,
      },
      {
        path: 'transportation-report1',
        data: {
          breadcrumb: 'B??o c??o v???n chuy???n',
        },
        component: TransportationReportComponent,
      },
      {
        path: 'warehouse-report',
        data: {
          breadcrumb: 'B??o c??o s???n l?????ng ????ng bao',
        },
        component: WarehouseReportComponent,
      },
      {
        path: 'consumption-report',
        data: {
          breadcrumb: 'Nh???p xu???t t???n s???n ph???m',
        },
        component: ConsumptionReportComponent,
      },
      {
        path: 'order-report',
        data: {
          breadcrumb: 'B??o c??o ????n h??ng',
        },
        component: OrderComponent,
      },
      {
        path: 'import-report',
        data: {
          breadcrumb: 'B??o c??o nh???p kho',
        },
        component: ImportWareHouseComponent,
      }, 
      {
        path: 'export-report',
        data: {
          breadcrumb: 'B??o c??o xu???t kho',
        },
        component: ExportWareHouseComponent,
      },
      {
        path: 'transportation-report',
        data: {
          breadcrumb: 'B??o c??o v???n chuy???n',
        },
        component:TransportationComponent ,
      }, 
      {
        path: 'inventory-report',
        data: {
          breadcrumb: 'B??o c??o t???n kho',
        },
        component:ReportInventoryComponent ,
      },
      {
        path: 'newerror-report',
        data: {
          breadcrumb: 'B??o c??o l???i',
        },
        component:ErrorReportComponent ,
      },
      {
        path: 'lot-report',
        data: {
          breadcrumb: 'B??o c??o l?? h??ng',
        },
        component:ReportLotComponent ,
      },
      {
        path: 'newOrder-report',
        data: {
          breadcrumb: 'B??o c??o ????n h??ng',
        },
        component:ReportOrderComponent ,
      },
      {
        path: 'transfer-report',
        data: {
          breadcrumb: 'B??o c??o ??i???u chuy???n',
        },
        component:ReportTransferComponent ,
      },
      {
        path: 'import-report-v2',
        data: {
          breadcrumb: 'B??o c??o nh???p kho v2',
        },
        component: ImportReportAdminComponent,
      }, 
      {
        path: 'export-report-v2',
        data: {
          breadcrumb: 'B??o c??o xu???t kho v2',
        },
        component: ExportReportAdminComponent,
      }, 
      {
        path: 'transport-report-v2',
        data: {
          breadcrumb: 'B??o c??o v???n chuy???n v2',
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
