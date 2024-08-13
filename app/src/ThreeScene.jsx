import { useEffect } from "react";
import * as THREE from "three";
// import WebGL from "three/addons/capabilities/WebGL.js";
const ThreeScene = () => {
  useEffect(() => {
    // Create renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    //   setting camera position
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    // Create scene
    const scene = new THREE.Scene();
    // Create material
    const material = new THREE.LineBasicMaterial({
      color: 0x0000ff,
    });
    // points
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    // create a new line
    const line = new THREE.Line(geometry, material);
    // adding line to scene
    scene.add(line);
    // render the camera and the scene
    renderer.render(scene, camera);
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
