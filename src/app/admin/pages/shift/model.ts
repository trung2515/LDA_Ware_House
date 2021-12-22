import { ShiftDetailInfo, ShiftInfo } from "src/app/core/models/model.pb";
import { ClassificationTypeNames } from "typescript";

export class Appointment {
    id:number;
    text : string ;
    shift: number ;
    startDate: Date;
    endDate: Date  ;
    description:string;
    idDetail: number
    shiftDetail: ShiftDetail[]
    constructor(data: ShiftDetailInfo){
        this.text = data.nameShift + ' ' + data.nameCreatedPerson
        this.startDate = new Date(data.date)
        this.endDate = new Date(data.date)
        this.shift = parseInt(data.nameShift.toLowerCase().replace('ca', '').trim())
        this.idDetail = data.idShiftDetail
        this.id = data.idShift
    }
}

export interface Resource {
    text: string ;
    id: number ;
    color: string;
}
export class ShiftDetail {
    id: number;
    option: string ;
    type: string;
    product: string;
    productRange:string;
    packaging:string;
    lot:string;
    unit:string;
    wareHouse:string;
    constructor(data: ShiftDetailInfo){
        this.id = data.idShiftDetail
        this.option = data.optionName
        this.type = data.nameTypePacket
        this.product = data.nameProduct
        this.productRange = data.nameTypeProduct
        this.lot = data.codeParcel
        this.unit = data.namePackingUnit
        this.wareHouse = data.nameWareHouse
    }
}
export interface ShiftMaster {
    id:number;
    name : string ;
    shift:number
    startDate: Date;
    endDate: Date  ;
    description:string;
}
export interface Product {
    name: string;
}

export interface Option {
    value: number;
    name: string;
}
export interface Lot {
    name: number;
}
export interface ListShift {
    shift : number;
    name : string;
}

