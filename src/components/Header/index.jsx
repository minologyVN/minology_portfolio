import tw, { styled } from "twin.macro";
import { Logo } from "../Logo";
import { SocialMedia } from "../Header/SocialMedia";

const HeaderContainer = styled.header(() => [
  tw`absolute inset-x-0 top-0 h-20 flex items-center justify-between px-4`,
  tw`sm:px-16`,
]);

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SocialMedia />
    </HeaderContainer>
  );
};
