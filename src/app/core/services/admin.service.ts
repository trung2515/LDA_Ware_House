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
  ProductInfo,
  Response
}from '../models/model.pb'
@Injectable()
export class AdminService {
  constructor(private administratorClient:AdministratorClient ) { }
  getListProduct( ){
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
  deleteProduct( idProduct:any){
    let req:ProductInfo=new ProductInfo();    
    req.idProduct=idProduct
    return this.administratorClient.deleteProduct(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  updateProduct( idProduct:any,codeProduct:any,nameProduct:any){
    let req:ProductInfo=new ProductInfo();    
    req.idProduct=idProduct
    req.codeProduct=codeProduct
    req.nameProduct=nameProduct
    return this.administratorClient.updateProduct(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }


  getTypeProducts(){
    let req:MasterRequest=new MasterRequest();
    return this.administratorClient.getListTypeProduct(req);
  }
}
