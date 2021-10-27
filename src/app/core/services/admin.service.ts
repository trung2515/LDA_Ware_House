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
  WareHouseResponse,
  TypePacketResponse,
  TypeProductInfo,
  TypePacketInfo,
  PackingUnitInfo,
  TypeProductResponse,
  ProductInfo,
  WareHouseInfo,
  EquipmentInfo,
  Response,
  TypeBillInfo
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
  



  getListWareHouse( ){
    let req:MasterRequest=new MasterRequest();    
    return this.administratorClient.getListWareHouse(req).pipe(
      map((reply: WareHouseResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      })
    )
  }
  insertWareHouse(codeWareHouse:any,nameWareHouse:any,capacity:any){
    let req:WareHouseInfo=new WareHouseInfo();    
    req.codeWareHouse=codeWareHouse
    req.nameWareHouse=nameWareHouse
    req.capacity=capacity
    return this.administratorClient.insertWareHouse(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  updateWareHouse( idWareHouse:any,codeWareHouse:any,nameWareHouse:any,capacity:any){
    let req:WareHouseInfo=new WareHouseInfo();    
    req.idWareHouse=idWareHouse
    req.codeWareHouse=codeWareHouse
    req.nameWareHouse=nameWareHouse
    req.capacity=capacity
    console.log(req)
    return this.administratorClient.updateWareHouse(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  deleteWareHouse( idWareHouse:any){
    let req:WareHouseInfo=new WareHouseInfo();    
    req.idWareHouse=idWareHouse
    return this.administratorClient.deleteWareHouse(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }





  getListPartner( ){
    let req:MasterRequest=new MasterRequest();    
    return this.administratorClient.getListPartner(req).pipe(
      map((reply: PartnerResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      })
    )
  }
  // insertWareHouse(codeWareHouse:any,nameWareHouse:any,capacity:any){
  //   let req:WareHouseInfo=new WareHouseInfo();    
  //   req.codeWareHouse=codeWareHouse
  //   req.nameWareHouse=nameWareHouse
  //   req.capacity=capacity
  //   return this.administratorClient.insertWareHouse(req).pipe(
  //     map((reply: Response) => {
  //       return reply;
  //     })
  //   )
  // }
  // updateWareHouse( idWareHouse:any,codeWareHouse:any,nameWareHouse:any,capacity:any){
  //   let req:WareHouseInfo=new WareHouseInfo();    
  //   req.idWareHouse=idWareHouse
  //   req.codeWareHouse=codeWareHouse
  //   req.nameWareHouse=nameWareHouse
  //   req.capacity=capacity
  //   console.log(req)
  //   return this.administratorClient.updateWareHouse(req).pipe(
  //     map((reply: Response) => {
  //       return reply;
  //     })
  //   )
  // }
  // deleteWareHouse( idWareHouse:any){
  //   let req:WareHouseInfo=new WareHouseInfo();    
  //   req.idWareHouse=idWareHouse
  //   return this.administratorClient.deleteWareHouse(req).pipe(
  //     map((reply: Response) => {
  //       return reply;
  //     })
  //   )
  // }




  getListPackingUnit( ){
    let req:MasterRequest=new MasterRequest();    
    return this.administratorClient.getListPackingUnit(req).pipe(
      map((reply: PackingUnitResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      })
    )
  }
  insertPackingUnit(namePackingUnit:any){
    let req:PackingUnitInfo=new PackingUnitInfo();    
    req.namePackingUnit=namePackingUnit
    return this.administratorClient.insertPackingUnit(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  updatePackingUnit( idPackingUnit:any,namePackingUnit:any){
    let req:PackingUnitInfo=new PackingUnitInfo();    
    req.idPackingUnit=idPackingUnit
    req.namePackingUnit=namePackingUnit
    return this.administratorClient.updatePackingUnit(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  deletePackingUnit( idPackingUnit:any){
    let req:PackingUnitInfo=new PackingUnitInfo();    
    req.idPackingUnit=idPackingUnit
    return this.administratorClient.deletePackingUnit(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }




  getListEquipment( ){
    let req:MasterRequest=new MasterRequest();    
    return this.administratorClient.getListEquipment(req).pipe(
      map((reply: EquipmentResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      })
    )
  }
  insertEquipment(nameEquipment:any){
    let req:EquipmentInfo=new EquipmentInfo();    
    req.nameEquipment=nameEquipment
    return this.administratorClient.insertEquipment(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  updateEquipment( idEquipment:any,nameEquipment:any){
    let req:EquipmentInfo=new EquipmentInfo();    
    req.idEquipment=idEquipment
    req.nameEquipment=nameEquipment
    return this.administratorClient.updateEquipment(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  deleteEquipment( idEquipment:any){
    let req:EquipmentInfo=new EquipmentInfo();    
    req.idEquipment=idEquipment
    return this.administratorClient.deleteEquipment(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }





  getListTypeBill( ){
    let req:MasterRequest=new MasterRequest();    
    return this.administratorClient.getListTypeBill(req).pipe(
      map((reply: TypeBillResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      })
    )
  }
  insertTypeBill(codeTypeBill:any,nameTypeBill:any){
    let req:TypeBillInfo=new TypeBillInfo();   
    req.codeTypeBill=codeTypeBill
    req.nameTypeBill=nameTypeBill
    return this.administratorClient.insertTypeBill(req).pipe(
      map((reply: Response) => {
        return reply
      })
    )
  }
  updateTypeBill( idTypeBill:any,codeTypeBill:any,nameTypeBill:any){
    let req:TypeBillInfo=new TypeBillInfo();    
    req.idTypeBill=idTypeBill
    req.codeTypeBill=codeTypeBill
    req.nameTypeBill=nameTypeBill
    return this.administratorClient.updateTypeBill(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }
  deleteTypeBill( idTypeBill:any){
    let req:TypeBillInfo=new TypeBillInfo();    
    req.idTypeBill=idTypeBill
    return this.administratorClient.deleteTypeBill(req).pipe(
      map((reply: Response) => {
        return reply;
      })
    )
  }





}
