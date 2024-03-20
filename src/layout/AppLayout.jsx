import React from "react";
import { Header } from "../components/Header";
import { VerticalNavbar } from "../components/Navbar/VerticalNavbar";
import { PageLayout } from "./PageLayout";

export const AppLayout = ({ children }) => {
  return (
    <div className="relative h-full font-base max-w-page pt-20 pb-10">
      <Header />
      <VerticalNavbar />
      {children}
    </div>
  );
};
