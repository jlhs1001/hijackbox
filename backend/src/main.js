"use strict";
// import { fileURLToPath } from 'url';
// import fs from 'fs';
// import path, {
//   dirname
// } from 'path';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const Logger_1 = __importDefault(require("./Logger"));
const config_1 = require("./config");
// import { Server } from 'socket.io';
const server = (0, http_1.createServer)();
// const io = new Server<ClientToServerEvents, ServerToClientEvents,
//   InterServerEvents, SocketData>(server, {
//   cors: {
//     origin: origin,
//     allowedHeaders: ['opcode'],
//     credentials: true,
//   },
// });
const app = (0, express_1.default)();
app.get('/', (_, res) => {
    res.send('hello world');
    console.log("hola");
    (0, Logger_1.default)("test");
});
app.get('/game', (_, res) => {
    res.send('the game');
    console.log("aaa");
    (0, Logger_1.default)("test");
});
app.listen(config_1.port, () => {
    console.log(`app listening at ${origin}`);
});
