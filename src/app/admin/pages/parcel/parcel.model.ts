import { ParcelDetailInfo, ParcelInfo } from "src/app/core/models/model.pb"

export class ParcelModel {
    parcel_code: string
    parcel_name: string
    created_date: string
    created_by: string
    constructor(data: ParcelInfo) {
        this.parcel_code = data.codeParcel || ''
        this.parcel_name = data.nameParcel || ''
        this.created_date = ''
        this.created_by = ''
    }
}

export class ParcelModelDetail {
    id: number
    product_code: string
    product_type: string
    bill_type: string
    quantity: number
    status: string
    constructor(data: ParcelDetailInfo) {
        this.id = data.idParcelDetail || 0
        this.product_code = data.codeProduct || ''
        this.product_type = data.nameTypeProduct || ''
        this.bill_type = data.nameTypePacket || ''
        this.quantity = parseInt(data.quantity!) || 0
        this.status = parseInt(data.quantity!) == 3000 ? 'Hoàn thành' : 'Đang xử lý'
    }
}