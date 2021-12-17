import { ShiftService } from './../../../admin/pages/shift/services/shift.service';
import { Appointment } from './../../../admin/pages/shift/model';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-packaging-one',
  templateUrl: './add-packaging-one.component.html',
  styleUrls: ['./add-packaging-one.component.css']
})
export class AddPackagingOneComponent implements OnInit {
  now: Date = new Date();
  appointments: Appointment[] = [];
  qtyMachinesPackaging_1: FormGroup

  constructor( private formBuilder: FormBuilder,private location: Location, shiftService: ShiftService) {
    this.appointments = shiftService.getAppointments();
  }

  currentAppointment: Appointment = {
    id: 0,
    text: '',
    shift: 0,
    startDate: undefined,
    endDate: undefined,
    description: '',
    shiftDetail: []
  };

  ngOnInit(): void {
    this.currentAppointment =  this.getCurrentAppointment('12/18/2021', 1)
    this.qtyMachinesPackaging_1 =  this.formBuilder.group({

    })
  }

  onBackClicked() {
    this.location.back();
  }
  getCurrentAppointment(date: string, ca_no: number) {
    return  this.appointments.find(appointment => {
      const { startDate, shift } = appointment;
      const currentDate = `${startDate.getMonth() +
        1}/${startDate.getDate()}/${startDate.getFullYear()}`;
      return currentDate === date && shift === ca_no;
    });
  }
}
