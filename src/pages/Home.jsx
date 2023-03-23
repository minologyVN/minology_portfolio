import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";
import { ContainerFull } from "../components/common/ContainerFull";
import { useWheelDirectionReceive } from "../hooks/useWheelDirectionReceive";
import { fadeWithDownDirection, floatAnimation } from "../utils";
import { ReactComponent as SvgRightArrow } from "../assets/svg/right-arrow.svg";
import { home_visual } from "../assets";

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
          <section className="relative flex items-end basis-2/3 border-b-2 border-white-opacity">
            <div className="relative py-10">
              <div className="mb-8 font-heading font-extraBold capitalize pr-52 tracking-widest">
                <HomeHeading>
                  <b className="text-h1">Hi! I am</b>
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
            <div className="absolute inset-y-0 right-0 pt-20">
              <motion.div {...floatAnimation()} className="w-full h-full">
                <img
                  src={home_visual}
                  alt="home-canvas"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </section>
          <section className="basis-1/3">
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </section>
        </div>
      </ContainerFull>
    </motion.div>
  );
};
