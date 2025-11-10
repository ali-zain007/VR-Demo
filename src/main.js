import { createScene } from "./model/sceneModel.js";
import {
  createRenderer,
  createCamera,
  handleResize,
} from "./view/sceneView.js";
import { setupControllers, animate } from "./controller/sceneController.js";

const { scene, cube } = createScene();
const renderer = createRenderer();
const camera = createCamera();

handleResize(camera, renderer);

// Controller logic: change cube color when trigger pressed
setupControllers(scene, renderer, (controller) => {
  const randomColor = Math.random() * 0xffffff;
  cube.material.color.setHex(randomColor);

  // Flash small sphere on controller as feedback
  const sphereGeo = new THREE.SphereGeometry(0.03, 16, 16);
  const sphereMat = new THREE.MeshBasicMaterial({ color: randomColor });
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.position.set(0, 0, -0.1);
  controller.add(sphere);

  setTimeout(() => controller.remove(sphere), 200);
});

animate(renderer, scene, camera, cube);
