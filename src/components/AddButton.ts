import ComponentsManager from "../main";
import Component from "./Component";
import type NotesView from "./NotesView";

class AddButton extends Component {
  el: HTMLButtonElement;
  constructor() {
    super();

    this.el = document.getElementById("add-button") as HTMLButtonElement;
    this.el.onclick = () => this.onClick();
  }

  onClick() {
    const notesView = ComponentsManager.get<NotesView>("notes-view");

    if (notesView) {

    }
  }

  update(): void {

  }
}

export default AddButton;
