import { motion } from "framer-motion";
import { ContainerFull } from "../components/common/ContainerFull";
import { useWheelDirectionReceive } from "../hooks/useWheelDirectionReceive";
import { fadeWithDownDirection } from "../utils";
import { DistortionSphere } from "../components/3D/DistortionSphere";
import { HomePersonality } from "../components/Home/components/HomePersonality";
import { HomeOverview } from "../components/Home/components/HomeOverview";

export const Home = () => {
  const { isDownDirection } = useWheelDirectionReceive();

  return (
    <motion.div
      {...fadeWithDownDirection(isDownDirection, "easeOut")}
      className="h-full w-full"
    >
      <ContainerFull className="relative flex items-center justify-center">
        <div className="flex flex-col w-full h-full px-4 lg:ml-64 lg:mr-48 md:pl-10">
          <section className="relative flex items-center justify-center basis-1/2 border-b-2 gap-2 border-white-opacity border-solid md:justify-center md:basis-2/3 xl:mx-24">
            <HomeOverview />
          </section>
          <section className="flex flex-1 items-center flex-col gap-5 mx-4 pt-8 pb-24 justify-between md:basis-1/3 md:flex-row md:mx-12 xl:mx-24">
            <HomePersonality />
            <HomePersonality />
            <HomePersonality />
          </section>
        </div>
      </ContainerFull>
    </motion.div>
  );
};
