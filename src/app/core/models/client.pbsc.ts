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
import * as thisProto from './client.pb';
import {
  GRPC_ACCOUNT_CLIENT_SETTINGS,
  GRPC_IN_OUT_CLIENT_SETTINGS,
  GRPC_ORDER_CLIENT_SETTINGS
} from './client.pbconf';
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
     * @returns Observable<GrpcEvent<thisProto.UserReply>>
     */
    signIn: (
      requestData: thisProto.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Account/SignIn',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInfo,
        responseClass: thisProto.UserReply
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
   * @returns Observable<thisProto.UserReply>
   */
  signIn(
    requestData: thisProto.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserReply> {
    return this.$raw
      .signIn(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for client.InOut
 */
@Injectable({ providedIn: 'any' })
export class InOutClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /client.InOut/GetListActiveCustomer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CustomerResponse>>
     */
    getListActiveCustomer: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CustomerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListActiveCustomer',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.CustomerResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListAllCustomer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CustomerResponse>>
     */
    getListAllCustomer: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CustomerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListAllCustomer',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.CustomerResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListActiveUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserResponse>>
     */
    getListActiveUser: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListActiveUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.UserResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListAllUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserResponse>>
     */
    getListAllUser: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListAllUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.UserResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListGender
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.MasterDataResponse>>
     */
    getListGender: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListGender',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.MasterDataResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListPosition
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.MasterDataResponse>>
     */
    getListPosition: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListPosition',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.MasterDataResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListStatusOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.MasterDataResponse>>
     */
    getListStatusOrder: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListStatusOrder',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.MasterDataResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListTypeGood
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.MasterDataResponse>>
     */
    getListTypeGood: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListTypeGood',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.MasterDataResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListTypeQRCode
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.MasterDataResponse>>
     */
    getListTypeQRCode: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListTypeQRCode',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.MasterDataResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListTypeBag
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.MasterDataResponse>>
     */
    getListTypeBag: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.MasterDataResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListTypeBag',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.MasterDataResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListRemainParcelInWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ParcelInWareHouseResponse>>
     */
    getListRemainParcelInWareHouse: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ParcelInWareHouseResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListRemainParcelInWareHouse',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.ParcelInWareHouseResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/DeleteWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    deleteWareHouse: (
      requestData: thisProto.WareHouseInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/DeleteWareHouse',
        requestData,
        requestMetadata,
        requestClass: thisProto.WareHouseInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/InsertWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    insertWareHouse: (
      requestData: thisProto.WareHouseInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/InsertWareHouse',
        requestData,
        requestMetadata,
        requestClass: thisProto.WareHouseInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/UpdateWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    updateWareHouse: (
      requestData: thisProto.WareHouseInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/UpdateWareHouse',
        requestData,
        requestMetadata,
        requestClass: thisProto.WareHouseInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/InsertParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ParcelReply>>
     */
    insertParcel: (
      requestData: thisProto.ParcelInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ParcelReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/InsertParcel',
        requestData,
        requestMetadata,
        requestClass: thisProto.ParcelInfo,
        responseClass: thisProto.ParcelReply
      });
    },
    /**
     * Unary RPC for /client.InOut/UpdateWeightTotalParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    updateWeightTotalParcel: (
      requestData: thisProto.ParcelInWareHouseInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/UpdateWeightTotalParcel',
        requestData,
        requestMetadata,
        requestClass: thisProto.ParcelInWareHouseInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/UpdateWeightUsedParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    updateWeightUsedParcel: (
      requestData: thisProto.ParcelInWareHouseInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/UpdateWeightUsedParcel',
        requestData,
        requestMetadata,
        requestClass: thisProto.ParcelInWareHouseInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.WareHouseResponse>>
     */
    getListWareHouse: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.WareHouseResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListWareHouse',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.WareHouseResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListQRCodeParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.QRCodeResponse>>
     */
    getListQRCodeParcel: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.QRCodeResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListQRCodeParcel',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.QRCodeResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListArea
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AreaResponse>>
     */
    getListArea: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AreaResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListArea',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.AreaResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ParcelResponse>>
     */
    getListParcel: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ParcelResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListParcel',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.ParcelResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/DeleteUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    deleteUser: (
      requestData: thisProto.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/DeleteUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/InsertArea
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    insertArea: (
      requestData: thisProto.AreaInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/InsertArea',
        requestData,
        requestMetadata,
        requestClass: thisProto.AreaInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/InsertCustomer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    insertCustomer: (
      requestData: thisProto.CustomerInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/InsertCustomer',
        requestData,
        requestMetadata,
        requestClass: thisProto.CustomerInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/InsertQRCodeOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    insertQRCodeOrder: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/InsertQRCodeOrder',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/InsertQRCodeParcel
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    insertQRCodeParcel: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/InsertQRCodeParcel',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/InsertUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    insertUser: (
      requestData: thisProto.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/InsertUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/UpdateCustomerInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    updateCustomerInfo: (
      requestData: thisProto.CustomerInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/UpdateCustomerInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.CustomerInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/UpdateCustomerPass
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    updateCustomerPass: (
      requestData: thisProto.CustomerInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/UpdateCustomerPass',
        requestData,
        requestMetadata,
        requestClass: thisProto.CustomerInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/UpdateUserInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    updateUserInfo: (
      requestData: thisProto.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/UpdateUserInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/UpdateUserPass
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    updateUserPass: (
      requestData: thisProto.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/UpdateUserPass',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.InOut/GetListInfoAddress
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddressResponse>>
     */
    getListInfoAddress: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddressResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/GetListInfoAddress',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.AddressResponse
      });
    },
    /**
     * Unary RPC for /client.InOut/Test
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    test: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.InOut/Test',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.Response
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_IN_OUT_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.InOut', settings);
  }

  /**
   * Unary RPC for /client.InOut/GetListActiveCustomer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CustomerResponse>
   */
  getListActiveCustomer(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CustomerResponse> {
    return this.$raw
      .getListActiveCustomer(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListAllCustomer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CustomerResponse>
   */
  getListAllCustomer(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CustomerResponse> {
    return this.$raw
      .getListAllCustomer(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListActiveUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserResponse>
   */
  getListActiveUser(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserResponse> {
    return this.$raw
      .getListActiveUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListAllUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserResponse>
   */
  getListAllUser(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserResponse> {
    return this.$raw
      .getListAllUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListGender
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MasterDataResponse>
   */
  getListGender(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.MasterDataResponse> {
    return this.$raw
      .getListGender(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListPosition
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MasterDataResponse>
   */
  getListPosition(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.MasterDataResponse> {
    return this.$raw
      .getListPosition(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListStatusOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MasterDataResponse>
   */
  getListStatusOrder(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.MasterDataResponse> {
    return this.$raw
      .getListStatusOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListTypeGood
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MasterDataResponse>
   */
  getListTypeGood(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.MasterDataResponse> {
    return this.$raw
      .getListTypeGood(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListTypeQRCode
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MasterDataResponse>
   */
  getListTypeQRCode(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.MasterDataResponse> {
    return this.$raw
      .getListTypeQRCode(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListTypeBag
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MasterDataResponse>
   */
  getListTypeBag(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.MasterDataResponse> {
    return this.$raw
      .getListTypeBag(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListRemainParcelInWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ParcelInWareHouseResponse>
   */
  getListRemainParcelInWareHouse(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ParcelInWareHouseResponse> {
    return this.$raw
      .getListRemainParcelInWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/DeleteWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  deleteWareHouse(
    requestData: thisProto.WareHouseInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .deleteWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/InsertWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  insertWareHouse(
    requestData: thisProto.WareHouseInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .insertWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/UpdateWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateWareHouse(
    requestData: thisProto.WareHouseInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .updateWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/InsertParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ParcelReply>
   */
  insertParcel(
    requestData: thisProto.ParcelInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ParcelReply> {
    return this.$raw
      .insertParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/UpdateWeightTotalParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateWeightTotalParcel(
    requestData: thisProto.ParcelInWareHouseInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .updateWeightTotalParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/UpdateWeightUsedParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateWeightUsedParcel(
    requestData: thisProto.ParcelInWareHouseInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .updateWeightUsedParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WareHouseResponse>
   */
  getListWareHouse(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.WareHouseResponse> {
    return this.$raw
      .getListWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListQRCodeParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.QRCodeResponse>
   */
  getListQRCodeParcel(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.QRCodeResponse> {
    return this.$raw
      .getListQRCodeParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AreaResponse>
   */
  getListArea(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AreaResponse> {
    return this.$raw
      .getListArea(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ParcelResponse>
   */
  getListParcel(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ParcelResponse> {
    return this.$raw
      .getListParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/DeleteUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  deleteUser(
    requestData: thisProto.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .deleteUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/InsertArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  insertArea(
    requestData: thisProto.AreaInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .insertArea(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/InsertCustomer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  insertCustomer(
    requestData: thisProto.CustomerInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .insertCustomer(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/InsertQRCodeOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  insertQRCodeOrder(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .insertQRCodeOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/InsertQRCodeParcel
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  insertQRCodeParcel(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .insertQRCodeParcel(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/InsertUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  insertUser(
    requestData: thisProto.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .insertUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/UpdateCustomerInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateCustomerInfo(
    requestData: thisProto.CustomerInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .updateCustomerInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/UpdateCustomerPass
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateCustomerPass(
    requestData: thisProto.CustomerInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .updateCustomerPass(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/UpdateUserInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateUserInfo(
    requestData: thisProto.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .updateUserInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/UpdateUserPass
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateUserPass(
    requestData: thisProto.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .updateUserPass(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/GetListInfoAddress
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddressResponse>
   */
  getListInfoAddress(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddressResponse> {
    return this.$raw
      .getListInfoAddress(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.InOut/Test
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  test(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .test(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for client.Order
 */
@Injectable({ providedIn: 'any' })
export class OrderClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /client.Order/GetListOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.OrderResponse>>
     */
    getListOrder: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.OrderResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Order/GetListOrder',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.OrderResponse
      });
    },
    /**
     * Unary RPC for /client.Order/GetListORderByWareHouse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.OrderResponse>>
     */
    getListORderByWareHouse: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.OrderResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Order/GetListORderByWareHouse',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.OrderResponse
      });
    },
    /**
     * Unary RPC for /client.Order/GetReportSummary
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ReportSummaryResponse>>
     */
    getReportSummary: (
      requestData: thisProto.MasterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ReportSummaryResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Order/GetReportSummary',
        requestData,
        requestMetadata,
        requestClass: thisProto.MasterRequest,
        responseClass: thisProto.ReportSummaryResponse
      });
    },
    /**
     * Unary RPC for /client.Order/InsertOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.OrderReply>>
     */
    insertOrder: (
      requestData: thisProto.OrderInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.OrderReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Order/InsertOrder',
        requestData,
        requestMetadata,
        requestClass: thisProto.OrderInfo,
        responseClass: thisProto.OrderReply
      });
    },
    /**
     * Unary RPC for /client.Order/DeleteOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    deleteOrder: (
      requestData: thisProto.OrderInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Order/DeleteOrder',
        requestData,
        requestMetadata,
        requestClass: thisProto.OrderInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.Order/UpdateOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    updateOrder: (
      requestData: thisProto.OrderInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Order/UpdateOrder',
        requestData,
        requestMetadata,
        requestClass: thisProto.OrderInfo,
        responseClass: thisProto.Response
      });
    },
    /**
     * Unary RPC for /client.Order/UpdateStatusOrder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Response>>
     */
    updateStatusOrder: (
      requestData: thisProto.OrderInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Response>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/client.Order/UpdateStatusOrder',
        requestData,
        requestMetadata,
        requestClass: thisProto.OrderInfo,
        responseClass: thisProto.Response
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ORDER_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.Order', settings);
  }

  /**
   * Unary RPC for /client.Order/GetListOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OrderResponse>
   */
  getListOrder(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.OrderResponse> {
    return this.$raw
      .getListOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Order/GetListORderByWareHouse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OrderResponse>
   */
  getListORderByWareHouse(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.OrderResponse> {
    return this.$raw
      .getListORderByWareHouse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Order/GetReportSummary
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ReportSummaryResponse>
   */
  getReportSummary(
    requestData: thisProto.MasterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ReportSummaryResponse> {
    return this.$raw
      .getReportSummary(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Order/InsertOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.OrderReply>
   */
  insertOrder(
    requestData: thisProto.OrderInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.OrderReply> {
    return this.$raw
      .insertOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Order/DeleteOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  deleteOrder(
    requestData: thisProto.OrderInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .deleteOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Order/UpdateOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateOrder(
    requestData: thisProto.OrderInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .updateOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Order/UpdateStatusOrder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateStatusOrder(
    requestData: thisProto.OrderInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Response> {
    return this.$raw
      .updateStatusOrder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
