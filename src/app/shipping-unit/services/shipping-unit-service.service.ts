import { Injectable } from '@angular/core';
import { Driver, Order, OrderModel } from '../models/shipping-model';
import { Appointment } from '../pages/model';

function makeid(length: number) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateOrderList() {
  let result: OrderModel[] = [];
  for (let i = 0; i < 20; i++) {
    let order: OrderModel = {
      // id: makeid(20),
      id: i + '',
      driverInfo: {
        name: 'Nguyễn văn A',
        identity_card_num: 213456756789,
        ro_mooc_number: '78HA8385',
        weight_registry: 33500,
        net_weight: 36850,
        number_plate: '70A52632'
      },
      orderInfo: {
        name: 'Alumin 1 tấn',
        qty: 20,
        grade_1: 10,
        grade_2: 10,
        bagging_type: 'Đáy bằng',
        shipping_unit_name: 'Công ty cổ phần than miền Nam - VINANCO'
      }
    };
    result.push(order);
  }
  return result;
}
@Injectable({
  providedIn: 'root'
})
export class ShippingUnitService {
  getOrderList() {
    return generateOrderList();
  }
  generateId(): string {
    return makeid(36);
  }
  getProduct_options() {
    return ['Alumin 1 tấn', 'Alumin 50kg', 'Hydrat 1 tấn', 'Hydrat 50kg'];
  }
  getBagging_type_options() {
    return ['Xả đáy 1 lần', 'Cải tạo', 'Đáy liền'];
  }
  getAppointments(): Appointment[] {
    let appointments: Appointment[] = [];
    for (var i = 0; i < 20; i++) {
      let a = new Date();
      let item: any = {};
      item.id = i;
      item.text = 'Trung trader ' + i;
      // item.shift = i%2 +1
      item.shift = 1;
      item.startDate = new Date(
        new Date(a.getFullYear(), a.getMonth(), a.getDate() + i).setHours(1)
      );
      item.endDate = new Date(
        new Date(a.getFullYear(), a.getMonth(), a.getDate() + i).setHours(2)
      );
      item.description = 'test';
      item.shiftDetail = [
        {
          id: 1,
          option: '1',
          type: 'NDL',
          product: 'Alumin 1 Tấn' + i,
          productRange: 3,
          packaging: 'Xả đáy',
          lot: 190,
          unit: 'XTRE',
          wareHouse: 'Kho TT',
          machines_packaging:
            i % 2 === 0
              ? {
                machine_a: 1,
                machine_b: 10,
                machine_c: 100,
                machine_d: 1000,
                machine_e: 10000
              }
              : ''
        },
        {
          id: 2,
          option: '2',
          type: 'NDL',
          product: 'Alumin 1 Tấn',
          productRange: 3,
          packaging: 'Xả đáy',
          lot: 190,
          unit: 'XTRE',
          wareHouse: 'Kho TT',
          machines_packaging:
            i % 2 === 0
              ? {
                machine_a: 10000,
                machine_b: 1000,
                machine_c: 100,
                machine_d: 10,
                machine_e: 1
              }
              : ''
        }
      ];

      appointments.push(item);
    }
    return appointments;
  }
}
