import { CardClient } from './../models/admin.pbsc';
import {
  ConfirmProduction1000Info,
  InsertParcelRequest,
  ParcelDetailInfo,
  ParcelDetailResponse,
  ConfirmProductionResponse,
  CardDetailResponse,
  InsertCardRequest,
  Response,
  CardDetailInfo
} from './../models/model.pb';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WareHouseClient } from '../models/admin.pbsc';
import {
  MasterRequest,
  ParcelResponse,
  ResponseState
} from '../models/model.pb';
import { AuthService } from './auth.service';
import {
  ParcelDetailModel,
  ParcelModel
} from 'src/app/admin/pages/consignment-management/models';
import Utils from 'src/app/_lib/utils';

@Injectable()
export class WareHouseService {
  constructor(
    private warehouseClient: WareHouseClient,
    private cartClient: CardClient,
    private authService: AuthService
  ) {}
  getListParcel(fromDate: string = '2021-01-01', toDate: string = '') {
    let req: MasterRequest = new MasterRequest();
    req.fromDate = fromDate;
    if (toDate != '') req.toDate = toDate;
    else req.toDate = Utils.formatDate(new Date(Date.now()));
    console.log(req);
    return this.warehouseClient.getListParcel(req).pipe(
      map((reply: ParcelResponse) => {
        console.log(reply);
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data;
        } else return [];
      })
    );
  }

  getListParcelDetailByCode(codeParcel: string) {
    let req: MasterRequest = new MasterRequest();
    req.codeParcel = codeParcel;
    return this.warehouseClient.getListParcelDetailByCode(req).pipe(
      map((reply: ParcelDetailResponse) => {
        console.log(reply);
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data;
        } else return [];
      })
    );
  }
  update1000Kg(data: ConfirmProduction1000Info) {
    return this.warehouseClient.updateConfirmProduct(data);
  }
  getConfirmProduct(fromDate: string, toDate:string) {
    let req: MasterRequest = new MasterRequest();
    req.fromDate = fromDate;
    req.toDate = toDate;

    return this.warehouseClient.getConfirmProduct(req).pipe(
      map((reply: ConfirmProductionResponse) => {
        console.log(reply);
        return reply.response.state == ResponseState.SUCCESS ? reply.data : [];
      })
    );
  }

  getListCard(startDate: string, endDate: string) {
    let req: MasterRequest = new MasterRequest();
    req.fromDate = startDate;
    req.toDate = endDate;

    return this.cartClient.getListCard(req).pipe(
      map((reply: CardDetailResponse) => {
        console.log(reply);
        return reply.response.state == ResponseState.SUCCESS ? reply.data : [];
      })
    );
  }
  getListCar50kg(startDate: string, endDate: string) {
    let req: MasterRequest = new MasterRequest();
    req.fromDate = startDate;
    req.toDate = endDate;
    console.log(req);

    return this.cartClient.getListCar50kg(req).pipe(
      map((reply: CardDetailResponse) => {
        console.log(reply);

        return reply.response.state == ResponseState.SUCCESS ? reply.data : [];
      })
    );
  }
  updateCard50kg(data: InsertCardRequest) {
    console.log('req update50kg',data);

    return this.cartClient.updateCard50kg(data);
  }
  deleteCard50kg(idCard: number) {
    let req: CardDetailInfo = new CardDetailInfo();
    req.idCard = idCard;
    console.log(req);

    return this.cartClient.deleteCard(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    );
  }
  setChangeableCard(data: CardDetailInfo) {
    return this.cartClient.setChangeableCard(data).pipe(
      map((reply: Response) => {
        console.log(reply);
        return reply;
      })
    );
  }

  insertParcel(data: ParcelModel, detail: ParcelDetailModel[]) {
    let request: InsertParcelRequest = new InsertParcelRequest();
    request.codeParcel = data.name;
    request.createdPerson = data.createdBy;
    detail.map(d => {
      let parcelDetail = new ParcelDetailInfo();
      parcelDetail.codeParcel = data.name;
      parcelDetail.codeProduct = d.code_product;
      parcelDetail.codeTypePacket = d.code_bag;
      parcelDetail.idTypeProduct = d.code_product_type;
      request.data.push(parcelDetail);
    });
    return this.warehouseClient.insertParcel(request);
  }

  updateParcel(data: ParcelModel, detail: ParcelDetailModel[]) {
    let request: InsertParcelRequest = new InsertParcelRequest();
    request.codeParcel = data.name;
    request.createdPerson = data.createdBy;
    detail.map(d => {
      let parcelDetail = new ParcelDetailInfo();
      parcelDetail.codeParcel = data.name;
      parcelDetail.codeProduct = d.code_product;
      parcelDetail.codeTypePacket = d.code_bag;
      parcelDetail.idTypeProduct = d.code_product_type;
      request.data.push(parcelDetail);
    });
    console.log(request);
    return this.warehouseClient.updateParcel(request);
  }
}
