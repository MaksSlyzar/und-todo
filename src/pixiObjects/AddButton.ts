import { Graphics, Text } from "pixi.js";
import { Component } from "./Component";
import { Button } from "@pixi/ui";
import CanvasEvents from "../CanvasEvents";

class AddButton extends Component {
  button: Button;

  constructor() {
    super();
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
