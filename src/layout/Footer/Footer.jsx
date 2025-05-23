import IconContainer from "../../components/shared/iconContainer/iconContainer";
import { footerLabels } from "../../constants/footerLabels";
import useMediaQuery from "../../hooks/useMediaQuery";

import {
  ColumnTitle,
  FooterContainer,
  FooterWrapper,
  JoinButton,
  LinkColumn,
  LinkItem,
  LinksContainer,
  LogoSection,
} from "./Footer.styles";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoSection>
          <IconContainer
            iconName="tmdbMobileIcon.svg"
            alt="TMDB Logo"
            width="130px"
            height="94px"
            visibility={isMobile}
          />
          <JoinButton>Hi ObadaSawalmeh!</JoinButton>
        </LogoSection>

        <LinksContainer>
          {Object.values(footerLabels).map((section, index) => (
            <LinkColumn key={index}>
              <ColumnTitle>{section.title}</ColumnTitle>
              {section.links.map((link, linkIndex) => (
                <LinkItem key={linkIndex}>{link}</LinkItem>
              ))}
            </LinkColumn>
          ))}
        </LinksContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
