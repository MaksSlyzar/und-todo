import AddButton from "./components/AddButton";
import type Component from "./components/Component";
import MainScene from "./components/MainScene";
import NotesView from "./components/NotesView";
import "./style.css"

class ComponentsManager {
  components: Record<string, Component> = {};

  constructor() {
    this.components["main-scene"] = new MainScene();
    this.components["add-button"] = new AddButton();
    this.components["notes-view"] = new NotesView();
    this.update();
  }

  add(name: string, component: Component): void {
    this.components[name] = component;
  }

  get<T extends Component>(name: string): T | undefined {
    return this.components[name] as T | undefined;
  }

  update() {
    for (let component in this.components) {
      this.components[component].update();
    }
    requestAnimationFrame(() => this.update());
  }
}

export default new ComponentsManager();
