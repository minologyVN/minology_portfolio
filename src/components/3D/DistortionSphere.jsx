import { useMemo } from "react";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const DistortionSphere = () => {
  const { viewport } = useThree();
  const scaleByViewport = useMemo(() => {
    return (viewport.width + viewport.height) / 5;
  }, [viewport.width, viewport.height]);

  return (
    <>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[0.75, 150, 220]} scale={scaleByViewport}>
        <MeshDistortMaterial
          color="#3D4677"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </>
  );
};
