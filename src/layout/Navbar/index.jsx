import useMediaQuery from "../../hooks/useMediaQuery";
import NavMenu from "./NavMenu/NavMenu";
import NavControls from "./NavIcons/NavIcons";
import NavLogo from "./NavLogo/NavLogo";
import {
  CenterSection,
  HeaderContainer,
  HeaderWrapper,
  LeftSection,
  RightSection,
} from "./index.styles";
import NavItems from "./NavItems/NavItems";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

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
