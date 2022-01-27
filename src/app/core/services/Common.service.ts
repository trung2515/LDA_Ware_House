
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { OrderInfo, Product } from '../models/common';
import { MainService } from '../../mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseURL = environment.hostTra;
  constructor(private mainService: MainService) {}

  // product
  getProducts() {
    return this.mainService.get(this.baseURL + '/InfoLDA/dssanpham');
  }

  // type packet
  getTypePacket() {
    return this.mainService.get(this.baseURL + '/InfoLDA/dsloaibao');
  }

  // warehouse
  getWareHouseList() {
    return this.mainService.get(this.baseURL + '/InfoLDA/dskho');
  }

  // works list
  getWorks() {
    return this.mainService.get(this.baseURL + '/InfoLDA/dscongviec');
  }

  getWareErrors() {
    return this.mainService.get(this.baseURL + '/InfoLDA/dsloi');
  }
  // driver list
  getDriverList() {
    return this.mainService.get(this.baseURL + '/Loadcell/dstaixe');
  }
  // oto list
  getVehicleList() {
    return this.mainService.get(this.baseURL + '/Loadcell/dsxe');
  }
  // romooc list
  getNumberRomoocList() {
    return this.mainService.get(this.baseURL + '/Loadcell/dsromooc');
  }

  // get dvvc
  getDVVC() {
    return this.mainService.get(this.baseURL + '/Loadcell/dsvantai');
  }
  // regis driver ballot
  insertDriverBallot(param:OrderInfo){
    return this.mainService.post(this.baseURL + 'Loadcell/dkphieutaixe', param)
  }
}
