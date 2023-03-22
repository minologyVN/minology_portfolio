export const PAGE_STEP = ["HOME", "SKILL", "WORK", "RESUME", "CONTACT"];

export const PAGE_STEP_ENUM = PAGE_STEP.reduce((result, currentItem, index) => {
	result[currentItem] = index;
	return result;
}, {});

export const PAGE_STEP_PATH_MAP = PAGE_STEP.reduce((result, currentValue) => {
	result.set(`/${currentValue.toLowerCase()}`, currentValue);
	return result;
}, new Map());

export const getPathByStep = (step) => {
	return `/${step.toLowerCase()}`;
};
