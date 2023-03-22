import debounce from "lodash/debounce";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  PAGE_STEP,
  PAGE_STEP_ENUM,
  getPathByStep,
  STEP_TRANSITION_DEBOUNCE,
} from "../constants";
import { useCurrentStep } from "../hooks";

export const useGlobalWheelEvent = () => {
  const currentStep = useCurrentStep();
  const navigate = useNavigate();

  const handleWheelEventDebounce = useCallback(
    debounce(
      (e) => {
        const isDownDirection = e.deltaY > 0;
        const nextStep = isDownDirection
          ? PAGE_STEP.at((PAGE_STEP_ENUM[currentStep] + 1) % PAGE_STEP.length)
          : PAGE_STEP.at(PAGE_STEP_ENUM[currentStep] - 1);
        const nextPath = getPathByStep(nextStep);
        navigate(nextPath);
      },
      STEP_TRANSITION_DEBOUNCE,
      {
        maxWait: 1500,
      }
    ),
    [currentStep]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheelEventDebounce);
    return () => window.removeEventListener("wheel", handleWheelEventDebounce);
  }, [currentStep]);
};
