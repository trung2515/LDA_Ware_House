import { TransportInfo } from "src/app/core/models/model.pb";
import Utils from "src/app/_lib/utils";


export class WorkDate {
    date: string;
    constructor(data:TransportInfo){
        this.date =  Utils.formatDate(new Date(data.createddate))
    }
}

export class DataWork {
    productName: string;
    productType:string
    date: string;
    id: number;
    shift: string
    task:string;
    fromWareHouse: string;
    toWareHouse:string;
    codeEquipmentLoad:string
    codeEquipmentUnLoad:string
    codeWork : string
    code : string
    user : string
    distance: number
    packagingType: string
    quantity: number
    weight: number

    constructor(data:TransportInfo){
        this.productName = data.nameProduct
        this.productType = data.nameTypeProduct
        this.packagingType = data.nameTypePacket
        this.date =  Utils.formatDate(new Date(data.createddate))
        this.shift = Utils.convertTimeToShift(data.createddate)
        this.task = data.nameWork
        this.fromWareHouse = data.nameWareHouseLoad
        this.toWareHouse = data.nameWareHouseUnLoad
        this.codeEquipmentLoad = data.codeEquipmentLoad
        this.codeEquipmentUnLoad = data.codeEquipmentUnLoad
        this.codeWork = data.codeWork
        this.code = data.code
        this.user = data.createdPerson
        this.distance = data.distance
        this.quantity = data.quantity
        this.weight = data.weight

    }
}
  
export class WorkDetail {
    shift: string
    date: string
    task:string;
    fromWareHouse: string;
    toWareHouse:string;

    constructor(data: TransportInfo){
        this.task = data.nameWork
        this.shift = Utils.convertTimeToShift(data.createddate)
        this.date = Utils.formatDate(new Date(data.createddate))
        this.fromWareHouse = data.nameWareHouseLoad
        this.toWareHouse = data.nameWareHouseUnLoad
     
    }
}
export class  SingleDetailWork {
    productName: string
    producType: string
    distance: number
    packagingType: string
    quantity: number
    constructor(data: any) {
      this.productName = data.task
      this.producType = data.codeWork
      this.distance = data.distance
      this.packagingType = data.packagingType
      this.quantity = data.quantity
    }
}
