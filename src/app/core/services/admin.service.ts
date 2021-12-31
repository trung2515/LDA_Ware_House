import { AuthService } from 'src/app/core/services/auth.service'
import { Injectable } from '@angular/core'
import { identity, Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { AdministratorClient, WareHouseClient } from '../models/admin.pbsc'
import {
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
  TypeBillInfo,
  WorkInfo,
  WorkResponse,
  CodePacketInfo,
  ReasonInfo,
  MasterDataResponse,
  PartnerInfo,
  ShiftResponse,
  ShiftDetailResponse,
  ParcelResponse,
  InsertShiftRequest,
  ShiftDetailInfo,
  ShiftInfo,
  TransportationUnitResponse,
} from '../models/model.pb'
@Injectable()
export class AdminService {
  constructor(
    private administratorClient: AdministratorClient,
    private warehouseClient: WareHouseClient,
    private authService: AuthService,
  ) { }

  getListTransportUnit() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListTransportationUnit(req).pipe(
      map((reply: TransportationUnitResponse) => {
        console.log(reply.data)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }

  getListProduct() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListProduct(req).pipe(
      map((reply: ProductResponse) => {
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }
  deleteProduct(idProduct: any) {
    let req: ProductInfo = new ProductInfo()
    req.idProduct = idProduct
    return this.administratorClient.deleteProduct(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  updateProduct(idProduct: any, codeProduct: any, nameProduct: any) {
    let req: ProductInfo = new ProductInfo()
    req.idProduct = idProduct
    req.codeProduct = codeProduct
    req.nameProduct = nameProduct
    console.log(req)
    return this.administratorClient.updateProduct(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  insertProduct(codeProduct: any, nameProduct: any) {
    let req: ProductInfo = new ProductInfo()
    req.codeProduct = codeProduct
    req.nameProduct = nameProduct
    return this.administratorClient.insertProduct(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListTypeProduct() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListTypeProduct(req).pipe(
      map((reply: TypeProductResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }
  insertTypeProduct(nameTypeProduct: any) {
    let req: TypeProductInfo = new TypeProductInfo()
    req.nameTypeProduct = nameTypeProduct
    return this.administratorClient.insertTypeProduct(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  updateTypeProduct(idTypeProdcut: any, nameTypeProduct: any) {
    let req: TypeProductInfo = new TypeProductInfo()
    req.idTypeProduct = idTypeProdcut
    req.nameTypeProduct = nameTypeProduct
    return this.administratorClient.updateTypeProduct(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  deleteTypeProduct(idTypeProduct: any) {
    let req: TypeProductInfo = new TypeProductInfo()
    req.idTypeProduct = idTypeProduct
    return this.administratorClient.deleteTypeProduct(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListTypePacket() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListTypePacket(req).pipe(
      map((reply: TypePacketResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }
  insertTypePacket(nameTypePacket: any) {
    let req: TypePacketInfo = new TypePacketInfo()
    req.nameTypePacket = nameTypePacket
    return this.administratorClient.insertTypePacket(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  updateTypePacket(idTypeProdcut: any, nameTypePacket: any) {
    let req: TypePacketInfo = new TypePacketInfo()
    req.idTypePacket = idTypeProdcut
    req.nameTypePacket = nameTypePacket
    return this.administratorClient.updateTypePacket(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  deleteTypePacket(idTypePacket: any) {
    let req: TypePacketInfo = new TypePacketInfo()
    req.idTypePacket = idTypePacket
    return this.administratorClient.deleteTypePacket(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  // getListCodePacket() {
  //   let req: MasterRequest = new MasterRequest()
  //   return this.administratorClient.getListCodePacket(req).pipe(
  //     map((reply: CodePacketResponse) => {
  //       console.log(reply)
  //       if (reply.response?.state == ResponseState.SUCCESS) {
  //         return reply.data
  //       } else return []
  //     }),
  //   )
  // }
  // insertCodePacket(
  //   codePacket: any,
  //   nameProductPacket: any,
  //   unit: any,
  //   idTypePacket: any,
  //   description: any,
  // ) {
  //   let req: CodePacketInfo = new CodePacketInfo()
  //   req.codePacket = codePacket
  //   req.nameProductPacket = nameProductPacket
  //   req.unit = unit
  //   req.idTypePacket = idTypePacket
  //   req.description = description
  //   return this.administratorClient.insertCodePacket(req).pipe(
  //     map((reply: Response) => {
  //       return reply
  //     }),
  //   )
  // }
  // updateCodePacket(
  //   id: any,
  //   codePacket: any,
  //   nameProductPacket: any,
  //   unit: any,
  //   idTypePacket: any,
  //   description: any,
  // ) {
  //   let req: CodePacketInfo = new CodePacketInfo()
  //   req.id = id
  //   req.codePacket = codePacket
  //   req.nameProductPacket = nameProductPacket
  //   req.unit = unit
  //   req.idTypePacket = idTypePacket
  //   req.description = description
  //   return this.administratorClient.updateCodePacket(req).pipe(
  //     map((reply: Response) => {
  //       return reply
  //     }),
  //   )
  // }
  // deleteCodePacket(id: any) {
  //   let req: CodePacketInfo = new CodePacketInfo()
  //   req.id = id
  //   return this.administratorClient.deleteCodePacket(req).pipe(
  //     map((reply: Response) => {
  //       return reply
  //     }),
  //   )
  // }

  getListWareHouse() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListWareHouse(req).pipe(
      map((reply: WareHouseResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }
  insertWareHouse(codeWareHouse: any, nameWareHouse: any, capacity: any) {
    let req: WareHouseInfo = new WareHouseInfo()
    req.codeWareHouse = codeWareHouse
    req.nameWareHouse = nameWareHouse
    req.capacity = capacity
    return this.administratorClient.insertWareHouse(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  updateWareHouse(
    idWareHouse: any,
    codeWareHouse: any,
    nameWareHouse: any,
    capacity: any,
  ) {
    let req: WareHouseInfo = new WareHouseInfo()
    req.idWareHouse = idWareHouse
    req.codeWareHouse = codeWareHouse
    req.nameWareHouse = nameWareHouse
    req.capacity = capacity
    console.log(req)
    return this.administratorClient.updateWareHouse(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  deleteWareHouse(idWareHouse: any) {
    let req: WareHouseInfo = new WareHouseInfo()
    req.idWareHouse = idWareHouse
    return this.administratorClient.deleteWareHouse(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListPartner() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListPartner(req).pipe(
      map((reply: PartnerResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }

  getListTypePartner() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListTypePartner(req).pipe(
      map((reply: MasterDataResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }

  getMasterData(type: string) {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListMasterData(req).pipe(
      map((reply: MasterDataResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data.filter((d) => d.objectType === type)
        } else return []
      }),
    )
  }

  insertPartner(codePartner: any, namePartner: any, typePartner: any) {
    let req: PartnerInfo = new PartnerInfo()
    req.codePartner = codePartner
    req.namePartner = namePartner
    req.typePartner = typePartner
    return this.administratorClient.insertPartner(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  updatePartner(
    idPartner: any,
    codePartner: any,
    namePartner: any,
    typePartner: any,
  ) {
    let req: PartnerInfo = new PartnerInfo()
    req.idPartner = idPartner
    req.codePartner = codePartner
    req.namePartner = namePartner
    req.typePartner = typePartner
    console.log(req)
    return this.administratorClient.updatePartner(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  deletePartner(idPartner: any) {
    let req: PartnerInfo = new PartnerInfo()
    req.idPartner = idPartner
    return this.administratorClient.deletePartner(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListPackingUnit() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListPackingUnit(req).pipe(
      map((reply: PackingUnitResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }

  insertPackingUnit(namePackingUnit: any) {
    let req: PackingUnitInfo = new PackingUnitInfo()
    req.namePackingUnit = namePackingUnit
    return this.administratorClient.insertPackingUnit(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  updatePackingUnit(idPackingUnit: any, namePackingUnit: any) {
    let req: PackingUnitInfo = new PackingUnitInfo()
    req.idPackingUnit = idPackingUnit
    req.namePackingUnit = namePackingUnit
    return this.administratorClient.updatePackingUnit(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  deletePackingUnit(idPackingUnit: any) {
    let req: PackingUnitInfo = new PackingUnitInfo()
    req.idPackingUnit = idPackingUnit
    return this.administratorClient.deletePackingUnit(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListEquipment() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListEquipment(req).pipe(
      map((reply: EquipmentResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }

  getListTypeEquipment() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListTypeEquipment(req).pipe(
      map((reply: MasterDataResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }

  insertEquipment(nameEquipment: any, type: any) {
    let req: EquipmentInfo = new EquipmentInfo()
    req.nameEquipment = nameEquipment
    console.log(req)
    return this.administratorClient.insertEquipment(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  updateEquipment(idEquipment: any, nameEquipment: any, type: any) {
    let req: EquipmentInfo = new EquipmentInfo()
    req.idEquipment = idEquipment
    req.nameEquipment = nameEquipment
    return this.administratorClient.updateEquipment(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  deleteEquipment(idEquipment: any) {
    let req: EquipmentInfo = new EquipmentInfo()
    req.idEquipment = idEquipment
    return this.administratorClient.deleteEquipment(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListTypeBill() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListTypeBill(req).pipe(
      map((reply: TypeBillResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }

  insertTypeBill(codeTypeBill: any, nameTypeBill: any) {
    let req: TypeBillInfo = new TypeBillInfo()
    req.codeTypeBill = codeTypeBill
    req.nameTypeBill = nameTypeBill
    return this.administratorClient.insertTypeBill(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  updateTypeBill(idTypeBill: any, codeTypeBill: any, nameTypeBill: any) {
    let req: TypeBillInfo = new TypeBillInfo()
    req.idTypeBill = idTypeBill
    req.codeTypeBill = codeTypeBill
    req.nameTypeBill = nameTypeBill
    return this.administratorClient.updateTypeBill(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  deleteTypeBill(idTypeBill: any) {
    let req: TypeBillInfo = new TypeBillInfo()
    req.idTypeBill = idTypeBill
    return this.administratorClient.deleteTypeBill(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListWork() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListWork(req).pipe(
      map((reply: WorkResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }
  insertWork(codeWork: any, nameWork: any) {
    let req: WorkInfo = new WorkInfo()
    req.codeWork = codeWork
    req.nameWork = nameWork
    return this.administratorClient.insertWork(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  updateWork(idWork: any, codeWork: any, nameWork: any) {
    let req: WorkInfo = new WorkInfo()
    req.idWork = idWork
    req.codeWork = codeWork
    req.nameWork = nameWork
    return this.administratorClient.updateWork(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  deleteWork(idWork: any) {
    let req: WorkInfo = new WorkInfo()
    req.idWork = idWork
    return this.administratorClient.deleteWork(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListReason() {
    let req: MasterRequest = new MasterRequest()
    return this.administratorClient.getListReason(req).pipe(
      map((reply: ReasonResponse) => {
        console.log(reply)
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }
  insertReason(codeReason: any, nameReason: any) {
    let req: ReasonInfo = new ReasonInfo()
    req.codeReason = codeReason
    req.nameReason = nameReason
    return this.administratorClient.insertReason(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  updateReason(idReason: any, codeReason: any, nameReason: any) {
    let req: ReasonInfo = new ReasonInfo()
    req.idReason = idReason
    req.codeReason = codeReason
    req.nameReason = nameReason
    return this.administratorClient.updateReason(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }
  deleteReason(idReason: any) {
    let req: ReasonInfo = new ReasonInfo()
    req.idReason = idReason
    return this.administratorClient.deleteReason(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListMasterData() {
    let request: MasterRequest = new MasterRequest()
    return this.administratorClient.getListMasterData(request).pipe(
      map((reply) => {
        return reply.response.state == ResponseState.SUCCESS ? reply.data : []
      }
      ));
  }

  // getListShift() {
  //   let req: MasterRequest = new MasterRequest()
  //   return this.warehouseClient.getListShiftByDate(req).pipe(
  //     map((reply: ShiftResponse) => {
  //       if (reply.response?.state == ResponseState.SUCCESS) {
  //         console.log('shift', reply.data)
  //         return reply.data
  //       } else return []
  //     }),
  //   )
  // }

  newInsertShift(
    date: string,
    nameShift: string,
    createPerson: number,
    arrOption: ShiftDetailInfo[],
  ) {
    let req: InsertShiftRequest = new InsertShiftRequest()
    req.date = date
    req.nameShift = nameShift
    req.createdPerson = createPerson
    req.data = arrOption
    console.log(req)
    return this.warehouseClient.newInsertShift(req)
  }

  newUpdateShift(idShift: any, arrOption: ShiftDetailInfo[]) {
    let req: InsertShiftRequest = new InsertShiftRequest()
    req.idShift = idShift
    req.data = arrOption
    console.log(req)
    return this.warehouseClient.newUpdateShift(req)
  }

  deleteShift(idShift: any) {
    let req: ShiftInfo = new ShiftInfo()
    req.idShift = idShift
    return this.warehouseClient.deleteShift(req).pipe(
      map((reply: Response) => {
        return reply
      }),
    )
  }

  getListShiftDetail(fromDate: string, toDate: string) {
    let req: MasterRequest = new MasterRequest()
    req.fromDate = fromDate
    req.toDate = toDate
    req.userName = this.authService.getUser().user
    console.log(req)
    return this.warehouseClient.getListShiftDetail(req).pipe(
      map((reply: ShiftDetailResponse) => {
        if (reply.response?.state == ResponseState.SUCCESS) {
          return reply.data
        } else return []
      }),
    )
  }
}
