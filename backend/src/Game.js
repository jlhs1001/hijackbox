"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface IPlayer {
//   name: string;
//   score: string;
// }
//
// class Game {
//   protected phases: { [name: string]: (player: IPlayer) => void };
//   protected players: { [name: string]: IPlayer };
//
//   protected opcodes: { [opcode: number]: (payload: never) => void } = {
//     0x69: payload => { /* Mod Score */
//       if (payload["name"] && payload["score"]) {
//         this.players[payload["name"]].score = payload["score"];
//       } else {
//         logging.critical("Missing Key:Value Pair on payload");
//       }
//     }
//   }
//
//   protected getPlayers = (): IPlayer[] => {
//     return Object.values(this.players);
//   }
// }
//
// class TShirtGame extends Game {
//   phases = {
//     "lobby": (player) => {
//       if (player) {
//         console.log(player.name);
//       }
//     }
//   }
//
//   constructor() {
//     super();
//   }
//
//   temp() {
//     console.log("game begin")
//   }
// }
//
// const tShirtGame = new TShirtGame();
// tShirtGame.temp();
