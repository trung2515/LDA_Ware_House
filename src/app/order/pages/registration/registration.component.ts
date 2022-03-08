import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MainService } from 'src/app/mainservice.service';
import {  FormBuilder,FormControl,  FormGroup, Validators } from '@angular/forms';
import { CMNDModel } from './model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 

  constructor(  private _location: Location, private apiService:MainService) { }

  ngOnInit(): void {
    this.getDriver()
    this.driverForm = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
    this.cmndForm = new FormGroup({
      cmnd: new FormControl(null, Validators.required)
    });
    this.rommocForm = new FormGroup({
      romooc: new FormControl(null, Validators.required)
    });
    this.numPlateForm = new FormGroup({
      numPlate: new FormControl(null, Validators.required)
    });
  }

  driverForm!: FormGroup;
  title: string = 'Đăng ký phiếu đơn hàng';
  popupVisible: boolean = false
  drivers : any = []
  cmndForm!: FormGroup;
  rommocForm!: FormGroup;
  numPlateForm!: FormGroup;
  cmnd_list: CMNDModel[]
  onBackClicked(e: any) {
    this._location.back()
  }
getDriver(){
  this.apiService.get('http://office.stvg.vn:51008/api/Loadcell/dstaixe').subscribe(
  (data) => {
    let datalist:any =  data
    this.drivers = datalist.listtx
    this.cmnd_list =   this.drivers.map((d: any) => new CMNDModel(d));
    console.log('dsTaiXe', this.drivers );
    console.log('dsCMND', this.cmnd_list);
    
  }
  )
}
onSelectChange(data:any){
  console.log('datafilter',data);
  const { formValue, field } = data;
  // console.log(formValue);
  if (formValue) {
    console.log(formValue);   
    if (field == 'name') {
      this.cmndForm.controls['cmnd'].setValue(formValue.value);
    } else {
      console.log(formValue.nameOwn);

      this.driverForm.controls['name'].setValue(formValue.value);
    }
  }
}








  SaveShift(){

  }
  closePop = () => {
    this.popupVisible = false;
  };
}
