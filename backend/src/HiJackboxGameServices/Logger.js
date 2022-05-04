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
    const stream = fs.createWriteStream(logfile, { flags: 'a' });
    stream.write(`${new Date().toISOString()}:${loglevel}:${message}`);
    stream.end();
}
