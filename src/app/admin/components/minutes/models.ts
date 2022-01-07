export class ListMinutes{
    
}
export class ListDetail{
    detailName: string;
    detailId: number;
    constructor(data:any){
        this.detailName = data.objectName
        this.detailId = data.objectId
    }
}
export class ListTypeMinutes{
    listDetail : ListDetail[];
    name:string;
    type:string;
    constructor(){
        
    }
}