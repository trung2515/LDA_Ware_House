export interface Appointment {
    id:number;
    text : string ;
    shift:number
    startDate: Date;
    endDate: Date  ;
    description:string;
    shiftDetail: ShiftDetail[]
}

export interface Resource {
    text: string ;
    id: number ;
    color: string;
}
export interface ShiftDetail {
    id: number,
    option: string ;
    type: string;
    product: string;
    productRange:number;
    packaging:string;
    lot:number;
    unit:string;
    wareHouse:string;
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

