import { Application, Text } from "pixi.js";
import CanvasEvents from "../CanvasEvents";
import AddButton from "./AddButton";
import ObjectManager from "../ObjectManager";
import { Component } from "./Component";
import NotesView from "./NotesView";

class MainScene extends Component {
  private cameraSpeed: number = 2.5;
  private addButton: AddButton;

  constructor(app: Application, objectManager: ObjectManager) {
    super(objectManager);
    app.stage.addChild(this);

    const text = new Text({
      text: "Hello world",
      x: 100,
      y: 200,
    });
    this.addChild(text);

    const notesView = new NotesView(objectManager);
    this.addChild(notesView);
    objectManager.add("notes-view", notesView);

    this.addButton = new AddButton(objectManager);
    app.stage.addChild(this.addButton);
    objectManager.add("add-button", this.addButton);
  }

  public update(time: number) {
    const moveHor = CanvasEvents.isKeyDown("a") ? -1 : CanvasEvents.isKeyDown("d") ? +1 : 0;
    const moveVer = CanvasEvents.isKeyDown("w") ? -1 : CanvasEvents.isKeyDown("s") ? +1 : 0;
    this.moveCamera(moveHor, moveVer, time);
  }

  private moveCamera(dx: number, dy: number, deltaTime: number = 1) {
    this.x -= dx * this.cameraSpeed * deltaTime;
    this.y -= dy * this.cameraSpeed * deltaTime;
  }

  // private moveCameraTo(x: number, y: number) { }
}

export default MainScene;
