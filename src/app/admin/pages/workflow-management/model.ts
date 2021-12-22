import { TransportInfo } from "src/app/core/models/model.pb";
import Utils from "src/app/_lib/utils";


export class WorkDate {
    date: string;
    constructor(data:TransportInfo){
        this.date =  Utils.formatDate(new Date(data.createddate))
    }
}

export class DataWork {
    date: string;
    id: number;
    shift: string
    task:string;
    fromWareHouse: string;
    toWareHouse:string;
    codeEquipmentLoad:string
    codeEquipmentUnLoad:string
    user : string
    constructor(data:TransportInfo){
        this.date =  Utils.formatDate(new Date(data.createddate))
        this.shift = Utils.convertTimeToShift(data.createddate)
        this.task = data.nameWork
        this.fromWareHouse = data.nameWareHouseLoad
        this.toWareHouse = data.nameWareHouseUnLoad
        this.codeEquipmentLoad = data.codeEquipmentLoad
        this.codeEquipmentUnLoad = data.codeEquipmentUnLoad
        this.user = data.createdPerson
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