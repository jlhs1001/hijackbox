import {
  PhaseSequence,
  IPlayer,
  IPhase,
  IHost,
  Game,
} from './Game';

export interface TShirtGamePlayer extends IPlayer {
  temp: number;
}

export enum TShirtPhase {
  'initial'
}

export class TShirtGame extends Game {
  gameData = {
    minimumPlayerCount: 3,
    maximumPlayerCount: 8,
    phases: () => <IPhase>{
      'initial',
        'lobby',
        'hello',
    }
  };

  updatePlayer = (player: TShirtGamePlayer) => <PhaseSequence>{
    'initial': (payload) => {
      this.addPlayer(payload["name"], payload["playerData"]);
      player.nextPhase();
    },
    'lobby': () => {
      return;
    },
    'hello': () => {
      return;
    },
  };

  updateHost = (host: IHost) => <PhaseSequence>{
    'initial': () => {
      return;
    },
    'lobby': () => {
      return;
    }
  };
}
