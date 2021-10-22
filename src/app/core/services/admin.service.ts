import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { AdministratorClient } from '../models/admin.pbsc';
import{
  MasterRequest,
  ResponseState,
  CodePacketResponse,
  EquipmentResponse,
  PackingUnitResponse,
  PartnerResponse,
  ProductResponse,
  ReasonResponse,
  TypeBillResponse,
  TypePacketResponse,
  TypeProductResponse,
  WareHouseResponse,
}from '../models/model.pb'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private administratorClient:AdministratorClient ) { }
  getListProduct( ){
    console.log('getListProduct')
    let req:MasterRequest=new MasterRequest();    
    return this.administratorClient.getListProduct(req).pipe(
      map((reply: ProductResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      })
    )
  }
  getListTypeProduct( ){
    console.log('getListTypeProduct')
    let req:MasterRequest=new MasterRequest();
    return this.administratorClient.getListTypeProduct(req).pipe(
      map((reply: TypeProductResponse) => {
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      })
    )
  }
}
