import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import tw from "twin.macro";
import { PAGE_STEP, PAGE_STEP_PATH_MAP } from "../../constants";
import { NavbarDot } from "./NavbarDot";
import { useGlobalWheelEvent } from "../../hooks";

const NavContainer = tw.nav`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] bg-white-opacity w-[2px] font-title`;
const DotList = tw.ul`absolute left-1/2 -translate-x-1/2 flex flex-col justify-around h-full`;

export const VerticalNavbar = () => {
  const location = useLocation();
  useGlobalWheelEvent();

  const isDotActiveByStep = useCallback(
    (step) => {
      return PAGE_STEP_PATH_MAP.get(location.pathname) === step;
    },
    [location.pathname]
  );

  return (
    <NavContainer>
      <DotList>
        {PAGE_STEP.map((step, index) => {
          return (
            <NavbarDot
              key={step}
              step={step}
              index={index}
              isActive={isDotActiveByStep(step)}
            />
          );
        })}
      </DotList>
    </NavContainer>
  );
};
