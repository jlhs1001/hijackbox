import React, { useEffect, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { io, Socket } from "socket.io-client";

export interface ServerToClientEvents {
  nil: () => void;
  updateScore: (score: number) => void;
}

export interface ClientToServerEvents {
  nil: () => void;

}

const Game = () => {
  const { pathname } = useLocation();
  const [emitValue, setEmitValue] = useState(false);

  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:3000", {
    withCredentials: false,
    extraHeaders: {
      "phase": "initial",

    }
  });

  useEffect(() => {
    socket.emit("nil");
  }, [emitValue]);

  return (
    <div>
      <button onClick={() => setEmitValue(true)}></button>
    </div>
  );
};

export default Game;
