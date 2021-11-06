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
import {
  GRPC_ADMINISTRATOR_CLIENT_SETTINGS,
  GRPC_WARE_HOUSE_CLIENT_SETTINGS
} from './admin.pbconf';
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
    },
    /**
     * Unary RPC for /client.Administrator/GetListWork
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.WorkResponse>>
     */
    getListWork: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.WorkResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListWork',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.WorkResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListTypeEquipment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.MasterDataResponse>>
     */
    getListTypeEquipment: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListTypeEquipment',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.MasterDataResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListTypePartner
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.MasterDataResponse>>
     */
    getListTypePartner: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListTypePartner',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.MasterDataResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListUsers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.UserResponse>>
     */
    getListUsers: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.UserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListUsers',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.UserResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListDevices
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.DeviceResponse>>
     */
    getListDevices: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.DeviceResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListDevices',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.DeviceResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertCodePacket
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertCodePacket: (
      requestData: client000.CodePacketInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertCodePacket',
        requestData,
        requestMetadata,
        requestClass: client000.CodePacketInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateCodePacket
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateCodePacket: (
      requestData: client000.CodePacketInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateCodePacket',
        requestData,
        requestMetadata,
        requestClass: client000.CodePacketInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteCodePacket
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteCodePacket: (
      requestData: client000.CodePacketInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteCodePacket',
        requestData,
        requestMetadata,
        requestClass: client000.CodePacketInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertEquipment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertEquipment: (
      requestData: client000.EquipmentInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertEquipment',
        requestData,
        requestMetadata,
        requestClass: client000.EquipmentInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateEquipment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateEquipment: (
      requestData: client000.EquipmentInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateEquipment',
        requestData,
        requestMetadata,
        requestClass: client000.EquipmentInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteEquipment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteEquipment: (
      requestData: client000.EquipmentInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteEquipment',
        requestData,
        requestMetadata,
        requestClass: client000.EquipmentInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertPackingUnit
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertPackingUnit: (
      requestData: client000.PackingUnitInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertPackingUnit',
        requestData,
        requestMetadata,
        requestClass: client000.PackingUnitInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdatePackingUnit
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updatePackingUnit: (
      requestData: client000.PackingUnitInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdatePackingUnit',
        requestData,
        requestMetadata,
        requestClass: client000.PackingUnitInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeletePackingUnit
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deletePackingUnit: (
      requestData: client000.PackingUnitInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeletePackingUnit',
        requestData,
        requestMetadata,
        requestClass: client000.PackingUnitInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertPartner
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertPartner: (
      requestData: client000.PartnerInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertPartner',
        requestData,
        requestMetadata,
        requestClass: client000.PartnerInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdatePartner
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updatePartner: (
      requestData: client000.PartnerInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdatePartner',
        requestData,
        requestMetadata,
        requestClass: client000.PartnerInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeletePartner
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deletePartner: (
      requestData: client000.PartnerInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeletePartner',
        requestData,
        requestMetadata,
        requestClass: client000.PartnerInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertProduct: (
      requestData: client000.ProductInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertProduct',
        requestData,
        requestMetadata,
        requestClass: client000.ProductInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateProduct: (
      requestData: client000.ProductInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateProduct',
        requestData,
        requestMetadata,
        requestClass: client000.ProductInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteProduct: (
      requestData: client000.ProductInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteProduct',
        requestData,
        requestMetadata,
        requestClass: client000.ProductInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertReason
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertReason: (
      requestData: client000.ReasonInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertReason',
        requestData,
        requestMetadata,
        requestClass: client000.ReasonInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateReason
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateReason: (
      requestData: client000.ReasonInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateReason',
        requestData,
        requestMetadata,
        requestClass: client000.ReasonInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteReason
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteReason: (
      requestData: client000.ReasonInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteReason',
        requestData,
        requestMetadata,
        requestClass: client000.ReasonInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertTypeBill
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertTypeBill: (
      requestData: client000.TypeBillInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertTypeBill',
        requestData,
        requestMetadata,
        requestClass: client000.TypeBillInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateTypeBill
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateTypeBill: (
      requestData: client000.TypeBillInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateTypeBill',
        requestData,
        requestMetadata,
        requestClass: client000.TypeBillInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteTypeBill
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteTypeBill: (
      requestData: client000.TypeBillInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteTypeBill',
        requestData,
        requestMetadata,
        requestClass: client000.TypeBillInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertTypePacket
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertTypePacket: (
      requestData: client000.TypePacketInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertTypePacket',
        requestData,
        requestMetadata,
        requestClass: client000.TypePacketInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateTypePacket
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateTypePacket: (
      requestData: client000.TypePacketInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateTypePacket',
        requestData,
        requestMetadata,
        requestClass: client000.TypePacketInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteTypePacket
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteTypePacket: (
      requestData: client000.TypePacketInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteTypePacket',
        requestData,
        requestMetadata,
        requestClass: client000.TypePacketInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertTypeProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertTypeProduct: (
      requestData: client000.TypeProductInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertTypeProduct',
        requestData,
        requestMetadata,
        requestClass: client000.TypeProductInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateTypeProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateTypeProduct: (
      requestData: client000.TypeProductInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateTypeProduct',
        requestData,
        requestMetadata,
        requestClass: client000.TypeProductInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteTypeProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteTypeProduct: (
      requestData: client000.TypeProductInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteTypeProduct',
        requestData,
        requestMetadata,
        requestClass: client000.TypeProductInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertWareHouse: (
      requestData: client000.WareHouseInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertWareHouse',
        requestData,
        requestMetadata,
        requestClass: client000.WareHouseInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateWareHouse: (
      requestData: client000.WareHouseInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateWareHouse',
        requestData,
        requestMetadata,
        requestClass: client000.WareHouseInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteWareHouse: (
      requestData: client000.WareHouseInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteWareHouse',
        requestData,
        requestMetadata,
        requestClass: client000.WareHouseInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertWork
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertWork: (
      requestData: client000.WorkInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertWork',
        requestData,
        requestMetadata,
        requestClass: client000.WorkInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateWork
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateWork: (
      requestData: client000.WorkInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateWork',
        requestData,
        requestMetadata,
        requestClass: client000.WorkInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteWork
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteWork: (
      requestData: client000.WorkInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteWork',
        requestData,
        requestMetadata,
        requestClass: client000.WorkInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertUser: (
      requestData: client000.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertUser',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateUser: (
      requestData: client000.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateUser',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteUser: (
      requestData: client000.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteUser',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/Login
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.UserReply>>
     */
    login: (
      requestData: client000.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.UserReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/Login',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.UserReply
      });
    },
    /**
     * Unary RPC for /client.Administrator/ChangePassword
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    changePassword: (
      requestData: client000.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/ChangePassword',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertDevice
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertDevice: (
      requestData: client000.DeviceInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertDevice',
        requestData,
        requestMetadata,
        requestClass: client000.DeviceInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateDevice
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateDevice: (
      requestData: client000.DeviceInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateDevice',
        requestData,
        requestMetadata,
        requestClass: client000.DeviceInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteDevice
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteDevice: (
      requestData: client000.DeviceInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteDevice',
        requestData,
        requestMetadata,
        requestClass: client000.DeviceInfo,
        responseClass: client000.Response
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

  /**
   * Unary RPC for /client.Administrator/GetListWork
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.WorkResponse>
   */
  getListWork(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.WorkResponse> {
    return this.$raw
      .getListWork(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListTypeEquipment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.MasterDataResponse>
   */
  getListTypeEquipment(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.MasterDataResponse> {
    return this.$raw
      .getListTypeEquipment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListTypePartner
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.MasterDataResponse>
   */
  getListTypePartner(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.MasterDataResponse> {
    return this.$raw
      .getListTypePartner(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListUsers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.UserResponse>
   */
  getListUsers(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.UserResponse> {
    return this.$raw
      .getListUsers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListDevices
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.DeviceResponse>
   */
  getListDevices(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.DeviceResponse> {
    return this.$raw
      .getListDevices(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertCodePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertCodePacket(
    requestData: client000.CodePacketInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertCodePacket(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateCodePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateCodePacket(
    requestData: client000.CodePacketInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateCodePacket(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteCodePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteCodePacket(
    requestData: client000.CodePacketInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteCodePacket(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertEquipment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertEquipment(
    requestData: client000.EquipmentInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertEquipment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateEquipment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateEquipment(
    requestData: client000.EquipmentInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateEquipment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteEquipment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteEquipment(
    requestData: client000.EquipmentInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteEquipment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertPackingUnit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertPackingUnit(
    requestData: client000.PackingUnitInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertPackingUnit(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdatePackingUnit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updatePackingUnit(
    requestData: client000.PackingUnitInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updatePackingUnit(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeletePackingUnit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deletePackingUnit(
    requestData: client000.PackingUnitInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deletePackingUnit(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertPartner
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertPartner(
    requestData: client000.PartnerInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertPartner(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdatePartner
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updatePartner(
    requestData: client000.PartnerInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updatePartner(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeletePartner
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deletePartner(
    requestData: client000.PartnerInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deletePartner(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertProduct(
    requestData: client000.ProductInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateProduct(
    requestData: client000.ProductInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteProduct(
    requestData: client000.ProductInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertReason
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertReason(
    requestData: client000.ReasonInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertReason(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateReason
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateReason(
    requestData: client000.ReasonInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateReason(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteReason
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteReason(
    requestData: client000.ReasonInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteReason(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertTypeBill
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertTypeBill(
    requestData: client000.TypeBillInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertTypeBill(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateTypeBill
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateTypeBill(
    requestData: client000.TypeBillInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateTypeBill(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteTypeBill
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteTypeBill(
    requestData: client000.TypeBillInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteTypeBill(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertTypePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertTypePacket(
    requestData: client000.TypePacketInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertTypePacket(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateTypePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateTypePacket(
    requestData: client000.TypePacketInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateTypePacket(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteTypePacket
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteTypePacket(
    requestData: client000.TypePacketInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteTypePacket(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertTypeProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertTypeProduct(
    requestData: client000.TypeProductInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertTypeProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateTypeProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateTypeProduct(
    requestData: client000.TypeProductInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateTypeProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteTypeProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteTypeProduct(
    requestData: client000.TypeProductInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteTypeProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertWareHouse(
    requestData: client000.WareHouseInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateWareHouse(
    requestData: client000.WareHouseInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteWareHouse(
    requestData: client000.WareHouseInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertWork
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertWork(
    requestData: client000.WorkInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertWork(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateWork
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateWork(
    requestData: client000.WorkInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateWork(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteWork
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteWork(
    requestData: client000.WorkInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteWork(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertUser(
    requestData: client000.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateUser(
    requestData: client000.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteUser(
    requestData: client000.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/Login
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.UserReply>
   */
  login(
    requestData: client000.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.UserReply> {
    return this.$raw
      .login(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/ChangePassword
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  changePassword(
    requestData: client000.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .changePassword(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertDevice(
    requestData: client000.DeviceInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertDevice(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateDevice(
    requestData: client000.DeviceInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateDevice(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteDevice(
    requestData: client000.DeviceInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteDevice(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for client.WareHouse
 */
@Injectable({ providedIn: 'any' })
export class WareHouseClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /client.WareHouse/GetListShift
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ShiftResponse>>
     */
    getListShift: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ShiftResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/GetListShift',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ShiftResponse
      });
    },
    /**
     * Unary RPC for /client.WareHouse/GetListShiftDetail
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ShiftDetailResponse>>
     */
    getListShiftDetail: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ShiftDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/GetListShiftDetail',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ShiftDetailResponse
      });
    },
    /**
     * Unary RPC for /client.WareHouse/GetListParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ParcelResponse>>
     */
    getListParcel: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ParcelResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/GetListParcel',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ParcelResponse
      });
    },
    /**
     * Unary RPC for /client.WareHouse/GetListParcelDetail
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ParcelDetailResponse>>
     */
    getListParcelDetail: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ParcelDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/GetListParcelDetail',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ParcelDetailResponse
      });
    },
    /**
     * Unary RPC for /client.WareHouse/GetListParcelDetailByCode
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ParcelDetailResponse>>
     */
    getListParcelDetailByCode: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ParcelDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/GetListParcelDetailByCode',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ParcelDetailResponse
      });
    },
    /**
     * Unary RPC for /client.WareHouse/NewInsertShift
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    newInsertShift: (
      requestData: client000.InsertShiftRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/NewInsertShift',
        requestData,
        requestMetadata,
        requestClass: client000.InsertShiftRequest,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/NewUpdateShift
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    newUpdateShift: (
      requestData: client000.InsertShiftRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/NewUpdateShift',
        requestData,
        requestMetadata,
        requestClass: client000.InsertShiftRequest,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/DeleteShift
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteShift: (
      requestData: client000.ShiftInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/DeleteShift',
        requestData,
        requestMetadata,
        requestClass: client000.ShiftInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/InsertParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertParcel: (
      requestData: client000.InsertParcelRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/InsertParcel',
        requestData,
        requestMetadata,
        requestClass: client000.InsertParcelRequest,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/UpdateParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateParcel: (
      requestData: client000.InsertParcelRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/UpdateParcel',
        requestData,
        requestMetadata,
        requestClass: client000.InsertParcelRequest,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/test
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ParcelResponse>>
     */
    test: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ParcelResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/test',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ParcelResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_WARE_HOUSE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.WareHouse', settings);
  }

  /**
   * Unary RPC for /client.WareHouse/GetListShift
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ShiftResponse>
   */
  getListShift(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ShiftResponse> {
    return this.$raw
      .getListShift(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/GetListShiftDetail
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ShiftDetailResponse>
   */
  getListShiftDetail(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ShiftDetailResponse> {
    return this.$raw
      .getListShiftDetail(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/GetListParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ParcelResponse>
   */
  getListParcel(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ParcelResponse> {
    return this.$raw
      .getListParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/GetListParcelDetail
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ParcelDetailResponse>
   */
  getListParcelDetail(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ParcelDetailResponse> {
    return this.$raw
      .getListParcelDetail(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/GetListParcelDetailByCode
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ParcelDetailResponse>
   */
  getListParcelDetailByCode(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ParcelDetailResponse> {
    return this.$raw
      .getListParcelDetailByCode(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/NewInsertShift
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  newInsertShift(
    requestData: client000.InsertShiftRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .newInsertShift(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/NewUpdateShift
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  newUpdateShift(
    requestData: client000.InsertShiftRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .newUpdateShift(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/DeleteShift
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteShift(
    requestData: client000.ShiftInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteShift(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/InsertParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertParcel(
    requestData: client000.InsertParcelRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/UpdateParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateParcel(
    requestData: client000.InsertParcelRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/test
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ParcelResponse>
   */
  test(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ParcelResponse> {
    return this.$raw
      .test(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
