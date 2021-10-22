/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcClientSettings,
  GrpcEvent
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './admin.pb';
import * as client000 from './model.pb';
import { GRPC_ADMINISTRATOR_CLIENT_SETTINGS } from './admin.pbconf';
/**
 * Service client implementation for client.Administrator
 */
@Injectable({
  providedIn: 'root'
})
export class AdministratorClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_ADMINISTRATOR_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.Administrator', settings);
  }

  /**
   * Unary RPC for /client.Administrator/GetListCodePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.CodePacketResponse>
   */
  getListCodePacket(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.CodePacketResponse> {
    return this.getListCodePacket$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListCodePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.CodePacketResponse>>
   */
  getListCodePacket$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.CodePacketResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListCodePacket',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.CodePacketResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/GetListEquipment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.EquipmentResponse>
   */
  getListEquipment(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.EquipmentResponse> {
    return this.getListEquipment$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/GetListEquipment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.EquipmentResponse>>
   */
  getListEquipment$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.EquipmentResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListEquipment',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.EquipmentResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/GetListPackingUnit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.PackingUnitResponse>
   */
  getListPackingUnit(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.PackingUnitResponse> {
    return this.getListPackingUnit$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListPackingUnit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.PackingUnitResponse>>
   */
  getListPackingUnit$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.PackingUnitResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListPackingUnit',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.PackingUnitResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/GetListPartner
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.PartnerResponse>
   */
  getListPartner(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.PartnerResponse> {
    return this.getListPartner$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/GetListPartner
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.PartnerResponse>>
   */
  getListPartner$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.PartnerResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListPartner',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.PartnerResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/GetListProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ProductResponse>
   */
  getListProduct(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.ProductResponse> {
    return this.getListProduct$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/GetListProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.ProductResponse>>
   */
  getListProduct$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.ProductResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListProduct',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.ProductResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/GetListReason
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ReasonResponse>
   */
  getListReason(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.ReasonResponse> {
    return this.getListReason$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/GetListReason
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.ReasonResponse>>
   */
  getListReason$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.ReasonResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListReason',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.ReasonResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/GetListTypeBill
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.TypeBillResponse>
   */
  getListTypeBill(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.TypeBillResponse> {
    return this.getListTypeBill$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/GetListTypeBill
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.TypeBillResponse>>
   */
  getListTypeBill$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.TypeBillResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListTypeBill',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.TypeBillResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/GetListTypePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.TypePacketResponse>
   */
  getListTypePacket(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.TypePacketResponse> {
    return this.getListTypePacket$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListTypePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.TypePacketResponse>>
   */
  getListTypePacket$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.TypePacketResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListTypePacket',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.TypePacketResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/GetListTypeProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.TypeProductResponse>
   */
  getListTypeProduct(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.TypeProductResponse> {
    return this.getListTypeProduct$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListTypeProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.TypeProductResponse>>
   */
  getListTypeProduct$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.TypeProductResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListTypeProduct',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.TypeProductResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/GetListWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.WareHouseResponse>
   */
  getListWareHouse(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.WareHouseResponse> {
    return this.getListWareHouse$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/GetListWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.WareHouseResponse>>
   */
  getListWareHouse$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.WareHouseResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/GetListWareHouse',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.WareHouseResponse
    });
  }
}
