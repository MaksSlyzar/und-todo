import type { Application, Ticker } from "pixi.js";
import MainScene from "./pixiObjects/MainScene";

class ObjectManager {
  app: Application;
  mainScene: MainScene;

  constructor(app: Application) {
    app.ticker.add((time) => this.update(time));
    this.app = app;
    this.mainScene = new MainScene(this.app);
  }

  update(time: Ticker) {
    this.mainScene.update(time);
  }
}

export default ObjectManager;
