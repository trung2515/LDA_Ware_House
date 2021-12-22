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
    _instance.idShift = _instance.idShift || 0;
    _instance.idShiftDetail = _instance.idShiftDetail || 0;
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.fromDate = _instance.fromDate || '';
    _instance.toDate = _instance.toDate || '';
    _instance.codeCard = _instance.codeCard || '';
    _instance.date = _instance.date || '';
    _instance.userID = _instance.userID || 0;
    _instance.userName = _instance.userName || '';
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
          _instance.idShift = _reader.readInt32();
          break;
        case 2:
          _instance.idShiftDetail = _reader.readInt32();
          break;
        case 3:
          _instance.codeParcel = _reader.readString();
          break;
        case 4:
          _instance.fromDate = _reader.readString();
          break;
        case 5:
          _instance.toDate = _reader.readString();
          break;
        case 6:
          _instance.codeCard = _reader.readString();
          break;
        case 7:
          _instance.date = _reader.readString();
          break;
        case 8:
          _instance.userID = _reader.readInt32();
          break;
        case 9:
          _instance.userName = _reader.readString();
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
    if (_instance.idShift) {
      _writer.writeInt32(1, _instance.idShift);
    }
    if (_instance.idShiftDetail) {
      _writer.writeInt32(2, _instance.idShiftDetail);
    }
    if (_instance.codeParcel) {
      _writer.writeString(3, _instance.codeParcel);
    }
    if (_instance.fromDate) {
      _writer.writeString(4, _instance.fromDate);
    }
    if (_instance.toDate) {
      _writer.writeString(5, _instance.toDate);
    }
    if (_instance.codeCard) {
      _writer.writeString(6, _instance.codeCard);
    }
    if (_instance.date) {
      _writer.writeString(7, _instance.date);
    }
    if (_instance.userID) {
      _writer.writeInt32(8, _instance.userID);
    }
    if (_instance.userName) {
      _writer.writeString(9, _instance.userName);
    }
  }

  private _idShift?: number;
  private _idShiftDetail?: number;
  private _codeParcel?: string;
  private _fromDate?: string;
  private _toDate?: string;
  private _codeCard?: string;
  private _date?: string;
  private _userID?: number;
  private _userName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MasterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MasterRequest.AsObject>) {
    _value = _value || {};
    this.idShift = _value.idShift;
    this.idShiftDetail = _value.idShiftDetail;
    this.codeParcel = _value.codeParcel;
    this.fromDate = _value.fromDate;
    this.toDate = _value.toDate;
    this.codeCard = _value.codeCard;
    this.date = _value.date;
    this.userID = _value.userID;
    this.userName = _value.userName;
    MasterRequest.refineValues(this);
  }
  get idShift(): number | undefined {
    return this._idShift;
  }
  set idShift(value: number | undefined) {
    this._idShift = value;
  }
  get idShiftDetail(): number | undefined {
    return this._idShiftDetail;
  }
  set idShiftDetail(value: number | undefined) {
    this._idShiftDetail = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
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
  get codeCard(): string | undefined {
    return this._codeCard;
  }
  set codeCard(value: string | undefined) {
    this._codeCard = value;
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get userID(): number | undefined {
    return this._userID;
  }
  set userID(value: number | undefined) {
    this._userID = value;
  }
  get userName(): string | undefined {
    return this._userName;
  }
  set userName(value: string | undefined) {
    this._userName = value;
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
      idShift: this.idShift,
      idShiftDetail: this.idShiftDetail,
      codeParcel: this.codeParcel,
      fromDate: this.fromDate,
      toDate: this.toDate,
      codeCard: this.codeCard,
      date: this.date,
      userID: this.userID,
      userName: this.userName
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
      idShift: this.idShift,
      idShiftDetail: this.idShiftDetail,
      codeParcel: this.codeParcel,
      fromDate: this.fromDate,
      toDate: this.toDate,
      codeCard: this.codeCard,
      date: this.date,
      userID: this.userID,
      userName: this.userName
    };
  }
}
export module MasterRequest {
  /**
   * Standard JavaScript object representation for MasterRequest
   */
  export interface AsObject {
    idShift?: number;
    idShiftDetail?: number;
    codeParcel?: string;
    fromDate?: string;
    toDate?: string;
    codeCard?: string;
    date?: string;
    userID?: number;
    userName?: string;
  }

  /**
   * Protobuf JSON representation for MasterRequest
   */
  export interface AsProtobufJSON {
    idShift?: number;
    idShiftDetail?: number;
    codeParcel?: string;
    fromDate?: string;
    toDate?: string;
    codeCard?: string;
    date?: string;
    userID?: number;
    userName?: string;
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
 * Message implementation for client.CodePacketInfo
 */
export class CodePacketInfo implements GrpcMessage {
  static id = 'client.CodePacketInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CodePacketInfo();
    CodePacketInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CodePacketInfo) {
    _instance.codePacket = _instance.codePacket || '';
    _instance.unit = _instance.unit || '';
    _instance.nameProductPacket = _instance.nameProductPacket || '';
    _instance.idTypePacket = _instance.idTypePacket || 0;
    _instance.description = _instance.description || '';
    _instance.isDeteted = _instance.isDeteted || false;
    _instance.id = _instance.id || 0;
    _instance.weight = _instance.weight || 0;
    _instance.nameTypePacket = _instance.nameTypePacket || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CodePacketInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.codePacket = _reader.readString();
          break;
        case 2:
          _instance.unit = _reader.readString();
          break;
        case 3:
          _instance.nameProductPacket = _reader.readString();
          break;
        case 4:
          _instance.idTypePacket = _reader.readInt32();
          break;
        case 5:
          _instance.description = _reader.readString();
          break;
        case 6:
          _instance.isDeteted = _reader.readBool();
          break;
        case 7:
          _instance.id = _reader.readInt32();
          break;
        case 8:
          _instance.weight = _reader.readFloat();
          break;
        case 9:
          _instance.nameTypePacket = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CodePacketInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CodePacketInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.codePacket) {
      _writer.writeString(1, _instance.codePacket);
    }
    if (_instance.unit) {
      _writer.writeString(2, _instance.unit);
    }
    if (_instance.nameProductPacket) {
      _writer.writeString(3, _instance.nameProductPacket);
    }
    if (_instance.idTypePacket) {
      _writer.writeInt32(4, _instance.idTypePacket);
    }
    if (_instance.description) {
      _writer.writeString(5, _instance.description);
    }
    if (_instance.isDeteted) {
      _writer.writeBool(6, _instance.isDeteted);
    }
    if (_instance.id) {
      _writer.writeInt32(7, _instance.id);
    }
    if (_instance.weight) {
      _writer.writeFloat(8, _instance.weight);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(9, _instance.nameTypePacket);
    }
  }

