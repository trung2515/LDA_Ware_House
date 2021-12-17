import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { NgxLocalStorageModule } from 'ngx-localstorage'
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


@NgModule({
  declarations: [TextInputComponent, FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    TabsModule.forRoot(),
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
    // SampleModule,
  ],

  exports: [
    TabsModule,
    DxRangeSelectorModule,
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
    // SampleModule,
    //Component

    FormsModule,
    DxRangeSelectorModule,
    // SampleModule,
    //Component

    FooterComponent,
    TextInputComponent
  ],
})
export class SharedModule { }
