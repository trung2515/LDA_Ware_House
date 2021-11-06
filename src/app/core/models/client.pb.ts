/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export enum ResponseState {
  SUCCESS = 0,
  FAIL = 1
}
/**
 * Message implementation for client.ParcelInfo
 */
export class ParcelInfo implements GrpcMessage {
  static id = 'client.ParcelInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParcelInfo();
    ParcelInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParcelInfo) {
    _instance.parcelName = _instance.parcelName || '';
    _instance.createdDate = _instance.createdDate || '';
    _instance.idQRCode = _instance.idQRCode || '0';
    _instance.typeGoodId = _instance.typeGoodId || 0;
    _instance.typeGoodName = _instance.typeGoodName || '';
    _instance.typeBag = _instance.typeBag || 0;
    _instance.typeBagName = _instance.typeBagName || '';
    _instance.id = _instance.id || 0;
    _instance.imgQRCode = _instance.imgQRCode || '';
    _instance.parcelCode = _instance.parcelCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParcelInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parcelName = _reader.readString();
          break;
        case 2:
          _instance.createdDate = _reader.readString();
          break;
        case 3:
          _instance.idQRCode = _reader.readInt64String();
          break;
        case 4:
          _instance.typeGoodId = _reader.readInt32();
          break;
        case 5:
          _instance.typeGoodName = _reader.readString();
          break;
        case 6:
          _instance.typeBag = _reader.readInt32();
          break;
        case 7:
          _instance.typeBagName = _reader.readString();
          break;
        case 8:
          _instance.id = _reader.readInt32();
          break;
        case 9:
          _instance.imgQRCode = _reader.readString();
          break;
        case 10:
          _instance.parcelCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParcelInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ParcelInfo, _writer: BinaryWriter) {
    if (_instance.parcelName) {
      _writer.writeString(1, _instance.parcelName);
    }
    if (_instance.createdDate) {
      _writer.writeString(2, _instance.createdDate);
    }
    if (_instance.idQRCode) {
      _writer.writeInt64String(3, _instance.idQRCode);
    }
    if (_instance.typeGoodId) {
      _writer.writeInt32(4, _instance.typeGoodId);
    }
    if (_instance.typeGoodName) {
      _writer.writeString(5, _instance.typeGoodName);
    }
    if (_instance.typeBag) {
      _writer.writeInt32(6, _instance.typeBag);
    }
    if (_instance.typeBagName) {
      _writer.writeString(7, _instance.typeBagName);
    }
    if (_instance.id) {
      _writer.writeInt32(8, _instance.id);
    }
    if (_instance.imgQRCode) {
      _writer.writeString(9, _instance.imgQRCode);
    }
    if (_instance.parcelCode) {
      _writer.writeString(10, _instance.parcelCode);
    }
  }

  private _parcelName?: string;
  private _createdDate?: string;
  private _idQRCode?: string;
  private _typeGoodId?: number;
  private _typeGoodName?: string;
  private _typeBag?: number;
  private _typeBagName?: string;
  private _id?: number;
  private _imgQRCode?: string;
  private _parcelCode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParcelInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParcelInfo.AsObject>) {
    _value = _value || {};
    this.parcelName = _value.parcelName;
    this.createdDate = _value.createdDate;
    this.idQRCode = _value.idQRCode;
    this.typeGoodId = _value.typeGoodId;
    this.typeGoodName = _value.typeGoodName;
    this.typeBag = _value.typeBag;
    this.typeBagName = _value.typeBagName;
    this.id = _value.id;
    this.imgQRCode = _value.imgQRCode;
    this.parcelCode = _value.parcelCode;
    ParcelInfo.refineValues(this);
  }
  get parcelName(): string | undefined {
    return this._parcelName;
  }
  set parcelName(value: string | undefined) {
    this._parcelName = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }
  get idQRCode(): string | undefined {
    return this._idQRCode;
  }
  set idQRCode(value: string | undefined) {
    this._idQRCode = value;
  }
  get typeGoodId(): number | undefined {
    return this._typeGoodId;
  }
  set typeGoodId(value: number | undefined) {
    this._typeGoodId = value;
  }
  get typeGoodName(): string | undefined {
    return this._typeGoodName;
  }
  set typeGoodName(value: string | undefined) {
    this._typeGoodName = value;
  }
  get typeBag(): number | undefined {
    return this._typeBag;
  }
  set typeBag(value: number | undefined) {
    this._typeBag = value;
  }
  get typeBagName(): string | undefined {
    return this._typeBagName;
  }
  set typeBagName(value: string | undefined) {
    this._typeBagName = value;
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get imgQRCode(): string | undefined {
    return this._imgQRCode;
  }
  set imgQRCode(value: string | undefined) {
    this._imgQRCode = value;
  }
  get parcelCode(): string | undefined {
    return this._parcelCode;
  }
  set parcelCode(value: string | undefined) {
    this._parcelCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParcelInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParcelInfo.AsObject {
    return {
      parcelName: this.parcelName,
      createdDate: this.createdDate,
      idQRCode: this.idQRCode,
      typeGoodId: this.typeGoodId,
      typeGoodName: this.typeGoodName,
      typeBag: this.typeBag,
      typeBagName: this.typeBagName,
      id: this.id,
      imgQRCode: this.imgQRCode,
      parcelCode: this.parcelCode
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ParcelInfo.AsProtobufJSON {
    return {
      parcelName: this.parcelName,
      createdDate: this.createdDate,
      idQRCode: this.idQRCode,
      typeGoodId: this.typeGoodId,
      typeGoodName: this.typeGoodName,
      typeBag: this.typeBag,
      typeBagName: this.typeBagName,
      id: this.id,
      imgQRCode: this.imgQRCode,
      parcelCode: this.parcelCode
    };
  }
}
export module ParcelInfo {
  /**
   * Standard JavaScript object representation for ParcelInfo
   */
  export interface AsObject {
    parcelName?: string;
    createdDate?: string;
    idQRCode?: string;
    typeGoodId?: number;
    typeGoodName?: string;
    typeBag?: number;
    typeBagName?: string;
    id?: number;
    imgQRCode?: string;
    parcelCode?: string;
  }

  /**
   * Protobuf JSON representation for ParcelInfo
   */
  export interface AsProtobufJSON {
    parcelName?: string;
    createdDate?: string;
    idQRCode?: string;
    typeGoodId?: number;
    typeGoodName?: string;
    typeBag?: number;
    typeBagName?: string;
    id?: number;
    imgQRCode?: string;
    parcelCode?: string;
  }
}

/**
 * Message implementation for client.MasterRequest
 */
export class MasterRequest implements GrpcMessage {
  static id = 'client.MasterRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MasterRequest();
    MasterRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MasterRequest) {
    _instance.fromDate = _instance.fromDate || '';
    _instance.toDate = _instance.toDate || '';
    _instance.userId = _instance.userId || 0;
    _instance.idWareHouse = _instance.idWareHouse || 0;
    _instance.imgQRCode = _instance.imgQRCode || '';
    _instance.idParcel = _instance.idParcel || '0';
    _instance.type = _instance.type || 0;
    _instance.idOrder = _instance.idOrder || '0';
    _instance.file = _instance.file || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MasterRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fromDate = _reader.readString();
          break;
        case 2:
          _instance.toDate = _reader.readString();
          break;
        case 3:
          _instance.userId = _reader.readInt32();
          break;
        case 4:
          _instance.idWareHouse = _reader.readInt32();
          break;
        case 5:
          _instance.imgQRCode = _reader.readString();
          break;
        case 6:
          _instance.idParcel = _reader.readInt64String();
          break;
        case 7:
          _instance.type = _reader.readInt32();
          break;
        case 8:
          _instance.idOrder = _reader.readInt64String();
          break;
        case 9:
          _instance.file = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MasterRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MasterRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.fromDate) {
      _writer.writeString(1, _instance.fromDate);
    }
    if (_instance.toDate) {
      _writer.writeString(2, _instance.toDate);
    }
    if (_instance.userId) {
      _writer.writeInt32(3, _instance.userId);
    }
    if (_instance.idWareHouse) {
      _writer.writeInt32(4, _instance.idWareHouse);
    }
    if (_instance.imgQRCode) {
      _writer.writeString(5, _instance.imgQRCode);
    }
    if (_instance.idParcel) {
      _writer.writeInt64String(6, _instance.idParcel);
    }
    if (_instance.type) {
      _writer.writeInt32(7, _instance.type);
    }
    if (_instance.idOrder) {
      _writer.writeInt64String(8, _instance.idOrder);
    }
    if (_instance.file) {
      _writer.writeString(9, _instance.file);
    }
  }

  private _fromDate?: string;
  private _toDate?: string;
  private _userId?: number;
  private _idWareHouse?: number;
  private _imgQRCode?: string;
  private _idParcel?: string;
  private _type?: number;
  private _idOrder?: string;
  private _file?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MasterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MasterRequest.AsObject>) {
    _value = _value || {};
    this.fromDate = _value.fromDate;
    this.toDate = _value.toDate;
    this.userId = _value.userId;
    this.idWareHouse = _value.idWareHouse;
    this.imgQRCode = _value.imgQRCode;
    this.idParcel = _value.idParcel;
    this.type = _value.type;
    this.idOrder = _value.idOrder;
    this.file = _value.file;
    MasterRequest.refineValues(this);
  }
  get fromDate(): string | undefined {
    return this._fromDate;
  }
  set fromDate(value: string | undefined) {
    this._fromDate = value;
  }
  get toDate(): string | undefined {
    return this._toDate;
  }
  set toDate(value: string | undefined) {
    this._toDate = value;
  }
  get userId(): number | undefined {
    return this._userId;
  }
  set userId(value: number | undefined) {
    this._userId = value;
  }
  get idWareHouse(): number | undefined {
    return this._idWareHouse;
  }
  set idWareHouse(value: number | undefined) {
    this._idWareHouse = value;
  }
  get imgQRCode(): string | undefined {
    return this._imgQRCode;
  }
  set imgQRCode(value: string | undefined) {
    this._imgQRCode = value;
  }
  get idParcel(): string | undefined {
    return this._idParcel;
  }
  set idParcel(value: string | undefined) {
    this._idParcel = value;
  }
  get type(): number | undefined {
    return this._type;
  }
  set type(value: number | undefined) {
    this._type = value;
  }
  get idOrder(): string | undefined {
    return this._idOrder;
  }
  set idOrder(value: string | undefined) {
    this._idOrder = value;
  }
  get file(): string | undefined {
    return this._file;
  }
  set file(value: string | undefined) {
    this._file = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MasterRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MasterRequest.AsObject {
    return {
      fromDate: this.fromDate,
      toDate: this.toDate,
      userId: this.userId,
      idWareHouse: this.idWareHouse,
      imgQRCode: this.imgQRCode,
      idParcel: this.idParcel,
      type: this.type,
      idOrder: this.idOrder,
      file: this.file
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): MasterRequest.AsProtobufJSON {
    return {
      fromDate: this.fromDate,
      toDate: this.toDate,
      userId: this.userId,
      idWareHouse: this.idWareHouse,
      imgQRCode: this.imgQRCode,
      idParcel: this.idParcel,
      type: this.type,
      idOrder: this.idOrder,
      file: this.file
    };
  }
}
export module MasterRequest {
  /**
   * Standard JavaScript object representation for MasterRequest
   */
  export interface AsObject {
    fromDate?: string;
    toDate?: string;
    userId?: number;
    idWareHouse?: number;
    imgQRCode?: string;
    idParcel?: string;
    type?: number;
    idOrder?: string;
    file?: string;
  }

  /**
   * Protobuf JSON representation for MasterRequest
   */
  export interface AsProtobufJSON {
    fromDate?: string;
    toDate?: string;
    userId?: number;
    idWareHouse?: number;
    imgQRCode?: string;
    idParcel?: string;
    type?: number;
    idOrder?: string;
    file?: string;
  }
}

/**
 * Message implementation for client.ParcelReply
 */
export class ParcelReply implements GrpcMessage {
  static id = 'client.ParcelReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParcelReply();
    ParcelReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParcelReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParcelReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.data = new ParcelInfo();
          _reader.readMessage(
            _instance.data,
            ParcelInfo.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ParcelReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParcelReply,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data) {
      _writer.writeMessage(
        2,
        _instance.data as any,
        ParcelInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ParcelInfo;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParcelReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParcelReply.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = _value.data ? new ParcelInfo(_value.data) : undefined;
    ParcelReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ParcelInfo | undefined {
    return this._data;
  }
  set data(value: ParcelInfo | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParcelReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParcelReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: this.data ? this.data.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ParcelReply.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: this.data ? this.data.toProtobufJSON(options) : null
    };
  }
}
export module ParcelReply {
  /**
   * Standard JavaScript object representation for ParcelReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ParcelInfo.AsObject;
  }

  /**
   * Protobuf JSON representation for ParcelReply
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ParcelInfo.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for client.ParcelResponse
 */
export class ParcelResponse implements GrpcMessage {
  static id = 'client.ParcelResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParcelResponse();
    ParcelResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParcelResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParcelResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new ParcelInfo();
          _reader.readMessage(
            messageInitializer2,
            ParcelInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ParcelResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParcelResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        ParcelInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ParcelInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParcelResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParcelResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ParcelInfo(m));
    ParcelResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ParcelInfo[] | undefined {
    return this._data;
  }
  set data(value: ParcelInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParcelResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParcelResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ParcelResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ParcelResponse {
  /**
   * Standard JavaScript object representation for ParcelResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ParcelInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ParcelResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ParcelInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.Response
 */
export class Response implements GrpcMessage {
  static id = 'client.Response';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Response();
    Response.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Response) {
    _instance.state = _instance.state || 0;
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Response,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.state = _reader.readEnum();
          break;
        case 2:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Response.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Response, _writer: BinaryWriter) {
    if (_instance.state) {
      _writer.writeEnum(1, _instance.state);
    }
    if (_instance.message) {
      _writer.writeString(2, _instance.message);
    }
  }

  private _state?: ResponseState;
  private _message?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Response to deeply clone from
   */
  constructor(_value?: RecursivePartial<Response.AsObject>) {
    _value = _value || {};
    this.state = _value.state;
    this.message = _value.message;
    Response.refineValues(this);
  }
  get state(): ResponseState | undefined {
    return this._state;
  }
  set state(value: ResponseState | undefined) {
    this._state = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Response.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Response.AsObject {
    return {
      state: this.state,
      message: this.message
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Response.AsProtobufJSON {
    return {
      state:
        ResponseState[
          this.state === null || this.state === undefined ? 0 : this.state
        ],
      message: this.message
    };
  }
}
export module Response {
  /**
   * Standard JavaScript object representation for Response
   */
  export interface AsObject {
    state?: ResponseState;
    message?: string;
  }

  /**
   * Protobuf JSON representation for Response
   */
  export interface AsProtobufJSON {
    state?: string;
    message?: string;
  }
}

/**
 * Message implementation for client.UserReply
 */
export class UserReply implements GrpcMessage {
  static id = 'client.UserReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserReply();
    UserReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserReply) {
    _instance.response = _instance.response || undefined;
    _instance.info = _instance.info || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.info = new UserInfo();
          _reader.readMessage(
            _instance.info,
            UserInfo.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UserReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserReply, _writer: BinaryWriter) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.info) {
      _writer.writeMessage(
        2,
        _instance.info as any,
        UserInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _info?: UserInfo;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserReply.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.info = _value.info ? new UserInfo(_value.info) : undefined;
    UserReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get info(): UserInfo | undefined {
    return this._info;
  }
  set info(value: UserInfo | undefined) {
    this._info = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      info: this.info ? this.info.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserReply.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      info: this.info ? this.info.toProtobufJSON(options) : null
    };
  }
}
export module UserReply {
  /**
   * Standard JavaScript object representation for UserReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    info?: UserInfo.AsObject;
  }

  /**
   * Protobuf JSON representation for UserReply
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    info?: UserInfo.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for client.UserInfo
 */
export class UserInfo implements GrpcMessage {
  static id = 'client.UserInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInfo();
    UserInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInfo) {
    _instance.username = _instance.username || '';
    _instance.employeeCode = _instance.employeeCode || '';
    _instance.employeeName = _instance.employeeName || '';
    _instance.position = _instance.position || 0;
    _instance.gender = _instance.gender || 0;
    _instance.image = _instance.image || '';
    _instance.idNumber = _instance.idNumber || '';
    _instance.id = _instance.id || 0;
    _instance.password = _instance.password || '';
    _instance.positionName = _instance.positionName || '';
    _instance.genderName = _instance.genderName || '';
    _instance.dayOfBirth = _instance.dayOfBirth || '';
    _instance.token = _instance.token || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.username = _reader.readString();
          break;
        case 2:
          _instance.employeeCode = _reader.readString();
          break;
        case 3:
          _instance.employeeName = _reader.readString();
          break;
        case 4:
          _instance.position = _reader.readInt32();
          break;
        case 5:
          _instance.gender = _reader.readInt32();
          break;
        case 6:
          _instance.image = _reader.readString();
          break;
        case 7:
          _instance.idNumber = _reader.readString();
          break;
        case 8:
          _instance.id = _reader.readInt32();
          break;
        case 9:
          _instance.password = _reader.readString();
          break;
        case 10:
          _instance.positionName = _reader.readString();
          break;
        case 11:
          _instance.genderName = _reader.readString();
          break;
        case 12:
          _instance.dayOfBirth = _reader.readString();
          break;
        case 13:
          _instance.token = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserInfo, _writer: BinaryWriter) {
    if (_instance.username) {
      _writer.writeString(1, _instance.username);
    }
    if (_instance.employeeCode) {
      _writer.writeString(2, _instance.employeeCode);
    }
    if (_instance.employeeName) {
      _writer.writeString(3, _instance.employeeName);
    }
    if (_instance.position) {
      _writer.writeInt32(4, _instance.position);
    }
    if (_instance.gender) {
      _writer.writeInt32(5, _instance.gender);
    }
    if (_instance.image) {
      _writer.writeString(6, _instance.image);
    }
    if (_instance.idNumber) {
      _writer.writeString(7, _instance.idNumber);
    }
    if (_instance.id) {
      _writer.writeInt32(8, _instance.id);
    }
    if (_instance.password) {
      _writer.writeString(9, _instance.password);
    }
    if (_instance.positionName) {
      _writer.writeString(10, _instance.positionName);
    }
    if (_instance.genderName) {
      _writer.writeString(11, _instance.genderName);
    }
    if (_instance.dayOfBirth) {
      _writer.writeString(12, _instance.dayOfBirth);
    }
    if (_instance.token) {
      _writer.writeString(13, _instance.token);
    }
  }

  private _username?: string;
  private _employeeCode?: string;
  private _employeeName?: string;
  private _position?: number;
  private _gender?: number;
  private _image?: string;
  private _idNumber?: string;
  private _id?: number;
  private _password?: string;
  private _positionName?: string;
  private _genderName?: string;
  private _dayOfBirth?: string;
  private _token?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfo.AsObject>) {
    _value = _value || {};
    this.username = _value.username;
    this.employeeCode = _value.employeeCode;
    this.employeeName = _value.employeeName;
    this.position = _value.position;
    this.gender = _value.gender;
    this.image = _value.image;
    this.idNumber = _value.idNumber;
    this.id = _value.id;
    this.password = _value.password;
    this.positionName = _value.positionName;
    this.genderName = _value.genderName;
    this.dayOfBirth = _value.dayOfBirth;
    this.token = _value.token;
    UserInfo.refineValues(this);
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get employeeCode(): string | undefined {
    return this._employeeCode;
  }
  set employeeCode(value: string | undefined) {
    this._employeeCode = value;
  }
  get employeeName(): string | undefined {
    return this._employeeName;
  }
  set employeeName(value: string | undefined) {
    this._employeeName = value;
  }
  get position(): number | undefined {
    return this._position;
  }
  set position(value: number | undefined) {
    this._position = value;
  }
  get gender(): number | undefined {
    return this._gender;
  }
  set gender(value: number | undefined) {
    this._gender = value;
  }
  get image(): string | undefined {
    return this._image;
  }
  set image(value: string | undefined) {
    this._image = value;
  }
  get idNumber(): string | undefined {
    return this._idNumber;
  }
  set idNumber(value: string | undefined) {
    this._idNumber = value;
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get positionName(): string | undefined {
    return this._positionName;
  }
  set positionName(value: string | undefined) {
    this._positionName = value;
  }
  get genderName(): string | undefined {
    return this._genderName;
  }
  set genderName(value: string | undefined) {
    this._genderName = value;
  }
  get dayOfBirth(): string | undefined {
    return this._dayOfBirth;
  }
  set dayOfBirth(value: string | undefined) {
    this._dayOfBirth = value;
  }
  get token(): string | undefined {
    return this._token;
  }
  set token(value: string | undefined) {
    this._token = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInfo.AsObject {
    return {
      username: this.username,
      employeeCode: this.employeeCode,
      employeeName: this.employeeName,
      position: this.position,
      gender: this.gender,
      image: this.image,
      idNumber: this.idNumber,
      id: this.id,
      password: this.password,
      positionName: this.positionName,
      genderName: this.genderName,
      dayOfBirth: this.dayOfBirth,
      token: this.token
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserInfo.AsProtobufJSON {
    return {
      username: this.username,
      employeeCode: this.employeeCode,
      employeeName: this.employeeName,
      position: this.position,
      gender: this.gender,
      image: this.image,
      idNumber: this.idNumber,
      id: this.id,
      password: this.password,
      positionName: this.positionName,
      genderName: this.genderName,
      dayOfBirth: this.dayOfBirth,
      token: this.token
    };
  }
}
export module UserInfo {
  /**
   * Standard JavaScript object representation for UserInfo
   */
  export interface AsObject {
    username?: string;
    employeeCode?: string;
    employeeName?: string;
    position?: number;
    gender?: number;
    image?: string;
    idNumber?: string;
    id?: number;
    password?: string;
    positionName?: string;
    genderName?: string;
    dayOfBirth?: string;
    token?: string;
  }

  /**
   * Protobuf JSON representation for UserInfo
   */
  export interface AsProtobufJSON {
    username?: string;
    employeeCode?: string;
    employeeName?: string;
    position?: number;
    gender?: number;
    image?: string;
    idNumber?: string;
    id?: number;
    password?: string;
    positionName?: string;
    genderName?: string;
    dayOfBirth?: string;
    token?: string;
  }
}

/**
 * Message implementation for client.UserResponse
 */
export class UserResponse implements GrpcMessage {
  static id = 'client.UserResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserResponse();
    UserResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new UserInfo();
          _reader.readMessage(
            messageInitializer2,
            UserInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    UserResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        UserInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: UserInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new UserInfo(m));
    UserResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): UserInfo[] | undefined {
    return this._data;
  }
  set data(value: UserInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module UserResponse {
  /**
   * Standard JavaScript object representation for UserResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: UserInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for UserResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: UserInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.WareHouseInfo
 */
export class WareHouseInfo implements GrpcMessage {
  static id = 'client.WareHouseInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WareHouseInfo();
    WareHouseInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WareHouseInfo) {
    _instance.wareHouseCode = _instance.wareHouseCode || '';
    _instance.wareHouseName = _instance.wareHouseName || '';
    _instance.provinceId = _instance.provinceId || 0;
    _instance.districtId = _instance.districtId || 0;
    _instance.areaId = _instance.areaId || 0;
    _instance.latitude = _instance.latitude || 0;
    _instance.longitude = _instance.longitude || 0;
    _instance.id = _instance.id || 0;
    _instance.isDeleted = _instance.isDeleted || false;
    _instance.wardId = _instance.wardId || 0;
    _instance.address = _instance.address || '';
    _instance.areaName = _instance.areaName || '';
    _instance.provinceName = _instance.provinceName || '';
    _instance.districtName = _instance.districtName || '';
    _instance.wardName = _instance.wardName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WareHouseInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.wareHouseCode = _reader.readString();
          break;
        case 2:
          _instance.wareHouseName = _reader.readString();
          break;
        case 3:
          _instance.provinceId = _reader.readInt32();
          break;
        case 4:
          _instance.districtId = _reader.readInt32();
          break;
        case 5:
          _instance.areaId = _reader.readInt32();
          break;
        case 6:
          _instance.latitude = _reader.readDouble();
          break;
        case 7:
          _instance.longitude = _reader.readDouble();
          break;
        case 8:
          _instance.id = _reader.readInt32();
          break;
        case 9:
          _instance.isDeleted = _reader.readBool();
          break;
        case 10:
          _instance.wardId = _reader.readInt32();
          break;
        case 11:
          _instance.address = _reader.readString();
          break;
        case 12:
          _instance.areaName = _reader.readString();
          break;
        case 13:
          _instance.provinceName = _reader.readString();
          break;
        case 14:
          _instance.districtName = _reader.readString();
          break;
        case 15:
          _instance.wardName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    WareHouseInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WareHouseInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.wareHouseCode) {
      _writer.writeString(1, _instance.wareHouseCode);
    }
    if (_instance.wareHouseName) {
      _writer.writeString(2, _instance.wareHouseName);
    }
    if (_instance.provinceId) {
      _writer.writeInt32(3, _instance.provinceId);
    }
    if (_instance.districtId) {
      _writer.writeInt32(4, _instance.districtId);
    }
    if (_instance.areaId) {
      _writer.writeInt32(5, _instance.areaId);
    }
    if (_instance.latitude) {
      _writer.writeDouble(6, _instance.latitude);
    }
    if (_instance.longitude) {
      _writer.writeDouble(7, _instance.longitude);
    }
    if (_instance.id) {
      _writer.writeInt32(8, _instance.id);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(9, _instance.isDeleted);
    }
    if (_instance.wardId) {
      _writer.writeInt32(10, _instance.wardId);
    }
    if (_instance.address) {
      _writer.writeString(11, _instance.address);
    }
    if (_instance.areaName) {
      _writer.writeString(12, _instance.areaName);
    }
    if (_instance.provinceName) {
      _writer.writeString(13, _instance.provinceName);
    }
    if (_instance.districtName) {
      _writer.writeString(14, _instance.districtName);
    }
    if (_instance.wardName) {
      _writer.writeString(15, _instance.wardName);
    }
  }

  private _wareHouseCode?: string;
  private _wareHouseName?: string;
  private _provinceId?: number;
  private _districtId?: number;
  private _areaId?: number;
  private _latitude?: number;
  private _longitude?: number;
  private _id?: number;
  private _isDeleted?: boolean;
  private _wardId?: number;
  private _address?: string;
  private _areaName?: string;
  private _provinceName?: string;
  private _districtName?: string;
  private _wardName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WareHouseInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<WareHouseInfo.AsObject>) {
    _value = _value || {};
    this.wareHouseCode = _value.wareHouseCode;
    this.wareHouseName = _value.wareHouseName;
    this.provinceId = _value.provinceId;
    this.districtId = _value.districtId;
    this.areaId = _value.areaId;
    this.latitude = _value.latitude;
    this.longitude = _value.longitude;
    this.id = _value.id;
    this.isDeleted = _value.isDeleted;
    this.wardId = _value.wardId;
    this.address = _value.address;
    this.areaName = _value.areaName;
    this.provinceName = _value.provinceName;
    this.districtName = _value.districtName;
    this.wardName = _value.wardName;
    WareHouseInfo.refineValues(this);
  }
  get wareHouseCode(): string | undefined {
    return this._wareHouseCode;
  }
  set wareHouseCode(value: string | undefined) {
    this._wareHouseCode = value;
  }
  get wareHouseName(): string | undefined {
    return this._wareHouseName;
  }
  set wareHouseName(value: string | undefined) {
    this._wareHouseName = value;
  }
  get provinceId(): number | undefined {
    return this._provinceId;
  }
  set provinceId(value: number | undefined) {
    this._provinceId = value;
  }
  get districtId(): number | undefined {
    return this._districtId;
  }
  set districtId(value: number | undefined) {
    this._districtId = value;
  }
  get areaId(): number | undefined {
    return this._areaId;
  }
  set areaId(value: number | undefined) {
    this._areaId = value;
  }
  get latitude(): number | undefined {
    return this._latitude;
  }
  set latitude(value: number | undefined) {
    this._latitude = value;
  }
  get longitude(): number | undefined {
    return this._longitude;
  }
  set longitude(value: number | undefined) {
    this._longitude = value;
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }
  get wardId(): number | undefined {
    return this._wardId;
  }
  set wardId(value: number | undefined) {
    this._wardId = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get areaName(): string | undefined {
    return this._areaName;
  }
  set areaName(value: string | undefined) {
    this._areaName = value;
  }
  get provinceName(): string | undefined {
    return this._provinceName;
  }
  set provinceName(value: string | undefined) {
    this._provinceName = value;
  }
  get districtName(): string | undefined {
    return this._districtName;
  }
  set districtName(value: string | undefined) {
    this._districtName = value;
  }
  get wardName(): string | undefined {
    return this._wardName;
  }
  set wardName(value: string | undefined) {
    this._wardName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WareHouseInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WareHouseInfo.AsObject {
    return {
      wareHouseCode: this.wareHouseCode,
      wareHouseName: this.wareHouseName,
      provinceId: this.provinceId,
      districtId: this.districtId,
      areaId: this.areaId,
      latitude: this.latitude,
      longitude: this.longitude,
      id: this.id,
      isDeleted: this.isDeleted,
      wardId: this.wardId,
      address: this.address,
      areaName: this.areaName,
      provinceName: this.provinceName,
      districtName: this.districtName,
      wardName: this.wardName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WareHouseInfo.AsProtobufJSON {
    return {
      wareHouseCode: this.wareHouseCode,
      wareHouseName: this.wareHouseName,
      provinceId: this.provinceId,
      districtId: this.districtId,
      areaId: this.areaId,
      latitude: this.latitude,
      longitude: this.longitude,
      id: this.id,
      isDeleted: this.isDeleted,
      wardId: this.wardId,
      address: this.address,
      areaName: this.areaName,
      provinceName: this.provinceName,
      districtName: this.districtName,
      wardName: this.wardName
    };
  }
}
export module WareHouseInfo {
  /**
   * Standard JavaScript object representation for WareHouseInfo
   */
  export interface AsObject {
    wareHouseCode?: string;
    wareHouseName?: string;
    provinceId?: number;
    districtId?: number;
    areaId?: number;
    latitude?: number;
    longitude?: number;
    id?: number;
    isDeleted?: boolean;
    wardId?: number;
    address?: string;
    areaName?: string;
    provinceName?: string;
    districtName?: string;
    wardName?: string;
  }

  /**
   * Protobuf JSON representation for WareHouseInfo
   */
  export interface AsProtobufJSON {
    wareHouseCode?: string;
    wareHouseName?: string;
    provinceId?: number;
    districtId?: number;
    areaId?: number;
    latitude?: number;
    longitude?: number;
    id?: number;
    isDeleted?: boolean;
    wardId?: number;
    address?: string;
    areaName?: string;
    provinceName?: string;
    districtName?: string;
    wardName?: string;
  }
}

/**
 * Message implementation for client.WareHouseReply
 */
export class WareHouseReply implements GrpcMessage {
  static id = 'client.WareHouseReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WareHouseReply();
    WareHouseReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WareHouseReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WareHouseReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.data = new WareHouseInfo();
          _reader.readMessage(
            _instance.data,
            WareHouseInfo.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WareHouseReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WareHouseReply,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data) {
      _writer.writeMessage(
        2,
        _instance.data as any,
        WareHouseInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: WareHouseInfo;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WareHouseReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<WareHouseReply.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = _value.data ? new WareHouseInfo(_value.data) : undefined;
    WareHouseReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): WareHouseInfo | undefined {
    return this._data;
  }
  set data(value: WareHouseInfo | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WareHouseReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WareHouseReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: this.data ? this.data.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WareHouseReply.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: this.data ? this.data.toProtobufJSON(options) : null
    };
  }
}
export module WareHouseReply {
  /**
   * Standard JavaScript object representation for WareHouseReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: WareHouseInfo.AsObject;
  }

  /**
   * Protobuf JSON representation for WareHouseReply
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: WareHouseInfo.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for client.WareHouseResponse
 */
export class WareHouseResponse implements GrpcMessage {
  static id = 'client.WareHouseResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WareHouseResponse();
    WareHouseResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WareHouseResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WareHouseResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new WareHouseInfo();
          _reader.readMessage(
            messageInitializer2,
            WareHouseInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    WareHouseResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WareHouseResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        WareHouseInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: WareHouseInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WareHouseResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<WareHouseResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new WareHouseInfo(m));
    WareHouseResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): WareHouseInfo[] | undefined {
    return this._data;
  }
  set data(value: WareHouseInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WareHouseResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WareHouseResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WareHouseResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module WareHouseResponse {
  /**
   * Standard JavaScript object representation for WareHouseResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: WareHouseInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for WareHouseResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: WareHouseInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.QRCodeInfo
 */
export class QRCodeInfo implements GrpcMessage {
  static id = 'client.QRCodeInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QRCodeInfo();
    QRCodeInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QRCodeInfo) {
    _instance.id = _instance.id || '0';
    _instance.imgQRCode = _instance.imgQRCode || '';
    _instance.type = _instance.type || 0;
    _instance.createdDate = _instance.createdDate || '';
    _instance.typeName = _instance.typeName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QRCodeInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt64String();
          break;
        case 2:
          _instance.imgQRCode = _reader.readString();
          break;
        case 3:
          _instance.type = _reader.readInt32();
          break;
        case 4:
          _instance.createdDate = _reader.readString();
          break;
        case 5:
          _instance.typeName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    QRCodeInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: QRCodeInfo, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt64String(1, _instance.id);
    }
    if (_instance.imgQRCode) {
      _writer.writeString(2, _instance.imgQRCode);
    }
    if (_instance.type) {
      _writer.writeInt32(3, _instance.type);
    }
    if (_instance.createdDate) {
      _writer.writeString(4, _instance.createdDate);
    }
    if (_instance.typeName) {
      _writer.writeString(5, _instance.typeName);
    }
  }

  private _id?: string;
  private _imgQRCode?: string;
  private _type?: number;
  private _createdDate?: string;
  private _typeName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QRCodeInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<QRCodeInfo.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.imgQRCode = _value.imgQRCode;
    this.type = _value.type;
    this.createdDate = _value.createdDate;
    this.typeName = _value.typeName;
    QRCodeInfo.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get imgQRCode(): string | undefined {
    return this._imgQRCode;
  }
  set imgQRCode(value: string | undefined) {
    this._imgQRCode = value;
  }
  get type(): number | undefined {
    return this._type;
  }
  set type(value: number | undefined) {
    this._type = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }
  get typeName(): string | undefined {
    return this._typeName;
  }
  set typeName(value: string | undefined) {
    this._typeName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QRCodeInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QRCodeInfo.AsObject {
    return {
      id: this.id,
      imgQRCode: this.imgQRCode,
      type: this.type,
      createdDate: this.createdDate,
      typeName: this.typeName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): QRCodeInfo.AsProtobufJSON {
    return {
      id: this.id,
      imgQRCode: this.imgQRCode,
      type: this.type,
      createdDate: this.createdDate,
      typeName: this.typeName
    };
  }
}
export module QRCodeInfo {
  /**
   * Standard JavaScript object representation for QRCodeInfo
   */
  export interface AsObject {
    id?: string;
    imgQRCode?: string;
    type?: number;
    createdDate?: string;
    typeName?: string;
  }

  /**
   * Protobuf JSON representation for QRCodeInfo
   */
  export interface AsProtobufJSON {
    id?: string;
    imgQRCode?: string;
    type?: number;
    createdDate?: string;
    typeName?: string;
  }
}

/**
 * Message implementation for client.QRCodeResponse
 */
export class QRCodeResponse implements GrpcMessage {
  static id = 'client.QRCodeResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QRCodeResponse();
    QRCodeResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QRCodeResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QRCodeResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new QRCodeInfo();
          _reader.readMessage(
            messageInitializer2,
            QRCodeInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    QRCodeResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: QRCodeResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        QRCodeInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: QRCodeInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QRCodeResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<QRCodeResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new QRCodeInfo(m));
    QRCodeResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): QRCodeInfo[] | undefined {
    return this._data;
  }
  set data(value: QRCodeInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QRCodeResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QRCodeResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): QRCodeResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module QRCodeResponse {
  /**
   * Standard JavaScript object representation for QRCodeResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: QRCodeInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for QRCodeResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: QRCodeInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ParcelInWareHouseInfo
 */
export class ParcelInWareHouseInfo implements GrpcMessage {
  static id = 'client.ParcelInWareHouseInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParcelInWareHouseInfo();
    ParcelInWareHouseInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParcelInWareHouseInfo) {
    _instance.id = _instance.id || '0';
    _instance.idParcel = _instance.idParcel || '0';
    _instance.idWareHouse = _instance.idWareHouse || 0;
    _instance.weightUsed = _instance.weightUsed || 0;
    _instance.weightTotal = _instance.weightTotal || 0;
    _instance.weightLeft = _instance.weightLeft || 0;
    _instance.parcelName = _instance.parcelName || '';
    _instance.typeGoodId = _instance.typeGoodId || 0;
    _instance.typeGoodName = _instance.typeGoodName || '';
    _instance.idQRCode = _instance.idQRCode || '0';
    _instance.imgQRCode = _instance.imgQRCode || '';
    _instance.weight = _instance.weight || 0;
    _instance.parcelCode = _instance.parcelCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParcelInWareHouseInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt64String();
          break;
        case 2:
          _instance.idParcel = _reader.readInt64String();
          break;
        case 3:
          _instance.idWareHouse = _reader.readInt32();
          break;
        case 4:
          _instance.weightUsed = _reader.readDouble();
          break;
        case 5:
          _instance.weightTotal = _reader.readDouble();
          break;
        case 6:
          _instance.weightLeft = _reader.readDouble();
          break;
        case 7:
          _instance.parcelName = _reader.readString();
          break;
        case 8:
          _instance.typeGoodId = _reader.readInt32();
          break;
        case 9:
          _instance.typeGoodName = _reader.readString();
          break;
        case 10:
          _instance.idQRCode = _reader.readInt64String();
          break;
        case 11:
          _instance.imgQRCode = _reader.readString();
          break;
        case 13:
          _instance.weight = _reader.readDouble();
          break;
        case 14:
          _instance.parcelCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParcelInWareHouseInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParcelInWareHouseInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt64String(1, _instance.id);
    }
    if (_instance.idParcel) {
      _writer.writeInt64String(2, _instance.idParcel);
    }
    if (_instance.idWareHouse) {
      _writer.writeInt32(3, _instance.idWareHouse);
    }
    if (_instance.weightUsed) {
      _writer.writeDouble(4, _instance.weightUsed);
    }
    if (_instance.weightTotal) {
      _writer.writeDouble(5, _instance.weightTotal);
    }
    if (_instance.weightLeft) {
      _writer.writeDouble(6, _instance.weightLeft);
    }
    if (_instance.parcelName) {
      _writer.writeString(7, _instance.parcelName);
    }
    if (_instance.typeGoodId) {
      _writer.writeInt32(8, _instance.typeGoodId);
    }
    if (_instance.typeGoodName) {
      _writer.writeString(9, _instance.typeGoodName);
    }
    if (_instance.idQRCode) {
      _writer.writeInt64String(10, _instance.idQRCode);
    }
    if (_instance.imgQRCode) {
      _writer.writeString(11, _instance.imgQRCode);
    }
    if (_instance.weight) {
      _writer.writeDouble(13, _instance.weight);
    }
    if (_instance.parcelCode) {
      _writer.writeString(14, _instance.parcelCode);
    }
  }

  private _id?: string;
  private _idParcel?: string;
  private _idWareHouse?: number;
  private _weightUsed?: number;
  private _weightTotal?: number;
  private _weightLeft?: number;
  private _parcelName?: string;
  private _typeGoodId?: number;
  private _typeGoodName?: string;
  private _idQRCode?: string;
  private _imgQRCode?: string;
  private _weight?: number;
  private _parcelCode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParcelInWareHouseInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParcelInWareHouseInfo.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.idParcel = _value.idParcel;
    this.idWareHouse = _value.idWareHouse;
    this.weightUsed = _value.weightUsed;
    this.weightTotal = _value.weightTotal;
    this.weightLeft = _value.weightLeft;
    this.parcelName = _value.parcelName;
    this.typeGoodId = _value.typeGoodId;
    this.typeGoodName = _value.typeGoodName;
    this.idQRCode = _value.idQRCode;
    this.imgQRCode = _value.imgQRCode;
    this.weight = _value.weight;
    this.parcelCode = _value.parcelCode;
    ParcelInWareHouseInfo.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get idParcel(): string | undefined {
    return this._idParcel;
  }
  set idParcel(value: string | undefined) {
    this._idParcel = value;
  }
  get idWareHouse(): number | undefined {
    return this._idWareHouse;
  }
  set idWareHouse(value: number | undefined) {
    this._idWareHouse = value;
  }
  get weightUsed(): number | undefined {
    return this._weightUsed;
  }
  set weightUsed(value: number | undefined) {
    this._weightUsed = value;
  }
  get weightTotal(): number | undefined {
    return this._weightTotal;
  }
  set weightTotal(value: number | undefined) {
    this._weightTotal = value;
  }
  get weightLeft(): number | undefined {
    return this._weightLeft;
  }
  set weightLeft(value: number | undefined) {
    this._weightLeft = value;
  }
  get parcelName(): string | undefined {
    return this._parcelName;
  }
  set parcelName(value: string | undefined) {
    this._parcelName = value;
  }
  get typeGoodId(): number | undefined {
    return this._typeGoodId;
  }
  set typeGoodId(value: number | undefined) {
    this._typeGoodId = value;
  }
  get typeGoodName(): string | undefined {
    return this._typeGoodName;
  }
  set typeGoodName(value: string | undefined) {
    this._typeGoodName = value;
  }
  get idQRCode(): string | undefined {
    return this._idQRCode;
  }
  set idQRCode(value: string | undefined) {
    this._idQRCode = value;
  }
  get imgQRCode(): string | undefined {
    return this._imgQRCode;
  }
  set imgQRCode(value: string | undefined) {
    this._imgQRCode = value;
  }
  get weight(): number | undefined {
    return this._weight;
  }
  set weight(value: number | undefined) {
    this._weight = value;
  }
  get parcelCode(): string | undefined {
    return this._parcelCode;
  }
  set parcelCode(value: string | undefined) {
    this._parcelCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParcelInWareHouseInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParcelInWareHouseInfo.AsObject {
    return {
      id: this.id,
      idParcel: this.idParcel,
      idWareHouse: this.idWareHouse,
      weightUsed: this.weightUsed,
      weightTotal: this.weightTotal,
      weightLeft: this.weightLeft,
      parcelName: this.parcelName,
      typeGoodId: this.typeGoodId,
      typeGoodName: this.typeGoodName,
      idQRCode: this.idQRCode,
      imgQRCode: this.imgQRCode,
      weight: this.weight,
      parcelCode: this.parcelCode
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ParcelInWareHouseInfo.AsProtobufJSON {
    return {
      id: this.id,
      idParcel: this.idParcel,
      idWareHouse: this.idWareHouse,
      weightUsed: this.weightUsed,
      weightTotal: this.weightTotal,
      weightLeft: this.weightLeft,
      parcelName: this.parcelName,
      typeGoodId: this.typeGoodId,
      typeGoodName: this.typeGoodName,
      idQRCode: this.idQRCode,
      imgQRCode: this.imgQRCode,
      weight: this.weight,
      parcelCode: this.parcelCode
    };
  }
}
export module ParcelInWareHouseInfo {
  /**
   * Standard JavaScript object representation for ParcelInWareHouseInfo
   */
  export interface AsObject {
    id?: string;
    idParcel?: string;
    idWareHouse?: number;
    weightUsed?: number;
    weightTotal?: number;
    weightLeft?: number;
    parcelName?: string;
    typeGoodId?: number;
    typeGoodName?: string;
    idQRCode?: string;
    imgQRCode?: string;
    weight?: number;
    parcelCode?: string;
  }

  /**
   * Protobuf JSON representation for ParcelInWareHouseInfo
   */
  export interface AsProtobufJSON {
    id?: string;
    idParcel?: string;
    idWareHouse?: number;
    weightUsed?: number;
    weightTotal?: number;
    weightLeft?: number;
    parcelName?: string;
    typeGoodId?: number;
    typeGoodName?: string;
    idQRCode?: string;
    imgQRCode?: string;
    weight?: number;
    parcelCode?: string;
  }
}

/**
 * Message implementation for client.ParcelInWareHouseResponse
 */
export class ParcelInWareHouseResponse implements GrpcMessage {
  static id = 'client.ParcelInWareHouseResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParcelInWareHouseResponse();
    ParcelInWareHouseResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParcelInWareHouseResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParcelInWareHouseResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new ParcelInWareHouseInfo();
          _reader.readMessage(
            messageInitializer2,
            ParcelInWareHouseInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ParcelInWareHouseResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParcelInWareHouseResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        ParcelInWareHouseInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ParcelInWareHouseInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParcelInWareHouseResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParcelInWareHouseResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ParcelInWareHouseInfo(m));
    ParcelInWareHouseResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ParcelInWareHouseInfo[] | undefined {
    return this._data;
  }
  set data(value: ParcelInWareHouseInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParcelInWareHouseResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParcelInWareHouseResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ParcelInWareHouseResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ParcelInWareHouseResponse {
  /**
   * Standard JavaScript object representation for ParcelInWareHouseResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ParcelInWareHouseInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ParcelInWareHouseResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ParcelInWareHouseInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.CustomerInfo
 */
export class CustomerInfo implements GrpcMessage {
  static id = 'client.CustomerInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CustomerInfo();
    CustomerInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CustomerInfo) {
    _instance.id = _instance.id || '0';
    _instance.customerName = _instance.customerName || '';
    _instance.address = _instance.address || '';
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CustomerInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt64String();
          break;
        case 2:
          _instance.customerName = _reader.readString();
          break;
        case 3:
          _instance.address = _reader.readString();
          break;
        case 4:
          _instance.username = _reader.readString();
          break;
        case 5:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CustomerInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CustomerInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt64String(1, _instance.id);
    }
    if (_instance.customerName) {
      _writer.writeString(2, _instance.customerName);
    }
    if (_instance.address) {
      _writer.writeString(3, _instance.address);
    }
    if (_instance.username) {
      _writer.writeString(4, _instance.username);
    }
    if (_instance.password) {
      _writer.writeString(5, _instance.password);
    }
  }

  private _id?: string;
  private _customerName?: string;
  private _address?: string;
  private _username?: string;
  private _password?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CustomerInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<CustomerInfo.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.customerName = _value.customerName;
    this.address = _value.address;
    this.username = _value.username;
    this.password = _value.password;
    CustomerInfo.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get customerName(): string | undefined {
    return this._customerName;
  }
  set customerName(value: string | undefined) {
    this._customerName = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CustomerInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CustomerInfo.AsObject {
    return {
      id: this.id,
      customerName: this.customerName,
      address: this.address,
      username: this.username,
      password: this.password
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CustomerInfo.AsProtobufJSON {
    return {
      id: this.id,
      customerName: this.customerName,
      address: this.address,
      username: this.username,
      password: this.password
    };
  }
}
export module CustomerInfo {
  /**
   * Standard JavaScript object representation for CustomerInfo
   */
  export interface AsObject {
    id?: string;
    customerName?: string;
    address?: string;
    username?: string;
    password?: string;
  }

  /**
   * Protobuf JSON representation for CustomerInfo
   */
  export interface AsProtobufJSON {
    id?: string;
    customerName?: string;
    address?: string;
    username?: string;
    password?: string;
  }
}

/**
 * Message implementation for client.CustomerResponse
 */
export class CustomerResponse implements GrpcMessage {
  static id = 'client.CustomerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CustomerResponse();
    CustomerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CustomerResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CustomerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new CustomerInfo();
          _reader.readMessage(
            messageInitializer2,
            CustomerInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    CustomerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CustomerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        CustomerInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: CustomerInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CustomerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CustomerResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new CustomerInfo(m));
    CustomerResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): CustomerInfo[] | undefined {
    return this._data;
  }
  set data(value: CustomerInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CustomerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CustomerResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CustomerResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module CustomerResponse {
  /**
   * Standard JavaScript object representation for CustomerResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: CustomerInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for CustomerResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: CustomerInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.MasterDataInfo
 */
export class MasterDataInfo implements GrpcMessage {
  static id = 'client.MasterDataInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MasterDataInfo();
    MasterDataInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MasterDataInfo) {
    _instance.objectId = _instance.objectId || 0;
    _instance.objectName = _instance.objectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MasterDataInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.objectId = _reader.readInt32();
          break;
        case 2:
          _instance.objectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MasterDataInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MasterDataInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.objectId) {
      _writer.writeInt32(1, _instance.objectId);
    }
    if (_instance.objectName) {
      _writer.writeString(2, _instance.objectName);
    }
  }

  private _objectId?: number;
  private _objectName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MasterDataInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<MasterDataInfo.AsObject>) {
    _value = _value || {};
    this.objectId = _value.objectId;
    this.objectName = _value.objectName;
    MasterDataInfo.refineValues(this);
  }
  get objectId(): number | undefined {
    return this._objectId;
  }
  set objectId(value: number | undefined) {
    this._objectId = value;
  }
  get objectName(): string | undefined {
    return this._objectName;
  }
  set objectName(value: string | undefined) {
    this._objectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MasterDataInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MasterDataInfo.AsObject {
    return {
      objectId: this.objectId,
      objectName: this.objectName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): MasterDataInfo.AsProtobufJSON {
    return {
      objectId: this.objectId,
      objectName: this.objectName
    };
  }
}
export module MasterDataInfo {
  /**
   * Standard JavaScript object representation for MasterDataInfo
   */
  export interface AsObject {
    objectId?: number;
    objectName?: string;
  }

  /**
   * Protobuf JSON representation for MasterDataInfo
   */
  export interface AsProtobufJSON {
    objectId?: number;
    objectName?: string;
  }
}

/**
 * Message implementation for client.MasterDataResponse
 */
export class MasterDataResponse implements GrpcMessage {
  static id = 'client.MasterDataResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MasterDataResponse();
    MasterDataResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MasterDataResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MasterDataResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new MasterDataInfo();
          _reader.readMessage(
            messageInitializer2,
            MasterDataInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    MasterDataResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MasterDataResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        MasterDataInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: MasterDataInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MasterDataResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<MasterDataResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new MasterDataInfo(m));
    MasterDataResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): MasterDataInfo[] | undefined {
    return this._data;
  }
  set data(value: MasterDataInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MasterDataResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MasterDataResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): MasterDataResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module MasterDataResponse {
  /**
   * Standard JavaScript object representation for MasterDataResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: MasterDataInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for MasterDataResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: MasterDataInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.AreaInfo
 */
export class AreaInfo implements GrpcMessage {
  static id = 'client.AreaInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AreaInfo();
    AreaInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AreaInfo) {
    _instance.id = _instance.id || 0;
    _instance.areaName = _instance.areaName || '';
    _instance.address = _instance.address || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AreaInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.areaName = _reader.readString();
          break;
        case 3:
          _instance.address = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AreaInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: AreaInfo, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.areaName) {
      _writer.writeString(2, _instance.areaName);
    }
    if (_instance.address) {
      _writer.writeString(3, _instance.address);
    }
  }

  private _id?: number;
  private _areaName?: string;
  private _address?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AreaInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<AreaInfo.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.areaName = _value.areaName;
    this.address = _value.address;
    AreaInfo.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get areaName(): string | undefined {
    return this._areaName;
  }
  set areaName(value: string | undefined) {
    this._areaName = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AreaInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AreaInfo.AsObject {
    return {
      id: this.id,
      areaName: this.areaName,
      address: this.address
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AreaInfo.AsProtobufJSON {
    return {
      id: this.id,
      areaName: this.areaName,
      address: this.address
    };
  }
}
export module AreaInfo {
  /**
   * Standard JavaScript object representation for AreaInfo
   */
  export interface AsObject {
    id?: number;
    areaName?: string;
    address?: string;
  }

  /**
   * Protobuf JSON representation for AreaInfo
   */
  export interface AsProtobufJSON {
    id?: number;
    areaName?: string;
    address?: string;
  }
}

/**
 * Message implementation for client.AreaResponse
 */
export class AreaResponse implements GrpcMessage {
  static id = 'client.AreaResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AreaResponse();
    AreaResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AreaResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AreaResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new AreaInfo();
          _reader.readMessage(
            messageInitializer2,
            AreaInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    AreaResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AreaResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        AreaInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: AreaInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AreaResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AreaResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new AreaInfo(m));
    AreaResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): AreaInfo[] | undefined {
    return this._data;
  }
  set data(value: AreaInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AreaResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AreaResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AreaResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module AreaResponse {
  /**
   * Standard JavaScript object representation for AreaResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: AreaInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for AreaResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: AreaInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.OrderInfo
 */
export class OrderInfo implements GrpcMessage {
  static id = 'client.OrderInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OrderInfo();
    OrderInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OrderInfo) {
    _instance.id = _instance.id || '0';
    _instance.orderCode = _instance.orderCode || '';
    _instance.createdDate = _instance.createdDate || '';
    _instance.idQRCode = _instance.idQRCode || '0';
    _instance.typeGoodId = _instance.typeGoodId || 0;
    _instance.typeGoodName = _instance.typeGoodName || '';
    _instance.weight = _instance.weight || 0;
    _instance.statusId = _instance.statusId || 0;
    _instance.statusName = _instance.statusName || '';
    _instance.expiry = _instance.expiry || '';
    _instance.idUser = _instance.idUser || 0;
    _instance.idCustomer = _instance.idCustomer || 0;
    _instance.idWareHouse = _instance.idWareHouse || 0;
    _instance.wareHouseName = _instance.wareHouseName || '';
    _instance.wareHouseCode = _instance.wareHouseCode || '';
    _instance.employeeCode = _instance.employeeCode || '';
    _instance.employeeName = _instance.employeeName || '';
    _instance.customerName = _instance.customerName || '';
    _instance.customerAddress = _instance.customerAddress || '';
    _instance.imgQRCode = _instance.imgQRCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OrderInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt64String();
          break;
        case 2:
          _instance.orderCode = _reader.readString();
          break;
        case 3:
          _instance.createdDate = _reader.readString();
          break;
        case 4:
          _instance.idQRCode = _reader.readInt64String();
          break;
        case 5:
          _instance.typeGoodId = _reader.readInt32();
          break;
        case 6:
          _instance.typeGoodName = _reader.readString();
          break;
        case 7:
          _instance.weight = _reader.readDouble();
          break;
        case 8:
          _instance.statusId = _reader.readInt32();
          break;
        case 9:
          _instance.statusName = _reader.readString();
          break;
        case 10:
          _instance.expiry = _reader.readString();
          break;
        case 11:
          _instance.idUser = _reader.readInt32();
          break;
        case 12:
          _instance.idCustomer = _reader.readInt32();
          break;
        case 13:
          _instance.idWareHouse = _reader.readInt32();
          break;
        case 14:
          _instance.wareHouseName = _reader.readString();
          break;
        case 15:
          _instance.wareHouseCode = _reader.readString();
          break;
        case 16:
          _instance.employeeCode = _reader.readString();
          break;
        case 17:
          _instance.employeeName = _reader.readString();
          break;
        case 18:
          _instance.customerName = _reader.readString();
          break;
        case 19:
          _instance.customerAddress = _reader.readString();
          break;
        case 20:
          _instance.imgQRCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    OrderInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: OrderInfo, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt64String(1, _instance.id);
    }
    if (_instance.orderCode) {
      _writer.writeString(2, _instance.orderCode);
    }
    if (_instance.createdDate) {
      _writer.writeString(3, _instance.createdDate);
    }
    if (_instance.idQRCode) {
      _writer.writeInt64String(4, _instance.idQRCode);
    }
    if (_instance.typeGoodId) {
      _writer.writeInt32(5, _instance.typeGoodId);
    }
    if (_instance.typeGoodName) {
      _writer.writeString(6, _instance.typeGoodName);
    }
    if (_instance.weight) {
      _writer.writeDouble(7, _instance.weight);
    }
    if (_instance.statusId) {
      _writer.writeInt32(8, _instance.statusId);
    }
    if (_instance.statusName) {
      _writer.writeString(9, _instance.statusName);
    }
    if (_instance.expiry) {
      _writer.writeString(10, _instance.expiry);
    }
    if (_instance.idUser) {
      _writer.writeInt32(11, _instance.idUser);
    }
    if (_instance.idCustomer) {
      _writer.writeInt32(12, _instance.idCustomer);
    }
    if (_instance.idWareHouse) {
      _writer.writeInt32(13, _instance.idWareHouse);
    }
    if (_instance.wareHouseName) {
      _writer.writeString(14, _instance.wareHouseName);
    }
    if (_instance.wareHouseCode) {
      _writer.writeString(15, _instance.wareHouseCode);
    }
    if (_instance.employeeCode) {
      _writer.writeString(16, _instance.employeeCode);
    }
    if (_instance.employeeName) {
      _writer.writeString(17, _instance.employeeName);
    }
    if (_instance.customerName) {
      _writer.writeString(18, _instance.customerName);
    }
    if (_instance.customerAddress) {
      _writer.writeString(19, _instance.customerAddress);
    }
    if (_instance.imgQRCode) {
      _writer.writeString(20, _instance.imgQRCode);
    }
  }

  private _id?: string;
  private _orderCode?: string;
  private _createdDate?: string;
  private _idQRCode?: string;
  private _typeGoodId?: number;
  private _typeGoodName?: string;
  private _weight?: number;
  private _statusId?: number;
  private _statusName?: string;
  private _expiry?: string;
  private _idUser?: number;
  private _idCustomer?: number;
  private _idWareHouse?: number;
  private _wareHouseName?: string;
  private _wareHouseCode?: string;
  private _employeeCode?: string;
  private _employeeName?: string;
  private _customerName?: string;
  private _customerAddress?: string;
  private _imgQRCode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrderInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrderInfo.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.orderCode = _value.orderCode;
    this.createdDate = _value.createdDate;
    this.idQRCode = _value.idQRCode;
    this.typeGoodId = _value.typeGoodId;
    this.typeGoodName = _value.typeGoodName;
    this.weight = _value.weight;
    this.statusId = _value.statusId;
    this.statusName = _value.statusName;
    this.expiry = _value.expiry;
    this.idUser = _value.idUser;
    this.idCustomer = _value.idCustomer;
    this.idWareHouse = _value.idWareHouse;
    this.wareHouseName = _value.wareHouseName;
    this.wareHouseCode = _value.wareHouseCode;
    this.employeeCode = _value.employeeCode;
    this.employeeName = _value.employeeName;
    this.customerName = _value.customerName;
    this.customerAddress = _value.customerAddress;
    this.imgQRCode = _value.imgQRCode;
    OrderInfo.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get orderCode(): string | undefined {
    return this._orderCode;
  }
  set orderCode(value: string | undefined) {
    this._orderCode = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }
  get idQRCode(): string | undefined {
    return this._idQRCode;
  }
  set idQRCode(value: string | undefined) {
    this._idQRCode = value;
  }
  get typeGoodId(): number | undefined {
    return this._typeGoodId;
  }
  set typeGoodId(value: number | undefined) {
    this._typeGoodId = value;
  }
  get typeGoodName(): string | undefined {
    return this._typeGoodName;
  }
  set typeGoodName(value: string | undefined) {
    this._typeGoodName = value;
  }
  get weight(): number | undefined {
    return this._weight;
  }
  set weight(value: number | undefined) {
    this._weight = value;
  }
  get statusId(): number | undefined {
    return this._statusId;
  }
  set statusId(value: number | undefined) {
    this._statusId = value;
  }
  get statusName(): string | undefined {
    return this._statusName;
  }
  set statusName(value: string | undefined) {
    this._statusName = value;
  }
  get expiry(): string | undefined {
    return this._expiry;
  }
  set expiry(value: string | undefined) {
    this._expiry = value;
  }
  get idUser(): number | undefined {
    return this._idUser;
  }
  set idUser(value: number | undefined) {
    this._idUser = value;
  }
  get idCustomer(): number | undefined {
    return this._idCustomer;
  }
  set idCustomer(value: number | undefined) {
    this._idCustomer = value;
  }
  get idWareHouse(): number | undefined {
    return this._idWareHouse;
  }
  set idWareHouse(value: number | undefined) {
    this._idWareHouse = value;
  }
  get wareHouseName(): string | undefined {
    return this._wareHouseName;
  }
  set wareHouseName(value: string | undefined) {
    this._wareHouseName = value;
  }
  get wareHouseCode(): string | undefined {
    return this._wareHouseCode;
  }
  set wareHouseCode(value: string | undefined) {
    this._wareHouseCode = value;
  }
  get employeeCode(): string | undefined {
    return this._employeeCode;
  }
  set employeeCode(value: string | undefined) {
    this._employeeCode = value;
  }
  get employeeName(): string | undefined {
    return this._employeeName;
  }
  set employeeName(value: string | undefined) {
    this._employeeName = value;
  }
  get customerName(): string | undefined {
    return this._customerName;
  }
  set customerName(value: string | undefined) {
    this._customerName = value;
  }
  get customerAddress(): string | undefined {
    return this._customerAddress;
  }
  set customerAddress(value: string | undefined) {
    this._customerAddress = value;
  }
  get imgQRCode(): string | undefined {
    return this._imgQRCode;
  }
  set imgQRCode(value: string | undefined) {
    this._imgQRCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OrderInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OrderInfo.AsObject {
    return {
      id: this.id,
      orderCode: this.orderCode,
      createdDate: this.createdDate,
      idQRCode: this.idQRCode,
      typeGoodId: this.typeGoodId,
      typeGoodName: this.typeGoodName,
      weight: this.weight,
      statusId: this.statusId,
      statusName: this.statusName,
      expiry: this.expiry,
      idUser: this.idUser,
      idCustomer: this.idCustomer,
      idWareHouse: this.idWareHouse,
      wareHouseName: this.wareHouseName,
      wareHouseCode: this.wareHouseCode,
      employeeCode: this.employeeCode,
      employeeName: this.employeeName,
      customerName: this.customerName,
      customerAddress: this.customerAddress,
      imgQRCode: this.imgQRCode
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): OrderInfo.AsProtobufJSON {
    return {
      id: this.id,
      orderCode: this.orderCode,
      createdDate: this.createdDate,
      idQRCode: this.idQRCode,
      typeGoodId: this.typeGoodId,
      typeGoodName: this.typeGoodName,
      weight: this.weight,
      statusId: this.statusId,
      statusName: this.statusName,
      expiry: this.expiry,
      idUser: this.idUser,
      idCustomer: this.idCustomer,
      idWareHouse: this.idWareHouse,
      wareHouseName: this.wareHouseName,
      wareHouseCode: this.wareHouseCode,
      employeeCode: this.employeeCode,
      employeeName: this.employeeName,
      customerName: this.customerName,
      customerAddress: this.customerAddress,
      imgQRCode: this.imgQRCode
    };
  }
}
export module OrderInfo {
  /**
   * Standard JavaScript object representation for OrderInfo
   */
  export interface AsObject {
    id?: string;
    orderCode?: string;
    createdDate?: string;
    idQRCode?: string;
    typeGoodId?: number;
    typeGoodName?: string;
    weight?: number;
    statusId?: number;
    statusName?: string;
    expiry?: string;
    idUser?: number;
    idCustomer?: number;
    idWareHouse?: number;
    wareHouseName?: string;
    wareHouseCode?: string;
    employeeCode?: string;
    employeeName?: string;
    customerName?: string;
    customerAddress?: string;
    imgQRCode?: string;
  }

  /**
   * Protobuf JSON representation for OrderInfo
   */
  export interface AsProtobufJSON {
    id?: string;
    orderCode?: string;
    createdDate?: string;
    idQRCode?: string;
    typeGoodId?: number;
    typeGoodName?: string;
    weight?: number;
    statusId?: number;
    statusName?: string;
    expiry?: string;
    idUser?: number;
    idCustomer?: number;
    idWareHouse?: number;
    wareHouseName?: string;
    wareHouseCode?: string;
    employeeCode?: string;
    employeeName?: string;
    customerName?: string;
    customerAddress?: string;
    imgQRCode?: string;
  }
}

/**
 * Message implementation for client.OrderResponse
 */
export class OrderResponse implements GrpcMessage {
  static id = 'client.OrderResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OrderResponse();
    OrderResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OrderResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OrderResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new OrderInfo();
          _reader.readMessage(
            messageInitializer2,
            OrderInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    OrderResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OrderResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        OrderInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: OrderInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrderResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrderResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new OrderInfo(m));
    OrderResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): OrderInfo[] | undefined {
    return this._data;
  }
  set data(value: OrderInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OrderResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OrderResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): OrderResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module OrderResponse {
  /**
   * Standard JavaScript object representation for OrderResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: OrderInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for OrderResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: OrderInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.OrderReply
 */
export class OrderReply implements GrpcMessage {
  static id = 'client.OrderReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OrderReply();
    OrderReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OrderReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OrderReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.data = new OrderInfo();
          _reader.readMessage(
            _instance.data,
            OrderInfo.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    OrderReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: OrderReply, _writer: BinaryWriter) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data) {
      _writer.writeMessage(
        2,
        _instance.data as any,
        OrderInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: OrderInfo;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrderReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrderReply.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = _value.data ? new OrderInfo(_value.data) : undefined;
    OrderReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): OrderInfo | undefined {
    return this._data;
  }
  set data(value: OrderInfo | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OrderReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OrderReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: this.data ? this.data.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): OrderReply.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: this.data ? this.data.toProtobufJSON(options) : null
    };
  }
}
export module OrderReply {
  /**
   * Standard JavaScript object representation for OrderReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: OrderInfo.AsObject;
  }

  /**
   * Protobuf JSON representation for OrderReply
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: OrderInfo.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for client.ReportSummaryInfo
 */
export class ReportSummaryInfo implements GrpcMessage {
  static id = 'client.ReportSummaryInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportSummaryInfo();
    ReportSummaryInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportSummaryInfo) {
    _instance.idWareHouse = _instance.idWareHouse || 0;
    _instance.dateCheck = _instance.dateCheck || '';
    _instance.cntAllOrder = _instance.cntAllOrder || '0';
    _instance.cntNewOrder = _instance.cntNewOrder || '0';
    _instance.cntCompletedOrder = _instance.cntCompletedOrder || '0';
    _instance.cntCanceledOrder = _instance.cntCanceledOrder || '0';
    _instance.wareHouseCode = _instance.wareHouseCode || '';
    _instance.wareHouseName = _instance.wareHouseName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportSummaryInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idWareHouse = _reader.readInt32();
          break;
        case 2:
          _instance.dateCheck = _reader.readString();
          break;
        case 3:
          _instance.cntAllOrder = _reader.readInt64String();
          break;
        case 4:
          _instance.cntNewOrder = _reader.readInt64String();
          break;
        case 5:
          _instance.cntCompletedOrder = _reader.readInt64String();
          break;
        case 6:
          _instance.cntCanceledOrder = _reader.readInt64String();
          break;
        case 7:
          _instance.wareHouseCode = _reader.readString();
          break;
        case 8:
          _instance.wareHouseName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ReportSummaryInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportSummaryInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idWareHouse) {
      _writer.writeInt32(1, _instance.idWareHouse);
    }
    if (_instance.dateCheck) {
      _writer.writeString(2, _instance.dateCheck);
    }
    if (_instance.cntAllOrder) {
      _writer.writeInt64String(3, _instance.cntAllOrder);
    }
    if (_instance.cntNewOrder) {
      _writer.writeInt64String(4, _instance.cntNewOrder);
    }
    if (_instance.cntCompletedOrder) {
      _writer.writeInt64String(5, _instance.cntCompletedOrder);
    }
    if (_instance.cntCanceledOrder) {
      _writer.writeInt64String(6, _instance.cntCanceledOrder);
    }
    if (_instance.wareHouseCode) {
      _writer.writeString(7, _instance.wareHouseCode);
    }
    if (_instance.wareHouseName) {
      _writer.writeString(8, _instance.wareHouseName);
    }
  }

  private _idWareHouse?: number;
  private _dateCheck?: string;
  private _cntAllOrder?: string;
  private _cntNewOrder?: string;
  private _cntCompletedOrder?: string;
  private _cntCanceledOrder?: string;
  private _wareHouseCode?: string;
  private _wareHouseName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportSummaryInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportSummaryInfo.AsObject>) {
    _value = _value || {};
    this.idWareHouse = _value.idWareHouse;
    this.dateCheck = _value.dateCheck;
    this.cntAllOrder = _value.cntAllOrder;
    this.cntNewOrder = _value.cntNewOrder;
    this.cntCompletedOrder = _value.cntCompletedOrder;
    this.cntCanceledOrder = _value.cntCanceledOrder;
    this.wareHouseCode = _value.wareHouseCode;
    this.wareHouseName = _value.wareHouseName;
    ReportSummaryInfo.refineValues(this);
  }
  get idWareHouse(): number | undefined {
    return this._idWareHouse;
  }
  set idWareHouse(value: number | undefined) {
    this._idWareHouse = value;
  }
  get dateCheck(): string | undefined {
    return this._dateCheck;
  }
  set dateCheck(value: string | undefined) {
    this._dateCheck = value;
  }
  get cntAllOrder(): string | undefined {
    return this._cntAllOrder;
  }
  set cntAllOrder(value: string | undefined) {
    this._cntAllOrder = value;
  }
  get cntNewOrder(): string | undefined {
    return this._cntNewOrder;
  }
  set cntNewOrder(value: string | undefined) {
    this._cntNewOrder = value;
  }
  get cntCompletedOrder(): string | undefined {
    return this._cntCompletedOrder;
  }
  set cntCompletedOrder(value: string | undefined) {
    this._cntCompletedOrder = value;
  }
  get cntCanceledOrder(): string | undefined {
    return this._cntCanceledOrder;
  }
  set cntCanceledOrder(value: string | undefined) {
    this._cntCanceledOrder = value;
  }
  get wareHouseCode(): string | undefined {
    return this._wareHouseCode;
  }
  set wareHouseCode(value: string | undefined) {
    this._wareHouseCode = value;
  }
  get wareHouseName(): string | undefined {
    return this._wareHouseName;
  }
  set wareHouseName(value: string | undefined) {
    this._wareHouseName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportSummaryInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportSummaryInfo.AsObject {
    return {
      idWareHouse: this.idWareHouse,
      dateCheck: this.dateCheck,
      cntAllOrder: this.cntAllOrder,
      cntNewOrder: this.cntNewOrder,
      cntCompletedOrder: this.cntCompletedOrder,
      cntCanceledOrder: this.cntCanceledOrder,
      wareHouseCode: this.wareHouseCode,
      wareHouseName: this.wareHouseName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ReportSummaryInfo.AsProtobufJSON {
    return {
      idWareHouse: this.idWareHouse,
      dateCheck: this.dateCheck,
      cntAllOrder: this.cntAllOrder,
      cntNewOrder: this.cntNewOrder,
      cntCompletedOrder: this.cntCompletedOrder,
      cntCanceledOrder: this.cntCanceledOrder,
      wareHouseCode: this.wareHouseCode,
      wareHouseName: this.wareHouseName
    };
  }
}
export module ReportSummaryInfo {
  /**
   * Standard JavaScript object representation for ReportSummaryInfo
   */
  export interface AsObject {
    idWareHouse?: number;
    dateCheck?: string;
    cntAllOrder?: string;
    cntNewOrder?: string;
    cntCompletedOrder?: string;
    cntCanceledOrder?: string;
    wareHouseCode?: string;
    wareHouseName?: string;
  }

  /**
   * Protobuf JSON representation for ReportSummaryInfo
   */
  export interface AsProtobufJSON {
    idWareHouse?: number;
    dateCheck?: string;
    cntAllOrder?: string;
    cntNewOrder?: string;
    cntCompletedOrder?: string;
    cntCanceledOrder?: string;
    wareHouseCode?: string;
    wareHouseName?: string;
  }
}

/**
 * Message implementation for client.ReportSummaryResponse
 */
export class ReportSummaryResponse implements GrpcMessage {
  static id = 'client.ReportSummaryResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportSummaryResponse();
    ReportSummaryResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportSummaryResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportSummaryResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new ReportSummaryInfo();
          _reader.readMessage(
            messageInitializer2,
            ReportSummaryInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ReportSummaryResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportSummaryResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        ReportSummaryInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ReportSummaryInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportSummaryResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportSummaryResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ReportSummaryInfo(m));
    ReportSummaryResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ReportSummaryInfo[] | undefined {
    return this._data;
  }
  set data(value: ReportSummaryInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportSummaryResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportSummaryResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ReportSummaryResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ReportSummaryResponse {
  /**
   * Standard JavaScript object representation for ReportSummaryResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ReportSummaryInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ReportSummaryResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ReportSummaryInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.AddressInfo
 */
export class AddressInfo implements GrpcMessage {
  static id = 'client.AddressInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddressInfo();
    AddressInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddressInfo) {
    _instance.areaId = _instance.areaId || 0;
    _instance.areaName = _instance.areaName || '';
    _instance.provinceId = _instance.provinceId || 0;
    _instance.provinceName = _instance.provinceName || '';
    _instance.districtId = _instance.districtId || 0;
    _instance.districtName = _instance.districtName || '';
    _instance.wardId = _instance.wardId || 0;
    _instance.wardName = _instance.wardName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddressInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.areaId = _reader.readInt32();
          break;
        case 2:
          _instance.areaName = _reader.readString();
          break;
        case 3:
          _instance.provinceId = _reader.readInt32();
          break;
        case 4:
          _instance.provinceName = _reader.readString();
          break;
        case 5:
          _instance.districtId = _reader.readInt32();
          break;
        case 6:
          _instance.districtName = _reader.readString();
          break;
        case 7:
          _instance.wardId = _reader.readInt32();
          break;
        case 8:
          _instance.wardName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddressInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddressInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.areaId) {
      _writer.writeInt32(1, _instance.areaId);
    }
    if (_instance.areaName) {
      _writer.writeString(2, _instance.areaName);
    }
    if (_instance.provinceId) {
      _writer.writeInt32(3, _instance.provinceId);
    }
    if (_instance.provinceName) {
      _writer.writeString(4, _instance.provinceName);
    }
    if (_instance.districtId) {
      _writer.writeInt32(5, _instance.districtId);
    }
    if (_instance.districtName) {
      _writer.writeString(6, _instance.districtName);
    }
    if (_instance.wardId) {
      _writer.writeInt32(7, _instance.wardId);
    }
    if (_instance.wardName) {
      _writer.writeString(8, _instance.wardName);
    }
  }

  private _areaId?: number;
  private _areaName?: string;
  private _provinceId?: number;
  private _provinceName?: string;
  private _districtId?: number;
  private _districtName?: string;
  private _wardId?: number;
  private _wardName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddressInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddressInfo.AsObject>) {
    _value = _value || {};
    this.areaId = _value.areaId;
    this.areaName = _value.areaName;
    this.provinceId = _value.provinceId;
    this.provinceName = _value.provinceName;
    this.districtId = _value.districtId;
    this.districtName = _value.districtName;
    this.wardId = _value.wardId;
    this.wardName = _value.wardName;
    AddressInfo.refineValues(this);
  }
  get areaId(): number | undefined {
    return this._areaId;
  }
  set areaId(value: number | undefined) {
    this._areaId = value;
  }
  get areaName(): string | undefined {
    return this._areaName;
  }
  set areaName(value: string | undefined) {
    this._areaName = value;
  }
  get provinceId(): number | undefined {
    return this._provinceId;
  }
  set provinceId(value: number | undefined) {
    this._provinceId = value;
  }
  get provinceName(): string | undefined {
    return this._provinceName;
  }
  set provinceName(value: string | undefined) {
    this._provinceName = value;
  }
  get districtId(): number | undefined {
    return this._districtId;
  }
  set districtId(value: number | undefined) {
    this._districtId = value;
  }
  get districtName(): string | undefined {
    return this._districtName;
  }
  set districtName(value: string | undefined) {
    this._districtName = value;
  }
  get wardId(): number | undefined {
    return this._wardId;
  }
  set wardId(value: number | undefined) {
    this._wardId = value;
  }
  get wardName(): string | undefined {
    return this._wardName;
  }
  set wardName(value: string | undefined) {
    this._wardName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddressInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddressInfo.AsObject {
    return {
      areaId: this.areaId,
      areaName: this.areaName,
      provinceId: this.provinceId,
      provinceName: this.provinceName,
      districtId: this.districtId,
      districtName: this.districtName,
      wardId: this.wardId,
      wardName: this.wardName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddressInfo.AsProtobufJSON {
    return {
      areaId: this.areaId,
      areaName: this.areaName,
      provinceId: this.provinceId,
      provinceName: this.provinceName,
      districtId: this.districtId,
      districtName: this.districtName,
      wardId: this.wardId,
      wardName: this.wardName
    };
  }
}
export module AddressInfo {
  /**
   * Standard JavaScript object representation for AddressInfo
   */
  export interface AsObject {
    areaId?: number;
    areaName?: string;
    provinceId?: number;
    provinceName?: string;
    districtId?: number;
    districtName?: string;
    wardId?: number;
    wardName?: string;
  }

  /**
   * Protobuf JSON representation for AddressInfo
   */
  export interface AsProtobufJSON {
    areaId?: number;
    areaName?: string;
    provinceId?: number;
    provinceName?: string;
    districtId?: number;
    districtName?: string;
    wardId?: number;
    wardName?: string;
  }
}

/**
 * Message implementation for client.AddressResponse
 */
export class AddressResponse implements GrpcMessage {
  static id = 'client.AddressResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddressResponse();
    AddressResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddressResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddressResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new AddressInfo();
          _reader.readMessage(
            messageInitializer2,
            AddressInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    AddressResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddressResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        AddressInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: AddressInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddressResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddressResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new AddressInfo(m));
    AddressResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): AddressInfo[] | undefined {
    return this._data;
  }
  set data(value: AddressInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddressResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddressResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddressResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module AddressResponse {
  /**
   * Standard JavaScript object representation for AddressResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: AddressInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for AddressResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: AddressInfo.AsProtobufJSON[] | null;
  }
}
