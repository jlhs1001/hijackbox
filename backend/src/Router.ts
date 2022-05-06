/*
Routes incoming socket requests to the proper game
 */

import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';
import { origin, port } from './config';
import cors from 'cors';
import * as game from './Game';

const app = express();
app.use(cors({
  origin: 'http://localhost:3001',
}));

export const server = createServer(app);

export const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, {
  cors: {
    origin: 'http://localhost:3001',
    allowedHeaders: ['phase'],
    credentials: false,
  },
});

const gameManager = game.GameManager.getInstance();

export function initializeRouter() {
  app.get('/', (_, res) => {
    res.send('hello world');
  });

  server.listen(port, () => {
    console.log(`app listening at ${origin}`);
  });

  io.on('connection', (socket) => {
    socket.on('data', (data: game.IPlayer | game.IHost) => {
      gameManager.route(data);
    });
  });
}

export interface ServerToClientEvents {
  nil: () => void;
}

export interface ClientToServerEvents {
  nil: () => void;
  data: (data: never) => void;
}

export interface InterServerEvents {
  nil: () => void;
}

export interface SocketData {
  name: string;
  code: string;
}
