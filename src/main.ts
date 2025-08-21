import ObjectManager from "./ObjectManager";
import "./style.css";
import { Application } from 'pixi.js';

(async () => {
  const app = new Application();

  await app.init({ background: '#1E1E1E', resizeTo: window });

  document.body.appendChild(app.canvas);

  const objectsManager = new ObjectManager(app);
})();
