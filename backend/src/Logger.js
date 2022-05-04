"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.critical = exports.error = exports.warning = exports.info = exports.debug = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
function debug(message) {
    basicLog(message, 'DEBUG:     ');
}
exports.debug = debug;
function info(message) {
    basicLog(message, 'INFO:      ');
}
exports.info = info;
function warning(message) {
    basicLog(message, 'WARNING:   ');
}
exports.warning = warning;
function error(message) {
    basicLog(message, 'ERROR:     ');
}
exports.error = error;
function critical(message) {
    basicLog(message, 'CRITICAL:  ');
}
exports.critical = critical;
function basicLog(message, loglevel) {
    const logfile = path_1.default.join(__dirname, "../..", "src", "HiJackboxGameServices", "logs", `${new Date().getUTCFullYear()}`, `${new Date().getUTCMonth()}`, `${new Date().getUTCDay()}.log`);
    console.log(logfile);
    const stream = fs_1.default.createWriteStream(logfile, { flags: 'a+' });
    stream.write(`[${new Date().toISOString()}]::${loglevel}${message}\n`);
    stream.end();
}
exports.default = info;
