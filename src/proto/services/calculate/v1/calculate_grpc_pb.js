// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_calculate_v1_calculate_pb = require('../../../services/calculate/v1/calculate_pb.js');
var calculator_v1_calculator_pb = require('../../../calculator/v1/calculator_pb.js');

function serialize_services_calculate_v1_Request(arg) {
  if (!(arg instanceof services_calculate_v1_calculate_pb.Request)) {
    throw new Error('Expected argument of type services.calculate.v1.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_calculate_v1_Request(buffer_arg) {
  return services_calculate_v1_calculate_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_calculate_v1_Response(arg) {
  if (!(arg instanceof services_calculate_v1_calculate_pb.Response)) {
    throw new Error('Expected argument of type services.calculate.v1.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_calculate_v1_Response(buffer_arg) {
  return services_calculate_v1_calculate_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculateService = exports.CalculateService = {
  addition: {
    path: '/services.calculate.v1.Calculate/addition',
    requestStream: false,
    responseStream: false,
    requestType: services_calculate_v1_calculate_pb.Request,
    responseType: services_calculate_v1_calculate_pb.Response,
    requestSerialize: serialize_services_calculate_v1_Request,
    requestDeserialize: deserialize_services_calculate_v1_Request,
    responseSerialize: serialize_services_calculate_v1_Response,
    responseDeserialize: deserialize_services_calculate_v1_Response,
  },
  division: {
    path: '/services.calculate.v1.Calculate/division',
    requestStream: false,
    responseStream: false,
    requestType: services_calculate_v1_calculate_pb.Request,
    responseType: services_calculate_v1_calculate_pb.Response,
    requestSerialize: serialize_services_calculate_v1_Request,
    requestDeserialize: deserialize_services_calculate_v1_Request,
    responseSerialize: serialize_services_calculate_v1_Response,
    responseDeserialize: deserialize_services_calculate_v1_Response,
  },
  additions: {
    path: '/services.calculate.v1.Calculate/additions',
    requestStream: true,
    responseStream: true,
    requestType: services_calculate_v1_calculate_pb.Request,
    responseType: services_calculate_v1_calculate_pb.Response,
    requestSerialize: serialize_services_calculate_v1_Request,
    requestDeserialize: deserialize_services_calculate_v1_Request,
    responseSerialize: serialize_services_calculate_v1_Response,
    responseDeserialize: deserialize_services_calculate_v1_Response,
  },
};

exports.CalculateClient = grpc.makeGenericClientConstructor(CalculateService);
