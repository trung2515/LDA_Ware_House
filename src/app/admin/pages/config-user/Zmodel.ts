export class UserList {
    user: string
    userName: string
    password: string
    type:number
    typeName:string
    status:boolean
    constructor(data:any){
        this.user = data.user
        this.userName = data.username
        this.password = data.password
        this.type = data.type
        // this.typeName = data.type == 0 ? 'Admin' : (data.type == 1) ? 'DVVC' : (data.type == 2) ? 'VCTN' : (data.type == 3) ? 'PXNUNG' : 'KHTT'
        this.typeName = data.type == 0 ? 'Admin' : 'KHTT'
        
    }
}