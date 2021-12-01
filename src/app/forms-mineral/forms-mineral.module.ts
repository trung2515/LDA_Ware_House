import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsMineralRoutingModule } from './forms-mineral-routing.module'
import { SharedModule } from '../shared/shared.module'
import { ItemFormComponent } from './component/item-form/item-form.component'
import { ToolPageComponent } from './pages/tool-page/tool-page.component'
import { FormsMineralComponent } from './forms.component'
import { FormsService } from './services/forms-service.service'
import {FormsModule} from '@angular/forms';
import { PageMinutesComponent } from './pages/tool-page/page-minutes/page-minutes.component'
@NgModule({
  declarations: [ItemFormComponent, ToolPageComponent, FormsMineralComponent, PageMinutesComponent],
  imports: [
    CommonModule,
    FormsMineralRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [FormsService],
})
export class FormsMineralModule {}
