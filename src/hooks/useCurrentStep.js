import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { PAGE_STEP_PATH_MAP } from "../constants/";

export const useCurrentStep = () => {
	const location = useLocation();
	const currentStep = useMemo(() => {
		return PAGE_STEP_PATH_MAP.get(location.pathname);
	}, [location.pathname]);

	return currentStep;
};
