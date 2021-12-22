import { Injectable } from '@angular/core';
import { QtyOnBaggingMachine, QtyAlumin50KG } from './models';



function getQtyOnBaggingMachine() {
  let qtyOnBaggingMachines: QtyOnBaggingMachine[] = []
  for (let i = 1; i < 200; i++) {
    let qtyOnBaggingMachine: QtyOnBaggingMachine = {
      id: i,
      ca: (i % 2) === 0 ? '1' : '2',
      date: i % 2 === 0 ? new Date('12/3/2021') : i %3===0 ? new Date('12/4/2021') : new Date('12/5/2021'),
      product_name: 'Ao '+i+' tấn',
      bag_type: 'Xả đáy 1 lần',
      bagging_machine: (i % 2 === 0) ? 'A' : 'B',
      display_bagM: i % 2 === 0 ? '105' : '555',
      username: i % 2 !== 0 ? 'nam' + i : 'nga',
      note: 'lô 101, 214',
    }
    qtyOnBaggingMachines.push(qtyOnBaggingMachine)
  }
  return qtyOnBaggingMachines
}

function getQty50Kg() {
  let qty50Kg: QtyAlumin50KG[] = []
  for (let i = 1; i < 200; i++) {
    let item: QtyAlumin50KG = {
      ca: (i % 2) === 0 ? '1' : '2',
      date: i % 2 === 0 ? new Date('12/3/2021') : i %3===0 ? new Date('12/4/2021') : new Date('12/5/2021'),
      product_name: 'Ao '+i+' tấn',
      bag_type: 'Xả đáy 1 lần',
      username: i % 2 !== 0 ? 'nam' + i : 'nga',
      card_type: i % 2 !== 0 ? 'NDM' : 'NDL',
      dv_dong: i % 2 !== 0 ? 'NUNG' : 'TRE',
      parcel: i % 2 !== 0 ? '190' : '180',
      quantity: Math.round(235*Math.random()),
      warehouse: i % 2 == 0? 'TT' : 'MR',
      product_type: '50KG',
      weight: Math.round(235*Math.random())
    }
    qty50Kg.push(item)
  }
  return qty50Kg
}

@Injectable({
  providedIn: 'root'
})
export class WarehouseReportService {
  getQtyOnBaggingMachine() {
    return getQtyOnBaggingMachine()
  }

  getReport50Kg(){
    return getQty50Kg();
  }
}
