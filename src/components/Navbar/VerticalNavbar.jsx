import React, { useEffect, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { PAGE_STEP, PAGE_STEP_PATH_MAP, getStepByPath } from "../../constants";
import { NavbarDot } from "./NavbarDot";

const NavContainer = tw.nav`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] bg-white-opacity w-[2px] font-title`;
const DotList = tw.ul`absolute left-1/2 -translate-x-1/2 flex flex-col justify-around h-full`;

export const VerticalNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentStep = useMemo(() => {
    getStepByPath(location.pathname);
  }, [location]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(
        "PAGE_STEP_PATH_MAP(currentStep)",
        PAGE_STEP_PATH_MAP.get(currentStep)
      );
      navigate(PAGE_STEP_PATH_MAP.get(currentStep));
    });
  }, [currentStep]);

  const isDotActiveByStep = useCallback((step) => {
    return PAGE_STEP_PATH_MAP.get(step) === location.pathname;
  }, []);

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
