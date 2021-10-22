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
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './admin.pb';
import * as client000 from './model.pb';
import { GRPC_ADMINISTRATOR_CLIENT_SETTINGS } from './admin.pbconf';
/**
 * Service client implementation for client.Administrator
 */
@Injectable({ providedIn: 'any' })
export class AdministratorClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /client.Administrator/GetListCodePacket
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.CodePacketResponse>>
     */
    getListCodePacket: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.CodePacketResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListCodePacket',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.CodePacketResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListEquipment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.EquipmentResponse>>
     */
    getListEquipment: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.EquipmentResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListEquipment',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.EquipmentResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListPackingUnit
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.PackingUnitResponse>>
     */
    getListPackingUnit: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.PackingUnitResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListPackingUnit',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.PackingUnitResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListPartner
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.PartnerResponse>>
     */
    getListPartner: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.PartnerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListPartner',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.PartnerResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ProductResponse>>
     */
    getListProduct: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ProductResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListProduct',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ProductResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListReason
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ReasonResponse>>
     */
    getListReason: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ReasonResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListReason',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ReasonResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListTypeBill
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.TypeBillResponse>>
     */
    getListTypeBill: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.TypeBillResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListTypeBill',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TypeBillResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListTypePacket
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.TypePacketResponse>>
     */
    getListTypePacket: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.TypePacketResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListTypePacket',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TypePacketResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListTypeProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.TypeProductResponse>>
     */
    getListTypeProduct: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.TypeProductResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListTypeProduct',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TypeProductResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.WareHouseResponse>>
     */
    getListWareHouse: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.WareHouseResponse>> => {
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
  };

  constructor(
    @Optional() @Inject(GRPC_ADMINISTRATOR_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.CodePacketResponse> {
    return this.$raw
      .getListCodePacket(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.EquipmentResponse> {
    return this.$raw
      .getListEquipment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.PackingUnitResponse> {
    return this.$raw
      .getListPackingUnit(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.PartnerResponse> {
    return this.$raw
      .getListPartner(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ProductResponse> {
    return this.$raw
      .getListProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ReasonResponse> {
    return this.$raw
      .getListReason(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.TypeBillResponse> {
    return this.$raw
      .getListTypeBill(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.TypePacketResponse> {
    return this.$raw
      .getListTypePacket(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.TypeProductResponse> {
    return this.$raw
      .getListTypeProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.WareHouseResponse> {
    return this.$raw
      .getListWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
