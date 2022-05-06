import express from 'express';

import * as logger from './Logger';
import * as game from './Game';
import { port, origin } from './config';
import {
  server,
  io,
  initializeRouter
} from "./Router";


// const io = new Server<ClientToServerEvents, ServerToClientEvents,
//   InterServerEvents, SocketData>(server, {
//   cors: {
//     origin: origin,
//     allowedHeaders: ['opcode'],
//     credentials: true,
//   },
// });

initializeRouter();

