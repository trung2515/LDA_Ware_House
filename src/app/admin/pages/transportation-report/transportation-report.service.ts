import { TransportationReportModel } from './models';
import { Injectable } from '@angular/core';


function generateTranslationReport(): TransportationReportModel[] {
  let translationStatistics: TransportationReportModel[] = []
  for (let i = 1; i < 10; i++) {
    const now = new Date();
    const strDate = (now.getMonth() + 1) + '/' + (now.getDate() + i) + '/' + now.getFullYear()
    let translationStatistic: TransportationReportModel = {
      shift: '1',
      date: strDate,
      product_name: 'Alumin ' + (i / 2) + ' tấn',
      product_type: i % 2 === 0 ? 1 : 2,
      bag_type: 'Xả đáy 1 tấn ',
      work: 'Vận chuyển lưu kho',
      lau_warehouse: 'NUNG',
      unloading_equipment: i % 2 === 0 ? 'Pa lăng' : i % 3 === 0 ? 'Cẩu Tiến Tuấn' : 'Xe nâng PX NUNG',
      loading_equipment: 'Pa lăng',
      unloading_warehouse: 'kho 1',
      bag_number: (312 + i),
      ton_number: (3120000 + i),
      cdo: 12,
      trips_number: 0,
      user: i % 2 === 0 ? 'HV Bien' : i % 3 === 0 ? 'HV Bien 1' : 'HV Bien 2',
      sl_by: i === 1 ? 'ca SL 1' : (i === 2 || i === 5) ? 'ca SL 2' : i === 3 ? 'ca SL 3' : i === 4 ? 'SL ngày 30/10' : 'LK tuần 45'
    }
    translationStatistics.push(translationStatistic)
  }
  return translationStatistics;
}
@Injectable({
  providedIn: 'root'
})
export class TransportationReportService {

  getTranslationReport() {
    return generateTranslationReport()
  }
}
