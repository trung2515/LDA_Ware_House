import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ToolPageComponent } from './pages/tool-page/tool-page.component'
const routes: Routes = [
  {
    path: 'tool-page',
    data: {
      breadcrumb: 'Tool',
    },
    component: ToolPageComponent,
  },
 
  { path: '**', pathMatch: 'full', redirectTo: 'tool-page' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsMineralRoutingModule {}
