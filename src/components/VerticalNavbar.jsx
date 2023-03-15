import React from "react";
// import tw from 'twin.macro'

// const NavContainer = tw.nav
export const VerticalNavbar = () => {
  return (
    <nav className="fixed top-1/2 -translate-y-1/2 h-[70%] bg-white w-[2px]">
      <ul className="absolute -translate-x-1/2 flex flex-col justify-evenly h-full">
        {[1, 2, 3, 4, 5].map((stage) => {
          return <li>.</li>;
        })}
      </ul>
    </nav>
  );
};
