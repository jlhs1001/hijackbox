import fs from 'fs';
import path from 'path';
export function debug(message) {
    basicLog(message, 'WARNING');
}
export function info(message) {
    basicLog(message, 'WARNING');
}
export function warning(message) {
    basicLog(message, 'WARNING');
}
export function error(message) {
    basicLog(message, 'WARNING');
}
export function critical(message) {
    basicLog(message, 'WARNING');
}
function basicLog(message, loglevel) {
    const logfile = path.join(__dirname, 'logs', `${new Date().getUTCFullYear()}`, `${new Date().getUTCMonth()}`, `${new Date().getUTCDay()}`);
    console.log(logfile);
    const stream = fs.createWriteStream(logfile, { flags: 'a' });
    stream.write(`${new Date().toISOString()}:${loglevel}:${message}`);
    stream.end();
}
import { origin, port,
// ClientToServerEvents,
// ServerToClientEvents,
// InterServerEvents,
// SocketData,
 } from 'global';
import { createServer, } from 'http';
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
