import { Injectable } from '@angular/core';
export class DataBarChart {
  day: string;
  oranges: number;
}
export class TypeMachine {
  value: string;
  name: string;
}

let typeOfMachines: TypeMachine[] = [
  { value: 'palang', name: 'Palang' },
  { value: 'cautientuan', name: 'Cầu tiến tuấn' },
  { value: 'xenangvuontre', name: 'Xe nâng vườn tre' }
];
let productListInfo: any = [];

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getData(): DataBarChart[] {
    let lst: DataBarChart[] = [];
    for (var i = 0; i < 30; i++) {
      let data: DataBarChart = new DataBarChart();
      data.day = i.toString();
      data.oranges = 20 * Math.random();
      lst.push(data);
    }
    return lst;
  }
  getDataForLine(): any[] {

    for (var i = 0; i < 30; i++) {
      let rs: any = {};
      rs.day = i.toString();
      rs.palang = i * Math.random();
      rs.cautientuan = i * Math.random();
      rs.xenangvuontre = i * Math.random();
      productListInfo.push(rs);
    }
    return productListInfo;
  }
  getTypeMachines() {
    return typeOfMachines;
  }
}
