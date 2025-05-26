import useMediaQuery from "hooks/useMediaQuery";
import {
  CenterSection,
  HeaderContainer,
  HeaderWrapper,
  LeftSection,
  RightSection,
} from "./index.styles";
import NavControls from "./NavIcons/NavIcons";
import NavItems from "./NavItems/NavItems";
import NavLogo from "./NavLogo/NavLogo";
import NavMenu from "./NavMenu/NavMenu";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 76.5rem)");

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LeftSection>
          {!isMobile && <NavLogo />}
          {!isMobile && <NavItems />}
          {isMobile && <NavMenu />}
        </LeftSection>

        <CenterSection>
          {isMobile && <NavLogo />}
          {!isMobile && <NavControls />}
        </CenterSection>

        <RightSection>{isMobile && <NavControls />}</RightSection>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Navbar;
