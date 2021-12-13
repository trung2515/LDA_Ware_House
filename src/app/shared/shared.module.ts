import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToastrModule } from 'ngx-toastr'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TextInputComponent } from './_forms/text-input/text-input.component'
import { NgxSpinnerModule } from 'ngx-spinner'
// import { NgxLocalStorageModule } from 'ngx-localstorage'
import { NgxDropzoneModule } from 'ngx-dropzone'
import {
  DxButtonModule,
  DxChartModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxFormModule,
  DxPivotGridModule,
  DxPopupModule,
  DxRangeSelectorModule,
  DxSchedulerModule,
  DxSelectBoxModule,
  DxTabPanelModule,
  DxTextAreaModule,
  DxTreeListModule,
} from 'devextreme-angular'
import { FooterComponent } from './component/footer/footer.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxLocalStorageModule } from 'ngx-localstorage'
@NgModule({
  declarations: [TextInputComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "bottom-right"
    }),
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
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxPopupModule,
    DxSchedulerModule,
    DxButtonModule,
    DxTabPanelModule,
    DxTreeListModule,
    DxRangeSelectorModule
    // SampleModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    PaginationModule,
    BsDropdownModule,
    BsDatepickerModule,
    ModalModule,
    NgxSpinnerModule,
    NgxDropzoneModule,
    DxPivotGridModule,
    DxDateBoxModule,
    DxDataGridModule,
    DxChartModule,
    DxSelectBoxModule,
    NgxLocalStorageModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxPopupModule,
    DxSchedulerModule,
    DxButtonModule,
    DxTabPanelModule,
    DxTreeListModule,
    DxRangeSelectorModule,
    // SampleModule,
    //Component


    FooterComponent,
    TextInputComponent
  ],
})
export class SharedModule { }
