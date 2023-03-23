import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGTLF } from "@react-three/drei";

const Astronaut = () => {
  const planet = useGTLF("./planet/scene.gtlf");

  return (
    <mesh>
      <hemisphereLight></hemisphereLight>
      <div>Astronaut</div>
    </mesh>
  );
};

export default Astronaut;
