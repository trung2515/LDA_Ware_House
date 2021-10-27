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
  TypeProductInfo,
  TypePacketInfo,
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
    console.log(req)
    return this.administratorClient.updateProduct(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  insertProduct(codeProduct:any,nameProduct:any){
    let req:ProductInfo=new ProductInfo();    
    req.codeProduct=codeProduct
    req.nameProduct=nameProduct
    return this.administratorClient.insertProduct(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }



  getListTypeProduct( ){
    let req:MasterRequest=new MasterRequest();    
    return this.administratorClient.getListTypeProduct(req).pipe(
      map((reply: TypeProductResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      })
    )
  }
  insertTypeProduct(nameTypeProduct:any){
    let req:TypeProductInfo=new TypeProductInfo();    
    req.nameTypeProduct=nameTypeProduct
    return this.administratorClient.insertTypeProduct(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  updateTypeProduct(idTypeProdcut:any,nameTypeProduct:any ){
    let req:TypeProductInfo=new TypeProductInfo();   
    req.idTypeProduct=idTypeProdcut 
    req.nameTypeProduct=nameTypeProduct
    return this.administratorClient.updateTypeProduct(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  deleteTypeProduct( idTypeProduct:any){
    let req:TypeProductInfo=new TypeProductInfo();    
    req.idTypeProduct=idTypeProduct
    return this.administratorClient.deleteTypeProduct(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }


  getListTypePacket( ){
    let req:MasterRequest=new MasterRequest();    
    return this.administratorClient.getListTypePacket(req).pipe(
      map((reply: TypePacketResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      })
    )
  }
  insertTypePacket(nameTypePacket:any){
    let req:TypePacketInfo=new TypePacketInfo();    
    req.nameTypePacket=nameTypePacket
    return this.administratorClient.insertTypePacket(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  updateTypePacket(idTypeProdcut:any,nameTypePacket:any ){
    let req:TypePacketInfo=new TypePacketInfo();   
    req.idTypePacket=idTypeProdcut 
    req.nameTypePacket=nameTypePacket
    return this.administratorClient.updateTypePacket(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  deleteTypePacket( idTypePacket:any){
    let req:TypePacketInfo=new TypePacketInfo();    
    req.idTypePacket=idTypePacket
    return this.administratorClient.deleteTypePacket(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }


}
