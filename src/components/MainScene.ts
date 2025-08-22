import CanvasEvents from "../CanvasEvents";
import Component from "./Component";

function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

type Point = {
  x: number,
  y: number,
};

class MainScene extends Component {
  element: HTMLDivElement;
  x: number = 0;
  y: number = 0;
  moveTo: Point = { x: 0, y: 0 };

  constructor() {
    super();
    const element = document.getElementById("main-scene") as HTMLDivElement;
    this.element = element;
  }

  update(): void {
    this.moveTo.x = CanvasEvents.isKeyDown("d") ?
      this.x + 10 : CanvasEvents.isKeyDown("a") ?
        this.x - 10 : this.x;
    this.moveTo.y = CanvasEvents.isKeyDown("w") ?
      this.y - 10 : CanvasEvents.isKeyDown("s") ?
        this.y + 10 : this.y;
    this.x = lerp(this.x, this.moveTo.x, 0.5);
    this.y = lerp(this.y, this.moveTo.y, 0.5);
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
}

export default MainScene;
