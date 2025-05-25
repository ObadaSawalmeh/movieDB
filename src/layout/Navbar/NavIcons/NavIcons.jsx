// components/NavControls/NavIcons.jsx
import ExpandedSearchInput from "components/shared/ExpandedSearchInput/ExpandedSearchInput";
import IconContainer from "components/shared/iconContainer/iconContainer";
import useMediaQuery from "hooks/useMediaQuery";
import { Badge, ControlsWrapper, LanguageButton } from "./NavIcons.styles";

const NavIcons = ({ language = "EN", onLanguageClick, onSearch }) => {
  const handleLanguageClick = () => {
    if (onLanguageClick) {
      onLanguageClick();
    }
  };

  const handleSearch = (searchTerm) => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const isMobile = useMediaQuery("(max-width: 76.5rem)");

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

      {/* Search Component */}
      <ExpandedSearchInput onSearch={handleSearch} />
    </ControlsWrapper>
  );
};

export default NavIcons;
