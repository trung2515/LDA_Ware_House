import { AbstractControl } from "@angular/forms";

export class Driver {
  name: string;
  identity_card_num: number;
  ro_mooc_number: string;
  weight_registry: number;
  net_weight: number;
  number_plate: string;
}
export class Order {
  name: string;
  qty: number;
  grade_1: number;
  grade_2: number;
  bagging_type: string;
  shipping_unit_name: string;
}

export class OrderModel {
  id: string
  driverInfo: Driver;
  orderInfo: Order;
}
export class CustomValidator{
  // Number only validation
  static numeric(control: AbstractControl) {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };

    return null;
  }
}
// registration
export class ScheduleProduction {
  date: string;
  ca_no: 1 | 2

}
