import { Product } from './models';
import { Injectable } from '@angular/core';

let productListInfo: any = [];

function GenerateProductList(): Product[] {
  let rs: Product[] = [];
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
}
