import IconContainer from "components/shared/IconContainer/IconContainer";
import { footerLabels } from "constants/footerLabels";
import useMediaQuery from "hooks/useMediaQuery";

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
  const isMobile = useMediaQuery("(max-width: 76.5rem)");

  return (
    <FooterContainer as="footer" data-testid="footer">
      <FooterWrapper>
        <LogoSection>
          <IconContainer
            iconName="tmdbMobileIcon.svg"
            alt="TMDB Logo"
            width="8.125rem"
            height="9.25rem"
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
