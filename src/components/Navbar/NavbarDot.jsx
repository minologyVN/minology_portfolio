import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

export const NavbarDot = ({ isActive, index, step }) => {
  return (
    <DotItem key={step} isActive={isActive}>
      {isActive ? (
        <span className="absolute top-1/2 -translate-y-1/2 text-sm -left-12">
          0{index + 1}
        </span>
      ) : null}
      <span className="absolute top-1/2 -translate-y-1/2 text-sm left-6">
        {step}
      </span>
    </DotItem>
  );
};

/* Styles */
const DotItem = styled.li(({ isActive }) => [
  tw`w-[3px] h-[3px] bg-white relative font-bold tracking-widest`,
  isActive && tw`bg-blue`,
]);

/* Props Type */
NavbarDot.propTypes = {
  isActive: PropTypes.bool,
  step: PropTypes.string,
  index: PropTypes.number,
};
