import React from "react";
import tw, { styled } from "twin.macro";
import { PAGE_STEP } from "../constants";
const NavContainer = tw.nav`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] bg-white-opacity w-[2px]`;
const DotList = tw.ul`absolute left-1/2 -translate-x-1/2 flex flex-col justify-evenly h-full`;
// const DotItem = tw.li`w-[2px] h-[2px] rounded-full bg-white`;

const DotItem = styled.li((isActive) => [
  tw`w-[3px] h-[3px] rounded-full bg-white`,
]);

export const VerticalNavbar = () => {
  return (
    <NavContainer>
      <DotList>
        {Object.keys(PAGE_STEP).map((step) => {
          return <DotItem key={step} isActive={false} />;
        })}
      </DotList>
    </NavContainer>
  );
};
