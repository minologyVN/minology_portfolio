export const PAGE_STEP = ["HOME", "SKILL", "WORK", "RESUME", "CONTACT"];

export const PAGE_STEP_ENUM = PAGE_STEP.map((it, index) => {
  return {
    [it]: index,
  };
});

export const PAGE_STEP_PATH_MAP = PAGE_STEP.reduce((result, currentValue) => {
  result.set(currentValue, `/${currentValue.toLowerCase()}`);
  return result;
}, new Map());

export const getStepByPath = (pathname) => {
  return [...PAGE_STEP_PATH_MAP].find(([key, val]) => val == pathname)[0];
};
