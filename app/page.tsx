"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Text } from "@react-three/drei";
import Sphere from "./components/sphere/Sphere";
import { Physics } from "@react-three/cannon";
import Pointer from "./components/pointer/Pointer";
import NavBar from "./components/NavBar/NavBar";
import { useRef, useEffect } from "react";
import project from "../lib/project.json";

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
        <div className="w-3/4 flex flex-col md:flex-row justify-around items-start h-full  gap-4">
          <div className="flex gap-2 flex-col">
            <h2 className="text-4xl font-bold">A Propos.</h2>
            <p>Parlons un peu de moi</p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
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
        className="w-11/12 min-h-screen mx-auto py-20 flex flex-col items-center"
        id="projects"
      >
        <div className="w-full max-w-5xl">
          {/* Titre avec un style épuré */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold">Projets.</h2>
            <div className="h-1 w-12 bg-blue-600 mt-2"></div>
          </div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.map((p) => (
              <div
                key={p.id}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold tracking-tight group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>

                {/* Badges de compétences */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.competences.map((skill, index) => (
                    <span
                      key={index}
                      className="text-[10px] uppercase tracking-widest bg-slate-100 px-2 py-1 rounded text-slate-600 font-medium"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>

                {/* Lien stylisé */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all"
                >
                  Voir le projet
                  <span className="opacity-0 group-hover:opacity-100 transition-all">
                    {" "}
                    →{" "}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
