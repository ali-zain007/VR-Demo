import * as THREE from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";

export function createRenderer() {
   const renderer = new THREE.WebGLRenderer({ antialias: true });
   renderer.setPixelRatio(window.devicePixelRatio);
   renderer.setSize(window.innerWidth, window.innerHeight);
   renderer.xr.enabled = true;

   document.body.appendChild(renderer.domElement);
   document.body.appendChild(VRButton.createButton(renderer));

   return renderer;
}

export function createCamera() {
   const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      100
   );
   camera.position.set(0, 1.6, 3);
   return camera;
}

export function handleResize(camera, renderer) {
   window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
   });
}
