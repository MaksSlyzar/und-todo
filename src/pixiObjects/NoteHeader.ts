import { Graphics } from "pixi.js";
import type ObjectManager from "../ObjectManager";
import { Component } from "./Component";

class NoteHeader extends Component {
  constructor(objectManager: ObjectManager) {
    super(objectManager);

    const headerGh = new Graphics()
      .roundRect(0, 0, 200, 30, 10)
      .fill(0x80BFFF);
    this.addChild(headerGh);

  }

  update(delta: number): void {

  }
}

export default NoteHeader;
