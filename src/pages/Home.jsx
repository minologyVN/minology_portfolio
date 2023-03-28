import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";
import { ContainerFull } from "../components/common/ContainerFull";
import { useWheelDirectionReceive } from "../hooks/useWheelDirectionReceive";
import { fadeWithDownDirection, floatAnimation } from "../utils";
import { ReactComponent as SvgRightArrow } from "../assets/svg/right-arrow.svg";
import { cat_visual } from "../assets";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const ButtonHoverEffect = styled.button(() => [
  tw`flex items-center gap-4 overflow-hidden py-2 px-4 rounded relative`,
  tw`before:absolute before:inset-y-0 before:left-0 before:bg-blue before:right-8 hover:before:right-0 before:transition-all before:z-below`,
]);

const HomeHeading = styled.h1(() => [
  tw``,
  tw`sm:text-h3`,
  tw`lg:text-xl pr-80`,
  tw`xl:text-xxl pr-64`,
]);

export const Home = () => {
  const { isDownDirection } = useWheelDirectionReceive();

  return (
    <motion.div
      {...fadeWithDownDirection(isDownDirection, "easeOut")}
      className="h-full w-full"
    >
      <ContainerFull className="relative flex items-center justify-center">
        <div className="flex flex-col ml-64 mr-48 w-full h-full pl-8">
          <section className="relative flex items-end basis-2/3 border-b-2 gap-2 border-white-opacity">
            <div className="relative py-10 pr-48">
              <div className="mb-8 font-heading font-extraBold capitalize pr-52 tracking-widest">
                <HomeHeading>
                  <b className="text-h1">Ri! O Om</b>
                  <br />
                  <b>AAAAAAAAA</b>
                </HomeHeading>
                <h3 className="text-h1 mt-8">AAAAAAAAAAAAAAAAAAAAAA</h3>
              </div>
              <ButtonHoverEffect>
                <span>Contact me</span>
                <SvgRightArrow width={24} height={24} />
              </ButtonHoverEffect>
            </div>
            <div className="absolute inset-0 left-1/2 h-full">
              <motion.div {...floatAnimation()} className="w-full h-full">
                <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                  <OrbitControls enableZoom={false} autoRotate />
                  <ambientLight intensity={1} />
                  <directionalLight position={[3, 2, 1]} />
                  <Sphere args={[0.75, 150, 220]} scale={2}>
                    <MeshDistortMaterial
                      color="#3D4677"
                      attach="material"
                      distort={0.5}
                      speed={2}
                    />
                  </Sphere>
                </Canvas>
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    src={cat_visual}
                    alt="home-canvas"
                    className="w-full h-full object-cover rounded-full scale-75"
                  />
                </div>
              </motion.div>
            </div>
          </section>
          <section className="basis-1/3 flex items-center pt-8 py-12 justify-between">
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </section>
        </div>
      </ContainerFull>
    </motion.div>
  );
};
