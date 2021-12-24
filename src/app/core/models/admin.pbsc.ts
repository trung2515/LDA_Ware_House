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
  GRPC_ACCOUNT_CLIENT_SETTINGS,
  GRPC_ADMINISTRATOR_CLIENT_SETTINGS,
  GRPC_WARE_HOUSE_CLIENT_SETTINGS,
  GRPC_CARD_CLIENT_SETTINGS,
  GRPC_REPORT_CLIENT_SETTINGS,
  GRPC_RECORD_CONFIRM_CLIENT_SETTINGS
} from './admin.pbconf';
/**
 * Service client implementation for client.Account
 */
@Injectable({ providedIn: 'any' })
export class AccountClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /client.Account/SignIn
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.UserReply>>
     */
    signIn: (
      requestData: client000.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.UserReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Account/SignIn',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.UserReply
      });
    },
    /**
     * Unary RPC for /client.Account/ChangePassword
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
        path: '/client.Account/ChangePassword',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Account/InsertUser
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
        path: '/client.Account/InsertUser',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Account/UpdateUser
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
        path: '/client.Account/UpdateUser',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Account/DeleteUser
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
        path: '/client.Account/DeleteUser',
        requestData,
        requestMetadata,
        requestClass: client000.UserInfo,
        responseClass: client000.Response
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ACCOUNT_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.Account', settings);
  }

  /**
   * Unary RPC for /client.Account/SignIn
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.UserReply>
   */
  signIn(
    requestData: client000.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.UserReply> {
    return this.$raw
      .signIn(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Account/ChangePassword
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
   * Unary RPC for /client.Account/InsertUser
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
   * Unary RPC for /client.Account/UpdateUser
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
   * Unary RPC for /client.Account/DeleteUser
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
}
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
     * Unary RPC for /client.Administrator/GetListMasterData
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.MasterDataResponse>>
     */
    getListMasterData: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListMasterData',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.MasterDataResponse
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
     * Unary RPC for /client.Administrator/GetListPosition
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.MasterDataResponse>>
     */
    getListPosition: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListPosition',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.MasterDataResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListDepartment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.DepartmentResponse>>
     */
    getListDepartment: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.DepartmentResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListDepartment',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.DepartmentResponse
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListRecordObject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.RecordObjectResponse>>
     */
    getListRecordObject: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.RecordObjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListRecordObject',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.RecordObjectResponse
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
     * Unary RPC for /client.Administrator/InsertMaster
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertMaster: (
      requestData: client000.MasterDataInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertMaster',
        requestData,
        requestMetadata,
        requestClass: client000.MasterDataInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateMaster
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateMaster: (
      requestData: client000.MasterDataInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateMaster',
        requestData,
        requestMetadata,
        requestClass: client000.MasterDataInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/SetDeletedMaster
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    setDeletedMaster: (
      requestData: client000.MasterDataInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/SetDeletedMaster',
        requestData,
        requestMetadata,
        requestClass: client000.MasterDataInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListMaster
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    getListMaster: (
      requestData: client000.MasterDataInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListMaster',
        requestData,
        requestMetadata,
        requestClass: client000.MasterDataInfo,
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
    },
    /**
     * Unary RPC for /client.Administrator/InsertRecordObject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertRecordObject: (
      requestData: client000.RecordObjectInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertRecordObject',
        requestData,
        requestMetadata,
        requestClass: client000.RecordObjectInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteRecordObject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteRecordObject: (
      requestData: client000.RecordObjectInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteRecordObject',
        requestData,
        requestMetadata,
        requestClass: client000.RecordObjectInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateRecordObject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateRecordObject: (
      requestData: client000.RecordObjectInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateRecordObject',
        requestData,
        requestMetadata,
        requestClass: client000.RecordObjectInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/InsertTransportationUnit
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertTransportationUnit: (
      requestData: client000.TransportationUnitInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/InsertTransportationUnit',
        requestData,
        requestMetadata,
        requestClass: client000.TransportationUnitInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/UpdateTransportationUnit
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateTransportationUnit: (
      requestData: client000.TransportationUnitInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/UpdateTransportationUnit',
        requestData,
        requestMetadata,
        requestClass: client000.TransportationUnitInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/DeleteTransportationUnit
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteTransportationUnit: (
      requestData: client000.TransportationUnitInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/DeleteTransportationUnit',
        requestData,
        requestMetadata,
        requestClass: client000.TransportationUnitInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Administrator/GetListTransportationUnit
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.TransportationUnitResponse>>
     */
    getListTransportationUnit: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.TransportationUnitResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Administrator/GetListTransportationUnit',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TransportationUnitResponse
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
   * Unary RPC for /client.Administrator/GetListMasterData
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.MasterDataResponse>
   */
  getListMasterData(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.MasterDataResponse> {
    return this.$raw
      .getListMasterData(requestData, requestMetadata)
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
   * Unary RPC for /client.Administrator/GetListPosition
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.MasterDataResponse>
   */
  getListPosition(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.MasterDataResponse> {
    return this.$raw
      .getListPosition(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListDepartment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.DepartmentResponse>
   */
  getListDepartment(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.DepartmentResponse> {
    return this.$raw
      .getListDepartment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListRecordObject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.RecordObjectResponse>
   */
  getListRecordObject(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.RecordObjectResponse> {
    return this.$raw
      .getListRecordObject(requestData, requestMetadata)
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
   * Unary RPC for /client.Administrator/InsertMaster
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertMaster(
    requestData: client000.MasterDataInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertMaster(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateMaster
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateMaster(
    requestData: client000.MasterDataInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateMaster(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/SetDeletedMaster
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  setDeletedMaster(
    requestData: client000.MasterDataInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .setDeletedMaster(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListMaster
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  getListMaster(
    requestData: client000.MasterDataInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .getListMaster(requestData, requestMetadata)
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

  /**
   * Unary RPC for /client.Administrator/InsertRecordObject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertRecordObject(
    requestData: client000.RecordObjectInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertRecordObject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteRecordObject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteRecordObject(
    requestData: client000.RecordObjectInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteRecordObject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateRecordObject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateRecordObject(
    requestData: client000.RecordObjectInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateRecordObject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/InsertTransportationUnit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertTransportationUnit(
    requestData: client000.TransportationUnitInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertTransportationUnit(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/UpdateTransportationUnit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateTransportationUnit(
    requestData: client000.TransportationUnitInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateTransportationUnit(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/DeleteTransportationUnit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteTransportationUnit(
    requestData: client000.TransportationUnitInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteTransportationUnit(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Administrator/GetListTransportationUnit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.TransportationUnitResponse>
   */
  getListTransportationUnit(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.TransportationUnitResponse> {
    return this.$raw
      .getListTransportationUnit(requestData, requestMetadata)
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
     * Unary RPC for /client.WareHouse/GetListShiftByDate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ShiftResponse>>
     */
    getListShiftByDate: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ShiftResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/GetListShiftByDate',
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
     * Unary RPC for /client.WareHouse/GetListAllParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ParcelResponse>>
     */
    getListAllParcel: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ParcelResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/GetListAllParcel',
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
     * Unary RPC for /client.WareHouse/GetListTask
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.TaskResponse>>
     */
    getListTask: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.TaskResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/GetListTask',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TaskResponse
      });
    },
    /**
     * Unary RPC for /client.WareHouse/getListTaskDetailById
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.TaskDetailResponse>>
     */
    getListTaskDetailById: (
      requestData: client000.TaskInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.TaskDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/getListTaskDetailById',
        requestData,
        requestMetadata,
        requestClass: client000.TaskInfo,
        responseClass: client000.TaskDetailResponse
      });
    },
    /**
     * Unary RPC for /client.WareHouse/getListTaskDetail
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.TaskDetailResponse>>
     */
    getListTaskDetail: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.TaskDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/getListTaskDetail',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TaskDetailResponse
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
     * Unary RPC for /client.WareHouse/DeleteParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteParcel: (
      requestData: client000.ParcelInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/DeleteParcel',
        requestData,
        requestMetadata,
        requestClass: client000.ParcelInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/InsertTask
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    insertTask: (
      requestData: client000.InsertTaskRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/InsertTask',
        requestData,
        requestMetadata,
        requestClass: client000.InsertTaskRequest,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/UpdateTask
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateTask: (
      requestData: client000.InsertTaskRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/UpdateTask',
        requestData,
        requestMetadata,
        requestClass: client000.InsertTaskRequest,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/DeleteTask
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteTask: (
      requestData: client000.TaskInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/DeleteTask',
        requestData,
        requestMetadata,
        requestClass: client000.TaskInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/UpdateConfirmProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateConfirmProduct: (
      requestData: client000.ConfirmProduction1000Info,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/UpdateConfirmProduct',
        requestData,
        requestMetadata,
        requestClass: client000.ConfirmProduction1000Info,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.WareHouse/GetConfirmProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ConfirmProductionResponse>>
     */
    getConfirmProduct: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ConfirmProductionResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.WareHouse/GetConfirmProduct',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ConfirmProductionResponse
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
   * Unary RPC for /client.WareHouse/GetListShiftByDate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ShiftResponse>
   */
  getListShiftByDate(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ShiftResponse> {
    return this.$raw
      .getListShiftByDate(requestData, requestMetadata)
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
   * Unary RPC for /client.WareHouse/GetListAllParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ParcelResponse>
   */
  getListAllParcel(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ParcelResponse> {
    return this.$raw
      .getListAllParcel(requestData, requestMetadata)
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
   * Unary RPC for /client.WareHouse/GetListTask
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.TaskResponse>
   */
  getListTask(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.TaskResponse> {
    return this.$raw
      .getListTask(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/getListTaskDetailById
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.TaskDetailResponse>
   */
  getListTaskDetailById(
    requestData: client000.TaskInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.TaskDetailResponse> {
    return this.$raw
      .getListTaskDetailById(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/getListTaskDetail
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.TaskDetailResponse>
   */
  getListTaskDetail(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.TaskDetailResponse> {
    return this.$raw
      .getListTaskDetail(requestData, requestMetadata)
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
   * Unary RPC for /client.WareHouse/DeleteParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteParcel(
    requestData: client000.ParcelInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/InsertTask
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  insertTask(
    requestData: client000.InsertTaskRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .insertTask(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/UpdateTask
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateTask(
    requestData: client000.InsertTaskRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateTask(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/DeleteTask
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteTask(
    requestData: client000.TaskInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteTask(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/UpdateConfirmProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateConfirmProduct(
    requestData: client000.ConfirmProduction1000Info,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateConfirmProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.WareHouse/GetConfirmProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ConfirmProductionResponse>
   */
  getConfirmProduct(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ConfirmProductionResponse> {
    return this.$raw
      .getConfirmProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for client.Card
 */
@Injectable({ providedIn: 'any' })
export class CardClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /client.Card/GetListCard
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.CardDetailResponse>>
     */
    getListCard: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.CardDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Card/GetListCard',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.CardDetailResponse
      });
    },
    /**
     * Unary RPC for /client.Card/GetListCar50kg
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.CardDetailResponse>>
     */
    getListCar50kg: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.CardDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Card/GetListCar50kg',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.CardDetailResponse
      });
    },
    /**
     * Unary RPC for /client.Card/UpdateCard50kg
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateCard50kg: (
      requestData: client000.InsertCardRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Card/UpdateCard50kg',
        requestData,
        requestMetadata,
        requestClass: client000.InsertCardRequest,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Card/SetChangeableCard
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    setChangeableCard: (
      requestData: client000.CardDetailInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Card/SetChangeableCard',
        requestData,
        requestMetadata,
        requestClass: client000.CardDetailInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Card/DeleteCard
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    deleteCard: (
      requestData: client000.CardDetailInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Card/DeleteCard',
        requestData,
        requestMetadata,
        requestClass: client000.CardDetailInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Card/InsertOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.OrderResponse>>
     */
    insertOrder: (
      requestData: client000.OrderInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.OrderResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Card/InsertOrder',
        requestData,
        requestMetadata,
        requestClass: client000.OrderInfo,
        responseClass: client000.OrderResponse
      });
    },
    /**
     * Unary RPC for /client.Card/UpdateOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.Response>>
     */
    updateOrder: (
      requestData: client000.OrderInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Card/UpdateOrder',
        requestData,
        requestMetadata,
        requestClass: client000.OrderInfo,
        responseClass: client000.Response
      });
    },
    /**
     * Unary RPC for /client.Card/GetOrderByCode
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.OrderResponse>>
     */
    getOrderByCode: (
      requestData: client000.OrderInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.OrderResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Card/GetOrderByCode',
        requestData,
        requestMetadata,
        requestClass: client000.OrderInfo,
        responseClass: client000.OrderResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CARD_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.Card', settings);
  }

  /**
   * Unary RPC for /client.Card/GetListCard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.CardDetailResponse>
   */
  getListCard(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.CardDetailResponse> {
    return this.$raw
      .getListCard(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Card/GetListCar50kg
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.CardDetailResponse>
   */
  getListCar50kg(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.CardDetailResponse> {
    return this.$raw
      .getListCar50kg(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Card/UpdateCard50kg
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateCard50kg(
    requestData: client000.InsertCardRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateCard50kg(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Card/SetChangeableCard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  setChangeableCard(
    requestData: client000.CardDetailInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .setChangeableCard(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Card/DeleteCard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  deleteCard(
    requestData: client000.CardDetailInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .deleteCard(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Card/InsertOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.OrderResponse>
   */
  insertOrder(
    requestData: client000.OrderInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.OrderResponse> {
    return this.$raw
      .insertOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Card/UpdateOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.Response>
   */
  updateOrder(
    requestData: client000.OrderInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.Response> {
    return this.$raw
      .updateOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Card/GetOrderByCode
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.OrderResponse>
   */
  getOrderByCode(
    requestData: client000.OrderInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.OrderResponse> {
    return this.$raw
      .getOrderByCode(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for client.Report
 */
@Injectable({ providedIn: 'any' })
export class ReportClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /client.Report/GetReportTransport
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.TransportResponse>>
     */
    getReportTransport: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.TransportResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Report/GetReportTransport',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TransportResponse
      });
    },
    /**
     * Unary RPC for /client.Report/GetReportImportExport
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.CardDetailResponse>>
     */
    getReportImportExport: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.CardDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Report/GetReportImportExport',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.CardDetailResponse
      });
    },
    /**
     * Unary RPC for /client.Report/GetReportInventory
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.ReportInventoryResponse>>
     */
    getReportInventory: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.ReportInventoryResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Report/GetReportInventory',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ReportInventoryResponse
      });
    },
    /**
     * Unary RPC for /client.Report/GetReportOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.OrderReply>>
     */
    getReportOrder: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.OrderReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Report/GetReportOrder',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.OrderReply
      });
    },
    /**
     * Unary RPC for /client.Report/GetReportError
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.CardDetailResponse>>
     */
    getReportError: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.CardDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Report/GetReportError',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.CardDetailResponse
      });
    },
    /**
     * Unary RPC for /client.Report/GetReportQRCode
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.QRCodeResponse>>
     */
    getReportQRCode: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.QRCodeResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Report/GetReportQRCode',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.QRCodeResponse
      });
    },
    /**
     * Unary RPC for /client.Report/GetQRCodeByTransportIn
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.QRCodeResponse>>
     */
    getQRCodeByTransportIn: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.QRCodeResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Report/GetQRCodeByTransportIn',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.QRCodeResponse
      });
    },
    /**
     * Unary RPC for /client.Report/GetQRCodeByTransportOut
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.QRCodeResponse>>
     */
    getQRCodeByTransportOut: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.QRCodeResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Report/GetQRCodeByTransportOut',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.QRCodeResponse
      });
    },
    /**
     * Unary RPC for /client.Report/GetQRCodeByOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.QRCodeResponse>>
     */
    getQRCodeByOrder: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.QRCodeResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Report/GetQRCodeByOrder',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.QRCodeResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_REPORT_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.Report', settings);
  }

  /**
   * Unary RPC for /client.Report/GetReportTransport
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.TransportResponse>
   */
  getReportTransport(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.TransportResponse> {
    return this.$raw
      .getReportTransport(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Report/GetReportImportExport
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.CardDetailResponse>
   */
  getReportImportExport(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.CardDetailResponse> {
    return this.$raw
      .getReportImportExport(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Report/GetReportInventory
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.ReportInventoryResponse>
   */
  getReportInventory(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.ReportInventoryResponse> {
    return this.$raw
      .getReportInventory(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Report/GetReportOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.OrderReply>
   */
  getReportOrder(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.OrderReply> {
    return this.$raw
      .getReportOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Report/GetReportError
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.CardDetailResponse>
   */
  getReportError(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.CardDetailResponse> {
    return this.$raw
      .getReportError(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Report/GetReportQRCode
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.QRCodeResponse>
   */
  getReportQRCode(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.QRCodeResponse> {
    return this.$raw
      .getReportQRCode(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Report/GetQRCodeByTransportIn
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.QRCodeResponse>
   */
  getQRCodeByTransportIn(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.QRCodeResponse> {
    return this.$raw
      .getQRCodeByTransportIn(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Report/GetQRCodeByTransportOut
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.QRCodeResponse>
   */
  getQRCodeByTransportOut(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.QRCodeResponse> {
    return this.$raw
      .getQRCodeByTransportOut(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Report/GetQRCodeByOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.QRCodeResponse>
   */
  getQRCodeByOrder(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.QRCodeResponse> {
    return this.$raw
      .getQRCodeByOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for client.RecordConfirm
 */
@Injectable({ providedIn: 'any' })
export class RecordConfirmClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /client.RecordConfirm/GetListProduct
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
        path: '/client.RecordConfirm/GetListProduct',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.ProductResponse
      });
    },
    /**
     * Unary RPC for /client.RecordConfirm/GetListTypeProduct
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
        path: '/client.RecordConfirm/GetListTypeProduct',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TypeProductResponse
      });
    },
    /**
     * Unary RPC for /client.RecordConfirm/GetListTypePacket
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
        path: '/client.RecordConfirm/GetListTypePacket',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TypePacketResponse
      });
    },
    /**
     * Unary RPC for /client.RecordConfirm/GetListRecordObject
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.RecordObjectResponse>>
     */
    getListRecordObject: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.RecordObjectResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.RecordConfirm/GetListRecordObject',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.RecordObjectResponse
      });
    },
    /**
     * Unary RPC for /client.RecordConfirm/GetListCard
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.CardDetailResponse>>
     */
    getListCard: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.CardDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.RecordConfirm/GetListCard',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.CardDetailResponse
      });
    },
    /**
     * Unary RPC for /client.RecordConfirm/GetListError
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.CardDetailResponse>>
     */
    getListError: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.CardDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.RecordConfirm/GetListError',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.CardDetailResponse
      });
    },
    /**
     * Unary RPC for /client.RecordConfirm/GetListTransport
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<client000.TransportResponse>>
     */
    getListTransport: (
      requestData: client000.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<client000.TransportResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.RecordConfirm/GetListTransport',
        requestData,
        requestMetadata,
        requestClass: client000.MasterRequest,
        responseClass: client000.TransportResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_RECORD_CONFIRM_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.RecordConfirm', settings);
  }

  /**
   * Unary RPC for /client.RecordConfirm/GetListProduct
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
   * Unary RPC for /client.RecordConfirm/GetListTypeProduct
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
   * Unary RPC for /client.RecordConfirm/GetListTypePacket
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
   * Unary RPC for /client.RecordConfirm/GetListRecordObject
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.RecordObjectResponse>
   */
  getListRecordObject(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.RecordObjectResponse> {
    return this.$raw
      .getListRecordObject(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.RecordConfirm/GetListCard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.CardDetailResponse>
   */
  getListCard(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.CardDetailResponse> {
    return this.$raw
      .getListCard(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.RecordConfirm/GetListError
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.CardDetailResponse>
   */
  getListError(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.CardDetailResponse> {
    return this.$raw
      .getListError(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.RecordConfirm/GetListTransport
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.TransportResponse>
   */
  getListTransport(
    requestData: client000.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<client000.TransportResponse> {
    return this.$raw
      .getListTransport(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
