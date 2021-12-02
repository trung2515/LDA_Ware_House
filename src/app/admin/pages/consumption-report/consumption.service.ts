import { ProductionStatisticalModel } from './models';
import { Injectable } from '@angular/core';




function generateStatistical():  ProductionStatisticalModel[]{
  let productionStatistics: ProductionStatisticalModel[] = []
  for (let i = 1; i < 10; i++) {
    const now = new Date();
    const strDate = (now.getMonth() + 1) + '/' +(now.getDate() + i)+ '/' + now.getFullYear()
    let productionStatistic: ProductionStatisticalModel= {
      shiftID: i,
      date: strDate,
      name: 'Alumin '+ (i / 2) +' tấn',
      type_product: i%2===0 ? 1: 2,

      type_bag: 'Xả đáy 1 tấn ',
      name_kttc: 'Tên KTTC',
      bag_unit: 'NUNG',
      ballot_type: (i%2==0) ? 'Nhập đóng mới' : (i%3==0) ? 'Nhập đóng lại' : 'Nhập điều chuyển',
      mineral_type: (i%2==0) ? 'Tồn đầu' : (i%3==0) ? 'Nhập' : 'Xuất',
      consumer: (i === 3) ? 'Nôi địa' : '' ,
      consumer_detail: (i === 3) ? 'Micco' : '' ,
      trips_number: (i === 3) ? 10 : '' ,
      consignments_number: (i%2 === 0) ? '180' : '179' ,
      bag_number: (312 + i),
      ton_number: (3120000 + i),
      warehouse: 'Kho TT',
      reason: (i === 7)?'Palang': '',
      user: i%2===0 ?'HV Bien' : i%3===0 ?'HV Bien 1':'HV Bien 2',
      note: ''
    }
    productionStatistics.push(productionStatistic)
  }
  return productionStatistics;
}

let sales: any[] =  []

@Injectable({
  providedIn: 'root'
})
export class ConsumptionReportService {
  getProductionStatistics(){
    return generateStatistical()
  }
  getDetailReport() {
    return sales;
}
}
