import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './admin/login/login.component'

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms-mineral/forms-mineral.module').then(
        (m) => m.FormsMineralModule,
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'forms',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
