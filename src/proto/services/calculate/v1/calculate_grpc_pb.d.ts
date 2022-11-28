// package: services.calculate.v1
// file: services/calculate/v1/calculate.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_calculate_v1_calculate_pb from "../../../services/calculate/v1/calculate_pb";
import * as calculator_v1_calculator_pb from "../../../calculator/v1/calculator_pb";

interface ICalculateService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addition: ICalculateService_Iaddition;
    division: ICalculateService_Idivision;
    additions: ICalculateService_Iadditions;
}

interface ICalculateService_Iaddition extends grpc.MethodDefinition<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response> {
    path: "/services.calculate.v1.Calculate/addition";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_calculate_v1_calculate_pb.Request>;
    requestDeserialize: grpc.deserialize<services_calculate_v1_calculate_pb.Request>;
    responseSerialize: grpc.serialize<services_calculate_v1_calculate_pb.Response>;
    responseDeserialize: grpc.deserialize<services_calculate_v1_calculate_pb.Response>;
}
interface ICalculateService_Idivision extends grpc.MethodDefinition<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response> {
    path: "/services.calculate.v1.Calculate/division";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_calculate_v1_calculate_pb.Request>;
    requestDeserialize: grpc.deserialize<services_calculate_v1_calculate_pb.Request>;
    responseSerialize: grpc.serialize<services_calculate_v1_calculate_pb.Response>;
    responseDeserialize: grpc.deserialize<services_calculate_v1_calculate_pb.Response>;
}
interface ICalculateService_Iadditions extends grpc.MethodDefinition<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response> {
    path: "/services.calculate.v1.Calculate/additions";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<services_calculate_v1_calculate_pb.Request>;
    requestDeserialize: grpc.deserialize<services_calculate_v1_calculate_pb.Request>;
    responseSerialize: grpc.serialize<services_calculate_v1_calculate_pb.Response>;
    responseDeserialize: grpc.deserialize<services_calculate_v1_calculate_pb.Response>;
}

export const CalculateService: ICalculateService;

export interface ICalculateServer extends grpc.UntypedServiceImplementation {
    addition: grpc.handleUnaryCall<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response>;
    division: grpc.handleUnaryCall<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response>;
    additions: grpc.handleBidiStreamingCall<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response>;
}

export interface ICalculateClient {
    addition(request: services_calculate_v1_calculate_pb.Request, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    addition(request: services_calculate_v1_calculate_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    addition(request: services_calculate_v1_calculate_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    division(request: services_calculate_v1_calculate_pb.Request, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    division(request: services_calculate_v1_calculate_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    division(request: services_calculate_v1_calculate_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    additions(): grpc.ClientDuplexStream<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response>;
    additions(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response>;
    additions(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response>;
}

export class CalculateClient extends grpc.Client implements ICalculateClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addition(request: services_calculate_v1_calculate_pb.Request, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    public addition(request: services_calculate_v1_calculate_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    public addition(request: services_calculate_v1_calculate_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    public division(request: services_calculate_v1_calculate_pb.Request, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    public division(request: services_calculate_v1_calculate_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    public division(request: services_calculate_v1_calculate_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_calculate_v1_calculate_pb.Response) => void): grpc.ClientUnaryCall;
    public additions(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response>;
    public additions(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<services_calculate_v1_calculate_pb.Request, services_calculate_v1_calculate_pb.Response>;
}
