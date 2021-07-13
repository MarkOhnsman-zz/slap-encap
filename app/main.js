import GameController from "./Controllers/GameController";

console.log(1)
class App {
  gameController = new GameController()
}

window["app"] = new App();
