import fs from 'fs';
import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export function debug(message: string) {
  basicLog(message, 'DEBUG:     ');
}

export function info(message: string) {
  basicLog(message, 'INFO:      ');
}

export function warning(message: string) {
  basicLog(message, 'WARNING:   ');
}

export function error(message: string) {
  basicLog(message, 'ERROR:     ');
}

export function critical(message: string) {
  basicLog(message, 'CRITICAL:  ');
}

function basicLog(message: string, loglevel: string) {
  const logfile = path.join(
    __dirname,
    "../..",
    "src",
    "HiJackboxGameServices",
    "logs",
    `${new Date().getUTCFullYear()}`,
    `${new Date().getUTCMonth()}`,
    `${new Date().getUTCDay()}.log`,
  );

  console.log(logfile);

  const stream = fs.createWriteStream(logfile, { flags: 'a+' });
  stream.write(`[${new Date().toISOString()}]::${loglevel}${message}\n`);
  stream.end();
}

export default info;
