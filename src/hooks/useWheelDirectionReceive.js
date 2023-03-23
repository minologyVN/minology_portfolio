import { useLocation } from "react-router-dom";
import { PAGE_DIRECTION_ENUM } from "../constants";

export const useWheelDirectionReceive = () => {
  const location = useLocation();
  const isDownDirection = location.state === PAGE_DIRECTION_ENUM.DOWN;
  return {
    isDownDirection,
  };
};
