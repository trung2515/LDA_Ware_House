import {
  ConfirmProductionResponse,
  OrderInfo,
  OrderReply,
  OrderResponse,
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
    private warehouseClient: WareHouseClient
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

  reportOrders(fromDate: string, toDate: string, orderCode: string) {
    let request: MasterRequest = new MasterRequest()
    request.fromDate = fromDate
    request.toDate = toDate
    request.userName = this.authService.getUser().user
    return this.reportClient.getReportOrder(request).pipe(
      map((reply: OrderReply) => {
        return reply.response.state == ResponseState.SUCCESS ? reply.orders : []
      }),
    )
  }

  reportErrorBag(fromDate: string, toDate: string) {
    let request: MasterRequest = new MasterRequest()
    request.fromDate = fromDate
    request.toDate = toDate
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
}