  private _codePacket?: string;
  private _unit?: string;
  private _nameProductPacket?: string;
  private _idTypePacket?: number;
  private _description?: string;
  private _isDeteted?: boolean;
  private _id?: number;
  private _weight?: number;
  private _nameTypePacket?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CodePacketInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<CodePacketInfo.AsObject>) {
    _value = _value || {};
    this.codePacket = _value.codePacket;
    this.unit = _value.unit;
    this.nameProductPacket = _value.nameProductPacket;
    this.idTypePacket = _value.idTypePacket;
    this.description = _value.description;
    this.isDeteted = _value.isDeteted;
    this.id = _value.id;
    this.weight = _value.weight;
    this.nameTypePacket = _value.nameTypePacket;
    CodePacketInfo.refineValues(this);
  }
  get codePacket(): string | undefined {
    return this._codePacket;
  }
  set codePacket(value: string | undefined) {
    this._codePacket = value;
  }
  get unit(): string | undefined {
    return this._unit;
  }
  set unit(value: string | undefined) {
    this._unit = value;
  }
  get nameProductPacket(): string | undefined {
    return this._nameProductPacket;
  }
  set nameProductPacket(value: string | undefined) {
    this._nameProductPacket = value;
  }
  get idTypePacket(): number | undefined {
    return this._idTypePacket;
  }
  set idTypePacket(value: number | undefined) {
    this._idTypePacket = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get isDeteted(): boolean | undefined {
    return this._isDeteted;
  }
  set isDeteted(value: boolean | undefined) {
    this._isDeteted = value;
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get weight(): number | undefined {
    return this._weight;
  }
  set weight(value: number | undefined) {
    this._weight = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CodePacketInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CodePacketInfo.AsObject {
    return {
      codePacket: this.codePacket,
      unit: this.unit,
      nameProductPacket: this.nameProductPacket,
      idTypePacket: this.idTypePacket,
      description: this.description,
      isDeteted: this.isDeteted,
      id: this.id,
      weight: this.weight,
      nameTypePacket: this.nameTypePacket
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
  ): CodePacketInfo.AsProtobufJSON {
    return {
      codePacket: this.codePacket,
      unit: this.unit,
      nameProductPacket: this.nameProductPacket,
      idTypePacket: this.idTypePacket,
      description: this.description,
      isDeteted: this.isDeteted,
      id: this.id,
      weight: this.weight,
      nameTypePacket: this.nameTypePacket
    };
  }
}
export module CodePacketInfo {
  /**
   * Standard JavaScript object representation for CodePacketInfo
   */
  export interface AsObject {
    codePacket?: string;
    unit?: string;
    nameProductPacket?: string;
    idTypePacket?: number;
    description?: string;
    isDeteted?: boolean;
    id?: number;
    weight?: number;
    nameTypePacket?: string;
  }

  /**
   * Protobuf JSON representation for CodePacketInfo
   */
  export interface AsProtobufJSON {
    codePacket?: string;
    unit?: string;
    nameProductPacket?: string;
    idTypePacket?: number;
    description?: string;
    isDeteted?: boolean;
    id?: number;
    weight?: number;
    nameTypePacket?: string;
  }
}

/**
 * Message implementation for client.CodePacketResponse
 */
export class CodePacketResponse implements GrpcMessage {
  static id = 'client.CodePacketResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CodePacketResponse();
    CodePacketResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CodePacketResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CodePacketResponse,
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
          const messageInitializer2 = new CodePacketInfo();
          _reader.readMessage(
            messageInitializer2,
            CodePacketInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    CodePacketResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CodePacketResponse,
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
        CodePacketInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: CodePacketInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CodePacketResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CodePacketResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new CodePacketInfo(m));
    CodePacketResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): CodePacketInfo[] | undefined {
    return this._data;
  }
  set data(value: CodePacketInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CodePacketResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CodePacketResponse.AsObject {
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
  ): CodePacketResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module CodePacketResponse {
  /**
   * Standard JavaScript object representation for CodePacketResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: CodePacketInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for CodePacketResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: CodePacketInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.EquipmentInfo
 */
export class EquipmentInfo implements GrpcMessage {
  static id = 'client.EquipmentInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EquipmentInfo();
    EquipmentInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EquipmentInfo) {
    _instance.idEquipment = _instance.idEquipment || 0;
    _instance.nameEquipment = _instance.nameEquipment || '';
    _instance.type = _instance.type || 0;
    _instance.typeName = _instance.typeName || '';
    _instance.isDeleted = _instance.isDeleted || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EquipmentInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idEquipment = _reader.readInt32();
          break;
        case 2:
          _instance.nameEquipment = _reader.readString();
          break;
        case 3:
          _instance.type = _reader.readInt32();
          break;
        case 4:
          _instance.typeName = _reader.readString();
          break;
        case 5:
          _instance.isDeleted = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    EquipmentInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EquipmentInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idEquipment) {
      _writer.writeInt32(1, _instance.idEquipment);
    }
    if (_instance.nameEquipment) {
      _writer.writeString(2, _instance.nameEquipment);
    }
    if (_instance.type) {
      _writer.writeInt32(3, _instance.type);
    }
    if (_instance.typeName) {
      _writer.writeString(4, _instance.typeName);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(5, _instance.isDeleted);
    }
  }

  private _idEquipment?: number;
  private _nameEquipment?: string;
  private _type?: number;
  private _typeName?: string;
  private _isDeleted?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EquipmentInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<EquipmentInfo.AsObject>) {
    _value = _value || {};
    this.idEquipment = _value.idEquipment;
    this.nameEquipment = _value.nameEquipment;
    this.type = _value.type;
    this.typeName = _value.typeName;
    this.isDeleted = _value.isDeleted;
    EquipmentInfo.refineValues(this);
  }
  get idEquipment(): number | undefined {
    return this._idEquipment;
  }
  set idEquipment(value: number | undefined) {
    this._idEquipment = value;
  }
  get nameEquipment(): string | undefined {
    return this._nameEquipment;
  }
  set nameEquipment(value: string | undefined) {
    this._nameEquipment = value;
  }
  get type(): number | undefined {
    return this._type;
  }
  set type(value: number | undefined) {
    this._type = value;
  }
  get typeName(): string | undefined {
    return this._typeName;
  }
  set typeName(value: string | undefined) {
    this._typeName = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EquipmentInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EquipmentInfo.AsObject {
    return {
      idEquipment: this.idEquipment,
      nameEquipment: this.nameEquipment,
      type: this.type,
      typeName: this.typeName,
      isDeleted: this.isDeleted
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
  ): EquipmentInfo.AsProtobufJSON {
    return {
      idEquipment: this.idEquipment,
      nameEquipment: this.nameEquipment,
      type: this.type,
      typeName: this.typeName,
      isDeleted: this.isDeleted
    };
  }
}
export module EquipmentInfo {
  /**
   * Standard JavaScript object representation for EquipmentInfo
   */
  export interface AsObject {
    idEquipment?: number;
    nameEquipment?: string;
    type?: number;
    typeName?: string;
    isDeleted?: boolean;
  }

  /**
   * Protobuf JSON representation for EquipmentInfo
   */
  export interface AsProtobufJSON {
    idEquipment?: number;
    nameEquipment?: string;
    type?: number;
    typeName?: string;
    isDeleted?: boolean;
  }
}

/**
 * Message implementation for client.EquipmentResponse
 */
export class EquipmentResponse implements GrpcMessage {
  static id = 'client.EquipmentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EquipmentResponse();
    EquipmentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EquipmentResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EquipmentResponse,
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
          const messageInitializer2 = new EquipmentInfo();
          _reader.readMessage(
            messageInitializer2,
            EquipmentInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    EquipmentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EquipmentResponse,
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
        EquipmentInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: EquipmentInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EquipmentResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<EquipmentResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new EquipmentInfo(m));
    EquipmentResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): EquipmentInfo[] | undefined {
    return this._data;
  }
  set data(value: EquipmentInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EquipmentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EquipmentResponse.AsObject {
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
  ): EquipmentResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module EquipmentResponse {
  /**
   * Standard JavaScript object representation for EquipmentResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: EquipmentInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for EquipmentResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: EquipmentInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.PackingUnitInfo
 */
export class PackingUnitInfo implements GrpcMessage {
  static id = 'client.PackingUnitInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PackingUnitInfo();
    PackingUnitInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PackingUnitInfo) {
    _instance.idPackingUnit = _instance.idPackingUnit || 0;
    _instance.codePackingUnit = _instance.codePackingUnit || '';
    _instance.namePackingUnit = _instance.namePackingUnit || '';
    _instance.isDeleted = _instance.isDeleted || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PackingUnitInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idPackingUnit = _reader.readInt32();
          break;
        case 2:
          _instance.codePackingUnit = _reader.readString();
          break;
        case 3:
          _instance.namePackingUnit = _reader.readString();
          break;
        case 4:
          _instance.isDeleted = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    PackingUnitInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PackingUnitInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idPackingUnit) {
      _writer.writeInt32(1, _instance.idPackingUnit);
    }
    if (_instance.codePackingUnit) {
      _writer.writeString(2, _instance.codePackingUnit);
    }
    if (_instance.namePackingUnit) {
      _writer.writeString(3, _instance.namePackingUnit);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(4, _instance.isDeleted);
    }
  }

  private _idPackingUnit?: number;
  private _codePackingUnit?: string;
  private _namePackingUnit?: string;
  private _isDeleted?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PackingUnitInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<PackingUnitInfo.AsObject>) {
    _value = _value || {};
    this.idPackingUnit = _value.idPackingUnit;
    this.codePackingUnit = _value.codePackingUnit;
    this.namePackingUnit = _value.namePackingUnit;
    this.isDeleted = _value.isDeleted;
    PackingUnitInfo.refineValues(this);
  }
  get idPackingUnit(): number | undefined {
    return this._idPackingUnit;
  }
  set idPackingUnit(value: number | undefined) {
    this._idPackingUnit = value;
  }
  get codePackingUnit(): string | undefined {
    return this._codePackingUnit;
  }
  set codePackingUnit(value: string | undefined) {
    this._codePackingUnit = value;
  }
  get namePackingUnit(): string | undefined {
    return this._namePackingUnit;
  }
  set namePackingUnit(value: string | undefined) {
    this._namePackingUnit = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PackingUnitInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PackingUnitInfo.AsObject {
    return {
      idPackingUnit: this.idPackingUnit,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      isDeleted: this.isDeleted
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
  ): PackingUnitInfo.AsProtobufJSON {
    return {
      idPackingUnit: this.idPackingUnit,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      isDeleted: this.isDeleted
    };
  }
}
export module PackingUnitInfo {
  /**
   * Standard JavaScript object representation for PackingUnitInfo
   */
  export interface AsObject {
    idPackingUnit?: number;
    codePackingUnit?: string;
    namePackingUnit?: string;
    isDeleted?: boolean;
  }

  /**
   * Protobuf JSON representation for PackingUnitInfo
   */
  export interface AsProtobufJSON {
    idPackingUnit?: number;
    codePackingUnit?: string;
    namePackingUnit?: string;
    isDeleted?: boolean;
  }
}

/**
 * Message implementation for client.PackingUnitResponse
 */
export class PackingUnitResponse implements GrpcMessage {
  static id = 'client.PackingUnitResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PackingUnitResponse();
    PackingUnitResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PackingUnitResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PackingUnitResponse,
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
          const messageInitializer2 = new PackingUnitInfo();
          _reader.readMessage(
            messageInitializer2,
            PackingUnitInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    PackingUnitResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PackingUnitResponse,
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
        PackingUnitInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: PackingUnitInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PackingUnitResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PackingUnitResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new PackingUnitInfo(m));
    PackingUnitResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): PackingUnitInfo[] | undefined {
    return this._data;
  }
  set data(value: PackingUnitInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PackingUnitResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PackingUnitResponse.AsObject {
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
  ): PackingUnitResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module PackingUnitResponse {
  /**
   * Standard JavaScript object representation for PackingUnitResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: PackingUnitInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for PackingUnitResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: PackingUnitInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.PartnerInfo
 */
export class PartnerInfo implements GrpcMessage {
  static id = 'client.PartnerInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PartnerInfo();
    PartnerInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PartnerInfo) {
    _instance.idPartner = _instance.idPartner || 0;
    _instance.namePartner = _instance.namePartner || '';
    _instance.typePartner = _instance.typePartner || 0;
    _instance.isDeleted = _instance.isDeleted || false;
    _instance.typePartnerName = _instance.typePartnerName || '';
    _instance.codePartner = _instance.codePartner || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PartnerInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idPartner = _reader.readInt32();
          break;
        case 2:
          _instance.namePartner = _reader.readString();
          break;
        case 3:
          _instance.typePartner = _reader.readInt32();
          break;
        case 4:
          _instance.isDeleted = _reader.readBool();
          break;
        case 5:
          _instance.typePartnerName = _reader.readString();
          break;
        case 6:
          _instance.codePartner = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PartnerInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PartnerInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idPartner) {
      _writer.writeInt32(1, _instance.idPartner);
    }
    if (_instance.namePartner) {
      _writer.writeString(2, _instance.namePartner);
    }
    if (_instance.typePartner) {
      _writer.writeInt32(3, _instance.typePartner);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(4, _instance.isDeleted);
    }
    if (_instance.typePartnerName) {
      _writer.writeString(5, _instance.typePartnerName);
    }
    if (_instance.codePartner) {
      _writer.writeString(6, _instance.codePartner);
    }
  }

  private _idPartner?: number;
  private _namePartner?: string;
  private _typePartner?: number;
  private _isDeleted?: boolean;
  private _typePartnerName?: string;
  private _codePartner?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PartnerInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<PartnerInfo.AsObject>) {
    _value = _value || {};
    this.idPartner = _value.idPartner;
    this.namePartner = _value.namePartner;
    this.typePartner = _value.typePartner;
    this.isDeleted = _value.isDeleted;
    this.typePartnerName = _value.typePartnerName;
    this.codePartner = _value.codePartner;
    PartnerInfo.refineValues(this);
  }
  get idPartner(): number | undefined {
    return this._idPartner;
  }
  set idPartner(value: number | undefined) {
    this._idPartner = value;
  }
  get namePartner(): string | undefined {
    return this._namePartner;
  }
  set namePartner(value: string | undefined) {
    this._namePartner = value;
  }
  get typePartner(): number | undefined {
    return this._typePartner;
  }
  set typePartner(value: number | undefined) {
    this._typePartner = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }
  get typePartnerName(): string | undefined {
    return this._typePartnerName;
  }
  set typePartnerName(value: string | undefined) {
    this._typePartnerName = value;
  }
  get codePartner(): string | undefined {
    return this._codePartner;
  }
  set codePartner(value: string | undefined) {
    this._codePartner = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PartnerInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PartnerInfo.AsObject {
    return {
      idPartner: this.idPartner,
      namePartner: this.namePartner,
      typePartner: this.typePartner,
      isDeleted: this.isDeleted,
      typePartnerName: this.typePartnerName,
      codePartner: this.codePartner
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
  ): PartnerInfo.AsProtobufJSON {
    return {
      idPartner: this.idPartner,
      namePartner: this.namePartner,
      typePartner: this.typePartner,
      isDeleted: this.isDeleted,
      typePartnerName: this.typePartnerName,
      codePartner: this.codePartner
    };
  }
}
export module PartnerInfo {
  /**
   * Standard JavaScript object representation for PartnerInfo
   */
  export interface AsObject {
    idPartner?: number;
    namePartner?: string;
    typePartner?: number;
    isDeleted?: boolean;
    typePartnerName?: string;
    codePartner?: string;
  }

  /**
   * Protobuf JSON representation for PartnerInfo
   */
  export interface AsProtobufJSON {
    idPartner?: number;
    namePartner?: string;
    typePartner?: number;
    isDeleted?: boolean;
    typePartnerName?: string;
    codePartner?: string;
  }
}

/**
 * Message implementation for client.PartnerResponse
 */
export class PartnerResponse implements GrpcMessage {
  static id = 'client.PartnerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PartnerResponse();
    PartnerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PartnerResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PartnerResponse,
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
          const messageInitializer2 = new PartnerInfo();
          _reader.readMessage(
            messageInitializer2,
            PartnerInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    PartnerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PartnerResponse,
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
        PartnerInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: PartnerInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PartnerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PartnerResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new PartnerInfo(m));
    PartnerResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): PartnerInfo[] | undefined {
    return this._data;
  }
  set data(value: PartnerInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PartnerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PartnerResponse.AsObject {
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
  ): PartnerResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module PartnerResponse {
  /**
   * Standard JavaScript object representation for PartnerResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: PartnerInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for PartnerResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: PartnerInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ProductInfo
 */
export class ProductInfo implements GrpcMessage {
  static id = 'client.ProductInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductInfo();
    ProductInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductInfo) {
    _instance.idProduct = _instance.idProduct || 0;
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.isDeleted = _instance.isDeleted || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ProductInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idProduct = _reader.readInt32();
          break;
        case 2:
          _instance.codeProduct = _reader.readString();
          break;
        case 3:
          _instance.nameProduct = _reader.readString();
          break;
        case 4:
          _instance.isDeleted = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ProductInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idProduct) {
      _writer.writeInt32(1, _instance.idProduct);
    }
    if (_instance.codeProduct) {
      _writer.writeString(2, _instance.codeProduct);
    }
    if (_instance.nameProduct) {
      _writer.writeString(3, _instance.nameProduct);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(4, _instance.isDeleted);
    }
  }

  private _idProduct?: number;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _isDeleted?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ProductInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductInfo.AsObject>) {
    _value = _value || {};
    this.idProduct = _value.idProduct;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.isDeleted = _value.isDeleted;
    ProductInfo.refineValues(this);
  }
  get idProduct(): number | undefined {
    return this._idProduct;
  }
  set idProduct(value: number | undefined) {
    this._idProduct = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ProductInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductInfo.AsObject {
    return {
      idProduct: this.idProduct,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      isDeleted: this.isDeleted
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
  ): ProductInfo.AsProtobufJSON {
    return {
      idProduct: this.idProduct,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      isDeleted: this.isDeleted
    };
  }
}
export module ProductInfo {
  /**
   * Standard JavaScript object representation for ProductInfo
   */
  export interface AsObject {
    idProduct?: number;
    codeProduct?: string;
    nameProduct?: string;
    isDeleted?: boolean;
  }

  /**
   * Protobuf JSON representation for ProductInfo
   */
  export interface AsProtobufJSON {
    idProduct?: number;
    codeProduct?: string;
    nameProduct?: string;
    isDeleted?: boolean;
  }
}

/**
 * Message implementation for client.ProductResponse
 */
export class ProductResponse implements GrpcMessage {
  static id = 'client.ProductResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductResponse();
    ProductResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ProductResponse,
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
          const messageInitializer2 = new ProductInfo();
          _reader.readMessage(
            messageInitializer2,
            ProductInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ProductResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductResponse,
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
        ProductInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ProductInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ProductResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ProductInfo(m));
    ProductResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ProductInfo[] | undefined {
    return this._data;
  }
  set data(value: ProductInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ProductResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductResponse.AsObject {
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
  ): ProductResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ProductResponse {
  /**
   * Standard JavaScript object representation for ProductResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ProductInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ProductResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ProductInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ReasonInfo
 */
export class ReasonInfo implements GrpcMessage {
  static id = 'client.ReasonInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReasonInfo();
    ReasonInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReasonInfo) {
    _instance.idReason = _instance.idReason || 0;
    _instance.nameReason = _instance.nameReason || '';
    _instance.isDeleted = _instance.isDeleted || false;
    _instance.codeReason = _instance.codeReason || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReasonInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idReason = _reader.readInt32();
          break;
        case 2:
          _instance.nameReason = _reader.readString();
          break;
        case 3:
          _instance.isDeleted = _reader.readBool();
          break;
        case 4:
          _instance.codeReason = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ReasonInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ReasonInfo, _writer: BinaryWriter) {
    if (_instance.idReason) {
      _writer.writeInt32(1, _instance.idReason);
    }
    if (_instance.nameReason) {
      _writer.writeString(2, _instance.nameReason);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(3, _instance.isDeleted);
    }
    if (_instance.codeReason) {
      _writer.writeString(4, _instance.codeReason);
    }
  }

  private _idReason?: number;
  private _nameReason?: string;
  private _isDeleted?: boolean;
  private _codeReason?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReasonInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReasonInfo.AsObject>) {
    _value = _value || {};
    this.idReason = _value.idReason;
    this.nameReason = _value.nameReason;
    this.isDeleted = _value.isDeleted;
    this.codeReason = _value.codeReason;
    ReasonInfo.refineValues(this);
  }
  get idReason(): number | undefined {
    return this._idReason;
  }
  set idReason(value: number | undefined) {
    this._idReason = value;
  }
  get nameReason(): string | undefined {
    return this._nameReason;
  }
  set nameReason(value: string | undefined) {
    this._nameReason = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }
  get codeReason(): string | undefined {
    return this._codeReason;
  }
  set codeReason(value: string | undefined) {
    this._codeReason = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReasonInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReasonInfo.AsObject {
    return {
      idReason: this.idReason,
      nameReason: this.nameReason,
      isDeleted: this.isDeleted,
      codeReason: this.codeReason
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
  ): ReasonInfo.AsProtobufJSON {
    return {
      idReason: this.idReason,
      nameReason: this.nameReason,
      isDeleted: this.isDeleted,
      codeReason: this.codeReason
    };
  }
}
export module ReasonInfo {
  /**
   * Standard JavaScript object representation for ReasonInfo
   */
  export interface AsObject {
    idReason?: number;
    nameReason?: string;
    isDeleted?: boolean;
    codeReason?: string;
  }

  /**
   * Protobuf JSON representation for ReasonInfo
   */
  export interface AsProtobufJSON {
    idReason?: number;
    nameReason?: string;
    isDeleted?: boolean;
    codeReason?: string;
  }
}

/**
 * Message implementation for client.ReasonResponse
 */
export class ReasonResponse implements GrpcMessage {
  static id = 'client.ReasonResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReasonResponse();
    ReasonResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReasonResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReasonResponse,
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
          const messageInitializer2 = new ReasonInfo();
          _reader.readMessage(
            messageInitializer2,
            ReasonInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ReasonResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReasonResponse,
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
        ReasonInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ReasonInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReasonResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReasonResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ReasonInfo(m));
    ReasonResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ReasonInfo[] | undefined {
    return this._data;
  }
  set data(value: ReasonInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReasonResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReasonResponse.AsObject {
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
  ): ReasonResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ReasonResponse {
  /**
   * Standard JavaScript object representation for ReasonResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ReasonInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ReasonResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ReasonInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.TypeBillInfo
 */
export class TypeBillInfo implements GrpcMessage {
  static id = 'client.TypeBillInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TypeBillInfo();
    TypeBillInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TypeBillInfo) {
    _instance.idTypeBill = _instance.idTypeBill || 0;
    _instance.nameTypeBill = _instance.nameTypeBill || '';
    _instance.isDeleted = _instance.isDeleted || false;
    _instance.codeTypeBill = _instance.codeTypeBill || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TypeBillInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idTypeBill = _reader.readInt32();
          break;
        case 2:
          _instance.nameTypeBill = _reader.readString();
          break;
        case 3:
          _instance.isDeleted = _reader.readBool();
          break;
        case 4:
          _instance.codeTypeBill = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TypeBillInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TypeBillInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idTypeBill) {
      _writer.writeInt32(1, _instance.idTypeBill);
    }
    if (_instance.nameTypeBill) {
      _writer.writeString(2, _instance.nameTypeBill);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(3, _instance.isDeleted);
    }
    if (_instance.codeTypeBill) {
      _writer.writeString(4, _instance.codeTypeBill);
    }
  }

  private _idTypeBill?: number;
  private _nameTypeBill?: string;
  private _isDeleted?: boolean;
  private _codeTypeBill?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TypeBillInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<TypeBillInfo.AsObject>) {
    _value = _value || {};
    this.idTypeBill = _value.idTypeBill;
    this.nameTypeBill = _value.nameTypeBill;
    this.isDeleted = _value.isDeleted;
    this.codeTypeBill = _value.codeTypeBill;
    TypeBillInfo.refineValues(this);
  }
  get idTypeBill(): number | undefined {
    return this._idTypeBill;
  }
  set idTypeBill(value: number | undefined) {
    this._idTypeBill = value;
  }
  get nameTypeBill(): string | undefined {
    return this._nameTypeBill;
  }
  set nameTypeBill(value: string | undefined) {
    this._nameTypeBill = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }
  get codeTypeBill(): string | undefined {
    return this._codeTypeBill;
  }
  set codeTypeBill(value: string | undefined) {
    this._codeTypeBill = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TypeBillInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TypeBillInfo.AsObject {
    return {
      idTypeBill: this.idTypeBill,
      nameTypeBill: this.nameTypeBill,
      isDeleted: this.isDeleted,
      codeTypeBill: this.codeTypeBill
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
  ): TypeBillInfo.AsProtobufJSON {
    return {
      idTypeBill: this.idTypeBill,
      nameTypeBill: this.nameTypeBill,
      isDeleted: this.isDeleted,
      codeTypeBill: this.codeTypeBill
    };
  }
}
export module TypeBillInfo {
  /**
   * Standard JavaScript object representation for TypeBillInfo
   */
  export interface AsObject {
    idTypeBill?: number;
    nameTypeBill?: string;
    isDeleted?: boolean;
    codeTypeBill?: string;
  }

  /**
   * Protobuf JSON representation for TypeBillInfo
   */
  export interface AsProtobufJSON {
    idTypeBill?: number;
    nameTypeBill?: string;
    isDeleted?: boolean;
    codeTypeBill?: string;
  }
}

/**
 * Message implementation for client.TypeBillResponse
 */
export class TypeBillResponse implements GrpcMessage {
  static id = 'client.TypeBillResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TypeBillResponse();
    TypeBillResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TypeBillResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TypeBillResponse,
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
          const messageInitializer2 = new TypeBillInfo();
          _reader.readMessage(
            messageInitializer2,
            TypeBillInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    TypeBillResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TypeBillResponse,
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
        TypeBillInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: TypeBillInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TypeBillResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TypeBillResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new TypeBillInfo(m));
    TypeBillResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): TypeBillInfo[] | undefined {
    return this._data;
  }
  set data(value: TypeBillInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TypeBillResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TypeBillResponse.AsObject {
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
  ): TypeBillResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module TypeBillResponse {
  /**
   * Standard JavaScript object representation for TypeBillResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: TypeBillInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for TypeBillResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: TypeBillInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.TypePacketInfo
 */
export class TypePacketInfo implements GrpcMessage {
  static id = 'client.TypePacketInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TypePacketInfo();
    TypePacketInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TypePacketInfo) {
    _instance.idTypePacket = _instance.idTypePacket || 0;
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.weight = _instance.weight || 0;
    _instance.isDeleted = _instance.isDeleted || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TypePacketInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idTypePacket = _reader.readInt32();
          break;
        case 2:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 3:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 4:
          _instance.weight = _reader.readInt32();
          break;
        case 5:
          _instance.isDeleted = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    TypePacketInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TypePacketInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idTypePacket) {
      _writer.writeInt32(1, _instance.idTypePacket);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(2, _instance.codeTypePacket);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(3, _instance.nameTypePacket);
    }
    if (_instance.weight) {
      _writer.writeInt32(4, _instance.weight);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(5, _instance.isDeleted);
    }
  }

  private _idTypePacket?: number;
  private _codeTypePacket?: string;
  private _nameTypePacket?: string;
  private _weight?: number;
  private _isDeleted?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TypePacketInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<TypePacketInfo.AsObject>) {
    _value = _value || {};
    this.idTypePacket = _value.idTypePacket;
    this.codeTypePacket = _value.codeTypePacket;
    this.nameTypePacket = _value.nameTypePacket;
    this.weight = _value.weight;
    this.isDeleted = _value.isDeleted;
    TypePacketInfo.refineValues(this);
  }
  get idTypePacket(): number | undefined {
    return this._idTypePacket;
  }
  set idTypePacket(value: number | undefined) {
    this._idTypePacket = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get weight(): number | undefined {
    return this._weight;
  }
  set weight(value: number | undefined) {
    this._weight = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TypePacketInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TypePacketInfo.AsObject {
    return {
      idTypePacket: this.idTypePacket,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      weight: this.weight,
      isDeleted: this.isDeleted
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
  ): TypePacketInfo.AsProtobufJSON {
    return {
      idTypePacket: this.idTypePacket,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      weight: this.weight,
      isDeleted: this.isDeleted
    };
  }
}
export module TypePacketInfo {
  /**
   * Standard JavaScript object representation for TypePacketInfo
   */
  export interface AsObject {
    idTypePacket?: number;
    codeTypePacket?: string;
    nameTypePacket?: string;
    weight?: number;
    isDeleted?: boolean;
  }

  /**
   * Protobuf JSON representation for TypePacketInfo
   */
  export interface AsProtobufJSON {
    idTypePacket?: number;
    codeTypePacket?: string;
    nameTypePacket?: string;
    weight?: number;
    isDeleted?: boolean;
  }
}

/**
 * Message implementation for client.TypePacketResponse
 */
export class TypePacketResponse implements GrpcMessage {
  static id = 'client.TypePacketResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TypePacketResponse();
    TypePacketResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TypePacketResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TypePacketResponse,
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
          const messageInitializer2 = new TypePacketInfo();
          _reader.readMessage(
            messageInitializer2,
            TypePacketInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    TypePacketResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TypePacketResponse,
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
        TypePacketInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: TypePacketInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TypePacketResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TypePacketResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new TypePacketInfo(m));
    TypePacketResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): TypePacketInfo[] | undefined {
    return this._data;
  }
  set data(value: TypePacketInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TypePacketResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TypePacketResponse.AsObject {
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
  ): TypePacketResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module TypePacketResponse {
  /**
   * Standard JavaScript object representation for TypePacketResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: TypePacketInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for TypePacketResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: TypePacketInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.TypeProductInfo
 */
export class TypeProductInfo implements GrpcMessage {
  static id = 'client.TypeProductInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TypeProductInfo();
    TypeProductInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TypeProductInfo) {
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.isDeleted = _instance.isDeleted || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TypeProductInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 2:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 3:
          _instance.isDeleted = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    TypeProductInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TypeProductInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idTypeProduct) {
      _writer.writeInt32(1, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(2, _instance.nameTypeProduct);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(3, _instance.isDeleted);
    }
  }

  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _isDeleted?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TypeProductInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<TypeProductInfo.AsObject>) {
    _value = _value || {};
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.isDeleted = _value.isDeleted;
    TypeProductInfo.refineValues(this);
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TypeProductInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TypeProductInfo.AsObject {
    return {
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      isDeleted: this.isDeleted
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
  ): TypeProductInfo.AsProtobufJSON {
    return {
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      isDeleted: this.isDeleted
    };
  }
}
export module TypeProductInfo {
  /**
   * Standard JavaScript object representation for TypeProductInfo
   */
  export interface AsObject {
    idTypeProduct?: number;
    nameTypeProduct?: string;
    isDeleted?: boolean;
  }

  /**
   * Protobuf JSON representation for TypeProductInfo
   */
  export interface AsProtobufJSON {
    idTypeProduct?: number;
    nameTypeProduct?: string;
    isDeleted?: boolean;
  }
}

/**
 * Message implementation for client.TypeProductResponse
 */
export class TypeProductResponse implements GrpcMessage {
  static id = 'client.TypeProductResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TypeProductResponse();
    TypeProductResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TypeProductResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TypeProductResponse,
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
          const messageInitializer2 = new TypeProductInfo();
          _reader.readMessage(
            messageInitializer2,
            TypeProductInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    TypeProductResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TypeProductResponse,
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
        TypeProductInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: TypeProductInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TypeProductResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TypeProductResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new TypeProductInfo(m));
    TypeProductResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): TypeProductInfo[] | undefined {
    return this._data;
  }
  set data(value: TypeProductInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TypeProductResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TypeProductResponse.AsObject {
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
  ): TypeProductResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module TypeProductResponse {
  /**
   * Standard JavaScript object representation for TypeProductResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: TypeProductInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for TypeProductResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: TypeProductInfo.AsProtobufJSON[] | null;
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
    _instance.idWareHouse = _instance.idWareHouse || 0;
    _instance.nameWareHouse = _instance.nameWareHouse || '';
    _instance.capacity = _instance.capacity || 0;
    _instance.isDeleted = _instance.isDeleted || false;
    _instance.codeWareHouse = _instance.codeWareHouse || '';
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
          _instance.idWareHouse = _reader.readInt32();
          break;
        case 2:
          _instance.nameWareHouse = _reader.readString();
          break;
        case 3:
          _instance.capacity = _reader.readFloat();
          break;
        case 4:
          _instance.isDeleted = _reader.readBool();
          break;
        case 5:
          _instance.codeWareHouse = _reader.readString();
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
    if (_instance.idWareHouse) {
      _writer.writeInt32(1, _instance.idWareHouse);
    }
    if (_instance.nameWareHouse) {
      _writer.writeString(2, _instance.nameWareHouse);
    }
    if (_instance.capacity) {
      _writer.writeFloat(3, _instance.capacity);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(4, _instance.isDeleted);
    }
    if (_instance.codeWareHouse) {
      _writer.writeString(5, _instance.codeWareHouse);
    }
  }

  private _idWareHouse?: number;
  private _nameWareHouse?: string;
  private _capacity?: number;
  private _isDeleted?: boolean;
  private _codeWareHouse?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WareHouseInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<WareHouseInfo.AsObject>) {
    _value = _value || {};
    this.idWareHouse = _value.idWareHouse;
    this.nameWareHouse = _value.nameWareHouse;
    this.capacity = _value.capacity;
    this.isDeleted = _value.isDeleted;
    this.codeWareHouse = _value.codeWareHouse;
    WareHouseInfo.refineValues(this);
  }
  get idWareHouse(): number | undefined {
    return this._idWareHouse;
  }
  set idWareHouse(value: number | undefined) {
    this._idWareHouse = value;
  }
  get nameWareHouse(): string | undefined {
    return this._nameWareHouse;
  }
  set nameWareHouse(value: string | undefined) {
    this._nameWareHouse = value;
  }
  get capacity(): number | undefined {
    return this._capacity;
  }
  set capacity(value: number | undefined) {
    this._capacity = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }
  get codeWareHouse(): string | undefined {
    return this._codeWareHouse;
  }
  set codeWareHouse(value: string | undefined) {
    this._codeWareHouse = value;
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
      idWareHouse: this.idWareHouse,
      nameWareHouse: this.nameWareHouse,
      capacity: this.capacity,
      isDeleted: this.isDeleted,
      codeWareHouse: this.codeWareHouse
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
      idWareHouse: this.idWareHouse,
      nameWareHouse: this.nameWareHouse,
      capacity: this.capacity,
      isDeleted: this.isDeleted,
      codeWareHouse: this.codeWareHouse
    };
  }
}
export module WareHouseInfo {
  /**
   * Standard JavaScript object representation for WareHouseInfo
   */
  export interface AsObject {
    idWareHouse?: number;
    nameWareHouse?: string;
    capacity?: number;
    isDeleted?: boolean;
    codeWareHouse?: string;
  }

  /**
   * Protobuf JSON representation for WareHouseInfo
   */
  export interface AsProtobufJSON {
    idWareHouse?: number;
    nameWareHouse?: string;
    capacity?: number;
    isDeleted?: boolean;
    codeWareHouse?: string;
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
 * Message implementation for client.WorkInfo
 */
export class WorkInfo implements GrpcMessage {
  static id = 'client.WorkInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WorkInfo();
    WorkInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WorkInfo) {
    _instance.idWork = _instance.idWork || 0;
    _instance.nameWork = _instance.nameWork || '';
    _instance.isDeleted = _instance.isDeleted || false;
    _instance.codeWork = _instance.codeWork || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WorkInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idWork = _reader.readInt32();
          break;
        case 2:
          _instance.nameWork = _reader.readString();
          break;
        case 3:
          _instance.isDeleted = _reader.readBool();
          break;
        case 4:
          _instance.codeWork = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    WorkInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: WorkInfo, _writer: BinaryWriter) {
    if (_instance.idWork) {
      _writer.writeInt32(1, _instance.idWork);
    }
    if (_instance.nameWork) {
      _writer.writeString(2, _instance.nameWork);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(3, _instance.isDeleted);
    }
    if (_instance.codeWork) {
      _writer.writeString(4, _instance.codeWork);
    }
  }

  private _idWork?: number;
  private _nameWork?: string;
  private _isDeleted?: boolean;
  private _codeWork?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WorkInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<WorkInfo.AsObject>) {
    _value = _value || {};
    this.idWork = _value.idWork;
    this.nameWork = _value.nameWork;
    this.isDeleted = _value.isDeleted;
    this.codeWork = _value.codeWork;
    WorkInfo.refineValues(this);
  }
  get idWork(): number | undefined {
    return this._idWork;
  }
  set idWork(value: number | undefined) {
    this._idWork = value;
  }
  get nameWork(): string | undefined {
    return this._nameWork;
  }
  set nameWork(value: string | undefined) {
    this._nameWork = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
  }
  get codeWork(): string | undefined {
    return this._codeWork;
  }
  set codeWork(value: string | undefined) {
    this._codeWork = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WorkInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WorkInfo.AsObject {
    return {
      idWork: this.idWork,
      nameWork: this.nameWork,
      isDeleted: this.isDeleted,
      codeWork: this.codeWork
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
  ): WorkInfo.AsProtobufJSON {
    return {
      idWork: this.idWork,
      nameWork: this.nameWork,
      isDeleted: this.isDeleted,
      codeWork: this.codeWork
    };
  }
}
export module WorkInfo {
  /**
   * Standard JavaScript object representation for WorkInfo
   */
  export interface AsObject {
    idWork?: number;
    nameWork?: string;
    isDeleted?: boolean;
    codeWork?: string;
  }

  /**
   * Protobuf JSON representation for WorkInfo
   */
  export interface AsProtobufJSON {
    idWork?: number;
    nameWork?: string;
    isDeleted?: boolean;
    codeWork?: string;
  }
}

/**
 * Message implementation for client.WorkResponse
 */
export class WorkResponse implements GrpcMessage {
  static id = 'client.WorkResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WorkResponse();
    WorkResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WorkResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WorkResponse,
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
          const messageInitializer2 = new WorkInfo();
          _reader.readMessage(
            messageInitializer2,
            WorkInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    WorkResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WorkResponse,
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
        WorkInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: WorkInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WorkResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<WorkResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new WorkInfo(m));
    WorkResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): WorkInfo[] | undefined {
    return this._data;
  }
  set data(value: WorkInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WorkResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WorkResponse.AsObject {
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
  ): WorkResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module WorkResponse {
  /**
   * Standard JavaScript object representation for WorkResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: WorkInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for WorkResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: WorkInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ShiftDetailInfo
 */
export class ShiftDetailInfo implements GrpcMessage {
  static id = 'client.ShiftDetailInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ShiftDetailInfo();
    ShiftDetailInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ShiftDetailInfo) {
    _instance.idShiftDetail = _instance.idShiftDetail || 0;
    _instance.optionName = _instance.optionName || '';
    _instance.codeTypeBill = _instance.codeTypeBill || '';
    _instance.nameTypeBill = _instance.nameTypeBill || '';
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.codeWareHouse = _instance.codeWareHouse || '';
    _instance.nameWareHouse = _instance.nameWareHouse || '';
    _instance.idShift = _instance.idShift || 0;
    _instance.nameShift = _instance.nameShift || '';
    _instance.codePackingUnit = _instance.codePackingUnit || '';
    _instance.namePackingUnit = _instance.namePackingUnit || '';
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.nameCreatedPerson = _instance.nameCreatedPerson || '';
    _instance.date = _instance.date || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ShiftDetailInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idShiftDetail = _reader.readInt32();
          break;
        case 2:
          _instance.optionName = _reader.readString();
          break;
        case 3:
          _instance.codeTypeBill = _reader.readString();
          break;
        case 4:
          _instance.nameTypeBill = _reader.readString();
          break;
        case 5:
          _instance.codeProduct = _reader.readString();
          break;
        case 6:
          _instance.nameProduct = _reader.readString();
          break;
        case 7:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 8:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 9:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 10:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 11:
          _instance.codeParcel = _reader.readString();
          break;
        case 12:
          _instance.codeWareHouse = _reader.readString();
          break;
        case 13:
          _instance.nameWareHouse = _reader.readString();
          break;
        case 14:
          _instance.idShift = _reader.readInt32();
          break;
        case 15:
          _instance.nameShift = _reader.readString();
          break;
        case 16:
          _instance.codePackingUnit = _reader.readString();
          break;
        case 17:
          _instance.namePackingUnit = _reader.readString();
          break;
        case 18:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 19:
          _instance.nameCreatedPerson = _reader.readString();
          break;
        case 20:
          _instance.date = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ShiftDetailInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ShiftDetailInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idShiftDetail) {
      _writer.writeInt32(1, _instance.idShiftDetail);
    }
    if (_instance.optionName) {
      _writer.writeString(2, _instance.optionName);
    }
    if (_instance.codeTypeBill) {
      _writer.writeString(3, _instance.codeTypeBill);
    }
    if (_instance.nameTypeBill) {
      _writer.writeString(4, _instance.nameTypeBill);
    }
    if (_instance.codeProduct) {
      _writer.writeString(5, _instance.codeProduct);
    }
    if (_instance.nameProduct) {
      _writer.writeString(6, _instance.nameProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(7, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(8, _instance.nameTypeProduct);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(9, _instance.codeTypePacket);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(10, _instance.nameTypePacket);
    }
    if (_instance.codeParcel) {
      _writer.writeString(11, _instance.codeParcel);
    }
    if (_instance.codeWareHouse) {
      _writer.writeString(12, _instance.codeWareHouse);
    }
    if (_instance.nameWareHouse) {
      _writer.writeString(13, _instance.nameWareHouse);
    }
    if (_instance.idShift) {
      _writer.writeInt32(14, _instance.idShift);
    }
    if (_instance.nameShift) {
      _writer.writeString(15, _instance.nameShift);
    }
    if (_instance.codePackingUnit) {
      _writer.writeString(16, _instance.codePackingUnit);
    }
    if (_instance.namePackingUnit) {
      _writer.writeString(17, _instance.namePackingUnit);
    }
    if (_instance.createdPerson) {
      _writer.writeInt32(18, _instance.createdPerson);
    }
    if (_instance.nameCreatedPerson) {
      _writer.writeString(19, _instance.nameCreatedPerson);
    }
    if (_instance.date) {
      _writer.writeString(20, _instance.date);
    }
  }

  private _idShiftDetail?: number;
  private _optionName?: string;
  private _codeTypeBill?: string;
  private _nameTypeBill?: string;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _codeTypePacket?: string;
  private _nameTypePacket?: string;
  private _codeParcel?: string;
  private _codeWareHouse?: string;
  private _nameWareHouse?: string;
  private _idShift?: number;
  private _nameShift?: string;
  private _codePackingUnit?: string;
  private _namePackingUnit?: string;
  private _createdPerson?: number;
  private _nameCreatedPerson?: string;
  private _date?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ShiftDetailInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ShiftDetailInfo.AsObject>) {
    _value = _value || {};
    this.idShiftDetail = _value.idShiftDetail;
    this.optionName = _value.optionName;
    this.codeTypeBill = _value.codeTypeBill;
    this.nameTypeBill = _value.nameTypeBill;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.nameTypePacket = _value.nameTypePacket;
    this.codeParcel = _value.codeParcel;
    this.codeWareHouse = _value.codeWareHouse;
    this.nameWareHouse = _value.nameWareHouse;
    this.idShift = _value.idShift;
    this.nameShift = _value.nameShift;
    this.codePackingUnit = _value.codePackingUnit;
    this.namePackingUnit = _value.namePackingUnit;
    this.createdPerson = _value.createdPerson;
    this.nameCreatedPerson = _value.nameCreatedPerson;
    this.date = _value.date;
    ShiftDetailInfo.refineValues(this);
  }
  get idShiftDetail(): number | undefined {
    return this._idShiftDetail;
  }
  set idShiftDetail(value: number | undefined) {
    this._idShiftDetail = value;
  }
  get optionName(): string | undefined {
    return this._optionName;
  }
  set optionName(value: string | undefined) {
    this._optionName = value;
  }
  get codeTypeBill(): string | undefined {
    return this._codeTypeBill;
  }
  set codeTypeBill(value: string | undefined) {
    this._codeTypeBill = value;
  }
  get nameTypeBill(): string | undefined {
    return this._nameTypeBill;
  }
  set nameTypeBill(value: string | undefined) {
    this._nameTypeBill = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get codeWareHouse(): string | undefined {
    return this._codeWareHouse;
  }
  set codeWareHouse(value: string | undefined) {
    this._codeWareHouse = value;
  }
  get nameWareHouse(): string | undefined {
    return this._nameWareHouse;
  }
  set nameWareHouse(value: string | undefined) {
    this._nameWareHouse = value;
  }
  get idShift(): number | undefined {
    return this._idShift;
  }
  set idShift(value: number | undefined) {
    this._idShift = value;
  }
  get nameShift(): string | undefined {
    return this._nameShift;
  }
  set nameShift(value: string | undefined) {
    this._nameShift = value;
  }
  get codePackingUnit(): string | undefined {
    return this._codePackingUnit;
  }
  set codePackingUnit(value: string | undefined) {
    this._codePackingUnit = value;
  }
  get namePackingUnit(): string | undefined {
    return this._namePackingUnit;
  }
  set namePackingUnit(value: string | undefined) {
    this._namePackingUnit = value;
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get nameCreatedPerson(): string | undefined {
    return this._nameCreatedPerson;
  }
  set nameCreatedPerson(value: string | undefined) {
    this._nameCreatedPerson = value;
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ShiftDetailInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ShiftDetailInfo.AsObject {
    return {
      idShiftDetail: this.idShiftDetail,
      optionName: this.optionName,
      codeTypeBill: this.codeTypeBill,
      nameTypeBill: this.nameTypeBill,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      idShift: this.idShift,
      nameShift: this.nameShift,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      date: this.date
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
  ): ShiftDetailInfo.AsProtobufJSON {
    return {
      idShiftDetail: this.idShiftDetail,
      optionName: this.optionName,
      codeTypeBill: this.codeTypeBill,
      nameTypeBill: this.nameTypeBill,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      idShift: this.idShift,
      nameShift: this.nameShift,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      date: this.date
    };
  }
}
export module ShiftDetailInfo {
  /**
   * Standard JavaScript object representation for ShiftDetailInfo
   */
  export interface AsObject {
    idShiftDetail?: number;
    optionName?: string;
    codeTypeBill?: string;
    nameTypeBill?: string;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    idShift?: number;
    nameShift?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
    date?: string;
  }

  /**
   * Protobuf JSON representation for ShiftDetailInfo
   */
  export interface AsProtobufJSON {
    idShiftDetail?: number;
    optionName?: string;
    codeTypeBill?: string;
    nameTypeBill?: string;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    idShift?: number;
    nameShift?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
    date?: string;
  }
}

/**
 * Message implementation for client.ShiftDetailResponse
 */
export class ShiftDetailResponse implements GrpcMessage {
  static id = 'client.ShiftDetailResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ShiftDetailResponse();
    ShiftDetailResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ShiftDetailResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ShiftDetailResponse,
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
          const messageInitializer2 = new ShiftDetailInfo();
          _reader.readMessage(
            messageInitializer2,
            ShiftDetailInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ShiftDetailResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ShiftDetailResponse,
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
        ShiftDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ShiftDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ShiftDetailResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ShiftDetailResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ShiftDetailInfo(m));
    ShiftDetailResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ShiftDetailInfo[] | undefined {
    return this._data;
  }
  set data(value: ShiftDetailInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ShiftDetailResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ShiftDetailResponse.AsObject {
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
  ): ShiftDetailResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ShiftDetailResponse {
  /**
   * Standard JavaScript object representation for ShiftDetailResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ShiftDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ShiftDetailResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ShiftDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ShiftInfo
 */
export class ShiftInfo implements GrpcMessage {
  static id = 'client.ShiftInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ShiftInfo();
    ShiftInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ShiftInfo) {
    _instance.idShift = _instance.idShift || 0;
    _instance.date = _instance.date || '';
    _instance.nameShift = _instance.nameShift || '';
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.nameCreatedPerson = _instance.nameCreatedPerson || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ShiftInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idShift = _reader.readInt32();
          break;
        case 2:
          _instance.date = _reader.readString();
          break;
        case 3:
          _instance.nameShift = _reader.readString();
          break;
        case 4:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 5:
          _instance.nameCreatedPerson = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ShiftInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ShiftInfo, _writer: BinaryWriter) {
    if (_instance.idShift) {
      _writer.writeInt32(1, _instance.idShift);
    }
    if (_instance.date) {
      _writer.writeString(2, _instance.date);
    }
    if (_instance.nameShift) {
      _writer.writeString(3, _instance.nameShift);
    }
    if (_instance.createdPerson) {
      _writer.writeInt32(4, _instance.createdPerson);
    }
    if (_instance.nameCreatedPerson) {
      _writer.writeString(5, _instance.nameCreatedPerson);
    }
  }

  private _idShift?: number;
  private _date?: string;
  private _nameShift?: string;
  private _createdPerson?: number;
  private _nameCreatedPerson?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ShiftInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ShiftInfo.AsObject>) {
    _value = _value || {};
    this.idShift = _value.idShift;
    this.date = _value.date;
    this.nameShift = _value.nameShift;
    this.createdPerson = _value.createdPerson;
    this.nameCreatedPerson = _value.nameCreatedPerson;
    ShiftInfo.refineValues(this);
  }
  get idShift(): number | undefined {
    return this._idShift;
  }
  set idShift(value: number | undefined) {
    this._idShift = value;
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get nameShift(): string | undefined {
    return this._nameShift;
  }
  set nameShift(value: string | undefined) {
    this._nameShift = value;
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get nameCreatedPerson(): string | undefined {
    return this._nameCreatedPerson;
  }
  set nameCreatedPerson(value: string | undefined) {
    this._nameCreatedPerson = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ShiftInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ShiftInfo.AsObject {
    return {
      idShift: this.idShift,
      date: this.date,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson
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
  ): ShiftInfo.AsProtobufJSON {
    return {
      idShift: this.idShift,
      date: this.date,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson
    };
  }
}
export module ShiftInfo {
  /**
   * Standard JavaScript object representation for ShiftInfo
   */
  export interface AsObject {
    idShift?: number;
    date?: string;
    nameShift?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
  }

  /**
   * Protobuf JSON representation for ShiftInfo
   */
  export interface AsProtobufJSON {
    idShift?: number;
    date?: string;
    nameShift?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
  }
}

/**
 * Message implementation for client.InsertShiftRequest
 */
export class InsertShiftRequest implements GrpcMessage {
  static id = 'client.InsertShiftRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InsertShiftRequest();
    InsertShiftRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InsertShiftRequest) {
    _instance.idShift = _instance.idShift || 0;
    _instance.date = _instance.date || '';
    _instance.nameShift = _instance.nameShift || '';
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InsertShiftRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idShift = _reader.readInt32();
          break;
        case 2:
          _instance.date = _reader.readString();
          break;
        case 3:
          _instance.nameShift = _reader.readString();
          break;
        case 4:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 5:
          const messageInitializer5 = new ShiftDetailInfo();
          _reader.readMessage(
            messageInitializer5,
            ShiftDetailInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer5);
          break;
        default:
          _reader.skipField();
      }
    }

    InsertShiftRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InsertShiftRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.idShift) {
      _writer.writeInt32(1, _instance.idShift);
    }
    if (_instance.date) {
      _writer.writeString(2, _instance.date);
    }
    if (_instance.nameShift) {
      _writer.writeString(3, _instance.nameShift);
    }
    if (_instance.createdPerson) {
      _writer.writeInt32(4, _instance.createdPerson);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.data as any,
        ShiftDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _idShift?: number;
  private _date?: string;
  private _nameShift?: string;
  private _createdPerson?: number;
  private _data?: ShiftDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InsertShiftRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<InsertShiftRequest.AsObject>) {
    _value = _value || {};
    this.idShift = _value.idShift;
    this.date = _value.date;
    this.nameShift = _value.nameShift;
    this.createdPerson = _value.createdPerson;
    this.data = (_value.data || []).map(m => new ShiftDetailInfo(m));
    InsertShiftRequest.refineValues(this);
  }
  get idShift(): number | undefined {
    return this._idShift;
  }
  set idShift(value: number | undefined) {
    this._idShift = value;
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get nameShift(): string | undefined {
    return this._nameShift;
  }
  set nameShift(value: string | undefined) {
    this._nameShift = value;
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get data(): ShiftDetailInfo[] | undefined {
    return this._data;
  }
  set data(value: ShiftDetailInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InsertShiftRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InsertShiftRequest.AsObject {
    return {
      idShift: this.idShift,
      date: this.date,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
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
  ): InsertShiftRequest.AsProtobufJSON {
    return {
      idShift: this.idShift,
      date: this.date,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module InsertShiftRequest {
  /**
   * Standard JavaScript object representation for InsertShiftRequest
   */
  export interface AsObject {
    idShift?: number;
    date?: string;
    nameShift?: string;
    createdPerson?: number;
    data?: ShiftDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for InsertShiftRequest
   */
  export interface AsProtobufJSON {
    idShift?: number;
    date?: string;
    nameShift?: string;
    createdPerson?: number;
    data?: ShiftDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ShiftResponse
 */
export class ShiftResponse implements GrpcMessage {
  static id = 'client.ShiftResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ShiftResponse();
    ShiftResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ShiftResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ShiftResponse,
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
          const messageInitializer2 = new ShiftInfo();
          _reader.readMessage(
            messageInitializer2,
            ShiftInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ShiftResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ShiftResponse,
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
        ShiftInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ShiftInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ShiftResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ShiftResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ShiftInfo(m));
    ShiftResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ShiftInfo[] | undefined {
    return this._data;
  }
  set data(value: ShiftInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ShiftResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ShiftResponse.AsObject {
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
  ): ShiftResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ShiftResponse {
  /**
   * Standard JavaScript object representation for ShiftResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ShiftInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ShiftResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ShiftInfo.AsProtobufJSON[] | null;
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
    _instance.objectType = _instance.objectType || '';
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
        case 3:
          _instance.objectType = _reader.readString();
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
    if (_instance.objectType) {
      _writer.writeString(3, _instance.objectType);
    }
  }

  private _objectId?: number;
  private _objectName?: string;
  private _objectType?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MasterDataInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<MasterDataInfo.AsObject>) {
    _value = _value || {};
    this.objectId = _value.objectId;
    this.objectName = _value.objectName;
    this.objectType = _value.objectType;
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
  get objectType(): string | undefined {
    return this._objectType;
  }
  set objectType(value: string | undefined) {
    this._objectType = value;
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
      objectName: this.objectName,
      objectType: this.objectType
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
      objectName: this.objectName,
      objectType: this.objectType
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
    objectType?: string;
  }

  /**
   * Protobuf JSON representation for MasterDataInfo
   */
  export interface AsProtobufJSON {
    objectId?: number;
    objectName?: string;
    objectType?: string;
  }
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
    _instance.idParcel = _instance.idParcel || 0;
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.nameCreatedPerson = _instance.nameCreatedPerson || '';
    _instance.createdDate = _instance.createdDate || '';
    _instance.isDeleted = _instance.isDeleted || false;
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
          _instance.idParcel = _reader.readInt32();
          break;
        case 2:
          _instance.codeParcel = _reader.readString();
          break;
        case 3:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 4:
          _instance.nameCreatedPerson = _reader.readString();
          break;
        case 5:
          _instance.createdDate = _reader.readString();
          break;
        case 6:
          _instance.isDeleted = _reader.readBool();
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
    if (_instance.idParcel) {
      _writer.writeInt32(1, _instance.idParcel);
    }
    if (_instance.codeParcel) {
      _writer.writeString(2, _instance.codeParcel);
    }
    if (_instance.createdPerson) {
      _writer.writeInt32(3, _instance.createdPerson);
    }
    if (_instance.nameCreatedPerson) {
      _writer.writeString(4, _instance.nameCreatedPerson);
    }
    if (_instance.createdDate) {
      _writer.writeString(5, _instance.createdDate);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(6, _instance.isDeleted);
    }
  }

  private _idParcel?: number;
  private _codeParcel?: string;
  private _createdPerson?: number;
  private _nameCreatedPerson?: string;
  private _createdDate?: string;
  private _isDeleted?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParcelInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParcelInfo.AsObject>) {
    _value = _value || {};
    this.idParcel = _value.idParcel;
    this.codeParcel = _value.codeParcel;
    this.createdPerson = _value.createdPerson;
    this.nameCreatedPerson = _value.nameCreatedPerson;
    this.createdDate = _value.createdDate;
    this.isDeleted = _value.isDeleted;
    ParcelInfo.refineValues(this);
  }
  get idParcel(): number | undefined {
    return this._idParcel;
  }
  set idParcel(value: number | undefined) {
    this._idParcel = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get nameCreatedPerson(): string | undefined {
    return this._nameCreatedPerson;
  }
  set nameCreatedPerson(value: string | undefined) {
    this._nameCreatedPerson = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }
  get isDeleted(): boolean | undefined {
    return this._isDeleted;
  }
  set isDeleted(value: boolean | undefined) {
    this._isDeleted = value;
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
      idParcel: this.idParcel,
      codeParcel: this.codeParcel,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      createdDate: this.createdDate,
      isDeleted: this.isDeleted
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
      idParcel: this.idParcel,
      codeParcel: this.codeParcel,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      createdDate: this.createdDate,
      isDeleted: this.isDeleted
    };
  }
}
export module ParcelInfo {
  /**
   * Standard JavaScript object representation for ParcelInfo
   */
  export interface AsObject {
    idParcel?: number;
    codeParcel?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
    createdDate?: string;
    isDeleted?: boolean;
  }

  /**
   * Protobuf JSON representation for ParcelInfo
   */
  export interface AsProtobufJSON {
    idParcel?: number;
    codeParcel?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
    createdDate?: string;
    isDeleted?: boolean;
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
    _instance.users = _instance.users || [];
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
          (_instance.users = _instance.users || []).push(messageInitializer2);
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
    if (_instance.users && _instance.users.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.users as any,
        UserInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _users?: UserInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.users = (_value.users || []).map(m => new UserInfo(m));
    UserResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get users(): UserInfo[] | undefined {
    return this._users;
  }
  set users(value: UserInfo[] | undefined) {
    this._users = value;
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
      users: (this.users || []).map(m => m.toObject())
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
      users: (this.users || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module UserResponse {
  /**
   * Standard JavaScript object representation for UserResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    users?: UserInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for UserResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    users?: UserInfo.AsProtobufJSON[] | null;
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
    _instance.id = _instance.id || 0;
    _instance.user = _instance.user || '';
    _instance.password = _instance.password || '';
    _instance.role = _instance.role || 0;
    _instance.rolename = _instance.rolename || '';
    _instance.createddate = _instance.createddate || '';
    _instance.name = _instance.name || '';
    _instance.newPassword = _instance.newPassword || '';
    _instance.connecttion = _instance.connecttion || '';
    _instance.des = _instance.des || '';
    _instance.online = _instance.online || 0;
    _instance.history = _instance.history || '';
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
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.user = _reader.readString();
          break;
        case 3:
          _instance.password = _reader.readString();
          break;
        case 4:
          _instance.role = _reader.readInt32();
          break;
        case 5:
          _instance.rolename = _reader.readString();
          break;
        case 6:
          _instance.createddate = _reader.readString();
          break;
        case 7:
          _instance.name = _reader.readString();
          break;
        case 8:
          _instance.newPassword = _reader.readString();
          break;
        case 9:
          _instance.connecttion = _reader.readString();
          break;
        case 10:
          _instance.des = _reader.readString();
          break;
        case 11:
          _instance.online = _reader.readInt32();
          break;
        case 12:
          _instance.history = _reader.readString();
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
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.user) {
      _writer.writeString(2, _instance.user);
    }
    if (_instance.password) {
      _writer.writeString(3, _instance.password);
    }
    if (_instance.role) {
      _writer.writeInt32(4, _instance.role);
    }
    if (_instance.rolename) {
      _writer.writeString(5, _instance.rolename);
    }
    if (_instance.createddate) {
      _writer.writeString(6, _instance.createddate);
    }
    if (_instance.name) {
      _writer.writeString(7, _instance.name);
    }
    if (_instance.newPassword) {
      _writer.writeString(8, _instance.newPassword);
    }
    if (_instance.connecttion) {
      _writer.writeString(9, _instance.connecttion);
    }
    if (_instance.des) {
      _writer.writeString(10, _instance.des);
    }
    if (_instance.online) {
      _writer.writeInt32(11, _instance.online);
    }
    if (_instance.history) {
      _writer.writeString(12, _instance.history);
    }
  }

  private _id?: number;
  private _user?: string;
  private _password?: string;
  private _role?: number;
  private _rolename?: string;
  private _createddate?: string;
  private _name?: string;
  private _newPassword?: string;
  private _connecttion?: string;
  private _des?: string;
  private _online?: number;
  private _history?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfo.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.user = _value.user;
    this.password = _value.password;
    this.role = _value.role;
    this.rolename = _value.rolename;
    this.createddate = _value.createddate;
    this.name = _value.name;
    this.newPassword = _value.newPassword;
    this.connecttion = _value.connecttion;
    this.des = _value.des;
    this.online = _value.online;
    this.history = _value.history;
    UserInfo.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get user(): string | undefined {
    return this._user;
  }
  set user(value: string | undefined) {
    this._user = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get role(): number | undefined {
    return this._role;
  }
  set role(value: number | undefined) {
    this._role = value;
  }
  get rolename(): string | undefined {
    return this._rolename;
  }
  set rolename(value: string | undefined) {
    this._rolename = value;
  }
  get createddate(): string | undefined {
    return this._createddate;
  }
  set createddate(value: string | undefined) {
    this._createddate = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get newPassword(): string | undefined {
    return this._newPassword;
  }
  set newPassword(value: string | undefined) {
    this._newPassword = value;
  }
  get connecttion(): string | undefined {
    return this._connecttion;
  }
  set connecttion(value: string | undefined) {
    this._connecttion = value;
  }
  get des(): string | undefined {
    return this._des;
  }
  set des(value: string | undefined) {
    this._des = value;
  }
  get online(): number | undefined {
    return this._online;
  }
  set online(value: number | undefined) {
    this._online = value;
  }
  get history(): string | undefined {
    return this._history;
  }
  set history(value: string | undefined) {
    this._history = value;
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
      id: this.id,
      user: this.user,
      password: this.password,
      role: this.role,
      rolename: this.rolename,
      createddate: this.createddate,
      name: this.name,
      newPassword: this.newPassword,
      connecttion: this.connecttion,
      des: this.des,
      online: this.online,
      history: this.history
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
      id: this.id,
      user: this.user,
      password: this.password,
      role: this.role,
      rolename: this.rolename,
      createddate: this.createddate,
      name: this.name,
      newPassword: this.newPassword,
      connecttion: this.connecttion,
      des: this.des,
      online: this.online,
      history: this.history
    };
  }
}
export module UserInfo {
  /**
   * Standard JavaScript object representation for UserInfo
   */
  export interface AsObject {
    id?: number;
    user?: string;
    password?: string;
    role?: number;
    rolename?: string;
    createddate?: string;
    name?: string;
    newPassword?: string;
    connecttion?: string;
    des?: string;
    online?: number;
    history?: string;
  }

  /**
   * Protobuf JSON representation for UserInfo
   */
  export interface AsProtobufJSON {
    id?: number;
    user?: string;
    password?: string;
    role?: number;
    rolename?: string;
    createddate?: string;
    name?: string;
    newPassword?: string;
    connecttion?: string;
    des?: string;
    online?: number;
    history?: string;
  }
}

/**
 * Message implementation for client.DeviceResponse
 */
export class DeviceResponse implements GrpcMessage {
  static id = 'client.DeviceResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeviceResponse();
    DeviceResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeviceResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeviceResponse,
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
          const messageInitializer2 = new DeviceInfo();
          _reader.readMessage(
            messageInitializer2,
            DeviceInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    DeviceResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeviceResponse,
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
        DeviceInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: DeviceInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeviceResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeviceResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new DeviceInfo(m));
    DeviceResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): DeviceInfo[] | undefined {
    return this._data;
  }
  set data(value: DeviceInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeviceResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeviceResponse.AsObject {
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
  ): DeviceResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module DeviceResponse {
  /**
   * Standard JavaScript object representation for DeviceResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: DeviceInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for DeviceResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: DeviceInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.DeviceInfo
 */
export class DeviceInfo implements GrpcMessage {
  static id = 'client.DeviceInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeviceInfo();
    DeviceInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeviceInfo) {
    _instance.id = _instance.id || 0;
    _instance.device = _instance.device || '';
    _instance.password = _instance.password || '';
    _instance.type = _instance.type || 0;
    _instance.option = _instance.option || '';
    _instance.connecttion = _instance.connecttion || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeviceInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.device = _reader.readString();
          break;
        case 3:
          _instance.password = _reader.readString();
          break;
        case 4:
          _instance.type = _reader.readInt32();
          break;
        case 5:
          _instance.option = _reader.readString();
          break;
        case 6:
          _instance.connecttion = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeviceInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: DeviceInfo, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.device) {
      _writer.writeString(2, _instance.device);
    }
    if (_instance.password) {
      _writer.writeString(3, _instance.password);
    }
    if (_instance.type) {
      _writer.writeInt32(4, _instance.type);
    }
    if (_instance.option) {
      _writer.writeString(5, _instance.option);
    }
    if (_instance.connecttion) {
      _writer.writeString(6, _instance.connecttion);
    }
  }

  private _id?: number;
  private _device?: string;
  private _password?: string;
  private _type?: number;
  private _option?: string;
  private _connecttion?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeviceInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeviceInfo.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.device = _value.device;
    this.password = _value.password;
    this.type = _value.type;
    this.option = _value.option;
    this.connecttion = _value.connecttion;
    DeviceInfo.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get device(): string | undefined {
    return this._device;
  }
  set device(value: string | undefined) {
    this._device = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get type(): number | undefined {
    return this._type;
  }
  set type(value: number | undefined) {
    this._type = value;
  }
  get option(): string | undefined {
    return this._option;
  }
  set option(value: string | undefined) {
    this._option = value;
  }
  get connecttion(): string | undefined {
    return this._connecttion;
  }
  set connecttion(value: string | undefined) {
    this._connecttion = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeviceInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeviceInfo.AsObject {
    return {
      id: this.id,
      device: this.device,
      password: this.password,
      type: this.type,
      option: this.option,
      connecttion: this.connecttion
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
  ): DeviceInfo.AsProtobufJSON {
    return {
      id: this.id,
      device: this.device,
      password: this.password,
      type: this.type,
      option: this.option,
      connecttion: this.connecttion
    };
  }
}
export module DeviceInfo {
  /**
   * Standard JavaScript object representation for DeviceInfo
   */
  export interface AsObject {
    id?: number;
    device?: string;
    password?: string;
    type?: number;
    option?: string;
    connecttion?: string;
  }

  /**
   * Protobuf JSON representation for DeviceInfo
   */
  export interface AsProtobufJSON {
    id?: number;
    device?: string;
    password?: string;
    type?: number;
    option?: string;
    connecttion?: string;
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
    _instance.token = _instance.token || '';
    _instance.user = _instance.user || undefined;
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
          _instance.token = _reader.readString();
          break;
        case 3:
          _instance.user = new UserInfo();
          _reader.readMessage(
            _instance.user,
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
    if (_instance.token) {
      _writer.writeString(2, _instance.token);
    }
    if (_instance.user) {
      _writer.writeMessage(
        3,
        _instance.user as any,
        UserInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _token?: string;
  private _user?: UserInfo;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserReply.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.token = _value.token;
    this.user = _value.user ? new UserInfo(_value.user) : undefined;
    UserReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get token(): string | undefined {
    return this._token;
  }
  set token(value: string | undefined) {
    this._token = value;
  }
  get user(): UserInfo | undefined {
    return this._user;
  }
  set user(value: UserInfo | undefined) {
    this._user = value;
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
      token: this.token,
      user: this.user ? this.user.toObject() : undefined
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
      token: this.token,
      user: this.user ? this.user.toProtobufJSON(options) : null
    };
  }
}
export module UserReply {
  /**
   * Standard JavaScript object representation for UserReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    token?: string;
    user?: UserInfo.AsObject;
  }

  /**
   * Protobuf JSON representation for UserReply
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    token?: string;
    user?: UserInfo.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for client.ParcelDetailInfo
 */
export class ParcelDetailInfo implements GrpcMessage {
  static id = 'client.ParcelDetailInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParcelDetailInfo();
    ParcelDetailInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParcelDetailInfo) {
    _instance.idParcelDetail = _instance.idParcelDetail || 0;
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.idStatus = _instance.idStatus || 0;
    _instance.nameStatus = _instance.nameStatus || '';
    _instance.quantity = _instance.quantity || '0';
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.idParcel = _instance.idParcel || 0;
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.nameCreatedPerson = _instance.nameCreatedPerson || '';
    _instance.date = _instance.date || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParcelDetailInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idParcelDetail = _reader.readInt32();
          break;
        case 2:
          _instance.codeProduct = _reader.readString();
          break;
        case 3:
          _instance.nameProduct = _reader.readString();
          break;
        case 4:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 5:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 6:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 7:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 8:
          _instance.idStatus = _reader.readInt32();
          break;
        case 9:
          _instance.nameStatus = _reader.readString();
          break;
        case 10:
          _instance.quantity = _reader.readInt64String();
          break;
        case 11:
          _instance.codeParcel = _reader.readString();
          break;
        case 12:
          _instance.idParcel = _reader.readInt32();
          break;
        case 13:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 14:
          _instance.nameCreatedPerson = _reader.readString();
          break;
        case 15:
          _instance.date = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ParcelDetailInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParcelDetailInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idParcelDetail) {
      _writer.writeInt32(1, _instance.idParcelDetail);
    }
    if (_instance.codeProduct) {
      _writer.writeString(2, _instance.codeProduct);
    }
    if (_instance.nameProduct) {
      _writer.writeString(3, _instance.nameProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(4, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(5, _instance.nameTypeProduct);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(6, _instance.codeTypePacket);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(7, _instance.nameTypePacket);
    }
    if (_instance.idStatus) {
      _writer.writeInt32(8, _instance.idStatus);
    }
    if (_instance.nameStatus) {
      _writer.writeString(9, _instance.nameStatus);
    }
    if (_instance.quantity) {
      _writer.writeInt64String(10, _instance.quantity);
    }
    if (_instance.codeParcel) {
      _writer.writeString(11, _instance.codeParcel);
    }
    if (_instance.idParcel) {
      _writer.writeInt32(12, _instance.idParcel);
    }
    if (_instance.createdPerson) {
      _writer.writeInt32(13, _instance.createdPerson);
    }
    if (_instance.nameCreatedPerson) {
      _writer.writeString(14, _instance.nameCreatedPerson);
    }
    if (_instance.date) {
      _writer.writeString(15, _instance.date);
    }
  }

  private _idParcelDetail?: number;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _codeTypePacket?: string;
  private _nameTypePacket?: string;
  private _idStatus?: number;
  private _nameStatus?: string;
  private _quantity?: string;
  private _codeParcel?: string;
  private _idParcel?: number;
  private _createdPerson?: number;
  private _nameCreatedPerson?: string;
  private _date?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParcelDetailInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParcelDetailInfo.AsObject>) {
    _value = _value || {};
    this.idParcelDetail = _value.idParcelDetail;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.nameTypePacket = _value.nameTypePacket;
    this.idStatus = _value.idStatus;
    this.nameStatus = _value.nameStatus;
    this.quantity = _value.quantity;
    this.codeParcel = _value.codeParcel;
    this.idParcel = _value.idParcel;
    this.createdPerson = _value.createdPerson;
    this.nameCreatedPerson = _value.nameCreatedPerson;
    this.date = _value.date;
    ParcelDetailInfo.refineValues(this);
  }
  get idParcelDetail(): number | undefined {
    return this._idParcelDetail;
  }
  set idParcelDetail(value: number | undefined) {
    this._idParcelDetail = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get idStatus(): number | undefined {
    return this._idStatus;
  }
  set idStatus(value: number | undefined) {
    this._idStatus = value;
  }
  get nameStatus(): string | undefined {
    return this._nameStatus;
  }
  set nameStatus(value: string | undefined) {
    this._nameStatus = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get idParcel(): number | undefined {
    return this._idParcel;
  }
  set idParcel(value: number | undefined) {
    this._idParcel = value;
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get nameCreatedPerson(): string | undefined {
    return this._nameCreatedPerson;
  }
  set nameCreatedPerson(value: string | undefined) {
    this._nameCreatedPerson = value;
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParcelDetailInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParcelDetailInfo.AsObject {
    return {
      idParcelDetail: this.idParcelDetail,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      idStatus: this.idStatus,
      nameStatus: this.nameStatus,
      quantity: this.quantity,
      codeParcel: this.codeParcel,
      idParcel: this.idParcel,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      date: this.date
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
  ): ParcelDetailInfo.AsProtobufJSON {
    return {
      idParcelDetail: this.idParcelDetail,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      idStatus: this.idStatus,
      nameStatus: this.nameStatus,
      quantity: this.quantity,
      codeParcel: this.codeParcel,
      idParcel: this.idParcel,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      date: this.date
    };
  }
}
export module ParcelDetailInfo {
  /**
   * Standard JavaScript object representation for ParcelDetailInfo
   */
  export interface AsObject {
    idParcelDetail?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    idStatus?: number;
    nameStatus?: string;
    quantity?: string;
    codeParcel?: string;
    idParcel?: number;
    createdPerson?: number;
    nameCreatedPerson?: string;
    date?: string;
  }

  /**
   * Protobuf JSON representation for ParcelDetailInfo
   */
  export interface AsProtobufJSON {
    idParcelDetail?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    idStatus?: number;
    nameStatus?: string;
    quantity?: string;
    codeParcel?: string;
    idParcel?: number;
    createdPerson?: number;
    nameCreatedPerson?: string;
    date?: string;
  }
}

/**
 * Message implementation for client.ParcelDetailResponse
 */
export class ParcelDetailResponse implements GrpcMessage {
  static id = 'client.ParcelDetailResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ParcelDetailResponse();
    ParcelDetailResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ParcelDetailResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ParcelDetailResponse,
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
          const messageInitializer2 = new ParcelDetailInfo();
          _reader.readMessage(
            messageInitializer2,
            ParcelDetailInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ParcelDetailResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ParcelDetailResponse,
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
        ParcelDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ParcelDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParcelDetailResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParcelDetailResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ParcelDetailInfo(m));
    ParcelDetailResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ParcelDetailInfo[] | undefined {
    return this._data;
  }
  set data(value: ParcelDetailInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ParcelDetailResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ParcelDetailResponse.AsObject {
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
  ): ParcelDetailResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ParcelDetailResponse {
  /**
   * Standard JavaScript object representation for ParcelDetailResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ParcelDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ParcelDetailResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ParcelDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.InsertParcelRequest
 */
export class InsertParcelRequest implements GrpcMessage {
  static id = 'client.InsertParcelRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InsertParcelRequest();
    InsertParcelRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InsertParcelRequest) {
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.name = _instance.name || '';
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InsertParcelRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.codeParcel = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 4:
          const messageInitializer4 = new ParcelDetailInfo();
          _reader.readMessage(
            messageInitializer4,
            ParcelDetailInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer4);
          break;
        default:
          _reader.skipField();
      }
    }

    InsertParcelRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InsertParcelRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.codeParcel) {
      _writer.writeString(1, _instance.codeParcel);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.createdPerson) {
      _writer.writeInt32(3, _instance.createdPerson);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.data as any,
        ParcelDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _codeParcel?: string;
  private _name?: string;
  private _createdPerson?: number;
  private _data?: ParcelDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InsertParcelRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<InsertParcelRequest.AsObject>) {
    _value = _value || {};
    this.codeParcel = _value.codeParcel;
    this.name = _value.name;
    this.createdPerson = _value.createdPerson;
    this.data = (_value.data || []).map(m => new ParcelDetailInfo(m));
    InsertParcelRequest.refineValues(this);
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get data(): ParcelDetailInfo[] | undefined {
    return this._data;
  }
  set data(value: ParcelDetailInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InsertParcelRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InsertParcelRequest.AsObject {
    return {
      codeParcel: this.codeParcel,
      name: this.name,
      createdPerson: this.createdPerson,
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
  ): InsertParcelRequest.AsProtobufJSON {
    return {
      codeParcel: this.codeParcel,
      name: this.name,
      createdPerson: this.createdPerson,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module InsertParcelRequest {
  /**
   * Standard JavaScript object representation for InsertParcelRequest
   */
  export interface AsObject {
    codeParcel?: string;
    name?: string;
    createdPerson?: number;
    data?: ParcelDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for InsertParcelRequest
   */
  export interface AsProtobufJSON {
    codeParcel?: string;
    name?: string;
    createdPerson?: number;
    data?: ParcelDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.CardResponse
 */
export class CardResponse implements GrpcMessage {
  static id = 'client.CardResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CardResponse();
    CardResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CardResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CardResponse,
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
          const messageInitializer2 = new CardDetailInfo();
          _reader.readMessage(
            messageInitializer2,
            CardDetailInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    CardResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CardResponse,
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
        CardDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: CardDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CardResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CardResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new CardDetailInfo(m));
    CardResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): CardDetailInfo[] | undefined {
    return this._data;
  }
  set data(value: CardDetailInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CardResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CardResponse.AsObject {
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
  ): CardResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module CardResponse {
  /**
   * Standard JavaScript object representation for CardResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: CardDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for CardResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: CardDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.CardDetailInfo
 */
export class CardDetailInfo implements GrpcMessage {
  static id = 'client.CardDetailInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CardDetailInfo();
    CardDetailInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CardDetailInfo) {
    _instance.idCard = _instance.idCard || 0;
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.codeWareHouse = _instance.codeWareHouse || '';
    _instance.nameWareHouse = _instance.nameWareHouse || '';
    _instance.quantity = _instance.quantity || '0';
    _instance.weight = _instance.weight || '0';
    _instance.codePackingUnit = _instance.codePackingUnit || '';
    _instance.namePackingUnit = _instance.namePackingUnit || '';
    _instance.codeTypeBill = _instance.codeTypeBill || '';
    _instance.createdPerson = _instance.createdPerson || '';
    _instance.createdDate = _instance.createdDate || '';
    _instance.idShift = _instance.idShift || 0;
    _instance.isChangable = _instance.isChangable || false;
    _instance.namePerson = _instance.namePerson || '';
    _instance.nameTypeBill = _instance.nameTypeBill || '';
    _instance.nameShift = _instance.nameShift || '';
    _instance.codeOrder = _instance.codeOrder || '';
    _instance.codeCreatedReason = _instance.codeCreatedReason || '';
    _instance.codeReason = _instance.codeReason || '';
    _instance.nameReason = _instance.nameReason || '';
    _instance.codePartner = _instance.codePartner || '';
    _instance.namePartner = _instance.namePartner || '';
    _instance.countTrip = _instance.countTrip || 0;
    _instance.seri = _instance.seri || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CardDetailInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idCard = _reader.readInt32();
          break;
        case 2:
          _instance.codeProduct = _reader.readString();
          break;
        case 3:
          _instance.nameProduct = _reader.readString();
          break;
        case 4:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 5:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 6:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 7:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 8:
          _instance.codeParcel = _reader.readString();
          break;
        case 9:
          _instance.codeWareHouse = _reader.readString();
          break;
        case 10:
          _instance.nameWareHouse = _reader.readString();
          break;
        case 11:
          _instance.quantity = _reader.readInt64String();
          break;
        case 12:
          _instance.weight = _reader.readInt64String();
          break;
        case 13:
          _instance.codePackingUnit = _reader.readString();
          break;
        case 14:
          _instance.namePackingUnit = _reader.readString();
          break;
        case 15:
          _instance.codeTypeBill = _reader.readString();
          break;
        case 16:
          _instance.createdPerson = _reader.readString();
          break;
        case 17:
          _instance.createdDate = _reader.readString();
          break;
        case 18:
          _instance.idShift = _reader.readInt32();
          break;
        case 19:
          _instance.isChangable = _reader.readBool();
          break;
        case 20:
          _instance.namePerson = _reader.readString();
          break;
        case 21:
          _instance.nameTypeBill = _reader.readString();
          break;
        case 22:
          _instance.nameShift = _reader.readString();
          break;
        case 23:
          _instance.codeOrder = _reader.readString();
          break;
        case 24:
          _instance.codeCreatedReason = _reader.readString();
          break;
        case 25:
          _instance.codeReason = _reader.readString();
          break;
        case 26:
          _instance.nameReason = _reader.readString();
          break;
        case 27:
          _instance.codePartner = _reader.readString();
          break;
        case 28:
          _instance.namePartner = _reader.readString();
          break;
        case 29:
          _instance.countTrip = _reader.readInt32();
          break;
        case 30:
          _instance.seri = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CardDetailInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CardDetailInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idCard) {
      _writer.writeInt32(1, _instance.idCard);
    }
    if (_instance.codeProduct) {
      _writer.writeString(2, _instance.codeProduct);
    }
    if (_instance.nameProduct) {
      _writer.writeString(3, _instance.nameProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(4, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(5, _instance.nameTypeProduct);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(6, _instance.codeTypePacket);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(7, _instance.nameTypePacket);
    }
    if (_instance.codeParcel) {
      _writer.writeString(8, _instance.codeParcel);
    }
    if (_instance.codeWareHouse) {
      _writer.writeString(9, _instance.codeWareHouse);
    }
    if (_instance.nameWareHouse) {
      _writer.writeString(10, _instance.nameWareHouse);
    }
    if (_instance.quantity) {
      _writer.writeInt64String(11, _instance.quantity);
    }
    if (_instance.weight) {
      _writer.writeInt64String(12, _instance.weight);
    }
    if (_instance.codePackingUnit) {
      _writer.writeString(13, _instance.codePackingUnit);
    }
    if (_instance.namePackingUnit) {
      _writer.writeString(14, _instance.namePackingUnit);
    }
    if (_instance.codeTypeBill) {
      _writer.writeString(15, _instance.codeTypeBill);
    }
    if (_instance.createdPerson) {
      _writer.writeString(16, _instance.createdPerson);
    }
    if (_instance.createdDate) {
      _writer.writeString(17, _instance.createdDate);
    }
    if (_instance.idShift) {
      _writer.writeInt32(18, _instance.idShift);
    }
    if (_instance.isChangable) {
      _writer.writeBool(19, _instance.isChangable);
    }
    if (_instance.namePerson) {
      _writer.writeString(20, _instance.namePerson);
    }
    if (_instance.nameTypeBill) {
      _writer.writeString(21, _instance.nameTypeBill);
    }
    if (_instance.nameShift) {
      _writer.writeString(22, _instance.nameShift);
    }
    if (_instance.codeOrder) {
      _writer.writeString(23, _instance.codeOrder);
    }
    if (_instance.codeCreatedReason) {
      _writer.writeString(24, _instance.codeCreatedReason);
    }
    if (_instance.codeReason) {
      _writer.writeString(25, _instance.codeReason);
    }
    if (_instance.nameReason) {
      _writer.writeString(26, _instance.nameReason);
    }
    if (_instance.codePartner) {
      _writer.writeString(27, _instance.codePartner);
    }
    if (_instance.namePartner) {
      _writer.writeString(28, _instance.namePartner);
    }
    if (_instance.countTrip) {
      _writer.writeInt32(29, _instance.countTrip);
    }
    if (_instance.seri) {
      _writer.writeInt32(30, _instance.seri);
    }
  }

  private _idCard?: number;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _codeTypePacket?: string;
  private _nameTypePacket?: string;
  private _codeParcel?: string;
  private _codeWareHouse?: string;
  private _nameWareHouse?: string;
  private _quantity?: string;
  private _weight?: string;
  private _codePackingUnit?: string;
  private _namePackingUnit?: string;
  private _codeTypeBill?: string;
  private _createdPerson?: string;
  private _createdDate?: string;
  private _idShift?: number;
  private _isChangable?: boolean;
  private _namePerson?: string;
  private _nameTypeBill?: string;
  private _nameShift?: string;
  private _codeOrder?: string;
  private _codeCreatedReason?: string;
  private _codeReason?: string;
  private _nameReason?: string;
  private _codePartner?: string;
  private _namePartner?: string;
  private _countTrip?: number;
  private _seri?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CardDetailInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<CardDetailInfo.AsObject>) {
    _value = _value || {};
    this.idCard = _value.idCard;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.nameTypePacket = _value.nameTypePacket;
    this.codeParcel = _value.codeParcel;
    this.codeWareHouse = _value.codeWareHouse;
    this.nameWareHouse = _value.nameWareHouse;
    this.quantity = _value.quantity;
    this.weight = _value.weight;
    this.codePackingUnit = _value.codePackingUnit;
    this.namePackingUnit = _value.namePackingUnit;
    this.codeTypeBill = _value.codeTypeBill;
    this.createdPerson = _value.createdPerson;
    this.createdDate = _value.createdDate;
    this.idShift = _value.idShift;
    this.isChangable = _value.isChangable;
    this.namePerson = _value.namePerson;
    this.nameTypeBill = _value.nameTypeBill;
    this.nameShift = _value.nameShift;
    this.codeOrder = _value.codeOrder;
    this.codeCreatedReason = _value.codeCreatedReason;
    this.codeReason = _value.codeReason;
    this.nameReason = _value.nameReason;
    this.codePartner = _value.codePartner;
    this.namePartner = _value.namePartner;
    this.countTrip = _value.countTrip;
    this.seri = _value.seri;
    CardDetailInfo.refineValues(this);
  }
  get idCard(): number | undefined {
    return this._idCard;
  }
  set idCard(value: number | undefined) {
    this._idCard = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get codeWareHouse(): string | undefined {
    return this._codeWareHouse;
  }
  set codeWareHouse(value: string | undefined) {
    this._codeWareHouse = value;
  }
  get nameWareHouse(): string | undefined {
    return this._nameWareHouse;
  }
  set nameWareHouse(value: string | undefined) {
    this._nameWareHouse = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get weight(): string | undefined {
    return this._weight;
  }
  set weight(value: string | undefined) {
    this._weight = value;
  }
  get codePackingUnit(): string | undefined {
    return this._codePackingUnit;
  }
  set codePackingUnit(value: string | undefined) {
    this._codePackingUnit = value;
  }
  get namePackingUnit(): string | undefined {
    return this._namePackingUnit;
  }
  set namePackingUnit(value: string | undefined) {
    this._namePackingUnit = value;
  }
  get codeTypeBill(): string | undefined {
    return this._codeTypeBill;
  }
  set codeTypeBill(value: string | undefined) {
    this._codeTypeBill = value;
  }
  get createdPerson(): string | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: string | undefined) {
    this._createdPerson = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }
  get idShift(): number | undefined {
    return this._idShift;
  }
  set idShift(value: number | undefined) {
    this._idShift = value;
  }
  get isChangable(): boolean | undefined {
    return this._isChangable;
  }
  set isChangable(value: boolean | undefined) {
    this._isChangable = value;
  }
  get namePerson(): string | undefined {
    return this._namePerson;
  }
  set namePerson(value: string | undefined) {
    this._namePerson = value;
  }
  get nameTypeBill(): string | undefined {
    return this._nameTypeBill;
  }
  set nameTypeBill(value: string | undefined) {
    this._nameTypeBill = value;
  }
  get nameShift(): string | undefined {
    return this._nameShift;
  }
  set nameShift(value: string | undefined) {
    this._nameShift = value;
  }
  get codeOrder(): string | undefined {
    return this._codeOrder;
  }
  set codeOrder(value: string | undefined) {
    this._codeOrder = value;
  }
  get codeCreatedReason(): string | undefined {
    return this._codeCreatedReason;
  }
  set codeCreatedReason(value: string | undefined) {
    this._codeCreatedReason = value;
  }
  get codeReason(): string | undefined {
    return this._codeReason;
  }
  set codeReason(value: string | undefined) {
    this._codeReason = value;
  }
  get nameReason(): string | undefined {
    return this._nameReason;
  }
  set nameReason(value: string | undefined) {
    this._nameReason = value;
  }
  get codePartner(): string | undefined {
    return this._codePartner;
  }
  set codePartner(value: string | undefined) {
    this._codePartner = value;
  }
  get namePartner(): string | undefined {
    return this._namePartner;
  }
  set namePartner(value: string | undefined) {
    this._namePartner = value;
  }
  get countTrip(): number | undefined {
    return this._countTrip;
  }
  set countTrip(value: number | undefined) {
    this._countTrip = value;
  }
  get seri(): number | undefined {
    return this._seri;
  }
  set seri(value: number | undefined) {
    this._seri = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CardDetailInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CardDetailInfo.AsObject {
    return {
      idCard: this.idCard,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      quantity: this.quantity,
      weight: this.weight,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      codeTypeBill: this.codeTypeBill,
      createdPerson: this.createdPerson,
      createdDate: this.createdDate,
      idShift: this.idShift,
      isChangable: this.isChangable,
      namePerson: this.namePerson,
      nameTypeBill: this.nameTypeBill,
      nameShift: this.nameShift,
      codeOrder: this.codeOrder,
      codeCreatedReason: this.codeCreatedReason,
      codeReason: this.codeReason,
      nameReason: this.nameReason,
      codePartner: this.codePartner,
      namePartner: this.namePartner,
      countTrip: this.countTrip,
      seri: this.seri
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
  ): CardDetailInfo.AsProtobufJSON {
    return {
      idCard: this.idCard,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      quantity: this.quantity,
      weight: this.weight,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      codeTypeBill: this.codeTypeBill,
      createdPerson: this.createdPerson,
      createdDate: this.createdDate,
      idShift: this.idShift,
      isChangable: this.isChangable,
      namePerson: this.namePerson,
      nameTypeBill: this.nameTypeBill,
      nameShift: this.nameShift,
      codeOrder: this.codeOrder,
      codeCreatedReason: this.codeCreatedReason,
      codeReason: this.codeReason,
      nameReason: this.nameReason,
      codePartner: this.codePartner,
      namePartner: this.namePartner,
      countTrip: this.countTrip,
      seri: this.seri
    };
  }
}
export module CardDetailInfo {
  /**
   * Standard JavaScript object representation for CardDetailInfo
   */
  export interface AsObject {
    idCard?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    quantity?: string;
    weight?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    codeTypeBill?: string;
    createdPerson?: string;
    createdDate?: string;
    idShift?: number;
    isChangable?: boolean;
    namePerson?: string;
    nameTypeBill?: string;
    nameShift?: string;
    codeOrder?: string;
    codeCreatedReason?: string;
    codeReason?: string;
    nameReason?: string;
    codePartner?: string;
    namePartner?: string;
    countTrip?: number;
    seri?: number;
  }

  /**
   * Protobuf JSON representation for CardDetailInfo
   */
  export interface AsProtobufJSON {
    idCard?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    quantity?: string;
    weight?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    codeTypeBill?: string;
    createdPerson?: string;
    createdDate?: string;
    idShift?: number;
    isChangable?: boolean;
    namePerson?: string;
    nameTypeBill?: string;
    nameShift?: string;
    codeOrder?: string;
    codeCreatedReason?: string;
    codeReason?: string;
    nameReason?: string;
    codePartner?: string;
    namePartner?: string;
    countTrip?: number;
    seri?: number;
  }
}

/**
 * Message implementation for client.CardDetailResponse
 */
export class CardDetailResponse implements GrpcMessage {
  static id = 'client.CardDetailResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CardDetailResponse();
    CardDetailResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CardDetailResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CardDetailResponse,
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
          const messageInitializer2 = new CardDetailInfo();
          _reader.readMessage(
            messageInitializer2,
            CardDetailInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    CardDetailResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CardDetailResponse,
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
        CardDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: CardDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CardDetailResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CardDetailResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new CardDetailInfo(m));
    CardDetailResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): CardDetailInfo[] | undefined {
    return this._data;
  }
  set data(value: CardDetailInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CardDetailResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CardDetailResponse.AsObject {
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
  ): CardDetailResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module CardDetailResponse {
  /**
   * Standard JavaScript object representation for CardDetailResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: CardDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for CardDetailResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: CardDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.InsertCardRequest
 */
export class InsertCardRequest implements GrpcMessage {
  static id = 'client.InsertCardRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InsertCardRequest();
    InsertCardRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InsertCardRequest) {
    _instance.date = _instance.date || '';
    _instance.nameShift = _instance.nameShift || '';
    _instance.user = _instance.user || '';
    _instance.cardDetails = _instance.cardDetails || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InsertCardRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.date = _reader.readString();
          break;
        case 2:
          _instance.nameShift = _reader.readString();
          break;
        case 3:
          _instance.user = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new CardDetailInfo();
          _reader.readMessage(
            messageInitializer4,
            CardDetailInfo.deserializeBinaryFromReader
          );
          (_instance.cardDetails = _instance.cardDetails || []).push(
            messageInitializer4
          );
          break;
        default:
          _reader.skipField();
      }
    }

    InsertCardRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InsertCardRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.date) {
      _writer.writeString(1, _instance.date);
    }
    if (_instance.nameShift) {
      _writer.writeString(2, _instance.nameShift);
    }
    if (_instance.user) {
      _writer.writeString(3, _instance.user);
    }
    if (_instance.cardDetails && _instance.cardDetails.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.cardDetails as any,
        CardDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _date?: string;
  private _nameShift?: string;
  private _user?: string;
  private _cardDetails?: CardDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InsertCardRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<InsertCardRequest.AsObject>) {
    _value = _value || {};
    this.date = _value.date;
    this.nameShift = _value.nameShift;
    this.user = _value.user;
    this.cardDetails = (_value.cardDetails || []).map(
      m => new CardDetailInfo(m)
    );
    InsertCardRequest.refineValues(this);
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get nameShift(): string | undefined {
    return this._nameShift;
  }
  set nameShift(value: string | undefined) {
    this._nameShift = value;
  }
  get user(): string | undefined {
    return this._user;
  }
  set user(value: string | undefined) {
    this._user = value;
  }
  get cardDetails(): CardDetailInfo[] | undefined {
    return this._cardDetails;
  }
  set cardDetails(value: CardDetailInfo[] | undefined) {
    this._cardDetails = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InsertCardRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InsertCardRequest.AsObject {
    return {
      date: this.date,
      nameShift: this.nameShift,
      user: this.user,
      cardDetails: (this.cardDetails || []).map(m => m.toObject())
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
  ): InsertCardRequest.AsProtobufJSON {
    return {
      date: this.date,
      nameShift: this.nameShift,
      user: this.user,
      cardDetails: (this.cardDetails || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module InsertCardRequest {
  /**
   * Standard JavaScript object representation for InsertCardRequest
   */
  export interface AsObject {
    date?: string;
    nameShift?: string;
    user?: string;
    cardDetails?: CardDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for InsertCardRequest
   */
  export interface AsProtobufJSON {
    date?: string;
    nameShift?: string;
    user?: string;
    cardDetails?: CardDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.TaskInfo
 */
export class TaskInfo implements GrpcMessage {
  static id = 'client.TaskInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TaskInfo();
    TaskInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TaskInfo) {
    _instance.idTask = _instance.idTask || 0;
    _instance.createdDate = _instance.createdDate || '';
    _instance.nameShift = _instance.nameShift || '';
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.nameCreatedPerson = _instance.nameCreatedPerson || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TaskInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idTask = _reader.readInt32();
          break;
        case 2:
          _instance.createdDate = _reader.readString();
          break;
        case 3:
          _instance.nameShift = _reader.readString();
          break;
        case 4:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 5:
          _instance.nameCreatedPerson = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TaskInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TaskInfo, _writer: BinaryWriter) {
    if (_instance.idTask) {
      _writer.writeInt32(1, _instance.idTask);
    }
    if (_instance.createdDate) {
      _writer.writeString(2, _instance.createdDate);
    }
    if (_instance.nameShift) {
      _writer.writeString(3, _instance.nameShift);
    }
    if (_instance.createdPerson) {
      _writer.writeInt32(4, _instance.createdPerson);
    }
    if (_instance.nameCreatedPerson) {
      _writer.writeString(5, _instance.nameCreatedPerson);
    }
  }

  private _idTask?: number;
  private _createdDate?: string;
  private _nameShift?: string;
  private _createdPerson?: number;
  private _nameCreatedPerson?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TaskInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<TaskInfo.AsObject>) {
    _value = _value || {};
    this.idTask = _value.idTask;
    this.createdDate = _value.createdDate;
    this.nameShift = _value.nameShift;
    this.createdPerson = _value.createdPerson;
    this.nameCreatedPerson = _value.nameCreatedPerson;
    TaskInfo.refineValues(this);
  }
  get idTask(): number | undefined {
    return this._idTask;
  }
  set idTask(value: number | undefined) {
    this._idTask = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }
  get nameShift(): string | undefined {
    return this._nameShift;
  }
  set nameShift(value: string | undefined) {
    this._nameShift = value;
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get nameCreatedPerson(): string | undefined {
    return this._nameCreatedPerson;
  }
  set nameCreatedPerson(value: string | undefined) {
    this._nameCreatedPerson = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TaskInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TaskInfo.AsObject {
    return {
      idTask: this.idTask,
      createdDate: this.createdDate,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson
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
  ): TaskInfo.AsProtobufJSON {
    return {
      idTask: this.idTask,
      createdDate: this.createdDate,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson
    };
  }
}
export module TaskInfo {
  /**
   * Standard JavaScript object representation for TaskInfo
   */
  export interface AsObject {
    idTask?: number;
    createdDate?: string;
    nameShift?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
  }

  /**
   * Protobuf JSON representation for TaskInfo
   */
  export interface AsProtobufJSON {
    idTask?: number;
    createdDate?: string;
    nameShift?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
  }
}

/**
 * Message implementation for client.TaskDetailInfo
 */
export class TaskDetailInfo implements GrpcMessage {
  static id = 'client.TaskDetailInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TaskDetailInfo();
    TaskDetailInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TaskDetailInfo) {
    _instance.idTaskDetail = _instance.idTaskDetail || 0;
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.codeWork = _instance.codeWork || '';
    _instance.codeWareHouseload = _instance.codeWareHouseload || '';
    _instance.codeWareHouseUnload = _instance.codeWareHouseUnload || '';
    _instance.idEquipmentLoad = _instance.idEquipmentLoad || 0;
    _instance.idEquipmentUnLoad = _instance.idEquipmentUnLoad || 0;
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.nameTypePoduct = _instance.nameTypePoduct || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.nameWork = _instance.nameWork || '';
    _instance.nameWareHouseLoad = _instance.nameWareHouseLoad || '';
    _instance.nameWareHouseUnLoad = _instance.nameWareHouseUnLoad || '';
    _instance.nameEquipmentLoad = _instance.nameEquipmentLoad || '';
    _instance.nameEquipmentUnLoad = _instance.nameEquipmentUnLoad || '';
    _instance.quantity = _instance.quantity || 0;
    _instance.distance = _instance.distance || 0;
    _instance.idTask = _instance.idTask || 0;
    _instance.date = _instance.date || '';
    _instance.nameShift = _instance.nameShift || '';
    _instance.createdPerson = _instance.createdPerson || '';
    _instance.nameCreatedPerson = _instance.nameCreatedPerson || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TaskDetailInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idTaskDetail = _reader.readInt32();
          break;
        case 2:
          _instance.codeProduct = _reader.readString();
          break;
        case 3:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 4:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 5:
          _instance.codeWork = _reader.readString();
          break;
        case 6:
          _instance.codeWareHouseload = _reader.readString();
          break;
        case 7:
          _instance.codeWareHouseUnload = _reader.readString();
          break;
        case 8:
          _instance.idEquipmentLoad = _reader.readInt32();
          break;
        case 9:
          _instance.idEquipmentUnLoad = _reader.readInt32();
          break;
        case 10:
          _instance.nameProduct = _reader.readString();
          break;
        case 11:
          _instance.nameTypePoduct = _reader.readString();
          break;
        case 12:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 13:
          _instance.nameWork = _reader.readString();
          break;
        case 14:
          _instance.nameWareHouseLoad = _reader.readString();
          break;
        case 15:
          _instance.nameWareHouseUnLoad = _reader.readString();
          break;
        case 16:
          _instance.nameEquipmentLoad = _reader.readString();
          break;
        case 17:
          _instance.nameEquipmentUnLoad = _reader.readString();
          break;
        case 18:
          _instance.quantity = _reader.readInt32();
          break;
        case 19:
          _instance.distance = _reader.readInt32();
          break;
        case 20:
          _instance.idTask = _reader.readInt32();
          break;
        case 21:
          _instance.date = _reader.readString();
          break;
        case 22:
          _instance.nameShift = _reader.readString();
          break;
        case 23:
          _instance.createdPerson = _reader.readString();
          break;
        case 24:
          _instance.nameCreatedPerson = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TaskDetailInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TaskDetailInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idTaskDetail) {
      _writer.writeInt32(1, _instance.idTaskDetail);
    }
    if (_instance.codeProduct) {
      _writer.writeString(2, _instance.codeProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(3, _instance.idTypeProduct);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(4, _instance.codeTypePacket);
    }
    if (_instance.codeWork) {
      _writer.writeString(5, _instance.codeWork);
    }
    if (_instance.codeWareHouseload) {
      _writer.writeString(6, _instance.codeWareHouseload);
    }
    if (_instance.codeWareHouseUnload) {
      _writer.writeString(7, _instance.codeWareHouseUnload);
    }
    if (_instance.idEquipmentLoad) {
      _writer.writeInt32(8, _instance.idEquipmentLoad);
    }
    if (_instance.idEquipmentUnLoad) {
      _writer.writeInt32(9, _instance.idEquipmentUnLoad);
    }
    if (_instance.nameProduct) {
      _writer.writeString(10, _instance.nameProduct);
    }
    if (_instance.nameTypePoduct) {
      _writer.writeString(11, _instance.nameTypePoduct);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(12, _instance.nameTypePacket);
    }
    if (_instance.nameWork) {
      _writer.writeString(13, _instance.nameWork);
    }
    if (_instance.nameWareHouseLoad) {
      _writer.writeString(14, _instance.nameWareHouseLoad);
    }
    if (_instance.nameWareHouseUnLoad) {
      _writer.writeString(15, _instance.nameWareHouseUnLoad);
    }
    if (_instance.nameEquipmentLoad) {
      _writer.writeString(16, _instance.nameEquipmentLoad);
    }
    if (_instance.nameEquipmentUnLoad) {
      _writer.writeString(17, _instance.nameEquipmentUnLoad);
    }
    if (_instance.quantity) {
      _writer.writeInt32(18, _instance.quantity);
    }
    if (_instance.distance) {
      _writer.writeInt32(19, _instance.distance);
    }
    if (_instance.idTask) {
      _writer.writeInt32(20, _instance.idTask);
    }
    if (_instance.date) {
      _writer.writeString(21, _instance.date);
    }
    if (_instance.nameShift) {
      _writer.writeString(22, _instance.nameShift);
    }
    if (_instance.createdPerson) {
      _writer.writeString(23, _instance.createdPerson);
    }
    if (_instance.nameCreatedPerson) {
      _writer.writeString(24, _instance.nameCreatedPerson);
    }
  }

  private _idTaskDetail?: number;
  private _codeProduct?: string;
  private _idTypeProduct?: number;
  private _codeTypePacket?: string;
  private _codeWork?: string;
  private _codeWareHouseload?: string;
  private _codeWareHouseUnload?: string;
  private _idEquipmentLoad?: number;
  private _idEquipmentUnLoad?: number;
  private _nameProduct?: string;
  private _nameTypePoduct?: string;
  private _nameTypePacket?: string;
  private _nameWork?: string;
  private _nameWareHouseLoad?: string;
  private _nameWareHouseUnLoad?: string;
  private _nameEquipmentLoad?: string;
  private _nameEquipmentUnLoad?: string;
  private _quantity?: number;
  private _distance?: number;
  private _idTask?: number;
  private _date?: string;
  private _nameShift?: string;
  private _createdPerson?: string;
  private _nameCreatedPerson?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TaskDetailInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<TaskDetailInfo.AsObject>) {
    _value = _value || {};
    this.idTaskDetail = _value.idTaskDetail;
    this.codeProduct = _value.codeProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.codeWork = _value.codeWork;
    this.codeWareHouseload = _value.codeWareHouseload;
    this.codeWareHouseUnload = _value.codeWareHouseUnload;
    this.idEquipmentLoad = _value.idEquipmentLoad;
    this.idEquipmentUnLoad = _value.idEquipmentUnLoad;
    this.nameProduct = _value.nameProduct;
    this.nameTypePoduct = _value.nameTypePoduct;
    this.nameTypePacket = _value.nameTypePacket;
    this.nameWork = _value.nameWork;
    this.nameWareHouseLoad = _value.nameWareHouseLoad;
    this.nameWareHouseUnLoad = _value.nameWareHouseUnLoad;
    this.nameEquipmentLoad = _value.nameEquipmentLoad;
    this.nameEquipmentUnLoad = _value.nameEquipmentUnLoad;
    this.quantity = _value.quantity;
    this.distance = _value.distance;
    this.idTask = _value.idTask;
    this.date = _value.date;
    this.nameShift = _value.nameShift;
    this.createdPerson = _value.createdPerson;
    this.nameCreatedPerson = _value.nameCreatedPerson;
    TaskDetailInfo.refineValues(this);
  }
  get idTaskDetail(): number | undefined {
    return this._idTaskDetail;
  }
  set idTaskDetail(value: number | undefined) {
    this._idTaskDetail = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get codeWork(): string | undefined {
    return this._codeWork;
  }
  set codeWork(value: string | undefined) {
    this._codeWork = value;
  }
  get codeWareHouseload(): string | undefined {
    return this._codeWareHouseload;
  }
  set codeWareHouseload(value: string | undefined) {
    this._codeWareHouseload = value;
  }
  get codeWareHouseUnload(): string | undefined {
    return this._codeWareHouseUnload;
  }
  set codeWareHouseUnload(value: string | undefined) {
    this._codeWareHouseUnload = value;
  }
  get idEquipmentLoad(): number | undefined {
    return this._idEquipmentLoad;
  }
  set idEquipmentLoad(value: number | undefined) {
    this._idEquipmentLoad = value;
  }
  get idEquipmentUnLoad(): number | undefined {
    return this._idEquipmentUnLoad;
  }
  set idEquipmentUnLoad(value: number | undefined) {
    this._idEquipmentUnLoad = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get nameTypePoduct(): string | undefined {
    return this._nameTypePoduct;
  }
  set nameTypePoduct(value: string | undefined) {
    this._nameTypePoduct = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get nameWork(): string | undefined {
    return this._nameWork;
  }
  set nameWork(value: string | undefined) {
    this._nameWork = value;
  }
  get nameWareHouseLoad(): string | undefined {
    return this._nameWareHouseLoad;
  }
  set nameWareHouseLoad(value: string | undefined) {
    this._nameWareHouseLoad = value;
  }
  get nameWareHouseUnLoad(): string | undefined {
    return this._nameWareHouseUnLoad;
  }
  set nameWareHouseUnLoad(value: string | undefined) {
    this._nameWareHouseUnLoad = value;
  }
  get nameEquipmentLoad(): string | undefined {
    return this._nameEquipmentLoad;
  }
  set nameEquipmentLoad(value: string | undefined) {
    this._nameEquipmentLoad = value;
  }
  get nameEquipmentUnLoad(): string | undefined {
    return this._nameEquipmentUnLoad;
  }
  set nameEquipmentUnLoad(value: string | undefined) {
    this._nameEquipmentUnLoad = value;
  }
  get quantity(): number | undefined {
    return this._quantity;
  }
  set quantity(value: number | undefined) {
    this._quantity = value;
  }
  get distance(): number | undefined {
    return this._distance;
  }
  set distance(value: number | undefined) {
    this._distance = value;
  }
  get idTask(): number | undefined {
    return this._idTask;
  }
  set idTask(value: number | undefined) {
    this._idTask = value;
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get nameShift(): string | undefined {
    return this._nameShift;
  }
  set nameShift(value: string | undefined) {
    this._nameShift = value;
  }
  get createdPerson(): string | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: string | undefined) {
    this._createdPerson = value;
  }
  get nameCreatedPerson(): string | undefined {
    return this._nameCreatedPerson;
  }
  set nameCreatedPerson(value: string | undefined) {
    this._nameCreatedPerson = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TaskDetailInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TaskDetailInfo.AsObject {
    return {
      idTaskDetail: this.idTaskDetail,
      codeProduct: this.codeProduct,
      idTypeProduct: this.idTypeProduct,
      codeTypePacket: this.codeTypePacket,
      codeWork: this.codeWork,
      codeWareHouseload: this.codeWareHouseload,
      codeWareHouseUnload: this.codeWareHouseUnload,
      idEquipmentLoad: this.idEquipmentLoad,
      idEquipmentUnLoad: this.idEquipmentUnLoad,
      nameProduct: this.nameProduct,
      nameTypePoduct: this.nameTypePoduct,
      nameTypePacket: this.nameTypePacket,
      nameWork: this.nameWork,
      nameWareHouseLoad: this.nameWareHouseLoad,
      nameWareHouseUnLoad: this.nameWareHouseUnLoad,
      nameEquipmentLoad: this.nameEquipmentLoad,
      nameEquipmentUnLoad: this.nameEquipmentUnLoad,
      quantity: this.quantity,
      distance: this.distance,
      idTask: this.idTask,
      date: this.date,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson
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
  ): TaskDetailInfo.AsProtobufJSON {
    return {
      idTaskDetail: this.idTaskDetail,
      codeProduct: this.codeProduct,
      idTypeProduct: this.idTypeProduct,
      codeTypePacket: this.codeTypePacket,
      codeWork: this.codeWork,
      codeWareHouseload: this.codeWareHouseload,
      codeWareHouseUnload: this.codeWareHouseUnload,
      idEquipmentLoad: this.idEquipmentLoad,
      idEquipmentUnLoad: this.idEquipmentUnLoad,
      nameProduct: this.nameProduct,
      nameTypePoduct: this.nameTypePoduct,
      nameTypePacket: this.nameTypePacket,
      nameWork: this.nameWork,
      nameWareHouseLoad: this.nameWareHouseLoad,
      nameWareHouseUnLoad: this.nameWareHouseUnLoad,
      nameEquipmentLoad: this.nameEquipmentLoad,
      nameEquipmentUnLoad: this.nameEquipmentUnLoad,
      quantity: this.quantity,
      distance: this.distance,
      idTask: this.idTask,
      date: this.date,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson
    };
  }
}
export module TaskDetailInfo {
  /**
   * Standard JavaScript object representation for TaskDetailInfo
   */
  export interface AsObject {
    idTaskDetail?: number;
    codeProduct?: string;
    idTypeProduct?: number;
    codeTypePacket?: string;
    codeWork?: string;
    codeWareHouseload?: string;
    codeWareHouseUnload?: string;
    idEquipmentLoad?: number;
    idEquipmentUnLoad?: number;
    nameProduct?: string;
    nameTypePoduct?: string;
    nameTypePacket?: string;
    nameWork?: string;
    nameWareHouseLoad?: string;
    nameWareHouseUnLoad?: string;
    nameEquipmentLoad?: string;
    nameEquipmentUnLoad?: string;
    quantity?: number;
    distance?: number;
    idTask?: number;
    date?: string;
    nameShift?: string;
    createdPerson?: string;
    nameCreatedPerson?: string;
  }

  /**
   * Protobuf JSON representation for TaskDetailInfo
   */
  export interface AsProtobufJSON {
    idTaskDetail?: number;
    codeProduct?: string;
    idTypeProduct?: number;
    codeTypePacket?: string;
    codeWork?: string;
    codeWareHouseload?: string;
    codeWareHouseUnload?: string;
    idEquipmentLoad?: number;
    idEquipmentUnLoad?: number;
    nameProduct?: string;
    nameTypePoduct?: string;
    nameTypePacket?: string;
    nameWork?: string;
    nameWareHouseLoad?: string;
    nameWareHouseUnLoad?: string;
    nameEquipmentLoad?: string;
    nameEquipmentUnLoad?: string;
    quantity?: number;
    distance?: number;
    idTask?: number;
    date?: string;
    nameShift?: string;
    createdPerson?: string;
    nameCreatedPerson?: string;
  }
}

/**
 * Message implementation for client.InsertTaskRequest
 */
export class InsertTaskRequest implements GrpcMessage {
  static id = 'client.InsertTaskRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InsertTaskRequest();
    InsertTaskRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InsertTaskRequest) {
    _instance.task = _instance.task || undefined;
    _instance.taskDetails = _instance.taskDetails || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InsertTaskRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.task = new TaskInfo();
          _reader.readMessage(
            _instance.task,
            TaskInfo.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new TaskDetailInfo();
          _reader.readMessage(
            messageInitializer2,
            TaskDetailInfo.deserializeBinaryFromReader
          );
          (_instance.taskDetails = _instance.taskDetails || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    InsertTaskRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InsertTaskRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.task) {
      _writer.writeMessage(
        1,
        _instance.task as any,
        TaskInfo.serializeBinaryToWriter
      );
    }
    if (_instance.taskDetails && _instance.taskDetails.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.taskDetails as any,
        TaskDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _task?: TaskInfo;
  private _taskDetails?: TaskDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InsertTaskRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<InsertTaskRequest.AsObject>) {
    _value = _value || {};
    this.task = _value.task ? new TaskInfo(_value.task) : undefined;
    this.taskDetails = (_value.taskDetails || []).map(
      m => new TaskDetailInfo(m)
    );
    InsertTaskRequest.refineValues(this);
  }
  get task(): TaskInfo | undefined {
    return this._task;
  }
  set task(value: TaskInfo | undefined) {
    this._task = value;
  }
  get taskDetails(): TaskDetailInfo[] | undefined {
    return this._taskDetails;
  }
  set taskDetails(value: TaskDetailInfo[] | undefined) {
    this._taskDetails = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InsertTaskRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InsertTaskRequest.AsObject {
    return {
      task: this.task ? this.task.toObject() : undefined,
      taskDetails: (this.taskDetails || []).map(m => m.toObject())
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
  ): InsertTaskRequest.AsProtobufJSON {
    return {
      task: this.task ? this.task.toProtobufJSON(options) : null,
      taskDetails: (this.taskDetails || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module InsertTaskRequest {
  /**
   * Standard JavaScript object representation for InsertTaskRequest
   */
  export interface AsObject {
    task?: TaskInfo.AsObject;
    taskDetails?: TaskDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for InsertTaskRequest
   */
  export interface AsProtobufJSON {
    task?: TaskInfo.AsProtobufJSON | null;
    taskDetails?: TaskDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.TaskResponse
 */
export class TaskResponse implements GrpcMessage {
  static id = 'client.TaskResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TaskResponse();
    TaskResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TaskResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TaskResponse,
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
          const messageInitializer2 = new TaskInfo();
          _reader.readMessage(
            messageInitializer2,
            TaskInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    TaskResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TaskResponse,
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
        TaskInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: TaskInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TaskResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TaskResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new TaskInfo(m));
    TaskResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): TaskInfo[] | undefined {
    return this._data;
  }
  set data(value: TaskInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TaskResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TaskResponse.AsObject {
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
  ): TaskResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module TaskResponse {
  /**
   * Standard JavaScript object representation for TaskResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: TaskInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for TaskResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: TaskInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.TaskDetailResponse
 */
export class TaskDetailResponse implements GrpcMessage {
  static id = 'client.TaskDetailResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TaskDetailResponse();
    TaskDetailResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TaskDetailResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TaskDetailResponse,
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
          const messageInitializer2 = new TaskDetailInfo();
          _reader.readMessage(
            messageInitializer2,
            TaskDetailInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    TaskDetailResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TaskDetailResponse,
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
        TaskDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: TaskDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TaskDetailResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TaskDetailResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new TaskDetailInfo(m));
    TaskDetailResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): TaskDetailInfo[] | undefined {
    return this._data;
  }
  set data(value: TaskDetailInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TaskDetailResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TaskDetailResponse.AsObject {
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
  ): TaskDetailResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module TaskDetailResponse {
  /**
   * Standard JavaScript object representation for TaskDetailResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: TaskDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for TaskDetailResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: TaskDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.RecordDetailInfo
 */
export class RecordDetailInfo implements GrpcMessage {
  static id = 'client.RecordDetailInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RecordDetailInfo();
    RecordDetailInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RecordDetailInfo) {
    _instance.idRecordDetail = _instance.idRecordDetail || 0;
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.nameParcel = _instance.nameParcel || '';
    _instance.codeRecord = _instance.codeRecord || '';
    _instance.quantity = _instance.quantity || '0';
    _instance.codePackingUnit = _instance.codePackingUnit || '';
    _instance.namePackingUnit = _instance.namePackingUnit || '';
    _instance.idRecord = _instance.idRecord || '0';
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.createdDate = _instance.createdDate || '';
    _instance.shift = _instance.shift || '';
    _instance.isChangable = _instance.isChangable || false;
    _instance.namePerson = _instance.namePerson || '';
    _instance.codeWareHouse = _instance.codeWareHouse || '';
    _instance.nameWareHouse = _instance.nameWareHouse || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RecordDetailInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idRecordDetail = _reader.readInt32();
          break;
        case 2:
          _instance.codeProduct = _reader.readString();
          break;
        case 3:
          _instance.nameProduct = _reader.readString();
          break;
        case 4:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 5:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 6:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 7:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 8:
          _instance.codeParcel = _reader.readString();
          break;
        case 9:
          _instance.nameParcel = _reader.readString();
          break;
        case 10:
          _instance.codeRecord = _reader.readString();
          break;
        case 11:
          _instance.quantity = _reader.readInt64String();
          break;
        case 12:
          _instance.codePackingUnit = _reader.readString();
          break;
        case 13:
          _instance.namePackingUnit = _reader.readString();
          break;
        case 14:
          _instance.idRecord = _reader.readInt64String();
          break;
        case 15:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 16:
          _instance.createdDate = _reader.readString();
          break;
        case 17:
          _instance.shift = _reader.readString();
          break;
        case 18:
          _instance.isChangable = _reader.readBool();
          break;
        case 19:
          _instance.namePerson = _reader.readString();
          break;
        case 20:
          _instance.codeWareHouse = _reader.readString();
          break;
        case 21:
          _instance.nameWareHouse = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RecordDetailInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RecordDetailInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idRecordDetail) {
      _writer.writeInt32(1, _instance.idRecordDetail);
    }
    if (_instance.codeProduct) {
      _writer.writeString(2, _instance.codeProduct);
    }
    if (_instance.nameProduct) {
      _writer.writeString(3, _instance.nameProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(4, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(5, _instance.nameTypeProduct);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(6, _instance.codeTypePacket);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(7, _instance.nameTypePacket);
    }
    if (_instance.codeParcel) {
      _writer.writeString(8, _instance.codeParcel);
    }
    if (_instance.nameParcel) {
      _writer.writeString(9, _instance.nameParcel);
    }
    if (_instance.codeRecord) {
      _writer.writeString(10, _instance.codeRecord);
    }
    if (_instance.quantity) {
      _writer.writeInt64String(11, _instance.quantity);
    }
    if (_instance.codePackingUnit) {
      _writer.writeString(12, _instance.codePackingUnit);
    }
    if (_instance.namePackingUnit) {
      _writer.writeString(13, _instance.namePackingUnit);
    }
    if (_instance.idRecord) {
      _writer.writeInt64String(14, _instance.idRecord);
    }
    if (_instance.createdPerson) {
      _writer.writeInt32(15, _instance.createdPerson);
    }
    if (_instance.createdDate) {
      _writer.writeString(16, _instance.createdDate);
    }
    if (_instance.shift) {
      _writer.writeString(17, _instance.shift);
    }
    if (_instance.isChangable) {
      _writer.writeBool(18, _instance.isChangable);
    }
    if (_instance.namePerson) {
      _writer.writeString(19, _instance.namePerson);
    }
    if (_instance.codeWareHouse) {
      _writer.writeString(20, _instance.codeWareHouse);
    }
    if (_instance.nameWareHouse) {
      _writer.writeString(21, _instance.nameWareHouse);
    }
  }

  private _idRecordDetail?: number;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _codeTypePacket?: string;
  private _nameTypePacket?: string;
  private _codeParcel?: string;
  private _nameParcel?: string;
  private _codeRecord?: string;
  private _quantity?: string;
  private _codePackingUnit?: string;
  private _namePackingUnit?: string;
  private _idRecord?: string;
  private _createdPerson?: number;
  private _createdDate?: string;
  private _shift?: string;
  private _isChangable?: boolean;
  private _namePerson?: string;
  private _codeWareHouse?: string;
  private _nameWareHouse?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RecordDetailInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<RecordDetailInfo.AsObject>) {
    _value = _value || {};
    this.idRecordDetail = _value.idRecordDetail;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.nameTypePacket = _value.nameTypePacket;
    this.codeParcel = _value.codeParcel;
    this.nameParcel = _value.nameParcel;
    this.codeRecord = _value.codeRecord;
    this.quantity = _value.quantity;
    this.codePackingUnit = _value.codePackingUnit;
    this.namePackingUnit = _value.namePackingUnit;
    this.idRecord = _value.idRecord;
    this.createdPerson = _value.createdPerson;
    this.createdDate = _value.createdDate;
    this.shift = _value.shift;
    this.isChangable = _value.isChangable;
    this.namePerson = _value.namePerson;
    this.codeWareHouse = _value.codeWareHouse;
    this.nameWareHouse = _value.nameWareHouse;
    RecordDetailInfo.refineValues(this);
  }
  get idRecordDetail(): number | undefined {
    return this._idRecordDetail;
  }
  set idRecordDetail(value: number | undefined) {
    this._idRecordDetail = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get nameParcel(): string | undefined {
    return this._nameParcel;
  }
  set nameParcel(value: string | undefined) {
    this._nameParcel = value;
  }
  get codeRecord(): string | undefined {
    return this._codeRecord;
  }
  set codeRecord(value: string | undefined) {
    this._codeRecord = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get codePackingUnit(): string | undefined {
    return this._codePackingUnit;
  }
  set codePackingUnit(value: string | undefined) {
    this._codePackingUnit = value;
  }
  get namePackingUnit(): string | undefined {
    return this._namePackingUnit;
  }
  set namePackingUnit(value: string | undefined) {
    this._namePackingUnit = value;
  }
  get idRecord(): string | undefined {
    return this._idRecord;
  }
  set idRecord(value: string | undefined) {
    this._idRecord = value;
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }
  get shift(): string | undefined {
    return this._shift;
  }
  set shift(value: string | undefined) {
    this._shift = value;
  }
  get isChangable(): boolean | undefined {
    return this._isChangable;
  }
  set isChangable(value: boolean | undefined) {
    this._isChangable = value;
  }
  get namePerson(): string | undefined {
    return this._namePerson;
  }
  set namePerson(value: string | undefined) {
    this._namePerson = value;
  }
  get codeWareHouse(): string | undefined {
    return this._codeWareHouse;
  }
  set codeWareHouse(value: string | undefined) {
    this._codeWareHouse = value;
  }
  get nameWareHouse(): string | undefined {
    return this._nameWareHouse;
  }
  set nameWareHouse(value: string | undefined) {
    this._nameWareHouse = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RecordDetailInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RecordDetailInfo.AsObject {
    return {
      idRecordDetail: this.idRecordDetail,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      nameParcel: this.nameParcel,
      codeRecord: this.codeRecord,
      quantity: this.quantity,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      idRecord: this.idRecord,
      createdPerson: this.createdPerson,
      createdDate: this.createdDate,
      shift: this.shift,
      isChangable: this.isChangable,
      namePerson: this.namePerson,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse
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
  ): RecordDetailInfo.AsProtobufJSON {
    return {
      idRecordDetail: this.idRecordDetail,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      nameParcel: this.nameParcel,
      codeRecord: this.codeRecord,
      quantity: this.quantity,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      idRecord: this.idRecord,
      createdPerson: this.createdPerson,
      createdDate: this.createdDate,
      shift: this.shift,
      isChangable: this.isChangable,
      namePerson: this.namePerson,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse
    };
  }
}
export module RecordDetailInfo {
  /**
   * Standard JavaScript object representation for RecordDetailInfo
   */
  export interface AsObject {
    idRecordDetail?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    nameParcel?: string;
    codeRecord?: string;
    quantity?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    idRecord?: string;
    createdPerson?: number;
    createdDate?: string;
    shift?: string;
    isChangable?: boolean;
    namePerson?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
  }

  /**
   * Protobuf JSON representation for RecordDetailInfo
   */
  export interface AsProtobufJSON {
    idRecordDetail?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    nameParcel?: string;
    codeRecord?: string;
    quantity?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    idRecord?: string;
    createdPerson?: number;
    createdDate?: string;
    shift?: string;
    isChangable?: boolean;
    namePerson?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
  }
}

/**
 * Message implementation for client.RecordDetailResponse
 */
export class RecordDetailResponse implements GrpcMessage {
  static id = 'client.RecordDetailResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RecordDetailResponse();
    RecordDetailResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RecordDetailResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RecordDetailResponse,
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
          const messageInitializer2 = new RecordDetailInfo();
          _reader.readMessage(
            messageInitializer2,
            RecordDetailInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    RecordDetailResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RecordDetailResponse,
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
        RecordDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: RecordDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RecordDetailResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RecordDetailResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new RecordDetailInfo(m));
    RecordDetailResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): RecordDetailInfo[] | undefined {
    return this._data;
  }
  set data(value: RecordDetailInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RecordDetailResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RecordDetailResponse.AsObject {
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
  ): RecordDetailResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RecordDetailResponse {
  /**
   * Standard JavaScript object representation for RecordDetailResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: RecordDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for RecordDetailResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: RecordDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.Record
 */
export class Record implements GrpcMessage {
  static id = 'client.Record';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Record();
    Record.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Record) {
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.createdDate = _instance.createdDate || '';
    _instance.shift = _instance.shift || '';
    _instance.codeWareHouse = _instance.codeWareHouse || '';
    _instance.codeRecord = _instance.codeRecord || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Record, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 2:
          _instance.createdDate = _reader.readString();
          break;
        case 3:
          _instance.shift = _reader.readString();
          break;
        case 4:
          _instance.codeWareHouse = _reader.readString();
          break;
        case 5:
          _instance.codeRecord = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Record.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Record, _writer: BinaryWriter) {
    if (_instance.createdPerson) {
      _writer.writeInt32(1, _instance.createdPerson);
    }
    if (_instance.createdDate) {
      _writer.writeString(2, _instance.createdDate);
    }
    if (_instance.shift) {
      _writer.writeString(3, _instance.shift);
    }
    if (_instance.codeWareHouse) {
      _writer.writeString(4, _instance.codeWareHouse);
    }
    if (_instance.codeRecord) {
      _writer.writeString(5, _instance.codeRecord);
    }
  }

  private _createdPerson?: number;
  private _createdDate?: string;
  private _shift?: string;
  private _codeWareHouse?: string;
  private _codeRecord?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Record to deeply clone from
   */
  constructor(_value?: RecursivePartial<Record.AsObject>) {
    _value = _value || {};
    this.createdPerson = _value.createdPerson;
    this.createdDate = _value.createdDate;
    this.shift = _value.shift;
    this.codeWareHouse = _value.codeWareHouse;
    this.codeRecord = _value.codeRecord;
    Record.refineValues(this);
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }
  get shift(): string | undefined {
    return this._shift;
  }
  set shift(value: string | undefined) {
    this._shift = value;
  }
  get codeWareHouse(): string | undefined {
    return this._codeWareHouse;
  }
  set codeWareHouse(value: string | undefined) {
    this._codeWareHouse = value;
  }
  get codeRecord(): string | undefined {
    return this._codeRecord;
  }
  set codeRecord(value: string | undefined) {
    this._codeRecord = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Record.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Record.AsObject {
    return {
      createdPerson: this.createdPerson,
      createdDate: this.createdDate,
      shift: this.shift,
      codeWareHouse: this.codeWareHouse,
      codeRecord: this.codeRecord
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
  ): Record.AsProtobufJSON {
    return {
      createdPerson: this.createdPerson,
      createdDate: this.createdDate,
      shift: this.shift,
      codeWareHouse: this.codeWareHouse,
      codeRecord: this.codeRecord
    };
  }
}
export module Record {
  /**
   * Standard JavaScript object representation for Record
   */
  export interface AsObject {
    createdPerson?: number;
    createdDate?: string;
    shift?: string;
    codeWareHouse?: string;
    codeRecord?: string;
  }

  /**
   * Protobuf JSON representation for Record
   */
  export interface AsProtobufJSON {
    createdPerson?: number;
    createdDate?: string;
    shift?: string;
    codeWareHouse?: string;
    codeRecord?: string;
  }
}

/**
 * Message implementation for client.InsertRecordRequest
 */
export class InsertRecordRequest implements GrpcMessage {
  static id = 'client.InsertRecordRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InsertRecordRequest();
    InsertRecordRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InsertRecordRequest) {
    _instance.record = _instance.record || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InsertRecordRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.record = new Record();
          _reader.readMessage(
            _instance.record,
            Record.deserializeBinaryFromReader
          );
          break;
        case 5:
          const messageInitializer5 = new RecordDetailInfo();
          _reader.readMessage(
            messageInitializer5,
            RecordDetailInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer5);
          break;
        default:
          _reader.skipField();
      }
    }

    InsertRecordRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InsertRecordRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.record) {
      _writer.writeMessage(
        1,
        _instance.record as any,
        Record.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.data as any,
        RecordDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _record?: Record;
  private _data?: RecordDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InsertRecordRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<InsertRecordRequest.AsObject>) {
    _value = _value || {};
    this.record = _value.record ? new Record(_value.record) : undefined;
    this.data = (_value.data || []).map(m => new RecordDetailInfo(m));
    InsertRecordRequest.refineValues(this);
  }
  get record(): Record | undefined {
    return this._record;
  }
  set record(value: Record | undefined) {
    this._record = value;
  }
  get data(): RecordDetailInfo[] | undefined {
    return this._data;
  }
  set data(value: RecordDetailInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InsertRecordRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InsertRecordRequest.AsObject {
    return {
      record: this.record ? this.record.toObject() : undefined,
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
  ): InsertRecordRequest.AsProtobufJSON {
    return {
      record: this.record ? this.record.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module InsertRecordRequest {
  /**
   * Standard JavaScript object representation for InsertRecordRequest
   */
  export interface AsObject {
    record?: Record.AsObject;
    data?: RecordDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for InsertRecordRequest
   */
  export interface AsProtobufJSON {
    record?: Record.AsProtobufJSON | null;
    data?: RecordDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ReportVolConsumtion
 */
export class ReportVolConsumtion implements GrpcMessage {
  static id = 'client.ReportVolConsumtion';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportVolConsumtion();
    ReportVolConsumtion.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportVolConsumtion) {
    _instance.date = _instance.date || '';
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.namesProduct = _instance.namesProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.codePackingUnit = _instance.codePackingUnit || '';
    _instance.namePackingUnit = _instance.namePackingUnit || '';
    _instance.idCustomer = _instance.idCustomer || '';
    _instance.nameCustomer = _instance.nameCustomer || 0;
    _instance.codeTypeBill = _instance.codeTypeBill || '';
    _instance.nameTypeBill = _instance.nameTypeBill || '';
    _instance.tripNumber = _instance.tripNumber || 0;
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.quantity = _instance.quantity || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportVolConsumtion,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.date = _reader.readString();
          break;
        case 2:
          _instance.codeProduct = _reader.readString();
          break;
        case 3:
          _instance.namesProduct = _reader.readString();
          break;
        case 4:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 5:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 6:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 7:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 8:
          _instance.codePackingUnit = _reader.readString();
          break;
        case 9:
          _instance.namePackingUnit = _reader.readString();
          break;
        case 10:
          _instance.idCustomer = _reader.readString();
          break;
        case 11:
          _instance.nameCustomer = _reader.readInt32();
          break;
        case 12:
          _instance.codeTypeBill = _reader.readString();
          break;
        case 13:
          _instance.nameTypeBill = _reader.readString();
          break;
        case 14:
          _instance.tripNumber = _reader.readInt32();
          break;
        case 15:
          _instance.codeParcel = _reader.readString();
          break;
        case 16:
          _instance.quantity = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ReportVolConsumtion.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportVolConsumtion,
    _writer: BinaryWriter
  ) {
    if (_instance.date) {
      _writer.writeString(1, _instance.date);
    }
    if (_instance.codeProduct) {
      _writer.writeString(2, _instance.codeProduct);
    }
    if (_instance.namesProduct) {
      _writer.writeString(3, _instance.namesProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(4, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(5, _instance.nameTypeProduct);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(6, _instance.codeTypePacket);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(7, _instance.nameTypePacket);
    }
    if (_instance.codePackingUnit) {
      _writer.writeString(8, _instance.codePackingUnit);
    }
    if (_instance.namePackingUnit) {
      _writer.writeString(9, _instance.namePackingUnit);
    }
    if (_instance.idCustomer) {
      _writer.writeString(10, _instance.idCustomer);
    }
    if (_instance.nameCustomer) {
      _writer.writeInt32(11, _instance.nameCustomer);
    }
    if (_instance.codeTypeBill) {
      _writer.writeString(12, _instance.codeTypeBill);
    }
    if (_instance.nameTypeBill) {
      _writer.writeString(13, _instance.nameTypeBill);
    }
    if (_instance.tripNumber) {
      _writer.writeInt32(14, _instance.tripNumber);
    }
    if (_instance.codeParcel) {
      _writer.writeString(15, _instance.codeParcel);
    }
    if (_instance.quantity) {
      _writer.writeInt32(16, _instance.quantity);
    }
  }

  private _date?: string;
  private _codeProduct?: string;
  private _namesProduct?: string;
  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _codeTypePacket?: string;
  private _nameTypePacket?: string;
  private _codePackingUnit?: string;
  private _namePackingUnit?: string;
  private _idCustomer?: string;
  private _nameCustomer?: number;
  private _codeTypeBill?: string;
  private _nameTypeBill?: string;
  private _tripNumber?: number;
  private _codeParcel?: string;
  private _quantity?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportVolConsumtion to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportVolConsumtion.AsObject>) {
    _value = _value || {};
    this.date = _value.date;
    this.codeProduct = _value.codeProduct;
    this.namesProduct = _value.namesProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.nameTypePacket = _value.nameTypePacket;
    this.codePackingUnit = _value.codePackingUnit;
    this.namePackingUnit = _value.namePackingUnit;
    this.idCustomer = _value.idCustomer;
    this.nameCustomer = _value.nameCustomer;
    this.codeTypeBill = _value.codeTypeBill;
    this.nameTypeBill = _value.nameTypeBill;
    this.tripNumber = _value.tripNumber;
    this.codeParcel = _value.codeParcel;
    this.quantity = _value.quantity;
    ReportVolConsumtion.refineValues(this);
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get namesProduct(): string | undefined {
    return this._namesProduct;
  }
  set namesProduct(value: string | undefined) {
    this._namesProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get codePackingUnit(): string | undefined {
    return this._codePackingUnit;
  }
  set codePackingUnit(value: string | undefined) {
    this._codePackingUnit = value;
  }
  get namePackingUnit(): string | undefined {
    return this._namePackingUnit;
  }
  set namePackingUnit(value: string | undefined) {
    this._namePackingUnit = value;
  }
  get idCustomer(): string | undefined {
    return this._idCustomer;
  }
  set idCustomer(value: string | undefined) {
    this._idCustomer = value;
  }
  get nameCustomer(): number | undefined {
    return this._nameCustomer;
  }
  set nameCustomer(value: number | undefined) {
    this._nameCustomer = value;
  }
  get codeTypeBill(): string | undefined {
    return this._codeTypeBill;
  }
  set codeTypeBill(value: string | undefined) {
    this._codeTypeBill = value;
  }
  get nameTypeBill(): string | undefined {
    return this._nameTypeBill;
  }
  set nameTypeBill(value: string | undefined) {
    this._nameTypeBill = value;
  }
  get tripNumber(): number | undefined {
    return this._tripNumber;
  }
  set tripNumber(value: number | undefined) {
    this._tripNumber = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get quantity(): number | undefined {
    return this._quantity;
  }
  set quantity(value: number | undefined) {
    this._quantity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportVolConsumtion.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportVolConsumtion.AsObject {
    return {
      date: this.date,
      codeProduct: this.codeProduct,
      namesProduct: this.namesProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      idCustomer: this.idCustomer,
      nameCustomer: this.nameCustomer,
      codeTypeBill: this.codeTypeBill,
      nameTypeBill: this.nameTypeBill,
      tripNumber: this.tripNumber,
      codeParcel: this.codeParcel,
      quantity: this.quantity
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
  ): ReportVolConsumtion.AsProtobufJSON {
    return {
      date: this.date,
      codeProduct: this.codeProduct,
      namesProduct: this.namesProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      idCustomer: this.idCustomer,
      nameCustomer: this.nameCustomer,
      codeTypeBill: this.codeTypeBill,
      nameTypeBill: this.nameTypeBill,
      tripNumber: this.tripNumber,
      codeParcel: this.codeParcel,
      quantity: this.quantity
    };
  }
}
export module ReportVolConsumtion {
  /**
   * Standard JavaScript object representation for ReportVolConsumtion
   */
  export interface AsObject {
    date?: string;
    codeProduct?: string;
    namesProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    idCustomer?: string;
    nameCustomer?: number;
    codeTypeBill?: string;
    nameTypeBill?: string;
    tripNumber?: number;
    codeParcel?: string;
    quantity?: number;
  }

  /**
   * Protobuf JSON representation for ReportVolConsumtion
   */
  export interface AsProtobufJSON {
    date?: string;
    codeProduct?: string;
    namesProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    idCustomer?: string;
    nameCustomer?: number;
    codeTypeBill?: string;
    nameTypeBill?: string;
    tripNumber?: number;
    codeParcel?: string;
    quantity?: number;
  }
}

/**
 * Message implementation for client.ReportVolConsumtionResponse
 */
export class ReportVolConsumtionResponse implements GrpcMessage {
  static id = 'client.ReportVolConsumtionResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportVolConsumtionResponse();
    ReportVolConsumtionResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportVolConsumtionResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportVolConsumtionResponse,
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
          const messageInitializer2 = new ReportVolConsumtion();
          _reader.readMessage(
            messageInitializer2,
            ReportVolConsumtion.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ReportVolConsumtionResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportVolConsumtionResponse,
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
        ReportVolConsumtion.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ReportVolConsumtion[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportVolConsumtionResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportVolConsumtionResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ReportVolConsumtion(m));
    ReportVolConsumtionResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ReportVolConsumtion[] | undefined {
    return this._data;
  }
  set data(value: ReportVolConsumtion[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportVolConsumtionResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportVolConsumtionResponse.AsObject {
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
  ): ReportVolConsumtionResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ReportVolConsumtionResponse {
  /**
   * Standard JavaScript object representation for ReportVolConsumtionResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ReportVolConsumtion.AsObject[];
  }

  /**
   * Protobuf JSON representation for ReportVolConsumtionResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ReportVolConsumtion.AsProtobufJSON[] | null;
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
    _instance.codeOrder = _instance.codeOrder || '';
    _instance.identityDriver = _instance.identityDriver || '';
    _instance.nameDriver = _instance.nameDriver || '';
    _instance.roMooc = _instance.roMooc || '';
    _instance.vehicleNumber = _instance.vehicleNumber || '';
    _instance.weightRegistration = _instance.weightRegistration || 0;
    _instance.weightAllow = _instance.weightAllow || 0;
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.quantity = _instance.quantity || 0;
    _instance.idTransportationUnit = _instance.idTransportationUnit || 0;
    _instance.class1 = _instance.class1 || 0;
    _instance.class2 = _instance.class2 || 0;
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.nameTransportationUnit = _instance.nameTransportationUnit || '';
    _instance.customer = _instance.customer || '';
    _instance.nameCustomer = _instance.nameCustomer || '';
    _instance.typeCustomer = _instance.typeCustomer || '';
    _instance.nameTypeCustomer = _instance.nameTypeCustomer || '';
    _instance.wareHouse = _instance.wareHouse || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProdcut = _instance.nameTypeProdcut || '';
    _instance.quantityActual = _instance.quantityActual || 0;
    _instance.weightEstimate = _instance.weightEstimate || 0;
    _instance.weightActual = _instance.weightActual || 0;
    _instance.timecreated = _instance.timecreated || '';
    _instance.timelastest = _instance.timelastest || '';
    _instance.status = _instance.status || 0;
    _instance.codeTransport = _instance.codeTransport || '';
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
          _instance.codeOrder = _reader.readString();
          break;
        case 2:
          _instance.identityDriver = _reader.readString();
          break;
        case 3:
          _instance.nameDriver = _reader.readString();
          break;
        case 4:
          _instance.roMooc = _reader.readString();
          break;
        case 5:
          _instance.vehicleNumber = _reader.readString();
          break;
        case 6:
          _instance.weightRegistration = _reader.readInt32();
          break;
        case 7:
          _instance.weightAllow = _reader.readInt32();
          break;
        case 8:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 9:
          _instance.quantity = _reader.readInt32();
          break;
        case 10:
          _instance.idTransportationUnit = _reader.readInt32();
          break;
        case 11:
          _instance.class1 = _reader.readInt32();
          break;
        case 12:
          _instance.class2 = _reader.readInt32();
          break;
        case 13:
          _instance.codeProduct = _reader.readString();
          break;
        case 14:
          _instance.nameProduct = _reader.readString();
          break;
        case 15:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 16:
          _instance.nameTransportationUnit = _reader.readString();
          break;
        case 17:
          _instance.customer = _reader.readString();
          break;
        case 18:
          _instance.nameCustomer = _reader.readString();
          break;
        case 19:
          _instance.typeCustomer = _reader.readString();
          break;
        case 20:
          _instance.nameTypeCustomer = _reader.readString();
          break;
        case 21:
          _instance.wareHouse = _reader.readString();
          break;
        case 22:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 23:
          _instance.nameTypeProdcut = _reader.readString();
          break;
        case 24:
          _instance.quantityActual = _reader.readInt32();
          break;
        case 25:
          _instance.weightEstimate = _reader.readInt32();
          break;
        case 26:
          _instance.weightActual = _reader.readInt32();
          break;
        case 27:
          _instance.timecreated = _reader.readString();
          break;
        case 28:
          _instance.timelastest = _reader.readString();
          break;
        case 29:
          _instance.status = _reader.readInt32();
          break;
        case 30:
          _instance.codeTransport = _reader.readString();
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
    if (_instance.codeOrder) {
      _writer.writeString(1, _instance.codeOrder);
    }
    if (_instance.identityDriver) {
      _writer.writeString(2, _instance.identityDriver);
    }
    if (_instance.nameDriver) {
      _writer.writeString(3, _instance.nameDriver);
    }
    if (_instance.roMooc) {
      _writer.writeString(4, _instance.roMooc);
    }
    if (_instance.vehicleNumber) {
      _writer.writeString(5, _instance.vehicleNumber);
    }
    if (_instance.weightRegistration) {
      _writer.writeInt32(6, _instance.weightRegistration);
    }
    if (_instance.weightAllow) {
      _writer.writeInt32(7, _instance.weightAllow);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(8, _instance.codeTypePacket);
    }
    if (_instance.quantity) {
      _writer.writeInt32(9, _instance.quantity);
    }
    if (_instance.idTransportationUnit) {
      _writer.writeInt32(10, _instance.idTransportationUnit);
    }
    if (_instance.class1) {
      _writer.writeInt32(11, _instance.class1);
    }
    if (_instance.class2) {
      _writer.writeInt32(12, _instance.class2);
    }
    if (_instance.codeProduct) {
      _writer.writeString(13, _instance.codeProduct);
    }
    if (_instance.nameProduct) {
      _writer.writeString(14, _instance.nameProduct);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(15, _instance.nameTypePacket);
    }
    if (_instance.nameTransportationUnit) {
      _writer.writeString(16, _instance.nameTransportationUnit);
    }
    if (_instance.customer) {
      _writer.writeString(17, _instance.customer);
    }
    if (_instance.nameCustomer) {
      _writer.writeString(18, _instance.nameCustomer);
    }
    if (_instance.typeCustomer) {
      _writer.writeString(19, _instance.typeCustomer);
    }
    if (_instance.nameTypeCustomer) {
      _writer.writeString(20, _instance.nameTypeCustomer);
    }
    if (_instance.wareHouse) {
      _writer.writeString(21, _instance.wareHouse);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(22, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProdcut) {
      _writer.writeString(23, _instance.nameTypeProdcut);
    }
    if (_instance.quantityActual) {
      _writer.writeInt32(24, _instance.quantityActual);
    }
    if (_instance.weightEstimate) {
      _writer.writeInt32(25, _instance.weightEstimate);
    }
    if (_instance.weightActual) {
      _writer.writeInt32(26, _instance.weightActual);
    }
    if (_instance.timecreated) {
      _writer.writeString(27, _instance.timecreated);
    }
    if (_instance.timelastest) {
      _writer.writeString(28, _instance.timelastest);
    }
    if (_instance.status) {
      _writer.writeInt32(29, _instance.status);
    }
    if (_instance.codeTransport) {
      _writer.writeString(30, _instance.codeTransport);
    }
  }

  private _codeOrder?: string;
  private _identityDriver?: string;
  private _nameDriver?: string;
  private _roMooc?: string;
  private _vehicleNumber?: string;
  private _weightRegistration?: number;
  private _weightAllow?: number;
  private _codeTypePacket?: string;
  private _quantity?: number;
  private _idTransportationUnit?: number;
  private _class1?: number;
  private _class2?: number;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _nameTypePacket?: string;
  private _nameTransportationUnit?: string;
  private _customer?: string;
  private _nameCustomer?: string;
  private _typeCustomer?: string;
  private _nameTypeCustomer?: string;
  private _wareHouse?: string;
  private _idTypeProduct?: number;
  private _nameTypeProdcut?: string;
  private _quantityActual?: number;
  private _weightEstimate?: number;
  private _weightActual?: number;
  private _timecreated?: string;
  private _timelastest?: string;
  private _status?: number;
  private _codeTransport?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrderInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrderInfo.AsObject>) {
    _value = _value || {};
    this.codeOrder = _value.codeOrder;
    this.identityDriver = _value.identityDriver;
    this.nameDriver = _value.nameDriver;
    this.roMooc = _value.roMooc;
    this.vehicleNumber = _value.vehicleNumber;
    this.weightRegistration = _value.weightRegistration;
    this.weightAllow = _value.weightAllow;
    this.codeTypePacket = _value.codeTypePacket;
    this.quantity = _value.quantity;
    this.idTransportationUnit = _value.idTransportationUnit;
    this.class1 = _value.class1;
    this.class2 = _value.class2;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.nameTypePacket = _value.nameTypePacket;
    this.nameTransportationUnit = _value.nameTransportationUnit;
    this.customer = _value.customer;
    this.nameCustomer = _value.nameCustomer;
    this.typeCustomer = _value.typeCustomer;
    this.nameTypeCustomer = _value.nameTypeCustomer;
    this.wareHouse = _value.wareHouse;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProdcut = _value.nameTypeProdcut;
    this.quantityActual = _value.quantityActual;
    this.weightEstimate = _value.weightEstimate;
    this.weightActual = _value.weightActual;
    this.timecreated = _value.timecreated;
    this.timelastest = _value.timelastest;
    this.status = _value.status;
    this.codeTransport = _value.codeTransport;
    OrderInfo.refineValues(this);
  }
  get codeOrder(): string | undefined {
    return this._codeOrder;
  }
  set codeOrder(value: string | undefined) {
    this._codeOrder = value;
  }
  get identityDriver(): string | undefined {
    return this._identityDriver;
  }
  set identityDriver(value: string | undefined) {
    this._identityDriver = value;
  }
  get nameDriver(): string | undefined {
    return this._nameDriver;
  }
  set nameDriver(value: string | undefined) {
    this._nameDriver = value;
  }
  get roMooc(): string | undefined {
    return this._roMooc;
  }
  set roMooc(value: string | undefined) {
    this._roMooc = value;
  }
  get vehicleNumber(): string | undefined {
    return this._vehicleNumber;
  }
  set vehicleNumber(value: string | undefined) {
    this._vehicleNumber = value;
  }
  get weightRegistration(): number | undefined {
    return this._weightRegistration;
  }
  set weightRegistration(value: number | undefined) {
    this._weightRegistration = value;
  }
  get weightAllow(): number | undefined {
    return this._weightAllow;
  }
  set weightAllow(value: number | undefined) {
    this._weightAllow = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get quantity(): number | undefined {
    return this._quantity;
  }
  set quantity(value: number | undefined) {
    this._quantity = value;
  }
  get idTransportationUnit(): number | undefined {
    return this._idTransportationUnit;
  }
  set idTransportationUnit(value: number | undefined) {
    this._idTransportationUnit = value;
  }
  get class1(): number | undefined {
    return this._class1;
  }
  set class1(value: number | undefined) {
    this._class1 = value;
  }
  get class2(): number | undefined {
    return this._class2;
  }
  set class2(value: number | undefined) {
    this._class2 = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get nameTransportationUnit(): string | undefined {
    return this._nameTransportationUnit;
  }
  set nameTransportationUnit(value: string | undefined) {
    this._nameTransportationUnit = value;
  }
  get customer(): string | undefined {
    return this._customer;
  }
  set customer(value: string | undefined) {
    this._customer = value;
  }
  get nameCustomer(): string | undefined {
    return this._nameCustomer;
  }
  set nameCustomer(value: string | undefined) {
    this._nameCustomer = value;
  }
  get typeCustomer(): string | undefined {
    return this._typeCustomer;
  }
  set typeCustomer(value: string | undefined) {
    this._typeCustomer = value;
  }
  get nameTypeCustomer(): string | undefined {
    return this._nameTypeCustomer;
  }
  set nameTypeCustomer(value: string | undefined) {
    this._nameTypeCustomer = value;
  }
  get wareHouse(): string | undefined {
    return this._wareHouse;
  }
  set wareHouse(value: string | undefined) {
    this._wareHouse = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProdcut(): string | undefined {
    return this._nameTypeProdcut;
  }
  set nameTypeProdcut(value: string | undefined) {
    this._nameTypeProdcut = value;
  }
  get quantityActual(): number | undefined {
    return this._quantityActual;
  }
  set quantityActual(value: number | undefined) {
    this._quantityActual = value;
  }
  get weightEstimate(): number | undefined {
    return this._weightEstimate;
  }
  set weightEstimate(value: number | undefined) {
    this._weightEstimate = value;
  }
  get weightActual(): number | undefined {
    return this._weightActual;
  }
  set weightActual(value: number | undefined) {
    this._weightActual = value;
  }
  get timecreated(): string | undefined {
    return this._timecreated;
  }
  set timecreated(value: string | undefined) {
    this._timecreated = value;
  }
  get timelastest(): string | undefined {
    return this._timelastest;
  }
  set timelastest(value: string | undefined) {
    this._timelastest = value;
  }
  get status(): number | undefined {
    return this._status;
  }
  set status(value: number | undefined) {
    this._status = value;
  }
  get codeTransport(): string | undefined {
    return this._codeTransport;
  }
  set codeTransport(value: string | undefined) {
    this._codeTransport = value;
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
      codeOrder: this.codeOrder,
      identityDriver: this.identityDriver,
      nameDriver: this.nameDriver,
      roMooc: this.roMooc,
      vehicleNumber: this.vehicleNumber,
      weightRegistration: this.weightRegistration,
      weightAllow: this.weightAllow,
      codeTypePacket: this.codeTypePacket,
      quantity: this.quantity,
      idTransportationUnit: this.idTransportationUnit,
      class1: this.class1,
      class2: this.class2,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      nameTypePacket: this.nameTypePacket,
      nameTransportationUnit: this.nameTransportationUnit,
      customer: this.customer,
      nameCustomer: this.nameCustomer,
      typeCustomer: this.typeCustomer,
      nameTypeCustomer: this.nameTypeCustomer,
      wareHouse: this.wareHouse,
      idTypeProduct: this.idTypeProduct,
      nameTypeProdcut: this.nameTypeProdcut,
      quantityActual: this.quantityActual,
      weightEstimate: this.weightEstimate,
      weightActual: this.weightActual,
      timecreated: this.timecreated,
      timelastest: this.timelastest,
      status: this.status,
      codeTransport: this.codeTransport
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
      codeOrder: this.codeOrder,
      identityDriver: this.identityDriver,
      nameDriver: this.nameDriver,
      roMooc: this.roMooc,
      vehicleNumber: this.vehicleNumber,
      weightRegistration: this.weightRegistration,
      weightAllow: this.weightAllow,
      codeTypePacket: this.codeTypePacket,
      quantity: this.quantity,
      idTransportationUnit: this.idTransportationUnit,
      class1: this.class1,
      class2: this.class2,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      nameTypePacket: this.nameTypePacket,
      nameTransportationUnit: this.nameTransportationUnit,
      customer: this.customer,
      nameCustomer: this.nameCustomer,
      typeCustomer: this.typeCustomer,
      nameTypeCustomer: this.nameTypeCustomer,
      wareHouse: this.wareHouse,
      idTypeProduct: this.idTypeProduct,
      nameTypeProdcut: this.nameTypeProdcut,
      quantityActual: this.quantityActual,
      weightEstimate: this.weightEstimate,
      weightActual: this.weightActual,
      timecreated: this.timecreated,
      timelastest: this.timelastest,
      status: this.status,
      codeTransport: this.codeTransport
    };
  }
}
export module OrderInfo {
  /**
   * Standard JavaScript object representation for OrderInfo
   */
  export interface AsObject {
    codeOrder?: string;
    identityDriver?: string;
    nameDriver?: string;
    roMooc?: string;
    vehicleNumber?: string;
    weightRegistration?: number;
    weightAllow?: number;
    codeTypePacket?: string;
    quantity?: number;
    idTransportationUnit?: number;
    class1?: number;
    class2?: number;
    codeProduct?: string;
    nameProduct?: string;
    nameTypePacket?: string;
    nameTransportationUnit?: string;
    customer?: string;
    nameCustomer?: string;
    typeCustomer?: string;
    nameTypeCustomer?: string;
    wareHouse?: string;
    idTypeProduct?: number;
    nameTypeProdcut?: string;
    quantityActual?: number;
    weightEstimate?: number;
    weightActual?: number;
    timecreated?: string;
    timelastest?: string;
    status?: number;
    codeTransport?: string;
  }

  /**
   * Protobuf JSON representation for OrderInfo
   */
  export interface AsProtobufJSON {
    codeOrder?: string;
    identityDriver?: string;
    nameDriver?: string;
    roMooc?: string;
    vehicleNumber?: string;
    weightRegistration?: number;
    weightAllow?: number;
    codeTypePacket?: string;
    quantity?: number;
    idTransportationUnit?: number;
    class1?: number;
    class2?: number;
    codeProduct?: string;
    nameProduct?: string;
    nameTypePacket?: string;
    nameTransportationUnit?: string;
    customer?: string;
    nameCustomer?: string;
    typeCustomer?: string;
    nameTypeCustomer?: string;
    wareHouse?: string;
    idTypeProduct?: number;
    nameTypeProdcut?: string;
    quantityActual?: number;
    weightEstimate?: number;
    weightActual?: number;
    timecreated?: string;
    timelastest?: string;
    status?: number;
    codeTransport?: string;
  }
}

/**
 * Message implementation for client.DepartmentInfo
 */
export class DepartmentInfo implements GrpcMessage {
  static id = 'client.DepartmentInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DepartmentInfo();
    DepartmentInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DepartmentInfo) {
    _instance.idDepartment = _instance.idDepartment || 0;
    _instance.nameDepartment = _instance.nameDepartment || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DepartmentInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idDepartment = _reader.readInt32();
          break;
        case 2:
          _instance.nameDepartment = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DepartmentInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DepartmentInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idDepartment) {
      _writer.writeInt32(1, _instance.idDepartment);
    }
    if (_instance.nameDepartment) {
      _writer.writeString(2, _instance.nameDepartment);
    }
  }

  private _idDepartment?: number;
  private _nameDepartment?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DepartmentInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<DepartmentInfo.AsObject>) {
    _value = _value || {};
    this.idDepartment = _value.idDepartment;
    this.nameDepartment = _value.nameDepartment;
    DepartmentInfo.refineValues(this);
  }
  get idDepartment(): number | undefined {
    return this._idDepartment;
  }
  set idDepartment(value: number | undefined) {
    this._idDepartment = value;
  }
  get nameDepartment(): string | undefined {
    return this._nameDepartment;
  }
  set nameDepartment(value: string | undefined) {
    this._nameDepartment = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DepartmentInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DepartmentInfo.AsObject {
    return {
      idDepartment: this.idDepartment,
      nameDepartment: this.nameDepartment
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
  ): DepartmentInfo.AsProtobufJSON {
    return {
      idDepartment: this.idDepartment,
      nameDepartment: this.nameDepartment
    };
  }
}
export module DepartmentInfo {
  /**
   * Standard JavaScript object representation for DepartmentInfo
   */
  export interface AsObject {
    idDepartment?: number;
    nameDepartment?: string;
  }

  /**
   * Protobuf JSON representation for DepartmentInfo
   */
  export interface AsProtobufJSON {
    idDepartment?: number;
    nameDepartment?: string;
  }
}

/**
 * Message implementation for client.DepartmentResponse
 */
export class DepartmentResponse implements GrpcMessage {
  static id = 'client.DepartmentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DepartmentResponse();
    DepartmentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DepartmentResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DepartmentResponse,
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
          const messageInitializer2 = new DepartmentInfo();
          _reader.readMessage(
            messageInitializer2,
            DepartmentInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    DepartmentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DepartmentResponse,
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
        DepartmentInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: DepartmentInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DepartmentResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DepartmentResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new DepartmentInfo(m));
    DepartmentResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): DepartmentInfo[] | undefined {
    return this._data;
  }
  set data(value: DepartmentInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DepartmentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DepartmentResponse.AsObject {
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
  ): DepartmentResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module DepartmentResponse {
  /**
   * Standard JavaScript object representation for DepartmentResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: DepartmentInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for DepartmentResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: DepartmentInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ReportObjectInfo
 */
export class ReportObjectInfo implements GrpcMessage {
  static id = 'client.ReportObjectInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportObjectInfo();
    ReportObjectInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportObjectInfo) {
    _instance.nameObject = _instance.nameObject || '';
    _instance.idObject = _instance.idObject || 0;
    _instance.typeObject = _instance.typeObject || 0;
    _instance.nameTypeObject = _instance.nameTypeObject || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportObjectInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.nameObject = _reader.readString();
          break;
        case 2:
          _instance.idObject = _reader.readInt32();
          break;
        case 3:
          _instance.typeObject = _reader.readInt32();
          break;
        case 4:
          _instance.nameTypeObject = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ReportObjectInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportObjectInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.nameObject) {
      _writer.writeString(1, _instance.nameObject);
    }
    if (_instance.idObject) {
      _writer.writeInt32(2, _instance.idObject);
    }
    if (_instance.typeObject) {
      _writer.writeInt32(3, _instance.typeObject);
    }
    if (_instance.nameTypeObject) {
      _writer.writeString(4, _instance.nameTypeObject);
    }
  }

  private _nameObject?: string;
  private _idObject?: number;
  private _typeObject?: number;
  private _nameTypeObject?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportObjectInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportObjectInfo.AsObject>) {
    _value = _value || {};
    this.nameObject = _value.nameObject;
    this.idObject = _value.idObject;
    this.typeObject = _value.typeObject;
    this.nameTypeObject = _value.nameTypeObject;
    ReportObjectInfo.refineValues(this);
  }
  get nameObject(): string | undefined {
    return this._nameObject;
  }
  set nameObject(value: string | undefined) {
    this._nameObject = value;
  }
  get idObject(): number | undefined {
    return this._idObject;
  }
  set idObject(value: number | undefined) {
    this._idObject = value;
  }
  get typeObject(): number | undefined {
    return this._typeObject;
  }
  set typeObject(value: number | undefined) {
    this._typeObject = value;
  }
  get nameTypeObject(): string | undefined {
    return this._nameTypeObject;
  }
  set nameTypeObject(value: string | undefined) {
    this._nameTypeObject = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportObjectInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportObjectInfo.AsObject {
    return {
      nameObject: this.nameObject,
      idObject: this.idObject,
      typeObject: this.typeObject,
      nameTypeObject: this.nameTypeObject
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
  ): ReportObjectInfo.AsProtobufJSON {
    return {
      nameObject: this.nameObject,
      idObject: this.idObject,
      typeObject: this.typeObject,
      nameTypeObject: this.nameTypeObject
    };
  }
}
export module ReportObjectInfo {
  /**
   * Standard JavaScript object representation for ReportObjectInfo
   */
  export interface AsObject {
    nameObject?: string;
    idObject?: number;
    typeObject?: number;
    nameTypeObject?: string;
  }

  /**
   * Protobuf JSON representation for ReportObjectInfo
   */
  export interface AsProtobufJSON {
    nameObject?: string;
    idObject?: number;
    typeObject?: number;
    nameTypeObject?: string;
  }
}

/**
 * Message implementation for client.ReportObjectResponse
 */
export class ReportObjectResponse implements GrpcMessage {
  static id = 'client.ReportObjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportObjectResponse();
    ReportObjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportObjectResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportObjectResponse,
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
          const messageInitializer2 = new ReportObjectInfo();
          _reader.readMessage(
            messageInitializer2,
            ReportObjectInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ReportObjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportObjectResponse,
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
        ReportObjectInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ReportObjectInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportObjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportObjectResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ReportObjectInfo(m));
    ReportObjectResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ReportObjectInfo[] | undefined {
    return this._data;
  }
  set data(value: ReportObjectInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportObjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportObjectResponse.AsObject {
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
  ): ReportObjectResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ReportObjectResponse {
  /**
   * Standard JavaScript object representation for ReportObjectResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ReportObjectInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ReportObjectResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ReportObjectInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ConfirmProduction1000
 */
export class ConfirmProduction1000 implements GrpcMessage {
  static id = 'client.ConfirmProduction1000';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ConfirmProduction1000();
    ConfirmProduction1000.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ConfirmProduction1000) {
    _instance.idShiftDetail = _instance.idShiftDetail || '0';
    _instance.codeEquipment = _instance.codeEquipment || '';
    _instance.quantity = _instance.quantity || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ConfirmProduction1000,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idShiftDetail = _reader.readInt64String();
          break;
        case 2:
          _instance.codeEquipment = _reader.readString();
          break;
        case 3:
          _instance.quantity = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ConfirmProduction1000.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ConfirmProduction1000,
    _writer: BinaryWriter
  ) {
    if (_instance.idShiftDetail) {
      _writer.writeInt64String(1, _instance.idShiftDetail);
    }
    if (_instance.codeEquipment) {
      _writer.writeString(2, _instance.codeEquipment);
    }
    if (_instance.quantity) {
      _writer.writeInt32(3, _instance.quantity);
    }
  }

  private _idShiftDetail?: string;
  private _codeEquipment?: string;
  private _quantity?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ConfirmProduction1000 to deeply clone from
   */
  constructor(_value?: RecursivePartial<ConfirmProduction1000.AsObject>) {
    _value = _value || {};
    this.idShiftDetail = _value.idShiftDetail;
    this.codeEquipment = _value.codeEquipment;
    this.quantity = _value.quantity;
    ConfirmProduction1000.refineValues(this);
  }
  get idShiftDetail(): string | undefined {
    return this._idShiftDetail;
  }
  set idShiftDetail(value: string | undefined) {
    this._idShiftDetail = value;
  }
  get codeEquipment(): string | undefined {
    return this._codeEquipment;
  }
  set codeEquipment(value: string | undefined) {
    this._codeEquipment = value;
  }
  get quantity(): number | undefined {
    return this._quantity;
  }
  set quantity(value: number | undefined) {
    this._quantity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ConfirmProduction1000.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ConfirmProduction1000.AsObject {
    return {
      idShiftDetail: this.idShiftDetail,
      codeEquipment: this.codeEquipment,
      quantity: this.quantity
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
  ): ConfirmProduction1000.AsProtobufJSON {
    return {
      idShiftDetail: this.idShiftDetail,
      codeEquipment: this.codeEquipment,
      quantity: this.quantity
    };
  }
}
export module ConfirmProduction1000 {
  /**
   * Standard JavaScript object representation for ConfirmProduction1000
   */
  export interface AsObject {
    idShiftDetail?: string;
    codeEquipment?: string;
    quantity?: number;
  }

  /**
   * Protobuf JSON representation for ConfirmProduction1000
   */
  export interface AsProtobufJSON {
    idShiftDetail?: string;
    codeEquipment?: string;
    quantity?: number;
  }
}

/**
 * Message implementation for client.ConfirmProduction1000Info
 */
export class ConfirmProduction1000Info implements GrpcMessage {
  static id = 'client.ConfirmProduction1000Info';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ConfirmProduction1000Info();
    ConfirmProduction1000Info.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ConfirmProduction1000Info) {
    _instance.user = _instance.user || 0;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ConfirmProduction1000Info,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.user = _reader.readInt32();
          break;
        case 2:
          const messageInitializer2 = new ConfirmProduction1000();
          _reader.readMessage(
            messageInitializer2,
            ConfirmProduction1000.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ConfirmProduction1000Info.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ConfirmProduction1000Info,
    _writer: BinaryWriter
  ) {
    if (_instance.user) {
      _writer.writeInt32(1, _instance.user);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        ConfirmProduction1000.serializeBinaryToWriter
      );
    }
  }

  private _user?: number;
  private _data?: ConfirmProduction1000[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ConfirmProduction1000Info to deeply clone from
   */
  constructor(_value?: RecursivePartial<ConfirmProduction1000Info.AsObject>) {
    _value = _value || {};
    this.user = _value.user;
    this.data = (_value.data || []).map(m => new ConfirmProduction1000(m));
    ConfirmProduction1000Info.refineValues(this);
  }
  get user(): number | undefined {
    return this._user;
  }
  set user(value: number | undefined) {
    this._user = value;
  }
  get data(): ConfirmProduction1000[] | undefined {
    return this._data;
  }
  set data(value: ConfirmProduction1000[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ConfirmProduction1000Info.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ConfirmProduction1000Info.AsObject {
    return {
      user: this.user,
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
  ): ConfirmProduction1000Info.AsProtobufJSON {
    return {
      user: this.user,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ConfirmProduction1000Info {
  /**
   * Standard JavaScript object representation for ConfirmProduction1000Info
   */
  export interface AsObject {
    user?: number;
    data?: ConfirmProduction1000.AsObject[];
  }

  /**
   * Protobuf JSON representation for ConfirmProduction1000Info
   */
  export interface AsProtobufJSON {
    user?: number;
    data?: ConfirmProduction1000.AsProtobufJSON[] | null;
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
    _instance.order = _instance.order || undefined;
    _instance.response = _instance.response || undefined;
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
          _instance.order = new OrderInfo();
          _reader.readMessage(
            _instance.order,
            OrderInfo.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
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
    if (_instance.order) {
      _writer.writeMessage(
        1,
        _instance.order as any,
        OrderInfo.serializeBinaryToWriter
      );
    }
    if (_instance.response) {
      _writer.writeMessage(
        2,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
  }

  private _order?: OrderInfo;
  private _response?: Response;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrderResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrderResponse.AsObject>) {
    _value = _value || {};
    this.order = _value.order ? new OrderInfo(_value.order) : undefined;
    this.response = _value.response ? new Response(_value.response) : undefined;
    OrderResponse.refineValues(this);
  }
  get order(): OrderInfo | undefined {
    return this._order;
  }
  set order(value: OrderInfo | undefined) {
    this._order = value;
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
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
      order: this.order ? this.order.toObject() : undefined,
      response: this.response ? this.response.toObject() : undefined
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
      order: this.order ? this.order.toProtobufJSON(options) : null,
      response: this.response ? this.response.toProtobufJSON(options) : null
    };
  }
}
export module OrderResponse {
  /**
   * Standard JavaScript object representation for OrderResponse
   */
  export interface AsObject {
    order?: OrderInfo.AsObject;
    response?: Response.AsObject;
  }

  /**
   * Protobuf JSON representation for OrderResponse
   */
  export interface AsProtobufJSON {
    order?: OrderInfo.AsProtobufJSON | null;
    response?: Response.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for client.TransportInfo
 */
export class TransportInfo implements GrpcMessage {
  static id = 'client.TransportInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransportInfo();
    TransportInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransportInfo) {
    _instance.createddate = _instance.createddate || '';
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.codeWork = _instance.codeWork || '';
    _instance.codeWareHouseload = _instance.codeWareHouseload || '';
    _instance.codeWareHouseUnload = _instance.codeWareHouseUnload || '';
    _instance.codeEquipmentLoad = _instance.codeEquipmentLoad || '';
    _instance.codeEquipmentUnLoad = _instance.codeEquipmentUnLoad || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.nameWork = _instance.nameWork || '';
    _instance.nameWareHouseLoad = _instance.nameWareHouseLoad || '';
    _instance.nameWareHouseUnLoad = _instance.nameWareHouseUnLoad || '';
    _instance.nameEquipmentLoad = _instance.nameEquipmentLoad || '';
    _instance.nameEquipmentUnLoad = _instance.nameEquipmentUnLoad || '';
    _instance.quantity = _instance.quantity || 0;
    _instance.weight = _instance.weight || 0;
    _instance.distance = _instance.distance || 0;
    _instance.createdPerson = _instance.createdPerson || '';
    _instance.nameCreatedPerson = _instance.nameCreatedPerson || '';
    _instance.countTrip = _instance.countTrip || 0;
    _instance.dvBoc = _instance.dvBoc || '';
    _instance.dvDo = _instance.dvDo || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransportInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.createddate = _reader.readString();
          break;
        case 2:
          _instance.codeProduct = _reader.readString();
          break;
        case 3:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 4:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 5:
          _instance.codeWork = _reader.readString();
          break;
        case 6:
          _instance.codeWareHouseload = _reader.readString();
          break;
        case 7:
          _instance.codeWareHouseUnload = _reader.readString();
          break;
        case 8:
          _instance.codeEquipmentLoad = _reader.readString();
          break;
        case 9:
          _instance.codeEquipmentUnLoad = _reader.readString();
          break;
        case 10:
          _instance.nameProduct = _reader.readString();
          break;
        case 11:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 12:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 13:
          _instance.nameWork = _reader.readString();
          break;
        case 14:
          _instance.nameWareHouseLoad = _reader.readString();
          break;
        case 15:
          _instance.nameWareHouseUnLoad = _reader.readString();
          break;
        case 16:
          _instance.nameEquipmentLoad = _reader.readString();
          break;
        case 17:
          _instance.nameEquipmentUnLoad = _reader.readString();
          break;
        case 18:
          _instance.quantity = _reader.readInt32();
          break;
        case 19:
          _instance.weight = _reader.readInt32();
          break;
        case 20:
          _instance.distance = _reader.readInt32();
          break;
        case 21:
          _instance.createdPerson = _reader.readString();
          break;
        case 22:
          _instance.nameCreatedPerson = _reader.readString();
          break;
        case 23:
          _instance.countTrip = _reader.readInt32();
          break;
        case 25:
          _instance.dvBoc = _reader.readString();
          break;
        case 26:
          _instance.dvDo = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TransportInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransportInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.createddate) {
      _writer.writeString(1, _instance.createddate);
    }
    if (_instance.codeProduct) {
      _writer.writeString(2, _instance.codeProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(3, _instance.idTypeProduct);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(4, _instance.codeTypePacket);
    }
    if (_instance.codeWork) {
      _writer.writeString(5, _instance.codeWork);
    }
    if (_instance.codeWareHouseload) {
      _writer.writeString(6, _instance.codeWareHouseload);
    }
    if (_instance.codeWareHouseUnload) {
      _writer.writeString(7, _instance.codeWareHouseUnload);
    }
    if (_instance.codeEquipmentLoad) {
      _writer.writeString(8, _instance.codeEquipmentLoad);
    }
    if (_instance.codeEquipmentUnLoad) {
      _writer.writeString(9, _instance.codeEquipmentUnLoad);
    }
    if (_instance.nameProduct) {
      _writer.writeString(10, _instance.nameProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(11, _instance.nameTypeProduct);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(12, _instance.nameTypePacket);
    }
    if (_instance.nameWork) {
      _writer.writeString(13, _instance.nameWork);
    }
    if (_instance.nameWareHouseLoad) {
      _writer.writeString(14, _instance.nameWareHouseLoad);
    }
    if (_instance.nameWareHouseUnLoad) {
      _writer.writeString(15, _instance.nameWareHouseUnLoad);
    }
    if (_instance.nameEquipmentLoad) {
      _writer.writeString(16, _instance.nameEquipmentLoad);
    }
    if (_instance.nameEquipmentUnLoad) {
      _writer.writeString(17, _instance.nameEquipmentUnLoad);
    }
    if (_instance.quantity) {
      _writer.writeInt32(18, _instance.quantity);
    }
    if (_instance.weight) {
      _writer.writeInt32(19, _instance.weight);
    }
    if (_instance.distance) {
      _writer.writeInt32(20, _instance.distance);
    }
    if (_instance.createdPerson) {
      _writer.writeString(21, _instance.createdPerson);
    }
    if (_instance.nameCreatedPerson) {
      _writer.writeString(22, _instance.nameCreatedPerson);
    }
    if (_instance.countTrip) {
      _writer.writeInt32(23, _instance.countTrip);
    }
    if (_instance.dvBoc) {
      _writer.writeString(25, _instance.dvBoc);
    }
    if (_instance.dvDo) {
      _writer.writeString(26, _instance.dvDo);
    }
  }

  private _createddate?: string;
  private _codeProduct?: string;
  private _idTypeProduct?: number;
  private _codeTypePacket?: string;
  private _codeWork?: string;
  private _codeWareHouseload?: string;
  private _codeWareHouseUnload?: string;
  private _codeEquipmentLoad?: string;
  private _codeEquipmentUnLoad?: string;
  private _nameProduct?: string;
  private _nameTypeProduct?: string;
  private _nameTypePacket?: string;
  private _nameWork?: string;
  private _nameWareHouseLoad?: string;
  private _nameWareHouseUnLoad?: string;
  private _nameEquipmentLoad?: string;
  private _nameEquipmentUnLoad?: string;
  private _quantity?: number;
  private _weight?: number;
  private _distance?: number;
  private _createdPerson?: string;
  private _nameCreatedPerson?: string;
  private _countTrip?: number;
  private _dvBoc?: string;
  private _dvDo?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransportInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransportInfo.AsObject>) {
    _value = _value || {};
    this.createddate = _value.createddate;
    this.codeProduct = _value.codeProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.codeWork = _value.codeWork;
    this.codeWareHouseload = _value.codeWareHouseload;
    this.codeWareHouseUnload = _value.codeWareHouseUnload;
    this.codeEquipmentLoad = _value.codeEquipmentLoad;
    this.codeEquipmentUnLoad = _value.codeEquipmentUnLoad;
    this.nameProduct = _value.nameProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.nameTypePacket = _value.nameTypePacket;
    this.nameWork = _value.nameWork;
    this.nameWareHouseLoad = _value.nameWareHouseLoad;
    this.nameWareHouseUnLoad = _value.nameWareHouseUnLoad;
    this.nameEquipmentLoad = _value.nameEquipmentLoad;
    this.nameEquipmentUnLoad = _value.nameEquipmentUnLoad;
    this.quantity = _value.quantity;
    this.weight = _value.weight;
    this.distance = _value.distance;
    this.createdPerson = _value.createdPerson;
    this.nameCreatedPerson = _value.nameCreatedPerson;
    this.countTrip = _value.countTrip;
    this.dvBoc = _value.dvBoc;
    this.dvDo = _value.dvDo;
    TransportInfo.refineValues(this);
  }
  get createddate(): string | undefined {
    return this._createddate;
  }
  set createddate(value: string | undefined) {
    this._createddate = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get codeWork(): string | undefined {
    return this._codeWork;
  }
  set codeWork(value: string | undefined) {
    this._codeWork = value;
  }
  get codeWareHouseload(): string | undefined {
    return this._codeWareHouseload;
  }
  set codeWareHouseload(value: string | undefined) {
    this._codeWareHouseload = value;
  }
  get codeWareHouseUnload(): string | undefined {
    return this._codeWareHouseUnload;
  }
  set codeWareHouseUnload(value: string | undefined) {
    this._codeWareHouseUnload = value;
  }
  get codeEquipmentLoad(): string | undefined {
    return this._codeEquipmentLoad;
  }
  set codeEquipmentLoad(value: string | undefined) {
    this._codeEquipmentLoad = value;
  }
  get codeEquipmentUnLoad(): string | undefined {
    return this._codeEquipmentUnLoad;
  }
  set codeEquipmentUnLoad(value: string | undefined) {
    this._codeEquipmentUnLoad = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get nameWork(): string | undefined {
    return this._nameWork;
  }
  set nameWork(value: string | undefined) {
    this._nameWork = value;
  }
  get nameWareHouseLoad(): string | undefined {
    return this._nameWareHouseLoad;
  }
  set nameWareHouseLoad(value: string | undefined) {
    this._nameWareHouseLoad = value;
  }
  get nameWareHouseUnLoad(): string | undefined {
    return this._nameWareHouseUnLoad;
  }
  set nameWareHouseUnLoad(value: string | undefined) {
    this._nameWareHouseUnLoad = value;
  }
  get nameEquipmentLoad(): string | undefined {
    return this._nameEquipmentLoad;
  }
  set nameEquipmentLoad(value: string | undefined) {
    this._nameEquipmentLoad = value;
  }
  get nameEquipmentUnLoad(): string | undefined {
    return this._nameEquipmentUnLoad;
  }
  set nameEquipmentUnLoad(value: string | undefined) {
    this._nameEquipmentUnLoad = value;
  }
  get quantity(): number | undefined {
    return this._quantity;
  }
  set quantity(value: number | undefined) {
    this._quantity = value;
  }
  get weight(): number | undefined {
    return this._weight;
  }
  set weight(value: number | undefined) {
    this._weight = value;
  }
  get distance(): number | undefined {
    return this._distance;
  }
  set distance(value: number | undefined) {
    this._distance = value;
  }
  get createdPerson(): string | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: string | undefined) {
    this._createdPerson = value;
  }
  get nameCreatedPerson(): string | undefined {
    return this._nameCreatedPerson;
  }
  set nameCreatedPerson(value: string | undefined) {
    this._nameCreatedPerson = value;
  }
  get countTrip(): number | undefined {
    return this._countTrip;
  }
  set countTrip(value: number | undefined) {
    this._countTrip = value;
  }
  get dvBoc(): string | undefined {
    return this._dvBoc;
  }
  set dvBoc(value: string | undefined) {
    this._dvBoc = value;
  }
  get dvDo(): string | undefined {
    return this._dvDo;
  }
  set dvDo(value: string | undefined) {
    this._dvDo = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransportInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransportInfo.AsObject {
    return {
      createddate: this.createddate,
      codeProduct: this.codeProduct,
      idTypeProduct: this.idTypeProduct,
      codeTypePacket: this.codeTypePacket,
      codeWork: this.codeWork,
      codeWareHouseload: this.codeWareHouseload,
      codeWareHouseUnload: this.codeWareHouseUnload,
      codeEquipmentLoad: this.codeEquipmentLoad,
      codeEquipmentUnLoad: this.codeEquipmentUnLoad,
      nameProduct: this.nameProduct,
      nameTypeProduct: this.nameTypeProduct,
      nameTypePacket: this.nameTypePacket,
      nameWork: this.nameWork,
      nameWareHouseLoad: this.nameWareHouseLoad,
      nameWareHouseUnLoad: this.nameWareHouseUnLoad,
      nameEquipmentLoad: this.nameEquipmentLoad,
      nameEquipmentUnLoad: this.nameEquipmentUnLoad,
      quantity: this.quantity,
      weight: this.weight,
      distance: this.distance,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      countTrip: this.countTrip,
      dvBoc: this.dvBoc,
      dvDo: this.dvDo
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
  ): TransportInfo.AsProtobufJSON {
    return {
      createddate: this.createddate,
      codeProduct: this.codeProduct,
      idTypeProduct: this.idTypeProduct,
      codeTypePacket: this.codeTypePacket,
      codeWork: this.codeWork,
      codeWareHouseload: this.codeWareHouseload,
      codeWareHouseUnload: this.codeWareHouseUnload,
      codeEquipmentLoad: this.codeEquipmentLoad,
      codeEquipmentUnLoad: this.codeEquipmentUnLoad,
      nameProduct: this.nameProduct,
      nameTypeProduct: this.nameTypeProduct,
      nameTypePacket: this.nameTypePacket,
      nameWork: this.nameWork,
      nameWareHouseLoad: this.nameWareHouseLoad,
      nameWareHouseUnLoad: this.nameWareHouseUnLoad,
      nameEquipmentLoad: this.nameEquipmentLoad,
      nameEquipmentUnLoad: this.nameEquipmentUnLoad,
      quantity: this.quantity,
      weight: this.weight,
      distance: this.distance,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      countTrip: this.countTrip,
      dvBoc: this.dvBoc,
      dvDo: this.dvDo
    };
  }
}
export module TransportInfo {
  /**
   * Standard JavaScript object representation for TransportInfo
   */
  export interface AsObject {
    createddate?: string;
    codeProduct?: string;
    idTypeProduct?: number;
    codeTypePacket?: string;
    codeWork?: string;
    codeWareHouseload?: string;
    codeWareHouseUnload?: string;
    codeEquipmentLoad?: string;
    codeEquipmentUnLoad?: string;
    nameProduct?: string;
    nameTypeProduct?: string;
    nameTypePacket?: string;
    nameWork?: string;
    nameWareHouseLoad?: string;
    nameWareHouseUnLoad?: string;
    nameEquipmentLoad?: string;
    nameEquipmentUnLoad?: string;
    quantity?: number;
    weight?: number;
    distance?: number;
    createdPerson?: string;
    nameCreatedPerson?: string;
    countTrip?: number;
    dvBoc?: string;
    dvDo?: string;
  }

  /**
   * Protobuf JSON representation for TransportInfo
   */
  export interface AsProtobufJSON {
    createddate?: string;
    codeProduct?: string;
    idTypeProduct?: number;
    codeTypePacket?: string;
    codeWork?: string;
    codeWareHouseload?: string;
    codeWareHouseUnload?: string;
    codeEquipmentLoad?: string;
    codeEquipmentUnLoad?: string;
    nameProduct?: string;
    nameTypeProduct?: string;
    nameTypePacket?: string;
    nameWork?: string;
    nameWareHouseLoad?: string;
    nameWareHouseUnLoad?: string;
    nameEquipmentLoad?: string;
    nameEquipmentUnLoad?: string;
    quantity?: number;
    weight?: number;
    distance?: number;
    createdPerson?: string;
    nameCreatedPerson?: string;
    countTrip?: number;
    dvBoc?: string;
    dvDo?: string;
  }
}

/**
 * Message implementation for client.TransportResponse
 */
export class TransportResponse implements GrpcMessage {
  static id = 'client.TransportResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransportResponse();
    TransportResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransportResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransportResponse,
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
          const messageInitializer2 = new TransportInfo();
          _reader.readMessage(
            messageInitializer2,
            TransportInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    TransportResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransportResponse,
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
        TransportInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: TransportInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransportResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransportResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new TransportInfo(m));
    TransportResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): TransportInfo[] | undefined {
    return this._data;
  }
  set data(value: TransportInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransportResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransportResponse.AsObject {
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
  ): TransportResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module TransportResponse {
  /**
   * Standard JavaScript object representation for TransportResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: TransportInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for TransportResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: TransportInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ReportInventoryInfo
 */
export class ReportInventoryInfo implements GrpcMessage {
  static id = 'client.ReportInventoryInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportInventoryInfo();
    ReportInventoryInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportInventoryInfo) {
    _instance.codeWareHouse = _instance.codeWareHouse || '';
    _instance.nameWareHouse = _instance.nameWareHouse || '';
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.quantity = _instance.quantity || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportInventoryInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.codeWareHouse = _reader.readString();
          break;
        case 2:
          _instance.nameWareHouse = _reader.readString();
          break;
        case 3:
          _instance.codeProduct = _reader.readString();
          break;
        case 4:
          _instance.nameProduct = _reader.readString();
          break;
        case 5:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 6:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 7:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 8:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 9:
          _instance.codeParcel = _reader.readString();
          break;
        case 10:
          _instance.quantity = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    ReportInventoryInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportInventoryInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.codeWareHouse) {
      _writer.writeString(1, _instance.codeWareHouse);
    }
    if (_instance.nameWareHouse) {
      _writer.writeString(2, _instance.nameWareHouse);
    }
    if (_instance.codeProduct) {
      _writer.writeString(3, _instance.codeProduct);
    }
    if (_instance.nameProduct) {
      _writer.writeString(4, _instance.nameProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(5, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(6, _instance.nameTypeProduct);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(7, _instance.codeTypePacket);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(8, _instance.nameTypePacket);
    }
    if (_instance.codeParcel) {
      _writer.writeString(9, _instance.codeParcel);
    }
    if (_instance.quantity) {
      _writer.writeInt64String(10, _instance.quantity);
    }
  }

  private _codeWareHouse?: string;
  private _nameWareHouse?: string;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _codeTypePacket?: string;
  private _nameTypePacket?: string;
  private _codeParcel?: string;
  private _quantity?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportInventoryInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportInventoryInfo.AsObject>) {
    _value = _value || {};
    this.codeWareHouse = _value.codeWareHouse;
    this.nameWareHouse = _value.nameWareHouse;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.nameTypePacket = _value.nameTypePacket;
    this.codeParcel = _value.codeParcel;
    this.quantity = _value.quantity;
    ReportInventoryInfo.refineValues(this);
  }
  get codeWareHouse(): string | undefined {
    return this._codeWareHouse;
  }
  set codeWareHouse(value: string | undefined) {
    this._codeWareHouse = value;
  }
  get nameWareHouse(): string | undefined {
    return this._nameWareHouse;
  }
  set nameWareHouse(value: string | undefined) {
    this._nameWareHouse = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportInventoryInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportInventoryInfo.AsObject {
    return {
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      quantity: this.quantity
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
  ): ReportInventoryInfo.AsProtobufJSON {
    return {
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      quantity: this.quantity
    };
  }
}
export module ReportInventoryInfo {
  /**
   * Standard JavaScript object representation for ReportInventoryInfo
   */
  export interface AsObject {
    codeWareHouse?: string;
    nameWareHouse?: string;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    quantity?: string;
  }

  /**
   * Protobuf JSON representation for ReportInventoryInfo
   */
  export interface AsProtobufJSON {
    codeWareHouse?: string;
    nameWareHouse?: string;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    quantity?: string;
  }
}

/**
 * Message implementation for client.ReportInventoryResponse
 */
export class ReportInventoryResponse implements GrpcMessage {
  static id = 'client.ReportInventoryResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportInventoryResponse();
    ReportInventoryResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportInventoryResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportInventoryResponse,
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
          const messageInitializer2 = new ReportInventoryInfo();
          _reader.readMessage(
            messageInitializer2,
            ReportInventoryInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ReportInventoryResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportInventoryResponse,
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
        ReportInventoryInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ReportInventoryInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportInventoryResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportInventoryResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ReportInventoryInfo(m));
    ReportInventoryResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ReportInventoryInfo[] | undefined {
    return this._data;
  }
  set data(value: ReportInventoryInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportInventoryResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportInventoryResponse.AsObject {
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
  ): ReportInventoryResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ReportInventoryResponse {
  /**
   * Standard JavaScript object representation for ReportInventoryResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ReportInventoryInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for ReportInventoryResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ReportInventoryInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.ConfirmProductionDetail
 */
export class ConfirmProductionDetail implements GrpcMessage {
  static id = 'client.ConfirmProductionDetail';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ConfirmProductionDetail();
    ConfirmProductionDetail.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ConfirmProductionDetail) {
    _instance.idShiftDetail = _instance.idShiftDetail || 0;
    _instance.optionName = _instance.optionName || '';
    _instance.codeTypeBill = _instance.codeTypeBill || '';
    _instance.nameTypeBill = _instance.nameTypeBill || '';
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.codeWareHouse = _instance.codeWareHouse || '';
    _instance.nameWareHouse = _instance.nameWareHouse || '';
    _instance.idShift = _instance.idShift || 0;
    _instance.nameShift = _instance.nameShift || '';
    _instance.codePackingUnit = _instance.codePackingUnit || '';
    _instance.namePackingUnit = _instance.namePackingUnit || '';
    _instance.createdPerson = _instance.createdPerson || 0;
    _instance.nameCreatedPerson = _instance.nameCreatedPerson || '';
    _instance.date = _instance.date || '';
    _instance.codeEquipment = _instance.codeEquipment || '';
    _instance.quantity = _instance.quantity || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ConfirmProductionDetail,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idShiftDetail = _reader.readInt32();
          break;
        case 2:
          _instance.optionName = _reader.readString();
          break;
        case 3:
          _instance.codeTypeBill = _reader.readString();
          break;
        case 4:
          _instance.nameTypeBill = _reader.readString();
          break;
        case 5:
          _instance.codeProduct = _reader.readString();
          break;
        case 6:
          _instance.nameProduct = _reader.readString();
          break;
        case 7:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 8:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 9:
          _instance.codeTypePacket = _reader.readString();
          break;
        case 10:
          _instance.nameTypePacket = _reader.readString();
          break;
        case 11:
          _instance.codeParcel = _reader.readString();
          break;
        case 12:
          _instance.codeWareHouse = _reader.readString();
          break;
        case 13:
          _instance.nameWareHouse = _reader.readString();
          break;
        case 14:
          _instance.idShift = _reader.readInt32();
          break;
        case 15:
          _instance.nameShift = _reader.readString();
          break;
        case 16:
          _instance.codePackingUnit = _reader.readString();
          break;
        case 17:
          _instance.namePackingUnit = _reader.readString();
          break;
        case 18:
          _instance.createdPerson = _reader.readInt32();
          break;
        case 19:
          _instance.nameCreatedPerson = _reader.readString();
          break;
        case 20:
          _instance.date = _reader.readString();
          break;
        case 21:
          _instance.codeEquipment = _reader.readString();
          break;
        case 22:
          _instance.quantity = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ConfirmProductionDetail.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ConfirmProductionDetail,
    _writer: BinaryWriter
  ) {
    if (_instance.idShiftDetail) {
      _writer.writeInt32(1, _instance.idShiftDetail);
    }
    if (_instance.optionName) {
      _writer.writeString(2, _instance.optionName);
    }
    if (_instance.codeTypeBill) {
      _writer.writeString(3, _instance.codeTypeBill);
    }
    if (_instance.nameTypeBill) {
      _writer.writeString(4, _instance.nameTypeBill);
    }
    if (_instance.codeProduct) {
      _writer.writeString(5, _instance.codeProduct);
    }
    if (_instance.nameProduct) {
      _writer.writeString(6, _instance.nameProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(7, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(8, _instance.nameTypeProduct);
    }
    if (_instance.codeTypePacket) {
      _writer.writeString(9, _instance.codeTypePacket);
    }
    if (_instance.nameTypePacket) {
      _writer.writeString(10, _instance.nameTypePacket);
    }
    if (_instance.codeParcel) {
      _writer.writeString(11, _instance.codeParcel);
    }
    if (_instance.codeWareHouse) {
      _writer.writeString(12, _instance.codeWareHouse);
    }
    if (_instance.nameWareHouse) {
      _writer.writeString(13, _instance.nameWareHouse);
    }
    if (_instance.idShift) {
      _writer.writeInt32(14, _instance.idShift);
    }
    if (_instance.nameShift) {
      _writer.writeString(15, _instance.nameShift);
    }
    if (_instance.codePackingUnit) {
      _writer.writeString(16, _instance.codePackingUnit);
    }
    if (_instance.namePackingUnit) {
      _writer.writeString(17, _instance.namePackingUnit);
    }
    if (_instance.createdPerson) {
      _writer.writeInt32(18, _instance.createdPerson);
    }
    if (_instance.nameCreatedPerson) {
      _writer.writeString(19, _instance.nameCreatedPerson);
    }
    if (_instance.date) {
      _writer.writeString(20, _instance.date);
    }
    if (_instance.codeEquipment) {
      _writer.writeString(21, _instance.codeEquipment);
    }
    if (_instance.quantity) {
      _writer.writeInt32(22, _instance.quantity);
    }
  }

  private _idShiftDetail?: number;
  private _optionName?: string;
  private _codeTypeBill?: string;
  private _nameTypeBill?: string;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _codeTypePacket?: string;
  private _nameTypePacket?: string;
  private _codeParcel?: string;
  private _codeWareHouse?: string;
  private _nameWareHouse?: string;
  private _idShift?: number;
  private _nameShift?: string;
  private _codePackingUnit?: string;
  private _namePackingUnit?: string;
  private _createdPerson?: number;
  private _nameCreatedPerson?: string;
  private _date?: string;
  private _codeEquipment?: string;
  private _quantity?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ConfirmProductionDetail to deeply clone from
   */
  constructor(_value?: RecursivePartial<ConfirmProductionDetail.AsObject>) {
    _value = _value || {};
    this.idShiftDetail = _value.idShiftDetail;
    this.optionName = _value.optionName;
    this.codeTypeBill = _value.codeTypeBill;
    this.nameTypeBill = _value.nameTypeBill;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.nameTypePacket = _value.nameTypePacket;
    this.codeParcel = _value.codeParcel;
    this.codeWareHouse = _value.codeWareHouse;
    this.nameWareHouse = _value.nameWareHouse;
    this.idShift = _value.idShift;
    this.nameShift = _value.nameShift;
    this.codePackingUnit = _value.codePackingUnit;
    this.namePackingUnit = _value.namePackingUnit;
    this.createdPerson = _value.createdPerson;
    this.nameCreatedPerson = _value.nameCreatedPerson;
    this.date = _value.date;
    this.codeEquipment = _value.codeEquipment;
    this.quantity = _value.quantity;
    ConfirmProductionDetail.refineValues(this);
  }
  get idShiftDetail(): number | undefined {
    return this._idShiftDetail;
  }
  set idShiftDetail(value: number | undefined) {
    this._idShiftDetail = value;
  }
  get optionName(): string | undefined {
    return this._optionName;
  }
  set optionName(value: string | undefined) {
    this._optionName = value;
  }
  get codeTypeBill(): string | undefined {
    return this._codeTypeBill;
  }
  set codeTypeBill(value: string | undefined) {
    this._codeTypeBill = value;
  }
  get nameTypeBill(): string | undefined {
    return this._nameTypeBill;
  }
  set nameTypeBill(value: string | undefined) {
    this._nameTypeBill = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get codeTypePacket(): string | undefined {
    return this._codeTypePacket;
  }
  set codeTypePacket(value: string | undefined) {
    this._codeTypePacket = value;
  }
  get nameTypePacket(): string | undefined {
    return this._nameTypePacket;
  }
  set nameTypePacket(value: string | undefined) {
    this._nameTypePacket = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get codeWareHouse(): string | undefined {
    return this._codeWareHouse;
  }
  set codeWareHouse(value: string | undefined) {
    this._codeWareHouse = value;
  }
  get nameWareHouse(): string | undefined {
    return this._nameWareHouse;
  }
  set nameWareHouse(value: string | undefined) {
    this._nameWareHouse = value;
  }
  get idShift(): number | undefined {
    return this._idShift;
  }
  set idShift(value: number | undefined) {
    this._idShift = value;
  }
  get nameShift(): string | undefined {
    return this._nameShift;
  }
  set nameShift(value: string | undefined) {
    this._nameShift = value;
  }
  get codePackingUnit(): string | undefined {
    return this._codePackingUnit;
  }
  set codePackingUnit(value: string | undefined) {
    this._codePackingUnit = value;
  }
  get namePackingUnit(): string | undefined {
    return this._namePackingUnit;
  }
  set namePackingUnit(value: string | undefined) {
    this._namePackingUnit = value;
  }
  get createdPerson(): number | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: number | undefined) {
    this._createdPerson = value;
  }
  get nameCreatedPerson(): string | undefined {
    return this._nameCreatedPerson;
  }
  set nameCreatedPerson(value: string | undefined) {
    this._nameCreatedPerson = value;
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get codeEquipment(): string | undefined {
    return this._codeEquipment;
  }
  set codeEquipment(value: string | undefined) {
    this._codeEquipment = value;
  }
  get quantity(): number | undefined {
    return this._quantity;
  }
  set quantity(value: number | undefined) {
    this._quantity = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ConfirmProductionDetail.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ConfirmProductionDetail.AsObject {
    return {
      idShiftDetail: this.idShiftDetail,
      optionName: this.optionName,
      codeTypeBill: this.codeTypeBill,
      nameTypeBill: this.nameTypeBill,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      idShift: this.idShift,
      nameShift: this.nameShift,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      date: this.date,
      codeEquipment: this.codeEquipment,
      quantity: this.quantity
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
  ): ConfirmProductionDetail.AsProtobufJSON {
    return {
      idShiftDetail: this.idShiftDetail,
      optionName: this.optionName,
      codeTypeBill: this.codeTypeBill,
      nameTypeBill: this.nameTypeBill,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      idShift: this.idShift,
      nameShift: this.nameShift,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      createdPerson: this.createdPerson,
      nameCreatedPerson: this.nameCreatedPerson,
      date: this.date,
      codeEquipment: this.codeEquipment,
      quantity: this.quantity
    };
  }
}
export module ConfirmProductionDetail {
  /**
   * Standard JavaScript object representation for ConfirmProductionDetail
   */
  export interface AsObject {
    idShiftDetail?: number;
    optionName?: string;
    codeTypeBill?: string;
    nameTypeBill?: string;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    idShift?: number;
    nameShift?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
    date?: string;
    codeEquipment?: string;
    quantity?: number;
  }

  /**
   * Protobuf JSON representation for ConfirmProductionDetail
   */
  export interface AsProtobufJSON {
    idShiftDetail?: number;
    optionName?: string;
    codeTypeBill?: string;
    nameTypeBill?: string;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    idShift?: number;
    nameShift?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    createdPerson?: number;
    nameCreatedPerson?: string;
    date?: string;
    codeEquipment?: string;
    quantity?: number;
  }
}

/**
 * Message implementation for client.ConfirmProductionResponse
 */
export class ConfirmProductionResponse implements GrpcMessage {
  static id = 'client.ConfirmProductionResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ConfirmProductionResponse();
    ConfirmProductionResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ConfirmProductionResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ConfirmProductionResponse,
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
          const messageInitializer2 = new ConfirmProductionDetail();
          _reader.readMessage(
            messageInitializer2,
            ConfirmProductionDetail.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ConfirmProductionResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ConfirmProductionResponse,
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
        ConfirmProductionDetail.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ConfirmProductionDetail[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ConfirmProductionResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ConfirmProductionResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ConfirmProductionDetail(m));
    ConfirmProductionResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ConfirmProductionDetail[] | undefined {
    return this._data;
  }
  set data(value: ConfirmProductionDetail[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ConfirmProductionResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ConfirmProductionResponse.AsObject {
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
  ): ConfirmProductionResponse.AsProtobufJSON {
    return {
      response: this.response ? this.response.toProtobufJSON(options) : null,
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ConfirmProductionResponse {
  /**
   * Standard JavaScript object representation for ConfirmProductionResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ConfirmProductionDetail.AsObject[];
  }

  /**
   * Protobuf JSON representation for ConfirmProductionResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: ConfirmProductionDetail.AsProtobufJSON[] | null;
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
    _instance.orders = _instance.orders || [];
    _instance.response = _instance.response || undefined;
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
          const messageInitializer1 = new OrderInfo();
          _reader.readMessage(
            messageInitializer1,
            OrderInfo.deserializeBinaryFromReader
          );
          (_instance.orders = _instance.orders || []).push(messageInitializer1);
          break;
        case 2:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
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
    if (_instance.orders && _instance.orders.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.orders as any,
        OrderInfo.serializeBinaryToWriter
      );
    }
    if (_instance.response) {
      _writer.writeMessage(
        2,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
  }

  private _orders?: OrderInfo[];
  private _response?: Response;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrderReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrderReply.AsObject>) {
    _value = _value || {};
    this.orders = (_value.orders || []).map(m => new OrderInfo(m));
    this.response = _value.response ? new Response(_value.response) : undefined;
    OrderReply.refineValues(this);
  }
  get orders(): OrderInfo[] | undefined {
    return this._orders;
  }
  set orders(value: OrderInfo[] | undefined) {
    this._orders = value;
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
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
      orders: (this.orders || []).map(m => m.toObject()),
      response: this.response ? this.response.toObject() : undefined
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
      orders: (this.orders || []).map(m => m.toProtobufJSON(options)),
      response: this.response ? this.response.toProtobufJSON(options) : null
    };
  }
}
export module OrderReply {
  /**
   * Standard JavaScript object representation for OrderReply
   */
  export interface AsObject {
    orders?: OrderInfo.AsObject[];
    response?: Response.AsObject;
  }

  /**
   * Protobuf JSON representation for OrderReply
   */
  export interface AsProtobufJSON {
    orders?: OrderInfo.AsProtobufJSON[] | null;
    response?: Response.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for client.TransportationUnitInfo
 */
export class TransportationUnitInfo implements GrpcMessage {
  static id = 'client.TransportationUnitInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransportationUnitInfo();
    TransportationUnitInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransportationUnitInfo) {
    _instance.idTransportationUnit = _instance.idTransportationUnit || 0;
    _instance.nameTransportationUnit = _instance.nameTransportationUnit || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransportationUnitInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idTransportationUnit = _reader.readInt32();
          break;
        case 2:
          _instance.nameTransportationUnit = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TransportationUnitInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransportationUnitInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idTransportationUnit) {
      _writer.writeInt32(1, _instance.idTransportationUnit);
    }
    if (_instance.nameTransportationUnit) {
      _writer.writeString(2, _instance.nameTransportationUnit);
    }
  }

  private _idTransportationUnit?: number;
  private _nameTransportationUnit?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransportationUnitInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransportationUnitInfo.AsObject>) {
    _value = _value || {};
    this.idTransportationUnit = _value.idTransportationUnit;
    this.nameTransportationUnit = _value.nameTransportationUnit;
    TransportationUnitInfo.refineValues(this);
  }
  get idTransportationUnit(): number | undefined {
    return this._idTransportationUnit;
  }
  set idTransportationUnit(value: number | undefined) {
    this._idTransportationUnit = value;
  }
  get nameTransportationUnit(): string | undefined {
    return this._nameTransportationUnit;
  }
  set nameTransportationUnit(value: string | undefined) {
    this._nameTransportationUnit = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransportationUnitInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransportationUnitInfo.AsObject {
    return {
      idTransportationUnit: this.idTransportationUnit,
      nameTransportationUnit: this.nameTransportationUnit
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
  ): TransportationUnitInfo.AsProtobufJSON {
    return {
      idTransportationUnit: this.idTransportationUnit,
      nameTransportationUnit: this.nameTransportationUnit
    };
  }
}
export module TransportationUnitInfo {
  /**
   * Standard JavaScript object representation for TransportationUnitInfo
   */
  export interface AsObject {
    idTransportationUnit?: number;
    nameTransportationUnit?: string;
  }

  /**
   * Protobuf JSON representation for TransportationUnitInfo
   */
  export interface AsProtobufJSON {
    idTransportationUnit?: number;
    nameTransportationUnit?: string;
  }
}

/**
 * Message implementation for client.TransportationUnitResponse
 */
export class TransportationUnitResponse implements GrpcMessage {
  static id = 'client.TransportationUnitResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransportationUnitResponse();
    TransportationUnitResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransportationUnitResponse) {
    _instance.data = _instance.data || [];
    _instance.response = _instance.response || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransportationUnitResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new TransportationUnitInfo();
          _reader.readMessage(
            messageInitializer1,
            TransportationUnitInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        case 2:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TransportationUnitResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransportationUnitResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        TransportationUnitInfo.serializeBinaryToWriter
      );
    }
    if (_instance.response) {
      _writer.writeMessage(
        2,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
  }

  private _data?: TransportationUnitInfo[];
  private _response?: Response;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransportationUnitResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransportationUnitResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new TransportationUnitInfo(m));
    this.response = _value.response ? new Response(_value.response) : undefined;
    TransportationUnitResponse.refineValues(this);
  }
  get data(): TransportationUnitInfo[] | undefined {
    return this._data;
  }
  set data(value: TransportationUnitInfo[] | undefined) {
    this._data = value;
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransportationUnitResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransportationUnitResponse.AsObject {
    return {
      data: (this.data || []).map(m => m.toObject()),
      response: this.response ? this.response.toObject() : undefined
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
  ): TransportationUnitResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      response: this.response ? this.response.toProtobufJSON(options) : null
    };
  }
}
export module TransportationUnitResponse {
  /**
   * Standard JavaScript object representation for TransportationUnitResponse
   */
  export interface AsObject {
    data?: TransportationUnitInfo.AsObject[];
    response?: Response.AsObject;
  }

  /**
   * Protobuf JSON representation for TransportationUnitResponse
   */
  export interface AsProtobufJSON {
    data?: TransportationUnitInfo.AsProtobufJSON[] | null;
    response?: Response.AsProtobufJSON | null;
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
    _instance.line = _instance.line || 0;
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.codeIn = _instance.codeIn || '';
    _instance.nameTypeIn = _instance.nameTypeIn || '';
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.codeWareHouse = _instance.codeWareHouse || '';
    _instance.nameWareHouse = _instance.nameWareHouse || '';
    _instance.weight = _instance.weight || '0';
    _instance.code = _instance.code || '';
    _instance.codePackingUnit = _instance.codePackingUnit || '';
    _instance.namePackingUnit = _instance.namePackingUnit || '';
    _instance.codeTypeBill = _instance.codeTypeBill || '';
    _instance.userIn = _instance.userIn || '';
    _instance.nameUserIn = _instance.nameUserIn || '';
    _instance.userOut = _instance.userOut || '';
    _instance.nameUserOut = _instance.nameUserOut || '';
    _instance.nameTypeBill = _instance.nameTypeBill || '';
    _instance.codeOrder = _instance.codeOrder || '';
    _instance.codeReason = _instance.codeReason || '';
    _instance.nameReason = _instance.nameReason || '';
    _instance.countTrip = _instance.countTrip || 0;
    _instance.seri = _instance.seri || 0;
    _instance.timeIn = _instance.timeIn || '';
    _instance.timeOut = _instance.timeOut || '';
    _instance.status = _instance.status || 0;
    _instance.codeOut = _instance.codeOut || '';
    _instance.nameTypeOut = _instance.nameTypeOut || '';
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
          _instance.line = _reader.readInt32();
          break;
        case 2:
          _instance.codeProduct = _reader.readString();
          break;
        case 3:
          _instance.nameProduct = _reader.readString();
          break;
        case 4:
          _instance.idTypeProduct = _reader.readInt32();
          break;
        case 5:
          _instance.nameTypeProduct = _reader.readString();
          break;
        case 6:
          _instance.codeIn = _reader.readString();
          break;
        case 7:
          _instance.nameTypeIn = _reader.readString();
          break;
        case 8:
          _instance.codeParcel = _reader.readString();
          break;
        case 9:
          _instance.codeWareHouse = _reader.readString();
          break;
        case 10:
          _instance.nameWareHouse = _reader.readString();
          break;
        case 11:
          _instance.weight = _reader.readInt64String();
          break;
        case 12:
          _instance.code = _reader.readString();
          break;
        case 13:
          _instance.codePackingUnit = _reader.readString();
          break;
        case 14:
          _instance.namePackingUnit = _reader.readString();
          break;
        case 15:
          _instance.codeTypeBill = _reader.readString();
          break;
        case 16:
          _instance.userIn = _reader.readString();
          break;
        case 17:
          _instance.nameUserIn = _reader.readString();
          break;
        case 18:
          _instance.userOut = _reader.readString();
          break;
        case 19:
          _instance.nameUserOut = _reader.readString();
          break;
        case 20:
          _instance.nameTypeBill = _reader.readString();
          break;
        case 21:
          _instance.codeOrder = _reader.readString();
          break;
        case 22:
          _instance.codeReason = _reader.readString();
          break;
        case 23:
          _instance.nameReason = _reader.readString();
          break;
        case 24:
          _instance.countTrip = _reader.readInt32();
          break;
        case 25:
          _instance.seri = _reader.readInt32();
          break;
        case 26:
          _instance.timeIn = _reader.readString();
          break;
        case 27:
          _instance.timeOut = _reader.readString();
          break;
        case 28:
          _instance.status = _reader.readInt32();
          break;
        case 29:
          _instance.codeOut = _reader.readString();
          break;
        case 30:
          _instance.nameTypeOut = _reader.readString();
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
    if (_instance.line) {
      _writer.writeInt32(1, _instance.line);
    }
    if (_instance.codeProduct) {
      _writer.writeString(2, _instance.codeProduct);
    }
    if (_instance.nameProduct) {
      _writer.writeString(3, _instance.nameProduct);
    }
    if (_instance.idTypeProduct) {
      _writer.writeInt32(4, _instance.idTypeProduct);
    }
    if (_instance.nameTypeProduct) {
      _writer.writeString(5, _instance.nameTypeProduct);
    }
    if (_instance.codeIn) {
      _writer.writeString(6, _instance.codeIn);
    }
    if (_instance.nameTypeIn) {
      _writer.writeString(7, _instance.nameTypeIn);
    }
    if (_instance.codeParcel) {
      _writer.writeString(8, _instance.codeParcel);
    }
    if (_instance.codeWareHouse) {
      _writer.writeString(9, _instance.codeWareHouse);
    }
    if (_instance.nameWareHouse) {
      _writer.writeString(10, _instance.nameWareHouse);
    }
    if (_instance.weight) {
      _writer.writeInt64String(11, _instance.weight);
    }
    if (_instance.code) {
      _writer.writeString(12, _instance.code);
    }
    if (_instance.codePackingUnit) {
      _writer.writeString(13, _instance.codePackingUnit);
    }
    if (_instance.namePackingUnit) {
      _writer.writeString(14, _instance.namePackingUnit);
    }
    if (_instance.codeTypeBill) {
      _writer.writeString(15, _instance.codeTypeBill);
    }
    if (_instance.userIn) {
      _writer.writeString(16, _instance.userIn);
    }
    if (_instance.nameUserIn) {
      _writer.writeString(17, _instance.nameUserIn);
    }
    if (_instance.userOut) {
      _writer.writeString(18, _instance.userOut);
    }
    if (_instance.nameUserOut) {
      _writer.writeString(19, _instance.nameUserOut);
    }
    if (_instance.nameTypeBill) {
      _writer.writeString(20, _instance.nameTypeBill);
    }
    if (_instance.codeOrder) {
      _writer.writeString(21, _instance.codeOrder);
    }
    if (_instance.codeReason) {
      _writer.writeString(22, _instance.codeReason);
    }
    if (_instance.nameReason) {
      _writer.writeString(23, _instance.nameReason);
    }
    if (_instance.countTrip) {
      _writer.writeInt32(24, _instance.countTrip);
    }
    if (_instance.seri) {
      _writer.writeInt32(25, _instance.seri);
    }
    if (_instance.timeIn) {
      _writer.writeString(26, _instance.timeIn);
    }
    if (_instance.timeOut) {
      _writer.writeString(27, _instance.timeOut);
    }
    if (_instance.status) {
      _writer.writeInt32(28, _instance.status);
    }
    if (_instance.codeOut) {
      _writer.writeString(29, _instance.codeOut);
    }
    if (_instance.nameTypeOut) {
      _writer.writeString(30, _instance.nameTypeOut);
    }
  }

  private _line?: number;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _codeIn?: string;
  private _nameTypeIn?: string;
  private _codeParcel?: string;
  private _codeWareHouse?: string;
  private _nameWareHouse?: string;
  private _weight?: string;
  private _code?: string;
  private _codePackingUnit?: string;
  private _namePackingUnit?: string;
  private _codeTypeBill?: string;
  private _userIn?: string;
  private _nameUserIn?: string;
  private _userOut?: string;
  private _nameUserOut?: string;
  private _nameTypeBill?: string;
  private _codeOrder?: string;
  private _codeReason?: string;
  private _nameReason?: string;
  private _countTrip?: number;
  private _seri?: number;
  private _timeIn?: string;
  private _timeOut?: string;
  private _status?: number;
  private _codeOut?: string;
  private _nameTypeOut?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QRCodeInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<QRCodeInfo.AsObject>) {
    _value = _value || {};
    this.line = _value.line;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.codeIn = _value.codeIn;
    this.nameTypeIn = _value.nameTypeIn;
    this.codeParcel = _value.codeParcel;
    this.codeWareHouse = _value.codeWareHouse;
    this.nameWareHouse = _value.nameWareHouse;
    this.weight = _value.weight;
    this.code = _value.code;
    this.codePackingUnit = _value.codePackingUnit;
    this.namePackingUnit = _value.namePackingUnit;
    this.codeTypeBill = _value.codeTypeBill;
    this.userIn = _value.userIn;
    this.nameUserIn = _value.nameUserIn;
    this.userOut = _value.userOut;
    this.nameUserOut = _value.nameUserOut;
    this.nameTypeBill = _value.nameTypeBill;
    this.codeOrder = _value.codeOrder;
    this.codeReason = _value.codeReason;
    this.nameReason = _value.nameReason;
    this.countTrip = _value.countTrip;
    this.seri = _value.seri;
    this.timeIn = _value.timeIn;
    this.timeOut = _value.timeOut;
    this.status = _value.status;
    this.codeOut = _value.codeOut;
    this.nameTypeOut = _value.nameTypeOut;
    QRCodeInfo.refineValues(this);
  }
  get line(): number | undefined {
    return this._line;
  }
  set line(value: number | undefined) {
    this._line = value;
  }
  get codeProduct(): string | undefined {
    return this._codeProduct;
  }
  set codeProduct(value: string | undefined) {
    this._codeProduct = value;
  }
  get nameProduct(): string | undefined {
    return this._nameProduct;
  }
  set nameProduct(value: string | undefined) {
    this._nameProduct = value;
  }
  get idTypeProduct(): number | undefined {
    return this._idTypeProduct;
  }
  set idTypeProduct(value: number | undefined) {
    this._idTypeProduct = value;
  }
  get nameTypeProduct(): string | undefined {
    return this._nameTypeProduct;
  }
  set nameTypeProduct(value: string | undefined) {
    this._nameTypeProduct = value;
  }
  get codeIn(): string | undefined {
    return this._codeIn;
  }
  set codeIn(value: string | undefined) {
    this._codeIn = value;
  }
  get nameTypeIn(): string | undefined {
    return this._nameTypeIn;
  }
  set nameTypeIn(value: string | undefined) {
    this._nameTypeIn = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get codeWareHouse(): string | undefined {
    return this._codeWareHouse;
  }
  set codeWareHouse(value: string | undefined) {
    this._codeWareHouse = value;
  }
  get nameWareHouse(): string | undefined {
    return this._nameWareHouse;
  }
  set nameWareHouse(value: string | undefined) {
    this._nameWareHouse = value;
  }
  get weight(): string | undefined {
    return this._weight;
  }
  set weight(value: string | undefined) {
    this._weight = value;
  }
  get code(): string | undefined {
    return this._code;
  }
  set code(value: string | undefined) {
    this._code = value;
  }
  get codePackingUnit(): string | undefined {
    return this._codePackingUnit;
  }
  set codePackingUnit(value: string | undefined) {
    this._codePackingUnit = value;
  }
  get namePackingUnit(): string | undefined {
    return this._namePackingUnit;
  }
  set namePackingUnit(value: string | undefined) {
    this._namePackingUnit = value;
  }
  get codeTypeBill(): string | undefined {
    return this._codeTypeBill;
  }
  set codeTypeBill(value: string | undefined) {
    this._codeTypeBill = value;
  }
  get userIn(): string | undefined {
    return this._userIn;
  }
  set userIn(value: string | undefined) {
    this._userIn = value;
  }
  get nameUserIn(): string | undefined {
    return this._nameUserIn;
  }
  set nameUserIn(value: string | undefined) {
    this._nameUserIn = value;
  }
  get userOut(): string | undefined {
    return this._userOut;
  }
  set userOut(value: string | undefined) {
    this._userOut = value;
  }
  get nameUserOut(): string | undefined {
    return this._nameUserOut;
  }
  set nameUserOut(value: string | undefined) {
    this._nameUserOut = value;
  }
  get nameTypeBill(): string | undefined {
    return this._nameTypeBill;
  }
  set nameTypeBill(value: string | undefined) {
    this._nameTypeBill = value;
  }
  get codeOrder(): string | undefined {
    return this._codeOrder;
  }
  set codeOrder(value: string | undefined) {
    this._codeOrder = value;
  }
  get codeReason(): string | undefined {
    return this._codeReason;
  }
  set codeReason(value: string | undefined) {
    this._codeReason = value;
  }
  get nameReason(): string | undefined {
    return this._nameReason;
  }
  set nameReason(value: string | undefined) {
    this._nameReason = value;
  }
  get countTrip(): number | undefined {
    return this._countTrip;
  }
  set countTrip(value: number | undefined) {
    this._countTrip = value;
  }
  get seri(): number | undefined {
    return this._seri;
  }
  set seri(value: number | undefined) {
    this._seri = value;
  }
  get timeIn(): string | undefined {
    return this._timeIn;
  }
  set timeIn(value: string | undefined) {
    this._timeIn = value;
  }
  get timeOut(): string | undefined {
    return this._timeOut;
  }
  set timeOut(value: string | undefined) {
    this._timeOut = value;
  }
  get status(): number | undefined {
    return this._status;
  }
  set status(value: number | undefined) {
    this._status = value;
  }
  get codeOut(): string | undefined {
    return this._codeOut;
  }
  set codeOut(value: string | undefined) {
    this._codeOut = value;
  }
  get nameTypeOut(): string | undefined {
    return this._nameTypeOut;
  }
  set nameTypeOut(value: string | undefined) {
    this._nameTypeOut = value;
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
      line: this.line,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeIn: this.codeIn,
      nameTypeIn: this.nameTypeIn,
      codeParcel: this.codeParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      weight: this.weight,
      code: this.code,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      codeTypeBill: this.codeTypeBill,
      userIn: this.userIn,
      nameUserIn: this.nameUserIn,
      userOut: this.userOut,
      nameUserOut: this.nameUserOut,
      nameTypeBill: this.nameTypeBill,
      codeOrder: this.codeOrder,
      codeReason: this.codeReason,
      nameReason: this.nameReason,
      countTrip: this.countTrip,
      seri: this.seri,
      timeIn: this.timeIn,
      timeOut: this.timeOut,
      status: this.status,
      codeOut: this.codeOut,
      nameTypeOut: this.nameTypeOut
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
      line: this.line,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeIn: this.codeIn,
      nameTypeIn: this.nameTypeIn,
      codeParcel: this.codeParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      weight: this.weight,
      code: this.code,
      codePackingUnit: this.codePackingUnit,
      namePackingUnit: this.namePackingUnit,
      codeTypeBill: this.codeTypeBill,
      userIn: this.userIn,
      nameUserIn: this.nameUserIn,
      userOut: this.userOut,
      nameUserOut: this.nameUserOut,
      nameTypeBill: this.nameTypeBill,
      codeOrder: this.codeOrder,
      codeReason: this.codeReason,
      nameReason: this.nameReason,
      countTrip: this.countTrip,
      seri: this.seri,
      timeIn: this.timeIn,
      timeOut: this.timeOut,
      status: this.status,
      codeOut: this.codeOut,
      nameTypeOut: this.nameTypeOut
    };
  }
}
export module QRCodeInfo {
  /**
   * Standard JavaScript object representation for QRCodeInfo
   */
  export interface AsObject {
    line?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeIn?: string;
    nameTypeIn?: string;
    codeParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    weight?: string;
    code?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    codeTypeBill?: string;
    userIn?: string;
    nameUserIn?: string;
    userOut?: string;
    nameUserOut?: string;
    nameTypeBill?: string;
    codeOrder?: string;
    codeReason?: string;
    nameReason?: string;
    countTrip?: number;
    seri?: number;
    timeIn?: string;
    timeOut?: string;
    status?: number;
    codeOut?: string;
    nameTypeOut?: string;
  }

  /**
   * Protobuf JSON representation for QRCodeInfo
   */
  export interface AsProtobufJSON {
    line?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeIn?: string;
    nameTypeIn?: string;
    codeParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    weight?: string;
    code?: string;
    codePackingUnit?: string;
    namePackingUnit?: string;
    codeTypeBill?: string;
    userIn?: string;
    nameUserIn?: string;
    userOut?: string;
    nameUserOut?: string;
    nameTypeBill?: string;
    codeOrder?: string;
    codeReason?: string;
    nameReason?: string;
    countTrip?: number;
    seri?: number;
    timeIn?: string;
    timeOut?: string;
    status?: number;
    codeOut?: string;
    nameTypeOut?: string;
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
