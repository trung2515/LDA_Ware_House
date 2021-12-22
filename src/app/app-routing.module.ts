import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './admin/guards/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'forms',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./forms-mineral/forms-mineral.module').then(
        m => m.FormsMineralModule
      )
  },
  {
    path: 'shipper',
    loadChildren: () =>
      import('./shipping-unit/shipping-unit.module').then(
        m => m.ShippingUnitModule
      )
  },
  {
    path: 'order',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./order/order.module').then(
        m => m.OrderModule
      )
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
