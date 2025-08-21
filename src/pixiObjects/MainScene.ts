import { Application, Container, Text, Ticker } from "pixi.js";
import CanvasEvents from "../CanvasEvents";

class MainScene extends Container {
  cameraSpeed: number = 2.5;

  constructor(app: Application) {
    super();
    app.stage.addChild(this);

    const text = new Text({
      text: "Hello world",
      x: 100,
      y: 200,
    });
    this.addChild(text);
  }

  public update(time: Ticker) {
    const moveHor = CanvasEvents.isKeyDown("a") ? -1 : CanvasEvents.isKeyDown("d") ? +1 : 0;
    const moveVer = CanvasEvents.isKeyDown("w") ? -1 : CanvasEvents.isKeyDown("s") ? +1 : 0;
    this.moveCamera(moveHor, moveVer, time.deltaTime);
  }

  private moveCamera(dx: number, dy: number, deltaTime: number = 1) {
    this.x -= dx * this.cameraSpeed * deltaTime;
    this.y -= dy * this.cameraSpeed * deltaTime;
  }

  // private moveCameraTo(x: number, y: number) { }
}

export default MainScene;
