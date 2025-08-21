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
}

export default new CanvasEvents();
