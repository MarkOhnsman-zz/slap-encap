import { ProxyState } from "../AppState"

class GameService {
  // SECTION Phase 1
  // slap() {
  //   console.log(4)
  //   ProxyState.target.health--
  // }


  // SECTION Phase 2
  attack(type) {
    ProxyState.target.health -= ProxyState.fighter.attacks[type]
  }
}

export const gameService = new GameService()