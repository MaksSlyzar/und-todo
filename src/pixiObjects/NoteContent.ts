import type ObjectManager from "../ObjectManager";
import { Component } from "./Component";

export class NoteContent extends Component {
  content: string;

  constructor(objectManager: ObjectManager) {
    super(objectManager)
    this.content = "";
  }

  update(delta: number): void {

  }
}
