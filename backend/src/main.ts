// import { fileURLToPath } from 'url';
// import fs from 'fs';
// import path, {
//   dirname
// } from 'path';




import {
  createServer, Server,
} from 'http';

import express from 'express';

import { info } from './Logger';
import { port, origin } from './config';
// import { Server } from 'socket.io';

const server = createServer() as Server;
// const io = new Server<ClientToServerEvents, ServerToClientEvents,
//   InterServerEvents, SocketData>(server, {
//   cors: {
//     origin: origin,
//     allowedHeaders: ['opcode'],
//     credentials: true,
//   },
// });



const app = express();

app.get('/', (_, res) => {
  res.send('hello world');
  console.log("hola");
  info("test");
});

app.get('/game', (_, res) => {
  res.send({abc: {hello:{one: 1}}});
  console.log("aaa");
  info("test");
});

app.listen(port, () => {
  console.log(`app listening at ${origin}`);
});

