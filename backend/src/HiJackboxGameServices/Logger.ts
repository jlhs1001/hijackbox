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

  const stream = fs.createWriteStream(logfile, { flags: 'a' });
  stream.write(`${new Date().toISOString()}:${loglevel}:${message}`);
  stream.end();
}
