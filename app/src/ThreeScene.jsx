// src/ThreeScene.jsx

import { useEffect } from "react";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
const ThreeScene = () => {
  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Create renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Create material
    const material = new THREE.MeshBasicMaterial({
      color: 0xff2f00,
    });

    // Create cube
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set camera position
    camera.position.z = 2;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.03;
      cube.rotation.y += 0.03;

      renderer.render(scene, camera);
    };
    // check compatibility and animate
    if (WebGL.isWebGL2Available()) {
      // browser supports webgl
      animate();
    } else {
      // create a warning
      const warning = WebGL.getWebGL2ErrorMessage();
      // append the warning to the child
      document.getElementById("container").appendChild(warning);
    }

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // This component does not render anything
};

export default ThreeScene;
