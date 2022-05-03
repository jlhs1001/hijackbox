import {
  origin,
  port,
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from 'global';

import {
  createServer,
} from 'http';

import express from 'express';
import { Server } from 'socket.io';

const server = createServer();
const io = new Server<ClientToServerEvents, ServerToClientEvents,
  InterServerEvents, SocketData>(server, {
  cors: {
    origin: origin,
    allowedHeaders: ['opcode'],
    credentials: true,
  },
});



const app = express(server);

app.get('/', (_, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`app listening at ${origin}`);
});
