import { ServerUnaryCall, ServerDuplexStream, sendUnaryData, status } from '@grpc/grpc-js';

import { Operation } from '../proto/calculator/v1/calculator_pb';
import { Request, Response } from '../proto/services/calculate/v1/calculate_pb';
import { add, divide } from '../logic';

const addition = (
  call: ServerUnaryCall<Request, Response>,
  callback: sendUnaryData<Response>,
) => {
  try {
    const operation = call.request.getOperation();
    const operatorFirst = call.request.getOperatorFirst();
    const operatorSecond = call.request.getOperatorSecond();

    // const headers = call.metadata.getMap()
    // console.log({headers});

    if (operation !== Operation.ADDITION) {
      throw new Error(
        `Invalid operation. Sent: ${operation} want: ${Operation.ADDITION}`,
      );
    }

    const result = add(operatorFirst, operatorSecond);
    const response = new Response().setResult(result);

    callback(null, response);
  } catch (error) {
    callback({
      message: error as string,
      code: status.INVALID_ARGUMENT,
    });
  }
};

const division = (
  call: ServerUnaryCall<Request, Response>,
  callback: sendUnaryData<Response>
) => {
  try {
    const operation = call.request.getOperation();
    const operatorFirst = call.request.getOperatorFirst();
    const operatorSecond = call.request.getOperatorSecond();

    if (operation !== Operation.DIVISION) {
      throw new Error(
        `Invalid operation. Sent: ${operation} want: ${Operation.DIVISION}`,
      );
    }

    const result = divide(operatorFirst, operatorSecond);
    const response = new Response().setResult(result);

    callback(null, response);
  }
  catch (error) {
    callback({
      message: error as string,
      code: status.INVALID_ARGUMENT,
    });
  }
}

const additions = ( call: ServerDuplexStream<Request, Response>,) => {
  call.on('data', (request: Request) => {
    try {
      const operation = request.getOperation();
      const operatorFirst = request.getOperatorFirst();
      const operatorSecond = request.getOperatorSecond();

      if (operation !== Operation.ADDITION) {
        throw new Error(
          `Invalid operation. Sent: ${operation} want: ${Operation.ADDITION}`,
        );
      }

      const result = add(operatorFirst, operatorSecond);
      const response = new Response().setResult(result);
      call.write(response);
    } catch (error) {
      call.write(new Response().setResult(NaN))
    }
  });
  call.on('end', () => call.end());
}

export { addition, division, additions };
