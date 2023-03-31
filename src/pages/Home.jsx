import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";
import { ContainerFull } from "../components/common/ContainerFull";
import { useWheelDirectionReceive } from "../hooks/useWheelDirectionReceive";
import { fadeWithDownDirection, floatAnimation } from "../utils";
import { ReactComponent as SvgRightArrow } from "../assets/svg/right-arrow.svg";
import { avatar_visual } from "../assets";
import { Canvas } from "@react-three/fiber";
import { DistortionSphere } from "../components/3D/DistortionSphere";
import { useMediaQuery } from "../hooks";

const ButtonHoverEffect = styled.button(() => [
  tw`flex items-center justify-center gap-4 overflow-hidden py-2 px-8 rounded relative w-full sm:w-fit sm:sm:justify-start`,
  tw`before:bg-blue before:absolute before:inset-0 before:z-below lg:before:right-8 lg:hover:before:right-0 lg:before:transition-all`,
]);

const HomeHeading = styled.h1(() => [
  tw`text-h3 flex flex-col gap-4`,
  tw`sm:text-h3`,
  tw`lg:text-xl lg:pr-80`,
  tw`xl:text-xxl xl:pr-64`,
]);

export const Home = () => {
  const { isDownDirection } = useWheelDirectionReceive();
  const isSphereShow = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();

  const handleToContactPage = () => {
    navigate("/contact");
  };

  return (
    <motion.div
      {...fadeWithDownDirection(isDownDirection, "easeOut")}
      className="h-full w-full"
    >
      <ContainerFull className="relative flex items-center justify-center">
        <div className="flex flex-col w-full h-full px-4 md:ml-64 md:mr-48 md:pl-8">
          <section className="relative flex items-center justify-center basis-1/3 border-b-2 gap-2 border-white-opacity border-solid md:justify-center md:basis-2/3 xl:mx-24">
            <div className="w-full md:w-1/2 sm:ml-5 lg:ml-20">
              <div className="w-full mb-8 font-heading font-extraBold capitalize tracking-widest">
                <HomeHeading>
                  <b className="text-h2">Ri! O Om</b>
                  <b className="text-h1">AAAAAAAAA</b>
                </HomeHeading>
                <h3 className="text-h2 mt-8 break-words leading-8">
                  AAAAAAAAAAAAAAAAAAAAAA
                </h3>
              </div>
              <ButtonHoverEffect onClick={handleToContactPage}>
                <span>Contact me</span>
                <SvgRightArrow width={24} height={24} />
              </ButtonHoverEffect>
            </div>
            {isSphereShow ? (
              <div className="relative w-1/2 h-full hidden md:block">
                <motion.div {...floatAnimation()} className="w-full h-full">
                  <Canvas
                    camera={{ fov: 25, position: [5, 5, 5] }}
                    className="absolute inset-0"
                  >
                    <DistortionSphere />
                  </Canvas>
                  {/* <div className="absolute inset-0 pointer-events-none">
                  <img
                    src={avatar_visual}
                    alt="home-canvas"
                    className="w-full h-full object-cover rounded-full scale-[0.4] md:scale-[0.6] lg:scale-[0.7] 2xl:scale-75"
                  />
                </div> */}
                </motion.div>
              </div>
            ) : (
              <></>
            )}
          </section>
          <section className="basis-2/3 flex items-center pt-8 py-12 justify-between md:basis-1/3">
            {/* <div>A</div>
            <div>B</div>
            <div>C</div> */}
          </section>
        </div>
      </ContainerFull>
    </motion.div>
  );
};
