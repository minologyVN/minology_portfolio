import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SvgRightArrow } from "../../../assets/svg/right-arrow.svg";
import { useMediaQuery } from "../../../hooks";
import { Canvas } from "@react-three/fiber";
import { avatar_visual } from "../../../assets";
import { floatAnimation } from "../../../utils";
import { DistortionSphere } from "../../3D/DistortionSphere";

export const HomeOverview = () => {
  const isSphereShow = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();

  const handleToContactPage = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="w-full md:w-1/2 sm:ml-5 lg:ml-20">
        <div className="w-full mb-8 font-heading font-extraBold capitalize tracking-widest">
          <HomeHeading>
            <b className="text-h2">Hi! I am</b>
            <b className="text-h1">Minology</b>
          </HomeHeading>
          <h3 className="text-h2 mt-8 break-words leading-8">
            A Front End Developer
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
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none w-full overflow-hidden">
              <img
                src={avatar_visual}
                alt="home-canvas"
                className="w-full h-full object-cover rounded-full scale-[0.4] md:scale-[0.6] lg:scale-[0.7] 2xl:scale-75"
              />
            </div>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

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
