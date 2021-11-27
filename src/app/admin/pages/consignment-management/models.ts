
export class ParcelDetailModel {

}
export class ParcelModel {
  id: number = 0;
  name: string = '';
  date: string = ''
  products : ParcelDetailModel[] = []

}

export class InputProductModel {
  name: string = 'Alumin 1 tấn'
  type:string =  '1'
  type_bag:string = 'Đáy liền'
  quantity:number = 1000
  hasProduced:number = 0
  status:string = 'Mới'
}

