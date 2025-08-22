import Component from "./Component";
import Note from "./Note/Note";

class NotesView extends Component {
  notes: Record<string, Note> = {};

  constructor() {
    super();
  }

  spawnNewNote() {
    // const note = new Note();
  }
}

export default NotesView;
