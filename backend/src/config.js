"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.origin = exports.port = void 0;
exports.port = process.env.PORT || 3000;
exports.origin = `http://localhost:${exports.port}`;
