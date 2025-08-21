import { Container } from "pixi.js";

export abstract class Component extends Container {
  abstract update(delta: number): void;
}

