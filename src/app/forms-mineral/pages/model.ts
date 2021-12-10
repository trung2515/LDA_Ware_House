export class ItemModel {
    name: string = '';
    index: number = 0;
    action: string = '';
}
export interface ListShift {
    shift : number;
    name : string;
}
export interface DataTableMinute {
    header:object
    id: number
    product : string;
    type : number;
    packaging : string;
    lot : number;
    seri : number;
    quantity: number;
    user: string;
    shift:number;
    startDate : Date;
    quantityPac : number;
    mass : number;
    wareHouse: string;
    task:string;
    taskType : number;
    porterTool:string;
    porterWareHouse:string;
    dismantlingWareHouse:string;
    dismantlingTool:string;
    distance: number;
    errorCause: string;
}
export interface dataMinutesSuggest {
    product:string,
    productType: number|'',
    packaging:string,
    decision:string,
    unit:string,
    uses:string,
    quantity:number|'',
    quantityConfirm:number|'',
    quantityBill:number|'',
    request: string
}




