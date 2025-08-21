import { Container } from "pixi.js";
import type ObjectManager from "../ObjectManager";

export abstract class Component extends Container {
  objectManager: ObjectManager;
  constructor(objectManager: ObjectManager) {
    super();
    this.objectManager = objectManager;
  };
  abstract update(delta: number): void;
}

