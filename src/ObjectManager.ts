import type { Application } from "pixi.js";
import MainScene from "./pixiObjects/MainScene";
import type { Component } from "./pixiObjects/Component";

class ObjectManager {
  public app: Application;
  private components: Record<string, Component> = {};

  constructor(app: Application) {
    app.ticker.add((time) => this.updateAll(time.deltaTime));
    this.app = app;

    const scene = new MainScene(this.app, this);
    this.add("main-scene", scene);
  }

  public add(name: string, component: Component): void {
    this.components[name] = component;
  }

  public get<T extends Component>(name: string): T | undefined {
    return this.components[name] as T | undefined;
  }

  public updateAll(delta: number): void {
    for (const key in this.components) {
      this.components[key].update(delta);
    }
  }
}

export default ObjectManager;
