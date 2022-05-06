import * as logging from './Logger';
import Socket from 'socket.io';

export interface IClient {
  name: string;
  code: string;
  role: 'player' | 'host';
  phase: string;
  socketID: string;
}

export interface IPlayer extends IClient {
  score: number;

  nextPhase(): void;
}

export interface IHost extends IClient {
  tmp: number;
}

export type PhaseSequence = {
  [phase: string]: (payload: never) => void;
};

enum Phase {
  'initial'
}

interface IPhase<T> {
  phase: T,
  phaseIndex: number,
}

interface IGameData {
  minimumPlayerCount: number;
  maximumPlayerCount: number;
  leader: IPlayer;
  phases<T>(): IPhase<T>;
  phaseIndex: number;
}

interface ITShirtGameData extends IGameData {

}

interface IPhase<T> {
  phases: T,
  phaseIndex: number,
}

export class GameManager {
  private static instance: GameManager;
  private games: { [code: string]: Game | undefined } = {};

  private constructor() {
    return;
  }

  public static getInstance(): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }

    return GameManager.instance;
  }

  public route(client: IPlayer | IHost, payload: never) {
    if (client.role === 'player') {
      this.games[client.code]?.updatePlayer(client as IPlayer)[client.phase](payload);
    } else if (client.role === 'host') {
      this.games[client.code]?.updateHost(client as IHost)[client.phase](payload);
    }
  }

  public newGame(game: Game): string {
    const id = this._generateGameID();
    this.games[id] = game;
    return id;
  }

  public destroyGame(id: string) {
    this.games[id] = undefined;
  }

  private _generateGameID = (): string => String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

export abstract class Game {
  /* Game Data */
  protected abstract gameData: IGameData;

  protected players: { [name: string]: IPlayer } = {};

  protected opcodes: { [opcode: number]: (payload: never) => void } = {
    0x69: payload => { /* Mod Score */
      if (payload['name'] && payload['score']) {
        this.players[payload['name']].score = payload['score'];
      } else {
        logging.critical('Missing A Key:Value Pair on payload');
      }
    },
  };

  protected constructor(gameTitle: string) {
    logging.info(`Created New Game: ${gameTitle}`);
  }

  protected getPlayers = (): IPlayer[] => {
    return Object.values(this.players);
  };

  protected addPlayer = <PlayerType extends IPlayer>
  (name: string, player: PlayerType): IPlayer => {
    player.nextPhase = () => {
      player.phase = this.gameData.phases[++this.gameData.phaseIndex];
    };
    return this.players[name] = player;
  };

  abstract updatePlayer(player: IPlayer): PhaseSequence;

  abstract updateHost(host: IHost): PhaseSequence;
}

/*
User-End:
  MUST implement:
    "Room Full" message
    "Something Went Wrong..." message
    "Join Successful" message
    "blank" message (no data to input)
  MUST implement (debug):
    "Phase not implemented" message
    "Unexpected message" message

Back-End:
  MUST implement:

  MUST implement (debug):
    "Unexpected payload data" message
 */
