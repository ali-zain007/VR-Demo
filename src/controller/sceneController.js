import * as THREE from "three";
import { XRControllerModelFactory } from "three/examples/jsm/webxr/XRControllerModelFactory.js";

export function setupControllers(scene, renderer, onSelect) {
   const controller1 = renderer.xr.getController(0);
   const controller2 = renderer.xr.getController(1);

   controller1.addEventListener("selectstart", () => onSelect(controller1));
   controller2.addEventListener("selectstart", () => onSelect(controller2));

   scene.add(controller1);
   scene.add(controller2);

   const controllerModelFactory = new XRControllerModelFactory();
   const controllerGrip1 = renderer.xr.getControllerGrip(0);
   controllerGrip1.add(
      controllerModelFactory.createControllerModel(controllerGrip1)
   );
   scene.add(controllerGrip1);

   const controllerGrip2 = renderer.xr.getControllerGrip(1);
   controllerGrip2.add(
      controllerModelFactory.createControllerModel(controllerGrip2)
   );
   scene.add(controllerGrip2);
}

export function animate(renderer, scene, camera, cube) {
   renderer.setAnimationLoop(() => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
   });
}
