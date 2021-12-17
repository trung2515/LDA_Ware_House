import { Injectable } from '@angular/core';
import { Driver, Order, OrderModel } from '../models/shipping-model';

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

}
