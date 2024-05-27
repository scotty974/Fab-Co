"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Text } from "@react-three/drei";
import Sphere from "./components/sphere/Sphere";
import { Physics } from "@react-three/cannon";
import Pointer from "./components/pointer/Pointer";
import NavBar from "./components/NavBar/NavBar";
import { useRef, useEffect } from "react";

function ScrollCamera() {
  const { camera } = useThree();
  const scroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scroll.current = window.scrollY;
      // Update the camera position based on the scroll position
      camera.position.z = 20 - scroll.current * 0.01; // Adjust the multiplier as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [camera]);

  return null;
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full h-screen flex justify-center ">
        <NavBar />
        <Canvas
          shadows
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
        >
          <ambientLight intensity={0.5} />
          <Environment preset="sunset" />
          <Physics>
            <Pointer />
            <Sphere />
          </Physics>
          <Text fontSize={1.5} color={"black"} fontWeight={"bold"}>
            Fabien ETHEVE
          </Text>
          <ScrollCamera />
        </Canvas>
      </section>
      <section className="w-full h-screen" id="about"></section>
    </main>
  );
}
