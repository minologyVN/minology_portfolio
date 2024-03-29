import { useMemo } from "react";
import {
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
  useTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { avatar_visual } from "../../assets";
import { useControls } from "leva";

export const DistortionSphere = () => {
  const textureMaps = useTexture({
    map: avatar_visual,
    // displacementMap: a2,
    // normalMap: a1,
    // roughnessMap: a4,
    // aoMap: a3,
  });

  const { viewport } = useThree();
  const scaleByViewport = useMemo(() => {
    return (viewport.width + viewport.height) / 5;
  }, [viewport.width, viewport.height]);

  const { scale } = useControls({ scale: scaleByViewport });

  return (
    <>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      {/* <axesHelper args={[20]} /> */}
      <Sphere args={[0.75, 150, 220]} scale={scale}>
        <MeshDistortMaterial
          // {...textureMaps}
          color="#3D4677"
          attach="material"
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </>
  );
};
