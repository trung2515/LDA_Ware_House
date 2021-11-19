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
    _instance.formDate = _instance.formDate || '';
    _instance.toDate = _instance.toDate || '';
    _instance.codeCard = _instance.codeCard || '';
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
          _instance.formDate = _reader.readString();
          break;
        case 5:
          _instance.toDate = _reader.readString();
          break;
        case 6:
          _instance.codeCard = _reader.readString();
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
    if (_instance.formDate) {
      _writer.writeString(4, _instance.formDate);
    }
    if (_instance.toDate) {
      _writer.writeString(5, _instance.toDate);
    }
    if (_instance.codeCard) {
      _writer.writeString(6, _instance.codeCard);
    }
  }

  private _idShift?: number;
  private _idShiftDetail?: number;
  private _codeParcel?: string;
  private _formDate?: string;
  private _toDate?: string;
  private _codeCard?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MasterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MasterRequest.AsObject>) {
    _value = _value || {};
    this.idShift = _value.idShift;
    this.idShiftDetail = _value.idShiftDetail;
    this.codeParcel = _value.codeParcel;
    this.formDate = _value.formDate;
    this.toDate = _value.toDate;
    this.codeCard = _value.codeCard;
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
  get formDate(): string | undefined {
    return this._formDate;
  }
  set formDate(value: string | undefined) {
    this._formDate = value;
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
      formDate: this.formDate,
      toDate: this.toDate,
      codeCard: this.codeCard
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
      formDate: this.formDate,
      toDate: this.toDate,
      codeCard: this.codeCard
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
    formDate?: string;
    toDate?: string;
    codeCard?: string;
  }

  /**
   * Protobuf JSON representation for MasterRequest
   */
  export interface AsProtobufJSON {
    idShift?: number;
    idShiftDetail?: number;
    codeParcel?: string;
    formDate?: string;
    toDate?: string;
    codeCard?: string;
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
          _instance.namePackingUnit = _reader.readString();
          break;
        case 3:
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
    if (_instance.namePackingUnit) {
      _writer.writeString(2, _instance.namePackingUnit);
    }
    if (_instance.isDeleted) {
      _writer.writeBool(3, _instance.isDeleted);
    }
  }

  private _idPackingUnit?: number;
  private _namePackingUnit?: string;
  private _isDeleted?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PackingUnitInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<PackingUnitInfo.AsObject>) {
    _value = _value || {};
    this.idPackingUnit = _value.idPackingUnit;
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
    namePackingUnit?: string;
    isDeleted?: boolean;
  }

  /**
   * Protobuf JSON representation for PackingUnitInfo
   */
  export interface AsProtobufJSON {
    idPackingUnit?: number;
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
    _instance.nameParcel = _instance.nameParcel || '';
    _instance.codeWareHouse = _instance.codeWareHouse || '';
    _instance.nameWareHouse = _instance.nameWareHouse || '';
    _instance.idShift = _instance.idShift || 0;
    _instance.nameShift = _instance.nameShift || '';
    _instance.line = _instance.line || 0;
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
          _instance.nameParcel = _reader.readString();
          break;
        case 13:
          _instance.codeWareHouse = _reader.readString();
          break;
        case 14:
          _instance.nameWareHouse = _reader.readString();
          break;
        case 15:
          _instance.idShift = _reader.readInt32();
          break;
        case 16:
          _instance.nameShift = _reader.readString();
          break;
        case 17:
          _instance.line = _reader.readInt32();
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
    if (_instance.nameParcel) {
      _writer.writeString(12, _instance.nameParcel);
    }
    if (_instance.codeWareHouse) {
      _writer.writeString(13, _instance.codeWareHouse);
    }
    if (_instance.nameWareHouse) {
      _writer.writeString(14, _instance.nameWareHouse);
    }
    if (_instance.idShift) {
      _writer.writeInt32(15, _instance.idShift);
    }
    if (_instance.nameShift) {
      _writer.writeString(16, _instance.nameShift);
    }
    if (_instance.line) {
      _writer.writeInt32(17, _instance.line);
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
  private _nameParcel?: string;
  private _codeWareHouse?: string;
  private _nameWareHouse?: string;
  private _idShift?: number;
  private _nameShift?: string;
  private _line?: number;

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
    this.nameParcel = _value.nameParcel;
    this.codeWareHouse = _value.codeWareHouse;
    this.nameWareHouse = _value.nameWareHouse;
    this.idShift = _value.idShift;
    this.nameShift = _value.nameShift;
    this.line = _value.line;
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
  get nameParcel(): string | undefined {
    return this._nameParcel;
  }
  set nameParcel(value: string | undefined) {
    this._nameParcel = value;
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
  get line(): number | undefined {
    return this._line;
  }
  set line(value: number | undefined) {
    this._line = value;
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
      nameParcel: this.nameParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      idShift: this.idShift,
      nameShift: this.nameShift,
      line: this.line
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
      nameParcel: this.nameParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      idShift: this.idShift,
      nameShift: this.nameShift,
      line: this.line
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
    nameParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    idShift?: number;
    nameShift?: string;
    line?: number;
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
    nameParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    idShift?: number;
    nameShift?: string;
    line?: number;
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
    _instance.createPerson = _instance.createPerson || '';
    _instance.nameCratePerson = _instance.nameCratePerson || '';
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
          _instance.createPerson = _reader.readString();
          break;
        case 5:
          _instance.nameCratePerson = _reader.readString();
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
    if (_instance.createPerson) {
      _writer.writeString(4, _instance.createPerson);
    }
    if (_instance.nameCratePerson) {
      _writer.writeString(5, _instance.nameCratePerson);
    }
  }

  private _idShift?: number;
  private _date?: string;
  private _nameShift?: string;
  private _createPerson?: string;
  private _nameCratePerson?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ShiftInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ShiftInfo.AsObject>) {
    _value = _value || {};
    this.idShift = _value.idShift;
    this.date = _value.date;
    this.nameShift = _value.nameShift;
    this.createPerson = _value.createPerson;
    this.nameCratePerson = _value.nameCratePerson;
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
  get createPerson(): string | undefined {
    return this._createPerson;
  }
  set createPerson(value: string | undefined) {
    this._createPerson = value;
  }
  get nameCratePerson(): string | undefined {
    return this._nameCratePerson;
  }
  set nameCratePerson(value: string | undefined) {
    this._nameCratePerson = value;
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
      createPerson: this.createPerson,
      nameCratePerson: this.nameCratePerson
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
      createPerson: this.createPerson,
      nameCratePerson: this.nameCratePerson
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
    createPerson?: string;
    nameCratePerson?: string;
  }

  /**
   * Protobuf JSON representation for ShiftInfo
   */
  export interface AsProtobufJSON {
    idShift?: number;
    date?: string;
    nameShift?: string;
    createPerson?: string;
    nameCratePerson?: string;
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
    _instance.createPerson = _instance.createPerson || '';
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
          _instance.createPerson = _reader.readString();
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
    if (_instance.createPerson) {
      _writer.writeString(4, _instance.createPerson);
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
  private _createPerson?: string;
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
    this.createPerson = _value.createPerson;
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
  get createPerson(): string | undefined {
    return this._createPerson;
  }
  set createPerson(value: string | undefined) {
    this._createPerson = value;
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
      createPerson: this.createPerson,
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
      createPerson: this.createPerson,
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
    createPerson?: string;
    data?: ShiftDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for InsertShiftRequest
   */
  export interface AsProtobufJSON {
    idShift?: number;
    date?: string;
    nameShift?: string;
    createPerson?: string;
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
    _instance.nameParcel = _instance.nameParcel || '';
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.createdPerson = _instance.createdPerson || '';
    _instance.nameCreatedOPerson = _instance.nameCreatedOPerson || '';
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
          _instance.nameParcel = _reader.readString();
          break;
        case 3:
          _instance.codeParcel = _reader.readString();
          break;
        case 4:
          _instance.createdPerson = _reader.readString();
          break;
        case 5:
          _instance.nameCreatedOPerson = _reader.readString();
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
    if (_instance.nameParcel) {
      _writer.writeString(2, _instance.nameParcel);
    }
    if (_instance.codeParcel) {
      _writer.writeString(3, _instance.codeParcel);
    }
    if (_instance.createdPerson) {
      _writer.writeString(4, _instance.createdPerson);
    }
    if (_instance.nameCreatedOPerson) {
      _writer.writeString(5, _instance.nameCreatedOPerson);
    }
  }

  private _idParcel?: number;
  private _nameParcel?: string;
  private _codeParcel?: string;
  private _createdPerson?: string;
  private _nameCreatedOPerson?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ParcelInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ParcelInfo.AsObject>) {
    _value = _value || {};
    this.idParcel = _value.idParcel;
    this.nameParcel = _value.nameParcel;
    this.codeParcel = _value.codeParcel;
    this.createdPerson = _value.createdPerson;
    this.nameCreatedOPerson = _value.nameCreatedOPerson;
    ParcelInfo.refineValues(this);
  }
  get idParcel(): number | undefined {
    return this._idParcel;
  }
  set idParcel(value: number | undefined) {
    this._idParcel = value;
  }
  get nameParcel(): string | undefined {
    return this._nameParcel;
  }
  set nameParcel(value: string | undefined) {
    this._nameParcel = value;
  }
  get codeParcel(): string | undefined {
    return this._codeParcel;
  }
  set codeParcel(value: string | undefined) {
    this._codeParcel = value;
  }
  get createdPerson(): string | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: string | undefined) {
    this._createdPerson = value;
  }
  get nameCreatedOPerson(): string | undefined {
    return this._nameCreatedOPerson;
  }
  set nameCreatedOPerson(value: string | undefined) {
    this._nameCreatedOPerson = value;
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
      nameParcel: this.nameParcel,
      codeParcel: this.codeParcel,
      createdPerson: this.createdPerson,
      nameCreatedOPerson: this.nameCreatedOPerson
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
      nameParcel: this.nameParcel,
      codeParcel: this.codeParcel,
      createdPerson: this.createdPerson,
      nameCreatedOPerson: this.nameCreatedOPerson
    };
  }
}
export module ParcelInfo {
  /**
   * Standard JavaScript object representation for ParcelInfo
   */
  export interface AsObject {
    idParcel?: number;
    nameParcel?: string;
    codeParcel?: string;
    createdPerson?: string;
    nameCreatedOPerson?: string;
  }

  /**
   * Protobuf JSON representation for ParcelInfo
   */
  export interface AsProtobufJSON {
    idParcel?: number;
    nameParcel?: string;
    codeParcel?: string;
    createdPerson?: string;
    nameCreatedOPerson?: string;
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
    _instance.userid = _instance.userid || 0;
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
    _instance.roleid = _instance.roleid || 0;
    _instance.rolename = _instance.rolename || '';
    _instance.createddate = _instance.createddate || '';
    _instance.name = _instance.name || '';
    _instance.newPassword = _instance.newPassword || '';
    _instance.codeStaff = _instance.codeStaff || '';
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
          _instance.userid = _reader.readInt32();
          break;
        case 2:
          _instance.username = _reader.readString();
          break;
        case 3:
          _instance.password = _reader.readString();
          break;
        case 4:
          _instance.roleid = _reader.readInt32();
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
          _instance.codeStaff = _reader.readString();
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
    if (_instance.userid) {
      _writer.writeInt32(1, _instance.userid);
    }
    if (_instance.username) {
      _writer.writeString(2, _instance.username);
    }
    if (_instance.password) {
      _writer.writeString(3, _instance.password);
    }
    if (_instance.roleid) {
      _writer.writeInt32(4, _instance.roleid);
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
    if (_instance.codeStaff) {
      _writer.writeString(9, _instance.codeStaff);
    }
  }

  private _userid?: number;
  private _username?: string;
  private _password?: string;
  private _roleid?: number;
  private _rolename?: string;
  private _createddate?: string;
  private _name?: string;
  private _newPassword?: string;
  private _codeStaff?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfo.AsObject>) {
    _value = _value || {};
    this.userid = _value.userid;
    this.username = _value.username;
    this.password = _value.password;
    this.roleid = _value.roleid;
    this.rolename = _value.rolename;
    this.createddate = _value.createddate;
    this.name = _value.name;
    this.newPassword = _value.newPassword;
    this.codeStaff = _value.codeStaff;
    UserInfo.refineValues(this);
  }
  get userid(): number | undefined {
    return this._userid;
  }
  set userid(value: number | undefined) {
    this._userid = value;
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
  get roleid(): number | undefined {
    return this._roleid;
  }
  set roleid(value: number | undefined) {
    this._roleid = value;
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
  get codeStaff(): string | undefined {
    return this._codeStaff;
  }
  set codeStaff(value: string | undefined) {
    this._codeStaff = value;
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
      userid: this.userid,
      username: this.username,
      password: this.password,
      roleid: this.roleid,
      rolename: this.rolename,
      createddate: this.createddate,
      name: this.name,
      newPassword: this.newPassword,
      codeStaff: this.codeStaff
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
      userid: this.userid,
      username: this.username,
      password: this.password,
      roleid: this.roleid,
      rolename: this.rolename,
      createddate: this.createddate,
      name: this.name,
      newPassword: this.newPassword,
      codeStaff: this.codeStaff
    };
  }
}
export module UserInfo {
  /**
   * Standard JavaScript object representation for UserInfo
   */
  export interface AsObject {
    userid?: number;
    username?: string;
    password?: string;
    roleid?: number;
    rolename?: string;
    createddate?: string;
    name?: string;
    newPassword?: string;
    codeStaff?: string;
  }

  /**
   * Protobuf JSON representation for UserInfo
   */
  export interface AsProtobufJSON {
    userid?: number;
    username?: string;
    password?: string;
    roleid?: number;
    rolename?: string;
    createddate?: string;
    name?: string;
    newPassword?: string;
    codeStaff?: string;
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
    _instance.name = _instance.name || '';
    _instance.mac = _instance.mac || '';
    _instance.pbFunction = _instance.pbFunction || '';
    _instance.line = _instance.line || 0;
    _instance.id = _instance.id || 0;
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
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.mac = _reader.readString();
          break;
        case 3:
          _instance.pbFunction = _reader.readString();
          break;
        case 4:
          _instance.line = _reader.readInt32();
          break;
        case 5:
          _instance.id = _reader.readInt32();
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
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.mac) {
      _writer.writeString(2, _instance.mac);
    }
    if (_instance.pbFunction) {
      _writer.writeString(3, _instance.pbFunction);
    }
    if (_instance.line) {
      _writer.writeInt32(4, _instance.line);
    }
    if (_instance.id) {
      _writer.writeInt32(5, _instance.id);
    }
  }

  private _name?: string;
  private _mac?: string;
  private _pbFunction?: string;
  private _line?: number;
  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeviceInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeviceInfo.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.mac = _value.mac;
    this.pbFunction = _value.pbFunction;
    this.line = _value.line;
    this.id = _value.id;
    DeviceInfo.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get mac(): string | undefined {
    return this._mac;
  }
  set mac(value: string | undefined) {
    this._mac = value;
  }
  get pbFunction(): string | undefined {
    return this._pbFunction;
  }
  set pbFunction(value: string | undefined) {
    this._pbFunction = value;
  }
  get line(): number | undefined {
    return this._line;
  }
  set line(value: number | undefined) {
    this._line = value;
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
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
      name: this.name,
      mac: this.mac,
      pbFunction: this.pbFunction,
      line: this.line,
      id: this.id
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
      name: this.name,
      mac: this.mac,
      pbFunction: this.pbFunction,
      line: this.line,
      id: this.id
    };
  }
}
export module DeviceInfo {
  /**
   * Standard JavaScript object representation for DeviceInfo
   */
  export interface AsObject {
    name?: string;
    mac?: string;
    pbFunction?: string;
    line?: number;
    id?: number;
  }

  /**
   * Protobuf JSON representation for DeviceInfo
   */
  export interface AsProtobufJSON {
    name?: string;
    mac?: string;
    pbFunction?: string;
    line?: number;
    id?: number;
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
      idParcel: this.idParcel
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
      idParcel: this.idParcel
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
    _instance.createdPerson = _instance.createdPerson || '';
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
          _instance.createdPerson = _reader.readString();
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
      _writer.writeString(3, _instance.createdPerson);
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
  private _createdPerson?: string;
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
  get createdPerson(): string | undefined {
    return this._createdPerson;
  }
  set createdPerson(value: string | undefined) {
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
    createdPerson?: string;
    data?: ParcelDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for InsertParcelRequest
   */
  export interface AsProtobufJSON {
    codeParcel?: string;
    name?: string;
    createdPerson?: string;
    data?: ParcelDetailInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for client.CardInfo
 */
export class CardInfo implements GrpcMessage {
  static id = 'client.CardInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CardInfo();
    CardInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CardInfo) {
    _instance.idCard = _instance.idCard || '0';
    _instance.codeTypeBill = _instance.codeTypeBill || '';
    _instance.createdPerson = _instance.createdPerson || '';
    _instance.createdDate = _instance.createdDate || '';
    _instance.codeCard = _instance.codeCard || '';
    _instance.idShift = _instance.idShift || 0;
    _instance.isChangable = _instance.isChangable || false;
    _instance.namePerson = _instance.namePerson || '';
    _instance.nameTypeBill = _instance.nameTypeBill || '';
    _instance.nameShift = _instance.nameShift || '';
    _instance.vehicleNumber = _instance.vehicleNumber || '';
    _instance.romooc = _instance.romooc || '';
    _instance.codeOrder = _instance.codeOrder || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CardInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idCard = _reader.readInt64String();
          break;
        case 2:
          _instance.codeTypeBill = _reader.readString();
          break;
        case 3:
          _instance.createdPerson = _reader.readString();
          break;
        case 4:
          _instance.createdDate = _reader.readString();
          break;
        case 5:
          _instance.codeCard = _reader.readString();
          break;
        case 6:
          _instance.idShift = _reader.readInt32();
          break;
        case 7:
          _instance.isChangable = _reader.readBool();
          break;
        case 8:
          _instance.namePerson = _reader.readString();
          break;
        case 9:
          _instance.nameTypeBill = _reader.readString();
          break;
        case 10:
          _instance.nameShift = _reader.readString();
          break;
        case 11:
          _instance.vehicleNumber = _reader.readString();
          break;
        case 12:
          _instance.romooc = _reader.readString();
          break;
        case 13:
          _instance.codeOrder = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CardInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: CardInfo, _writer: BinaryWriter) {
    if (_instance.idCard) {
      _writer.writeInt64String(1, _instance.idCard);
    }
    if (_instance.codeTypeBill) {
      _writer.writeString(2, _instance.codeTypeBill);
    }
    if (_instance.createdPerson) {
      _writer.writeString(3, _instance.createdPerson);
    }
    if (_instance.createdDate) {
      _writer.writeString(4, _instance.createdDate);
    }
    if (_instance.codeCard) {
      _writer.writeString(5, _instance.codeCard);
    }
    if (_instance.idShift) {
      _writer.writeInt32(6, _instance.idShift);
    }
    if (_instance.isChangable) {
      _writer.writeBool(7, _instance.isChangable);
    }
    if (_instance.namePerson) {
      _writer.writeString(8, _instance.namePerson);
    }
    if (_instance.nameTypeBill) {
      _writer.writeString(9, _instance.nameTypeBill);
    }
    if (_instance.nameShift) {
      _writer.writeString(10, _instance.nameShift);
    }
    if (_instance.vehicleNumber) {
      _writer.writeString(11, _instance.vehicleNumber);
    }
    if (_instance.romooc) {
      _writer.writeString(12, _instance.romooc);
    }
    if (_instance.codeOrder) {
      _writer.writeString(13, _instance.codeOrder);
    }
  }

  private _idCard?: string;
  private _codeTypeBill?: string;
  private _createdPerson?: string;
  private _createdDate?: string;
  private _codeCard?: string;
  private _idShift?: number;
  private _isChangable?: boolean;
  private _namePerson?: string;
  private _nameTypeBill?: string;
  private _nameShift?: string;
  private _vehicleNumber?: string;
  private _romooc?: string;
  private _codeOrder?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CardInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<CardInfo.AsObject>) {
    _value = _value || {};
    this.idCard = _value.idCard;
    this.codeTypeBill = _value.codeTypeBill;
    this.createdPerson = _value.createdPerson;
    this.createdDate = _value.createdDate;
    this.codeCard = _value.codeCard;
    this.idShift = _value.idShift;
    this.isChangable = _value.isChangable;
    this.namePerson = _value.namePerson;
    this.nameTypeBill = _value.nameTypeBill;
    this.nameShift = _value.nameShift;
    this.vehicleNumber = _value.vehicleNumber;
    this.romooc = _value.romooc;
    this.codeOrder = _value.codeOrder;
    CardInfo.refineValues(this);
  }
  get idCard(): string | undefined {
    return this._idCard;
  }
  set idCard(value: string | undefined) {
    this._idCard = value;
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
  get codeCard(): string | undefined {
    return this._codeCard;
  }
  set codeCard(value: string | undefined) {
    this._codeCard = value;
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
  get vehicleNumber(): string | undefined {
    return this._vehicleNumber;
  }
  set vehicleNumber(value: string | undefined) {
    this._vehicleNumber = value;
  }
  get romooc(): string | undefined {
    return this._romooc;
  }
  set romooc(value: string | undefined) {
    this._romooc = value;
  }
  get codeOrder(): string | undefined {
    return this._codeOrder;
  }
  set codeOrder(value: string | undefined) {
    this._codeOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CardInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CardInfo.AsObject {
    return {
      idCard: this.idCard,
      codeTypeBill: this.codeTypeBill,
      createdPerson: this.createdPerson,
      createdDate: this.createdDate,
      codeCard: this.codeCard,
      idShift: this.idShift,
      isChangable: this.isChangable,
      namePerson: this.namePerson,
      nameTypeBill: this.nameTypeBill,
      nameShift: this.nameShift,
      vehicleNumber: this.vehicleNumber,
      romooc: this.romooc,
      codeOrder: this.codeOrder
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
  ): CardInfo.AsProtobufJSON {
    return {
      idCard: this.idCard,
      codeTypeBill: this.codeTypeBill,
      createdPerson: this.createdPerson,
      createdDate: this.createdDate,
      codeCard: this.codeCard,
      idShift: this.idShift,
      isChangable: this.isChangable,
      namePerson: this.namePerson,
      nameTypeBill: this.nameTypeBill,
      nameShift: this.nameShift,
      vehicleNumber: this.vehicleNumber,
      romooc: this.romooc,
      codeOrder: this.codeOrder
    };
  }
}
export module CardInfo {
  /**
   * Standard JavaScript object representation for CardInfo
   */
  export interface AsObject {
    idCard?: string;
    codeTypeBill?: string;
    createdPerson?: string;
    createdDate?: string;
    codeCard?: string;
    idShift?: number;
    isChangable?: boolean;
    namePerson?: string;
    nameTypeBill?: string;
    nameShift?: string;
    vehicleNumber?: string;
    romooc?: string;
    codeOrder?: string;
  }

  /**
   * Protobuf JSON representation for CardInfo
   */
  export interface AsProtobufJSON {
    idCard?: string;
    codeTypeBill?: string;
    createdPerson?: string;
    createdDate?: string;
    codeCard?: string;
    idShift?: number;
    isChangable?: boolean;
    namePerson?: string;
    nameTypeBill?: string;
    nameShift?: string;
    vehicleNumber?: string;
    romooc?: string;
    codeOrder?: string;
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
          const messageInitializer2 = new CardInfo();
          _reader.readMessage(
            messageInitializer2,
            CardInfo.deserializeBinaryFromReader
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
        CardInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: CardInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CardResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CardResponse.AsObject>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new CardInfo(m));
    CardResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): CardInfo[] | undefined {
    return this._data;
  }
  set data(value: CardInfo[] | undefined) {
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
    data?: CardInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for CardResponse
   */
  export interface AsProtobufJSON {
    response?: Response.AsProtobufJSON | null;
    data?: CardInfo.AsProtobufJSON[] | null;
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
    _instance.idCardDetail = _instance.idCardDetail || 0;
    _instance.codeProduct = _instance.codeProduct || '';
    _instance.nameProduct = _instance.nameProduct || '';
    _instance.idTypeProduct = _instance.idTypeProduct || 0;
    _instance.nameTypeProduct = _instance.nameTypeProduct || '';
    _instance.codeTypePacket = _instance.codeTypePacket || '';
    _instance.nameTypePacket = _instance.nameTypePacket || '';
    _instance.codeParcel = _instance.codeParcel || '';
    _instance.nameParcel = _instance.nameParcel || '';
    _instance.codeWareHouse = _instance.codeWareHouse || '';
    _instance.nameWareHouse = _instance.nameWareHouse || '';
    _instance.codeCard = _instance.codeCard || '';
    _instance.quantity = _instance.quantity || '0';
    _instance.codeReason = _instance.codeReason || '';
    _instance.nameReason = _instance.nameReason || '';
    _instance.weight = _instance.weight || '0';
    _instance.idPackingUnit = _instance.idPackingUnit || 0;
    _instance.namePackingUnit = _instance.namePackingUnit || '';
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
          _instance.idCardDetail = _reader.readInt32();
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
          _instance.codeWareHouse = _reader.readString();
          break;
        case 11:
          _instance.nameWareHouse = _reader.readString();
          break;
        case 12:
          _instance.codeCard = _reader.readString();
          break;
        case 13:
          _instance.quantity = _reader.readInt64String();
          break;
        case 14:
          _instance.codeReason = _reader.readString();
          break;
        case 15:
          _instance.nameReason = _reader.readString();
          break;
        case 16:
          _instance.weight = _reader.readInt64String();
          break;
        case 17:
          _instance.idPackingUnit = _reader.readInt32();
          break;
        case 18:
          _instance.namePackingUnit = _reader.readString();
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
    if (_instance.idCardDetail) {
      _writer.writeInt32(1, _instance.idCardDetail);
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
    if (_instance.codeWareHouse) {
      _writer.writeString(10, _instance.codeWareHouse);
    }
    if (_instance.nameWareHouse) {
      _writer.writeString(11, _instance.nameWareHouse);
    }
    if (_instance.codeCard) {
      _writer.writeString(12, _instance.codeCard);
    }
    if (_instance.quantity) {
      _writer.writeInt64String(13, _instance.quantity);
    }
    if (_instance.codeReason) {
      _writer.writeString(14, _instance.codeReason);
    }
    if (_instance.nameReason) {
      _writer.writeString(15, _instance.nameReason);
    }
    if (_instance.weight) {
      _writer.writeInt64String(16, _instance.weight);
    }
    if (_instance.idPackingUnit) {
      _writer.writeInt32(17, _instance.idPackingUnit);
    }
    if (_instance.namePackingUnit) {
      _writer.writeString(18, _instance.namePackingUnit);
    }
  }

  private _idCardDetail?: number;
  private _codeProduct?: string;
  private _nameProduct?: string;
  private _idTypeProduct?: number;
  private _nameTypeProduct?: string;
  private _codeTypePacket?: string;
  private _nameTypePacket?: string;
  private _codeParcel?: string;
  private _nameParcel?: string;
  private _codeWareHouse?: string;
  private _nameWareHouse?: string;
  private _codeCard?: string;
  private _quantity?: string;
  private _codeReason?: string;
  private _nameReason?: string;
  private _weight?: string;
  private _idPackingUnit?: number;
  private _namePackingUnit?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CardDetailInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<CardDetailInfo.AsObject>) {
    _value = _value || {};
    this.idCardDetail = _value.idCardDetail;
    this.codeProduct = _value.codeProduct;
    this.nameProduct = _value.nameProduct;
    this.idTypeProduct = _value.idTypeProduct;
    this.nameTypeProduct = _value.nameTypeProduct;
    this.codeTypePacket = _value.codeTypePacket;
    this.nameTypePacket = _value.nameTypePacket;
    this.codeParcel = _value.codeParcel;
    this.nameParcel = _value.nameParcel;
    this.codeWareHouse = _value.codeWareHouse;
    this.nameWareHouse = _value.nameWareHouse;
    this.codeCard = _value.codeCard;
    this.quantity = _value.quantity;
    this.codeReason = _value.codeReason;
    this.nameReason = _value.nameReason;
    this.weight = _value.weight;
    this.idPackingUnit = _value.idPackingUnit;
    this.namePackingUnit = _value.namePackingUnit;
    CardDetailInfo.refineValues(this);
  }
  get idCardDetail(): number | undefined {
    return this._idCardDetail;
  }
  set idCardDetail(value: number | undefined) {
    this._idCardDetail = value;
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
  get codeCard(): string | undefined {
    return this._codeCard;
  }
  set codeCard(value: string | undefined) {
    this._codeCard = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
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
  get weight(): string | undefined {
    return this._weight;
  }
  set weight(value: string | undefined) {
    this._weight = value;
  }
  get idPackingUnit(): number | undefined {
    return this._idPackingUnit;
  }
  set idPackingUnit(value: number | undefined) {
    this._idPackingUnit = value;
  }
  get namePackingUnit(): string | undefined {
    return this._namePackingUnit;
  }
  set namePackingUnit(value: string | undefined) {
    this._namePackingUnit = value;
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
      idCardDetail: this.idCardDetail,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      nameParcel: this.nameParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      codeCard: this.codeCard,
      quantity: this.quantity,
      codeReason: this.codeReason,
      nameReason: this.nameReason,
      weight: this.weight,
      idPackingUnit: this.idPackingUnit,
      namePackingUnit: this.namePackingUnit
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
      idCardDetail: this.idCardDetail,
      codeProduct: this.codeProduct,
      nameProduct: this.nameProduct,
      idTypeProduct: this.idTypeProduct,
      nameTypeProduct: this.nameTypeProduct,
      codeTypePacket: this.codeTypePacket,
      nameTypePacket: this.nameTypePacket,
      codeParcel: this.codeParcel,
      nameParcel: this.nameParcel,
      codeWareHouse: this.codeWareHouse,
      nameWareHouse: this.nameWareHouse,
      codeCard: this.codeCard,
      quantity: this.quantity,
      codeReason: this.codeReason,
      nameReason: this.nameReason,
      weight: this.weight,
      idPackingUnit: this.idPackingUnit,
      namePackingUnit: this.namePackingUnit
    };
  }
}
export module CardDetailInfo {
  /**
   * Standard JavaScript object representation for CardDetailInfo
   */
  export interface AsObject {
    idCardDetail?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    nameParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    codeCard?: string;
    quantity?: string;
    codeReason?: string;
    nameReason?: string;
    weight?: string;
    idPackingUnit?: number;
    namePackingUnit?: string;
  }

  /**
   * Protobuf JSON representation for CardDetailInfo
   */
  export interface AsProtobufJSON {
    idCardDetail?: number;
    codeProduct?: string;
    nameProduct?: string;
    idTypeProduct?: number;
    nameTypeProduct?: string;
    codeTypePacket?: string;
    nameTypePacket?: string;
    codeParcel?: string;
    nameParcel?: string;
    codeWareHouse?: string;
    nameWareHouse?: string;
    codeCard?: string;
    quantity?: string;
    codeReason?: string;
    nameReason?: string;
    weight?: string;
    idPackingUnit?: number;
    namePackingUnit?: string;
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
    _instance.card = _instance.card || undefined;
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
          _instance.card = new CardInfo();
          _reader.readMessage(
            _instance.card,
            CardInfo.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new CardDetailInfo();
          _reader.readMessage(
            messageInitializer2,
            CardDetailInfo.deserializeBinaryFromReader
          );
          (_instance.cardDetails = _instance.cardDetails || []).push(
            messageInitializer2
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
    if (_instance.card) {
      _writer.writeMessage(
        1,
        _instance.card as any,
        CardInfo.serializeBinaryToWriter
      );
    }
    if (_instance.cardDetails && _instance.cardDetails.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.cardDetails as any,
        CardDetailInfo.serializeBinaryToWriter
      );
    }
  }

  private _card?: CardInfo;
  private _cardDetails?: CardDetailInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InsertCardRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<InsertCardRequest.AsObject>) {
    _value = _value || {};
    this.card = _value.card ? new CardInfo(_value.card) : undefined;
    this.cardDetails = (_value.cardDetails || []).map(
      m => new CardDetailInfo(m)
    );
    InsertCardRequest.refineValues(this);
  }
  get card(): CardInfo | undefined {
    return this._card;
  }
  set card(value: CardInfo | undefined) {
    this._card = value;
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
      card: this.card ? this.card.toObject() : undefined,
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
      card: this.card ? this.card.toProtobufJSON(options) : null,
      cardDetails: (this.cardDetails || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module InsertCardRequest {
  /**
   * Standard JavaScript object representation for InsertCardRequest
   */
  export interface AsObject {
    card?: CardInfo.AsObject;
    cardDetails?: CardDetailInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for InsertCardRequest
   */
  export interface AsProtobufJSON {
    card?: CardInfo.AsProtobufJSON | null;
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
    _instance.idTask = _instance.idTask || '0';
    _instance.date = _instance.date || '';
    _instance.nameShift = _instance.nameShift || '';
    _instance.createdPerson = _instance.createdPerson || '';
    _instance.namePreatedPerson = _instance.namePreatedPerson || '';
    _instance.sender = _instance.sender || '';
    _instance.recipient = _instance.recipient || '';
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
          _instance.idTask = _reader.readInt64String();
          break;
        case 2:
          _instance.date = _reader.readString();
          break;
        case 3:
          _instance.nameShift = _reader.readString();
          break;
        case 4:
          _instance.createdPerson = _reader.readString();
          break;
        case 5:
          _instance.namePreatedPerson = _reader.readString();
          break;
        case 6:
          _instance.sender = _reader.readString();
          break;
        case 7:
          _instance.recipient = _reader.readString();
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
      _writer.writeInt64String(1, _instance.idTask);
    }
    if (_instance.date) {
      _writer.writeString(2, _instance.date);
    }
    if (_instance.nameShift) {
      _writer.writeString(3, _instance.nameShift);
    }
    if (_instance.createdPerson) {
      _writer.writeString(4, _instance.createdPerson);
    }
    if (_instance.namePreatedPerson) {
      _writer.writeString(5, _instance.namePreatedPerson);
    }
    if (_instance.sender) {
      _writer.writeString(6, _instance.sender);
    }
    if (_instance.recipient) {
      _writer.writeString(7, _instance.recipient);
    }
  }

  private _idTask?: string;
  private _date?: string;
  private _nameShift?: string;
  private _createdPerson?: string;
  private _namePreatedPerson?: string;
  private _sender?: string;
  private _recipient?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TaskInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<TaskInfo.AsObject>) {
    _value = _value || {};
    this.idTask = _value.idTask;
    this.date = _value.date;
    this.nameShift = _value.nameShift;
    this.createdPerson = _value.createdPerson;
    this.namePreatedPerson = _value.namePreatedPerson;
    this.sender = _value.sender;
    this.recipient = _value.recipient;
    TaskInfo.refineValues(this);
  }
  get idTask(): string | undefined {
    return this._idTask;
  }
  set idTask(value: string | undefined) {
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
  get namePreatedPerson(): string | undefined {
    return this._namePreatedPerson;
  }
  set namePreatedPerson(value: string | undefined) {
    this._namePreatedPerson = value;
  }
  get sender(): string | undefined {
    return this._sender;
  }
  set sender(value: string | undefined) {
    this._sender = value;
  }
  get recipient(): string | undefined {
    return this._recipient;
  }
  set recipient(value: string | undefined) {
    this._recipient = value;
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
      date: this.date,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
      namePreatedPerson: this.namePreatedPerson,
      sender: this.sender,
      recipient: this.recipient
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
      date: this.date,
      nameShift: this.nameShift,
      createdPerson: this.createdPerson,
      namePreatedPerson: this.namePreatedPerson,
      sender: this.sender,
      recipient: this.recipient
    };
  }
}
export module TaskInfo {
  /**
   * Standard JavaScript object representation for TaskInfo
   */
  export interface AsObject {
    idTask?: string;
    date?: string;
    nameShift?: string;
    createdPerson?: string;
    namePreatedPerson?: string;
    sender?: string;
    recipient?: string;
  }

  /**
   * Protobuf JSON representation for TaskInfo
   */
  export interface AsProtobufJSON {
    idTask?: string;
    date?: string;
    nameShift?: string;
    createdPerson?: string;
    namePreatedPerson?: string;
    sender?: string;
    recipient?: string;
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
    _instance.codeEquipmentLoad = _instance.codeEquipmentLoad || '';
    _instance.codeEquipmentUnLoad = _instance.codeEquipmentUnLoad || '';
    _instance.quantity = _instance.quantity || 0;
    _instance.distance = _instance.distance || 0;
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
          _instance.codeEquipmentLoad = _reader.readString();
          break;
        case 9:
          _instance.codeEquipmentUnLoad = _reader.readString();
          break;
        case 10:
          _instance.quantity = _reader.readInt32();
          break;
        case 11:
          _instance.distance = _reader.readInt32();
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
    if (_instance.codeEquipmentLoad) {
      _writer.writeString(8, _instance.codeEquipmentLoad);
    }
    if (_instance.codeEquipmentUnLoad) {
      _writer.writeString(9, _instance.codeEquipmentUnLoad);
    }
    if (_instance.quantity) {
      _writer.writeInt32(10, _instance.quantity);
    }
    if (_instance.distance) {
      _writer.writeInt32(11, _instance.distance);
    }
  }

  private _idTaskDetail?: number;
  private _codeProduct?: string;
  private _idTypeProduct?: number;
  private _codeTypePacket?: string;
  private _codeWork?: string;
  private _codeWareHouseload?: string;
  private _codeWareHouseUnload?: string;
  private _codeEquipmentLoad?: string;
  private _codeEquipmentUnLoad?: string;
  private _quantity?: number;
  private _distance?: number;

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
    this.codeEquipmentLoad = _value.codeEquipmentLoad;
    this.codeEquipmentUnLoad = _value.codeEquipmentUnLoad;
    this.quantity = _value.quantity;
    this.distance = _value.distance;
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
      codeEquipmentLoad: this.codeEquipmentLoad,
      codeEquipmentUnLoad: this.codeEquipmentUnLoad,
      quantity: this.quantity,
      distance: this.distance
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
      codeEquipmentLoad: this.codeEquipmentLoad,
      codeEquipmentUnLoad: this.codeEquipmentUnLoad,
      quantity: this.quantity,
      distance: this.distance
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
    codeEquipmentLoad?: string;
    codeEquipmentUnLoad?: string;
    quantity?: number;
    distance?: number;
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
    codeEquipmentLoad?: string;
    codeEquipmentUnLoad?: string;
    quantity?: number;
    distance?: number;
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
