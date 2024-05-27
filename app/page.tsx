"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Environment } from "@react-three/drei";
import Sphere from "./components/sphere/Sphere";
import { Physics } from "@react-three/cannon";

const colors = () => {
  const colors = ["#ff0000", "#00ff00", "#0000ff"];
  return colors[Math.floor(Math.random() * colors.length)];
};
export default function Home() {
 
  
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full h-screen">
        <Canvas>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <Environment preset="sunset" />
          <Physics>
            <Sphere />
          </Physics>
        </Canvas>
      </section>
    </main>
  );
}
