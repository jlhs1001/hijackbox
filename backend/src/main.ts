import fs from 'fs';
import path from 'path';

export function debug(message: string) {
  basicLog(message, 'WARNING');
}

export function info(message: string) {
  basicLog(message, 'WARNING');
}

export function warning(message: string) {
  basicLog(message, 'WARNING');
}

export function error(message: string) {
  basicLog(message, 'WARNING');
}

export function critical(message: string) {
  basicLog(message, 'WARNING');
}

function basicLog(message: string, loglevel: string) {
  const logfile = path.join(
    __dirname,
    'logs',
    `${new Date().getUTCFullYear()}`,
    `${new Date().getUTCMonth()}`,
    `${new Date().getUTCDay()}`,
  );

  console.log(logfile);

  const stream = fs.createWriteStream(logfile, { flags: 'a' });
  stream.write(`${new Date().toISOString()}:${loglevel}:${message}`);
  stream.end();
}

import {
  port,
  origin,
} from "hjb-global";

import {
  createServer,
} from 'http';

import express from 'express';
// import { Server } from 'socket.io';

const server = createServer();
// const io = new Server<ClientToServerEvents, ServerToClientEvents,
//   InterServerEvents, SocketData>(server, {
//   cors: {
//     origin: origin,
//     allowedHeaders: ['opcode'],
//     credentials: true,
//   },
// });



const app = express(server);

app.get('/', (_, res) => {
  res.send('hello world');
  console.log("hola");
  info("hello world!");
});

app.listen(port, () => {
  console.log(`app listening at ${origin}`);
});
