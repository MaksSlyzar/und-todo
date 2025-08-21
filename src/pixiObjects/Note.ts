import { Graphics } from "pixi.js";
import type ObjectManager from "../ObjectManager";
import { Component } from "./Component";

function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

class Note extends Component {
  title: string;
  description: string;
  image: string;
  //Animation
  isAnimation: boolean = false;
  movetoPosition: {
    x: number,
    y: number,
  } = { x: 0, y: 0 };

  constructor(objectsManager: ObjectManager) {
    super(objectsManager);
    this.title = "";
    this.description = "";
    this.image = "";

    const bg = new Graphics()
      .roundRect(0, 0, 200, 200, 20)
      .fill(0xF5F5F5)

    this.addChild(bg);
  }

  moveAnimated(dx: number, dy: number) {
    this.isAnimation = true;
    this.movetoPosition = { x: dx, y: dy };
  }

  update(delta: number): void {
    if (this.isAnimation) {
      this.x = lerp(this.x, this.movetoPosition.x, 0.5);
      this.y = lerp(this.y, this.movetoPosition.y, 0.5);
    }
  }
}

export default Note;
