import {
  ConfirmProductionResponse,
  OrderInfo,
  OrderReply,
  OrderResponse,
  QRCodeResponse,
  ReportInventoryResponse,
} from './../models/model.pb'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import {
  AdministratorClient,
  CardClient,
  ReportClient,
  WareHouseClient,
} from '../models/admin.pbsc'
import {
  CardDetailResponse,
  ResponseState,
  MasterRequest,
  TransportResponse,
} from '../models/model.pb'
import { AuthService } from './auth.service'

@Injectable()
export class ReportService {
  constructor(
    private reportClient: ReportClient,
    private authService: AuthService,
    private cardClient: CardClient,
    private warehouseClient: WareHouseClient,
  ) { }
  reportInOut(fromDate: string, toDate: string) {
    let request: MasterRequest = new MasterRequest()
    request.fromDate = fromDate
    request.toDate = toDate
    request.userName = 'stvg'
    console.log(request)
    return this.reportClient.getReportImportExport(request).pipe(
      map((reply: CardDetailResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }

  reportTransport(fromDate: string, toDate: string) {
    let request: MasterRequest = new MasterRequest()
    request.fromDate = fromDate
    request.toDate = toDate
    request.userName = 'stvg'
    console.log(request)
    return this.reportClient.getReportTransport(request).pipe(
      map((reply: TransportResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }

  reportWarehouse() {
    let request: MasterRequest = new MasterRequest()
    request.userName = 'stvg'
    return this.reportClient.getReportInventory(request).pipe(
      map((reply: ReportInventoryResponse) => {
        console.log(reply)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }

  reportOrders(fromDate: string, toDate: string) {
    let request: MasterRequest = new MasterRequest()
    request.fromDate = fromDate
    request.toDate = toDate
    request.userName = this.authService.getUser().user
    return this.reportClient.getReportOrder(request).pipe(
      map((reply: OrderReply) => {
        console.log(reply.orders)
        return reply.response.state == ResponseState.SUCCESS ? reply.orders.filter(o => o.quantityActual != 0) : []
      }),
    )
  }

  reportErrorBag(fromDate: string, toDate: string) {
    let request: MasterRequest = new MasterRequest()
    request.fromDate = '2021-01-01'
    request.toDate = '2022-12-30'
    request.userName = this.authService.getUser().user
    return this.reportClient.getReportError(request).pipe(
      map((reply: CardDetailResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }

  report50kg(fromDate: string, toDate: string) {
    let request: MasterRequest = new MasterRequest()
    request.fromDate = fromDate
    request.toDate = toDate
    request.userName = this.authService.getUser().user
    return this.cardClient.getListCar50kg(request).pipe(
      map((reply: CardDetailResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }

  reportOnMachineBag(fromDate: string, toDate: string) {
    let request: MasterRequest = new MasterRequest()
    request.fromDate = fromDate
    request.toDate = toDate
    request.userName = this.authService.getUser().user
    return this.warehouseClient.getConfirmProduct(request).pipe(
      map((reply: ConfirmProductionResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }

  reportQrCode(fromDate: string, toDate: string) {
    let request: MasterRequest = new MasterRequest()
    request.fromDate = fromDate
    request.toDate = toDate
    request.userName = this.authService.getUser().user
    console.log(request)
    return this.reportClient.getReportQRCode(request).pipe(
      map((reply: QRCodeResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }

  reportTransportByCodeIn(code: string) {
    let request: MasterRequest = new MasterRequest()
    request.codeTransportIn = code
    return this.reportClient.getQRCodeByTransportIn(request).pipe(
      map((reply: QRCodeResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }

  reportTransportByCodeOut(code: string) {
    let request: MasterRequest = new MasterRequest()
    request.codeTransportOut = code
    return this.reportClient.getQRCodeByTransportOut(request).pipe(
      map((reply: QRCodeResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }

  reportOrderDetail(code: string) {
    let request: MasterRequest = new MasterRequest()
    request.codeOrder = code
    return this.reportClient.getQRCodeByOrder(request).pipe(
      map((reply: QRCodeResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }
}
