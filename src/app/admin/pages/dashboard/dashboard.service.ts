import { Product, TypeMachineModel } from './models';
import { Injectable } from '@angular/core';

let typeOfMachines: TypeMachineModel[] = [
  { value: 'palang', name: 'Palang' },
  { value: 'cautientuan', name: 'Cầu tiến tuấn' },
  { value: 'xenangvuontre', name: 'Xe nâng vườn tre' }
];
let productListInfo: any = [];

function GenerateProductList(): Product[] {
  let rs: Product[] = [];
  for (let i = 1; i <= 31; i++) {
    const now = new Date();
    const strDate = now.getMonth() + 1 + '/' + i + '/' + now.getFullYear();
    let product: Product = {
      id: i + '',
      name: i % 2 === 0
        ? 'Alumin 1 tấn'
        : i % 3 === 0
          ? 'Alumin 50kg'
          : i % 5 === 0
            ? 'Hydrat 1 tấn'
            : 'Hydrat 50kg',
      date: strDate,
      packaging_qty: 1000 * i,
      amountConsumption: 800 * i,
      inventory_qty: 1000 * i - 800 * i,
      machines_packaging: {
        palang: (1000 * i) / 3,
        cautientuan: (1000 * i) / 4,
        xenangvuontre: (1000 * i) / 5
      },
      machines_consumption: {
        palang: (1000 * i) / 8,
        cautientuan: (1000 * i) / 4,
        xenangvuontre: (1000 * i) / 2
      }
    };
    rs.push(product);
  }
  return rs;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getData(): Product[] {
    console.log(GenerateProductList())
    return GenerateProductList();
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
