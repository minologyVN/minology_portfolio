import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";
import { PAGE_STEP, PAGE_STEP_PATH_MAP, getPathByStep } from "../../constants";
import { NavbarDot } from "./NavbarDot";
import { useGlobalWheelEvent } from "../../hooks";

const NavContainer = styled.nav(() => [
  tw`hidden`,
  tw`md:block md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 md:h-[70%] md:bg-white-opacity md:w-[2px] md:font-title`,
]);
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
