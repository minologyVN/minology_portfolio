import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const NavbarDot = ({ isActive, index, step }) => {
  return (
    <DotItem key={step} isActive={isActive}>
      {isActive ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <span className="absolute top-1/2 -translate-y-1/2 text-sm -left-12">
            0{index + 1}
          </span>
          <span className="absolute top-1/2 -translate-y-1/2 text-sm left-6">
            {step}
          </span>
        </motion.div>
      ) : (
        <span className="absolute top-1/2 -translate-y-1/2 text-sm left-4 opacity-20">
          0{index + 1}
        </span>
      )}
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
