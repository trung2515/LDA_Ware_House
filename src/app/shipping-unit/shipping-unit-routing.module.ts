import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPackagingFiftyComponent } from './pages/add-packaging-fifty/add-packaging-fifty.component';
import { AddPackagingOneComponent } from './pages/add-packaging-one/add-packaging-one.component';
import { ListTypeFiftyComponent } from './pages/list-type-fifty/list-type-fifty.component';
import { ListTypeOneComponent } from './pages/list-type-one/list-type-one.component';
import { MenuConfirmComponent } from './pages/menu-confirm/menu.component';
const routes: Routes = [
  {
    path: '',
    component: MenuConfirmComponent
  },

  {
    path: 'add-packaging-one',
    component: AddPackagingOneComponent
  },
  {
    path: 'list-packaging-one',
    component: ListTypeOneComponent
  },
  {
    path: 'add-packaging-fifty',
    component: AddPackagingFiftyComponent
  },
  {
    path: 'list-packaging-fifty',
    component: ListTypeFiftyComponent
  },

  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingUnitRoutingModule {}
