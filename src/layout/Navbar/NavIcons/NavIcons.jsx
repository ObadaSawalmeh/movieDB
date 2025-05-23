import IconContainer from "../../../components/shared/iconContainer/iconContainer";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Badge, ControlsWrapper, LanguageButton } from "./NavIcons.styles";

const NavIcons = ({ language = "EN", onLanguageClick }) => {
  const handleLanguageClick = () => {
    if (onLanguageClick) {
      onLanguageClick();
    }
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ControlsWrapper>
      {/* Action Buttons */}
      <IconContainer
        iconName="plusIcon.svg"
        alt="Add"
        visibility={isMobile ? "hidden" : ""}
      />
      <LanguageButton
        onClick={handleLanguageClick}
        aria-label={`Current language: ${language}`}
        title="Change language"
      >
        {language}
      </LanguageButton>

      {/* Nav Icons */}
      <IconContainer iconName="notificationIcon.svg" alt="Notifications" />
      <Badge>o</Badge>
      <IconContainer
        iconName="searchIcon.svg"
        alt="Search"
        height="29px"
        width="29px"
      />
    </ControlsWrapper>
  );
};

export default NavIcons;
