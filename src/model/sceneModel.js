import * as THREE from "three";

export function createScene() {
   const scene = new THREE.Scene();
   scene.background = new THREE.Color(0x101010);

   // Light
   const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
   light.position.set(0, 20, 0);
   scene.add(light);

   // Cube
   const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
   const material = new THREE.MeshStandardMaterial({ color: 0x00ff99 });
   const cube = new THREE.Mesh(geometry, material);
   cube.position.set(0, 1.6, -1);
   scene.add(cube);

   return { scene, cube };
}
