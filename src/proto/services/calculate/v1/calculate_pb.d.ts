// package: services.calculate.v1
// file: services/calculate/v1/calculate.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as calculator_v1_calculator_pb from "../../../calculator/v1/calculator_pb";

export class Request extends jspb.Message { 
    getOperation(): calculator_v1_calculator_pb.Operation;
    setOperation(value: calculator_v1_calculator_pb.Operation): Request;
    getOperatorFirst(): number;
    setOperatorFirst(value: number): Request;
    getOperatorSecond(): number;
    setOperatorSecond(value: number): Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
    export type AsObject = {
        operation: calculator_v1_calculator_pb.Operation,
        operatorFirst: number,
        operatorSecond: number,
    }
}

export class Response extends jspb.Message { 
    getResult(): number;
    setResult(value: number): Response;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
        result: number,
    }
}
