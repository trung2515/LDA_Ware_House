import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { WareHouseClient } from "src/app/core/models/admin.pbsc";
import { MasterRequest, ResponseState } from "src/app/core/models/model.pb";
import { ParcelModel, ParcelModelDetail } from "./parcel.model";

@Injectable()
export class PercelService {

    constructor(private warehouseClient: WareHouseClient) { }

    getListPercel() {
        let request: MasterRequest = new MasterRequest()
        return this.warehouseClient.getListParcel(request).pipe(map(reply => reply.response?.state == ResponseState.SUCCESS ? reply.data : []))
    }

    getListParcelDetail(code_parcel: string) {
        let request: MasterRequest = new MasterRequest()
        request.codeParcel = code_parcel;
        return this.warehouseClient.getListParcelDetail(request).pipe(map(reply => reply.response?.state == ResponseState.SUCCESS ? reply.data?.map(d => new ParcelModelDetail(d)) : []))
    }
}