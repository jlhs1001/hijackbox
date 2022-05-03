import React, { useEffect } from "react";
import { io } from "socket.io-client";

const Entry = () => {
  useEffect(() => {
    const socket = io();

  }, []);

  return (
    <div>
      Hello world
    </div>
  );
}

export default Entry;