export class ListMinutes{
    
}
export class ListDetail{
    detailName: string;
    detailId: number;
    detailCode: number;
    detailCate: number;
    constructor(data:any){
        this.detailName = data.objectName
        this.detailId = data.objectId
        this.detailCode = data.objectCode
        this.detailCate = data.objectCate
    }
}
export class ListTypeMinutes{
    listDetail : ListDetail[];
    name:string;
    type:string;
    cate:string;
    constructor(){
        
    }
}