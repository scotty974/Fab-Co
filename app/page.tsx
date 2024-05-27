"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full h-screen">
        <Canvas>
          <ambientLight intensity={0.5} />
          <OrbitControls />
        </Canvas>
      </section>
    </main>
  );
}
