import React from "react";
import tw, { styled } from "twin.macro";

const DotStage = styled.li`
  ${tw`w-[2px] h-[2px] rounded-full bg-white`}
`;
export const VerticalNavbar = () => {
  return (
    <nav className="fixed top-1/2 -translate-y-1/2 h-[70%] bg-white-opacity w-[2px]">
      <ul className="absolute left-1/2 -translate-x-1/2 flex flex-col justify-evenly h-full">
        {[1, 2, 3, 4, 5].map((stage) => {
          return <DotStage key={stage} />;
        })}
      </ul>
    </nav>
  );
};
