import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { PAGE_STEP, PAGE_STEP_PATH_MAP, getPathByStep } from "../../constants";
import { NavbarDot } from "./NavbarDot";
import { useGlobalWheelEvent } from "../../hooks";

const NavContainer = tw.nav`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] bg-white-opacity w-[2px] font-title`;
const DotList = tw.ul`absolute left-1/2 -translate-x-1/2 flex flex-col justify-around h-full`;

export const VerticalNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useGlobalWheelEvent();

  const isDotActiveByStep = useCallback(
    (step) => {
      return PAGE_STEP_PATH_MAP.get(location.pathname) === step;
    },
    [location.pathname]
  );

  const handleNavDotClick = useCallback(
    (step) => {
      const pathName = getPathByStep(step);
      navigate(pathName);
    },
    [navigate]
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
              onClick={() => handleNavDotClick(step)}
            />
          );
        })}
      </DotList>
    </NavContainer>
  );
};
