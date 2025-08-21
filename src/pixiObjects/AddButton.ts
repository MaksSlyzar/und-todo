import { Graphics, Text } from "pixi.js";
import { Component } from "./Component";
import { Button } from "@pixi/ui";
import CanvasEvents from "../CanvasEvents";
import type ObjectManager from "../ObjectManager";
import type NotesView from "./NotesView";

class AddButton extends Component {
  button: Button;
  constructor(objectsManager: ObjectManager) {
    super(objectsManager);
    const bg = new Graphics()
      .roundRect(0, 0, 100, 100, 20)
      .fill({ color: 0xFF8800 });

    const label = new Text("+", {
      fontSize: 64,
      fill: 0xFFFFFF,
      fontWeight: "600"
    });
    label.anchor.set(0.5);
    label.x = 50;
    label.y = 50;

    bg.addChild(label);

    this.button = new Button(bg);
    this.addChild(this.button.view);

    this.button.onPress.connect(() => this.onClick());
  }

  onClick = () => {
    const notesView = this.objectManager.get<NotesView>("notes-view");
    if (notesView) {
      notesView.createNewNote();
    }
  }

  update(time: number) {
    const canvasSize = CanvasEvents.getCanvasSize();

    if (canvasSize == null)
      return;

    this.position.set(canvasSize.width - 150, canvasSize.height - 150);

    return time;
  }
}

export default AddButton;
