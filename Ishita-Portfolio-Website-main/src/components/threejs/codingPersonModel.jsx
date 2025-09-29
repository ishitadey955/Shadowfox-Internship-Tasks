import { useEffect, useRef } from "react";
import * as THREE from "three";

const CodingPersonModel = () => {
  const modelContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    const container = modelContainerRef.current;  // Copy ref to local variable
    if (!container) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    createCodingPersonModel();

    const handleResize = () => {
      if (!container) return;
      
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
        modelRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);

      if (rendererRef.current) rendererRef.current.dispose();
      if (container && rendererRef.current?.domElement) {
        try {
          container.removeChild(rendererRef.current.domElement);
        } catch {
          // Ignore errors
        }
      }
    };
  }, []);

  const createCodingPersonModel = () => {
    if (!sceneRef.current) return;

    const group = new THREE.Group();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    sceneRef.current.add(directionalLight);

    const bodyGeometry = new THREE.BoxGeometry(1, 1.5, 0.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x3a86ff, shininess: 100 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);

    const headGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xffcdb2, shininess: 100 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.15;
    group.add(head);

    const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 32);
    const armMaterial = new THREE.MeshPhongMaterial({ color: 0x3a86ff, shininess: 100 });

    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.65, 0, 0);
    leftArm.rotation.z = Math.PI / 3;
    group.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.65, 0, 0);
    rightArm.rotation.z = -Math.PI / 3;
    group.add(rightArm);

    const laptopGeometry = new THREE.BoxGeometry(1.2, 0.05, 0.8);
    const laptopMaterial = new THREE.MeshPhongMaterial({ color: 0x333333, shininess: 100 });
    const laptop = new THREE.Mesh(laptopGeometry, laptopMaterial);
    laptop.position.set(0, -0.1, 0.65);
    group.add(laptop);

    const screenGeometry = new THREE.BoxGeometry(1.1, 0.8, 0.05);
    const screenMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x6a00f4,
      shininess: 100,
      emissive: 0x6a00f4,
      emissiveIntensity: 0.2
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0.35, 1);
    screen.rotation.x = Math.PI / 6;
    group.add(screen);

    const addCodeLine = (y, width) => {
      const lineGeometry = new THREE.BoxGeometry(width, 0.05, 0.01);
      const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      line.position.set(0, y, 1.03);
      line.rotation.x = Math.PI / 6;
      return line;
    };

    for (let i = 0; i < 5; i++) {
      const width = 0.7 - Math.random() * 0.3;
      const line = addCodeLine(0.5 - i * 0.15, width);
      line.position.x = (Math.random() * 0.4) - 0.2;
      group.add(line);
    }

    group.scale.set(0.8, 0.8, 0.8);
    group.rotation.x = 0.2;

    sceneRef.current.add(group);
    modelRef.current = group;
  };

  return (
    <div 
      ref={modelContainerRef} 
      className="w-64 h-64 mx-auto mt-8 relative"
    >
      <div className="absolute inset-0 flex items-center justify-center text-gray-400 opacity-50">
        Loading 3D Model...
      </div>
    </div>
  );
};

export default CodingPersonModel;
