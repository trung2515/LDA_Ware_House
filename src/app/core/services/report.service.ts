import { ReportInventoryResponse } from './../models/model.pb';
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { AdministratorClient, ReportClient } from '../models/admin.pbsc'
import {
  CardDetailResponse,
  ResponseState,
  MasterRequest,
  TransportResponse,
} from '../models/model.pb'

@Injectable()
export class ReportService {
  constructor(private reportClient: ReportClient) {}
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

  reportWarehouse(){
    let request: MasterRequest = new MasterRequest()
    request.userName = 'stvg'
    return this.reportClient.getReportInventory(request).pipe(
      map((reply: ReportInventoryResponse) => {
        console.log(reply.data)
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }),
    )
  }
}
