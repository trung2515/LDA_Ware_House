import { Appointment } from './../model';
import { Injectable } from '@angular/core';


let appointments: Appointment[] = [];

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  getAppointments(): Appointment[] {
    for (var i = 1; i < 20; i++) {
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
          product: 'Alumin 1 Tấn',
          productRange: 3,
          packaging: 'Xả đáy',
          lot: 190,
          unit: 'XTRE',
          wareHouse: 'Kho TT'
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
          wareHouse: 'Kho TT'
        },
      ];
      appointments.push(item);
    }
    return appointments
  }

}
