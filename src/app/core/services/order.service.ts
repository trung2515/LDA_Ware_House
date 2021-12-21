import { Order } from './../../shipping-unit/models/shipping-model';
import {
  OrderInfo,
  OrderReply,
  OrderResponse,
  ReportInventoryResponse,
} from './../models/model.pb'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import {
  AdministratorClient,
  CardClient,
  ReportClient,
  WareHouseClient,
} from '../models/admin.pbsc'
import {
  CardDetailResponse,
  ResponseState,
  MasterRequest,
  TransportResponse,
} from '../models/model.pb'
import { AuthService } from './auth.service'

@Injectable()
export class OrderService {
  constructor(
    private cardClient: CardClient,
    private authService: AuthService,
  ) { }

  insertOrder(order: OrderInfo) {
    return this.cardClient.insertOrder(order);
  }

  updateOrder(order: OrderInfo) {
    return this.cardClient.updateOrder(order);
  }

  getOrderByCode(codeOrder: string) {
    let order: OrderInfo = new OrderInfo();
    order.codeOrder = codeOrder;
    return this.cardClient.getOrderByCode(order);
  }

}
