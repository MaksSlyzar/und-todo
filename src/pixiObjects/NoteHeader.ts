import { Graphics } from "pixi.js";
import type ObjectManager from "../ObjectManager";
import { Component } from "./Component";
import { Input } from "@pixi/ui";

class NoteHeader extends Component {
  titleInput: Input;

  constructor(objectManager: ObjectManager) {
    super(objectManager);

    const headerGh = new Graphics()
      .roundRect(0, 0, 200, 30, 10)
      .fill(0x80BFFF);
    this.titleInput = new Input({
      bg: headerGh,
      placeholder: 'Enter text',
      padding: {
        top: 11,
        right: 11,
        bottom: 11,
        left: 11
      },
      textStyle: {
        fontSize: 18,
        fill: 0x1E1E1E
      }
    });
    this.addChild(this.titleInput);
    console.log(this.titleInput)
  }

  update(delta: number): void {

  }
}

export default NoteHeader;
