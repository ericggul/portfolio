import * as THREE from "three";
import { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Instances,
  Instance,
  Environment,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import "./LoadingElement.scss";

const LENGTH = 10;
const LIGHT_SETS = [
  {
    position2: new THREE.Vector3(-30, 40, 100),
    intensity: 10,
    lightColor: "white",
    materialColor: "red",
  },
  {
    position2: new THREE.Vector3(90, 30, 50),
    intensity: 10,
    lightColor: "#9FFFE8",
    materialColor: "#34272A",
  },
  {
    position2: new THREE.Vector3(40, 100, 50),
    intensity: 10,
    lightColor: "#AFDEE4",
    materialColor: "#6256E8",
  },
  {
    position2: new THREE.Vector3(-30, 80, 400),
    intensity: 5,
    lightColor: "#AFDEE4",
    materialColor: "#883045",
  },
  {
    position2: new THREE.Vector3(-30, 80, 10),
    intensity: 10,
    lightColor: "#D03535",
    materialColor: "#682488",
  },
  {
    position2: new THREE.Vector3(-30, 80, 80),
    intensity: 10,
    lightColor: "#e5ddff",
    materialColor: "#111734",
  },
];

const particles = Array.from({ length: LENGTH }, (_, i: number) => ({
  initialAngle: (i * Math.PI * 2) / LENGTH,
  sphereRadius: 3,
  orbitRadius: 8,
}));

export default function LoadingElement() {
  const idx = Math.floor(Math.random() * (LIGHT_SETS.length + 1));
  return (
    <div className="three-canvas-wrapper">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ alpha: false, antialias: false }}
        camera={{ fov: 75, position: [0, 0, 60], near: 10, far: 150 }}
      >
        <color attach="background" args={["black"]} />
        <ambientLight intensity={1.5} />
        <pointLight position={[100, 10, -50]} intensity={20} color="#f0f0f0" />
        <pointLight
          position={LIGHT_SETS[idx].position2}
          intensity={LIGHT_SETS[idx].intensity}
          color={LIGHT_SETS[idx].lightColor}
        />
        <Spheres
          particles={particles}
          materialColor={LIGHT_SETS[idx].materialColor}
        />
      </Canvas>
    </div>
  );
}

function Spheres({ particles, materialColor }: any) {
  const ref = useRef<any>(null);

  return (
    <Instances
      limit={particles.length}
      ref={ref}
      position={[0, 0, 10]}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial roughness={0} color={materialColor} />
      {particles.map((data: any, i: number) => (
        <Sphere key={i} {...data} />
      ))}
    </Instances>
  );
}

function Sphere({ initialAngle, sphereRadius, orbitRadius }: any) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const targetedAngle = initialAngle + t;
    const targetedRadius = orbitRadius * (Math.sin(t * 2) * 0.5 + 1);
    ref.current.scale.setScalar(sphereRadius);
    ref.current.position.set(
      targetedRadius * Math.cos(targetedAngle),
      targetedRadius * Math.sin(targetedAngle),
      0
    );
  });

  return <Instance ref={ref} />;
}
