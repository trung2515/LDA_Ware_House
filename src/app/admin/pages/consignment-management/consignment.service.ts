import { ParcelModel, InputProductModel } from './models';
import { Injectable } from '@angular/core';


const consignment: ParcelModel[] = []
const products:InputProductModel[] = [
  {
    name: 'Alumin 1 tấn',
    type: '2',
    type_bag: 'Xả đáy nhiều lần 3.7',
    quantity: 500,
    hasProduced: 0,
    status: 'Mới',
  },
  {
    name: 'Alumin 1 tấn',
    type: '1',
    type_bag: 'Đáy liền',
    quantity: 500,
    hasProduced: 50,
    status: 'Đang sản xuất',
  }
]
const generateConsignment = () => {
  let con: any = {}
  const date: Date = new Date()
  for (let i = 1; i < 22 ; i++) {
    con = {
      id: i,
      date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      creator: "hieu",
      products: [...products],
    }
    if(i > 15) {
      con.date = `${date.getMonth() }/${date.getDate()}/${date.getFullYear()}`
    }
    if(i > 30) {
      con.date = `${date.getMonth() - 1 }/${date.getDate()}/${date.getFullYear()}`
    }
    consignment.push(con)
  }
}
// name type type_bag
const infoSelection: any =
{
  name: [{ Value: 'Alumin 1 tấn' }, { Value: 'Alumin 2 tấn' }, { Value: 'Alumin 3 tấn' }, { Value: 'Alumin 30000 tấn' }],
  type: [{ Value: 1, Key: 'Loại 1' }, { Value: 2, Key: 'Loại 2' }],
  type_bag: [{ Value: 'Xả đáy nhiều lần 3.7' }, { Value: 'Đáy liền' }, { Value: 'Bao alumin 50kg' }],
  quantity: [1000, 1000, 900]
}

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {
  getConsignment() {
    generateConsignment()
    return consignment
  }
  getInfoSelection() {
    return infoSelection
  }
}


