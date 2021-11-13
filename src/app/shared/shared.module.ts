import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { TextInputComponent } from './_forms/text-input/text-input.component'
import { NgxSpinnerModule } from 'ngx-spinner'
import { NgxLocalStorageModule } from 'ngx-localstorage'
import { NgxDropzoneModule } from 'ngx-dropzone'
import {
  DxChartModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxPivotGridModule,
  DxSelectBoxModule,
} from 'devextreme-angular'
import { FooterComponent } from './component/footer/footer.component'

@NgModule({
  declarations: [TextInputComponent, FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgxSpinnerModule,
    NgxLocalStorageModule.forRoot(),
    NgxDropzoneModule,
    DxPivotGridModule,
    DxDateBoxModule,
    DxDataGridModule,
    DxChartModule,
    DxSelectBoxModule,
  ],
  exports: [
    ToastrModule,
    PaginationModule,
    ReactiveFormsModule,
    BsDropdownModule,
    BsDatepickerModule,
    ModalModule,
    TabsModule,
    NgxSpinnerModule,
    NgxDropzoneModule,
    DxPivotGridModule,
    DxDateBoxModule,
    DxDataGridModule,
    DxChartModule,
    DxSelectBoxModule,
    NgxLocalStorageModule,

    //Component
    FooterComponent,
    TextInputComponent,
  ],
})
export class SharedModule {}
