"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/sphere/Sphere";
const generateSpherePositions = (count: number, radius: number) => {
  const positions = [];
  const phiStep = Math.PI / count; // vertical angle
  const thetaStep = (2 * Math.PI) / count; // horizontal angle

  for (let phiIndex = 0; phiIndex <= count; phiIndex++) {
    const phi = phiIndex * phiStep;
    for (let thetaIndex = 0; thetaIndex < count; thetaIndex++) {
      const theta = thetaIndex * thetaStep;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push([x, y, z]);
    }
  }
  return positions;
};
export default function Home() {
  const spherePosition = generateSpherePositions(10, 1);
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full h-screen">
        <Canvas>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          {spherePosition.map((position, index) => (
            <Sphere key={index} position={position} />
          ))}
        </Canvas>
      </section>
    </main>
  );
}
