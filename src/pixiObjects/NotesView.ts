import type ObjectManager from "../ObjectManager";
import { Component } from "./Component";
import Note from "./Note";

function randomID() {
  return Math.floor(Math.random() * 1000000);
}

class NotesView extends Component {
  notes: Record<string, Note> = {};
  cols: number = 3;
  spacingX: number = 250;
  spacingY: number = 350;

  constructor(objectManager: ObjectManager) {
    super(objectManager);
  }

  createNewNote() {
    const note = new Note(this.objectManager);
    const spawnPosition = this.getSpawnPosition();
    this.notes[`note${randomID()}`] = note;

    this.addChild(note);
    note.moveAnimated(spawnPosition.x, spawnPosition.y);
  }

  getSpawnPosition() {
    const index = Object.keys(this.notes).length;
    const col = index % this.cols;
    const row = Math.floor(index / this.cols);

    return {
      x: col * this.spacingX,
      y: row * this.spacingY,
    };
  }

  update(delta: number): void {
    for (const key in this.notes) {
      this.notes[key].update(delta);
    }
  }
}

export default NotesView;

