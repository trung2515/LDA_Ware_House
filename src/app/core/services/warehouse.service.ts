import { ConfirmProduction1000Info, InsertParcelRequest, ParcelDetailInfo, ParcelDetailResponse, ConfirmProductionResponse } from './../models/model.pb';
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { WareHouseClient } from "../models/admin.pbsc";
import { MasterRequest, ParcelResponse, ResponseState } from "../models/model.pb"
import { AuthService } from "./auth.service";
import { ParcelDetailModel, ParcelModel } from 'src/app/admin/pages/consignment-management/models';
import Utils from 'src/app/_lib/utils';

@Injectable()
export class WareHouseService {
  constructor(
    private warehouseClient: WareHouseClient,
    private authService: AuthService
  ) { }
  getListParcel(fromDate: string = '2021-01-01', toDate: string = '') {
    let req: MasterRequest = new MasterRequest()
    req.fromDate = fromDate
    if (toDate != '')
      req.toDate = toDate
    else req.toDate = Utils.formatDate(new Date(Date.now()))
    console.log(req)
    return this.warehouseClient.getListParcel(req).pipe(
      map((reply: ParcelResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }

  getListParcelDetailByCode(codeParcel: string) {
    let req: MasterRequest = new MasterRequest()
    req.codeParcel = codeParcel
    return this.warehouseClient.getListParcelDetailByCode(req).pipe(
      map((reply: ParcelDetailResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }
  update1000Kg(data: ConfirmProduction1000Info) {
    return this.warehouseClient.updateConfirmProduct(data);
  }
  getConfirmProduct(date:any) {
    let req: MasterRequest = new MasterRequest()
    req.date =date

    return this.warehouseClient.getConfirmProduct(req).pipe(
      map((reply:ConfirmProductionResponse) => {
        console.log(reply);
        return reply.data
      })
    )
  }


  insertParcel(data: ParcelModel, detail: ParcelDetailModel[]) {
    let request: InsertParcelRequest = new InsertParcelRequest();
    request.codeParcel = data.name
    request.createdPerson = data.createdBy
    detail.map(d => {
      let parcelDetail = new ParcelDetailInfo();
      parcelDetail.codeParcel = data.name
      parcelDetail.codeProduct = d.code_product
      parcelDetail.codeTypePacket = d.code_bag
      parcelDetail.idTypeProduct = d.code_product_type
      request.data.push(parcelDetail);
    })
    return this.warehouseClient.insertParcel(request);
  }

  updateParcel(data: ParcelModel, detail: ParcelDetailModel[]) {
    let request: InsertParcelRequest = new InsertParcelRequest();
    request.codeParcel = data.name
    request.createdPerson = data.createdBy
    detail.map(d => {
      let parcelDetail = new ParcelDetailInfo();
      parcelDetail.codeParcel = data.name
      parcelDetail.codeProduct = d.code_product
      parcelDetail.codeTypePacket = d.code_bag
      parcelDetail.idTypeProduct = d.code_product_type
      request.data.push(parcelDetail);
    })
    console.log(request);
    return this.warehouseClient.updateParcel(request);
  }
}
