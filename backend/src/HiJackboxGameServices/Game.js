import * as logging from './Logger';
class Game {
    constructor() {
        this.opcodes = {
            0x69: payload => {
                if (payload["name"] && payload["score"]) {
                    this.players[payload["name"]].score = payload["score"];
                }
                else {
                    logging.critical("Missing Key:Value Pair on payload");
                }
            }
        };
        this.getPlayers = () => {
            return Object.values(this.players);
        };
    }
}
class TShirtGame extends Game {
    constructor() {
        super();
        this.phases = {
            "lobby": (player) => {
                if (player) {
                    console.log(player.name);
                }
            }
        };
    }
    temp() {
        console.log("game begin");
    }
}
const tShirtGame = new TShirtGame();
tShirtGame.temp();
