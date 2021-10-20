import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { TestComponent } from './pages/test/test.component';
import { ConsumptionReportComponent } from './pages/consumption-report/consumption-report.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransportationReportComponent } from './pages/transportation-report/transportation-report.component';
import { WarehouseManagerComponent } from './pages/warehouse-manager/warehouse-manager.component';
import { WarehouseReportComponent } from './pages/warehouse-report/warehouse-report.component';
const routes: Routes = [
  {
    path: '',
    component:AdminLayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'configuration',
        component:ConfigurationComponent
      },
      {
        path:'consumption-report',
        component:ConsumptionReportComponent
      },
      {
        path:'transportation-report',
        component:TransportationReportComponent
      },
      {
        path:'warehouse-manager',
        component:WarehouseManagerComponent
      },
      {
        path:'warehouse-report',
        component:WarehouseReportComponent
      },
      {
        path:'test',
        component:TestComponent
      },
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
