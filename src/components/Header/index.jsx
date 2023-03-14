import { Logo } from "../Logo";
import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Navbar />
    </header>
  );
};
