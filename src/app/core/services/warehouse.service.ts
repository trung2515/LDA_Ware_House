import { ParcelDetailResponse } from './../models/model.pb';
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { WareHouseClient } from "../models/admin.pbsc";
import { MasterRequest, ParcelResponse, ResponseState } from "../models/model.pb"
import { AuthService } from "./auth.service";

@Injectable()
export class WareHouseService {
  constructor(
    private warehouseClient: WareHouseClient,
    private authService: AuthService
  ) { }
  getListParcel(fromDate: string, toDate: string) {
    let req: MasterRequest = new MasterRequest()
    req.fromDate = fromDate
    req.toDate = toDate
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


}
