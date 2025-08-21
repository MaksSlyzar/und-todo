import type ObjectManager from "../ObjectManager";
import { Component } from "./Component";
import Note from "./Note";

function randomID() {
  return Math.floor(Math.floor(Math.random() * 1000000));
}

class NotesView extends Component {
  notes: Record<string, Note> = {};

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
    let position = { x: 0, y: 0 };
    for (let note in this.notes) {
      position.x += 250;
    }

    console.log(position)
    return position;
  }

  update(delta: number): void {
    for (const key in this.notes) {
      this.notes[key].update(delta);
    }

  }
}

export default NotesView;
