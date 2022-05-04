export const port = 3000;
export const origin = `http://localhost:${port}`;

export interface ServerToClientEvents {

}

export interface ClientToServerEvents {

}

export interface InterServerEvents {

}

export interface SocketData {
  name: string;
  code: string;
}

export const test = "hello world";