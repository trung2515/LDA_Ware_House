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
}