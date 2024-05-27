// components/sphere/Sphere.js
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
const Sphere = ({position} : {position: any}) => {
  let myRef = useRef<Mesh>(null);

  return (
    <mesh ref={myRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Sphere;
