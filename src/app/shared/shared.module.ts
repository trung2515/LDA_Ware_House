import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { NgxLocalStorageModule } from 'ngx-localstorage'
import { NgxDropzoneModule } from 'ngx-dropzone';
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
  DxToastModule,
  DxTreeListModule,
  DxValidationSummaryModule,
  DxValidatorModule
} from 'devextreme-angular';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { QRCodeModule } from 'angularx-qrcode';
import { SelectOptionComponent } from './_forms/select-option/select-option.component';
@NgModule({
  declarations: [TextInputComponent, FooterComponent, SelectOptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
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
    DxRangeSelectorModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    QRCodeModule,
    DxToastModule
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
    QRCodeModule,
    // SampleModule,
    //Component
    FooterComponent,
    TextInputComponent,
    SelectOptionComponent,
    DxToastModule
  ]
})
export class SharedModule {}
