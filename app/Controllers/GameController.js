import { gameService } from "../Services/GameService";

function _draw() {
  // code omitted
}

export default class GameController {
  constructor() {
    console.log(2)
    // gameService.start()
  }
  // SECTION Phase 1
  // slap() {
  //   console.log(3)
  //   gameService.slap()
  //   _draw()
  // }

  attack(type) {
    gameService.attack(type)
    _draw()
  }
}