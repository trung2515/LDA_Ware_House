/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcCallType } from '@ngx-grpc/common';
import { GrpcWorkerServiceClientDef } from '@ngx-grpc/worker';
import * as thisProto from './admin.pb';
import * as client000 from './model.pb';
/**
 * Client definition for use in worker
 */
export const GrpcWorkerAdministratorClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'client.Administrator',
  methods: {
    '/client.Administrator/GetListCodePacket': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.CodePacketResponse
    },
    '/client.Administrator/GetListEquipment': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.EquipmentResponse
    },
    '/client.Administrator/GetListPackingUnit': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.PackingUnitResponse
    },
    '/client.Administrator/GetListPartner': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.PartnerResponse
    },
    '/client.Administrator/GetListProduct': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.ProductResponse
    },
    '/client.Administrator/GetListReason': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.ReasonResponse
    },
    '/client.Administrator/GetListTypeBill': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.TypeBillResponse
    },
    '/client.Administrator/GetListTypePacket': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.TypePacketResponse
    },
    '/client.Administrator/GetListTypeProduct': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.TypeProductResponse
    },
    '/client.Administrator/GetListWareHouse': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.WareHouseResponse
    }
  }
};
