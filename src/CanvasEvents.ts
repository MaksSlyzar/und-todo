class CanvasEvents {
  private keys: Record<string, boolean> = {};

  constructor() {
    window.addEventListener("keydown", (e) => this.keyDown(e));
    window.addEventListener("keyup", (e) => this.keyUp(e));
  }

  private keyDown(e: KeyboardEvent) {
    this.keys[e.key.toLowerCase()] = true;
  }

  private keyUp(e: KeyboardEvent) {
    this.keys[e.key.toLowerCase()] = false;
  }

  public isKeyDown(key: string): boolean {
    return !!this.keys[key.toLowerCase()];
  }

  public getCanvasSize() {
    const canvas = document.getElementsByTagName("canvas") as HTMLCollectionOf<HTMLCanvasElement>;

    if (canvas.length == 0) {
      return null;
    }

    return { width: canvas[0].width, height: canvas[0].height };
  }
}

export default new CanvasEvents();
