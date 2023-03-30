import { Logo } from "../Logo";
import { SocialMedia } from "../Header/SocialMedia";

export const Header = () => {
  return (
    <header className="absolute border-2 border-orange-500 inset-x-0 top-0 h-20 flex items-center justify-between px-8">
      <Logo />
      <SocialMedia />
    </header>
  );
};
