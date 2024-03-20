import { motion } from "framer-motion";
import { ContainerFull } from "../components/common/ContainerFull";
import { useWheelDirectionReceive } from "../hooks/useWheelDirectionReceive";
import { fadeWithDownDirection } from "../utils";

export const Skill = () => {
  const { isDownDirection } = useWheelDirectionReceive();

  return (
    <motion.div
      {...fadeWithDownDirection(isDownDirection, "easeOut")}
      className="h-full w-full"
    >
      <ContainerFull className="flex items-center justify-center border-2 border-dashed">
        <div>Skill</div>
      </ContainerFull>
    </motion.div>
  );
};
