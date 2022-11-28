import { Server, ServerCredentials, ServerUnaryCall } from '@grpc/grpc-js';

import { CalculateService } from './proto/services/calculate/v1/calculate_grpc_pb';
import { addition, division, additions } from './implementation';

const server = new Server()

server.addService(CalculateService, { addition, division, additions });

server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
  server.start();

  console.log('server is running on 0.0.0.0:4000');
});
