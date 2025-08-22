import Component from "./../Component";
import NoteContent from "./NoteContent";
import NoteHeader from "./NoteHeader";

class Note extends Component {
  header: NoteHeader;
  content: NoteContent;

  constructor() {
    super();
    this.header = new NoteHeader();
    this.content = new NoteContent();
  }
}

export default Note;
