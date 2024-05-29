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
    <main className="flex flex-col min-h-screen gap-10">
      <NavBar />
      <section className="w-full h-screen flex justify-center ">
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
      <section
        className="w-11/12 h-1/2 mx-auto flex justify-center my-10"
        id="about"
      >
        <div className="w-3/4 flex justify-around items-start h-full  gap-4">
          <div className="flex gap-2 flex-col">
            <h2 className="text-4xl font-bold">A Propos.</h2>
            <p>Parlons un peu de moi</p>
          </div>
          <div className="w-1/2 flex flex-col items-start gap-4">
            <p>
              Fabien - Petit j'aimais jouer aux jeux vidéos, surtout à
              Minecraft. Cette envie de faire son univers, de créer, d'imaginer
              je le dois bien à ce jeu. Il me fallait donc un métier ou je
              pouvais mettre en oeuvre cette créativité, graphiste ? Designer ?
              UX/UI ? Ils ne répondaient pas à mes exigences, je voulais voir un
              projet fonctionnel, un projet que je peux utiliser après le
              développement.
            </p>
            <p>
              C'est ainsi que j'ai fait mon choix dans l'univers de la
              programmation. Un monde avec des possibilités à perdre la tête.
            </p>
            <p>
              Je suis donc développeur web Junior en freelance et je suis à
              votre disposition pour réaliser vos projets.
            </p>
            <a
              href="mailto:fabienethevepro@gmail.com"
              className="bg-neutral-800 p-2 text-white"
            >
              Contactez-moi
            </a>
          </div>
        </div>
      </section>
      <section
        className="w-11/12 h-screen mx-auto flex justify-center "
        id="projects"
      >
        <div className="flex gap-2 flex-col w-3/4 ">
          <h2 className="text-4xl font-bold">Projets.</h2>
          <div className="w-full  flex flex-col mt-4 justify-between gap-10">
            <div className="flex items-center w-full">
              <div className="w-1/2 ">
                <a href="https://vision-bice.vercel.app/" target="_blank">
                  <img
                    src="/images/img1.jpg"
                    alt="projet"
                    className=" object-cover h-40 hover:scale-105 duration-300"
                  />
                </a>
              </div>
              <div className="w-1/2 flex justify-center">
                <span className="text-6xl font-bold text-neutral-300">1</span>
              </div>
            </div>
            <div className="flex items-center flex-row-reverse w-full">
              <div className="w-1/2 ">
                <a href="https://space-quiz.popcorn-esd.com/" target="_blank">
                  <img
                    src="/images/img2.jpg"
                    alt="projet"
                    className="w-full object-cover h-40 hover:scale-105 duration-300"
                  />
                </a>
              </div>
              <div className="w-1/2 flex justify-center">
                <span className="text-6xl font-bold text-neutral-300">2</span>
              </div>
            </div>
            <div className="flex items-center  w-full">
              <div className="w-1/2 ">
                <a href="https://mind-brush.vercel.app/" target="_blank">
                  <img
                    src="/images/img3.jpg"
                    alt="projet"
                    className="w-full object-cover h-40 hover:scale-105 duration-300"
                  />
                </a>
              </div>
              <div className="w-1/2 flex justify-center">
                <span className="text-6xl font-bold text-neutral-300">3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
