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

import { ConfigurationLayoutComponent } from './layouts/configuration-layout/configuration-layout.component';
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
ReasonComponent
JobComponent
BillComponent
const routes: Routes = [
  {
    path: '',
    component:AdminLayoutComponent,
    children:[
      { path:'dashboard',               component:DashboardComponent  },
      { path:'consumption-report',      component:ConsumptionReportComponent   },
      { path:'transportation-report',   component:TransportationReportComponent    },
      { path:'warehouse-manager',       component:WarehouseManagerComponent     },
      { path:'warehouse-report',        component:WarehouseReportComponent      },
      { path:'test',                    component:TestComponent  },
    ]
  },
  {
    path: 'configuration',
    component:ConfigurationLayoutComponent,
    children:[
      { path:'product-category',        component:ProductCategoryComponent  },
      { path:'type-bag',                component:TypeBagComponent     },
      { path:'id-bag',                  component:IdBagComponent   },
      { path:'warehouse-category',      component:WarehouseCategoryComponent    },
      { path:'partner',                 component:PartnerComponent     },
      { path:'packet-unit',             component:PacketUnitComponent      },
      { path:'device-category',         component:DeviceCategoryComponent  },
      { path:'bill',                    component:BillComponent  },
      { path:'job',                     component:JobComponent  },
      { path:'reason',                  component:ReasonComponent  },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
