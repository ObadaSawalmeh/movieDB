import IconContainer from "components/shared/iconContainer/iconContainer";
import useMediaQuery from "hooks/useMediaQuery";

function NavLogo() {
  const isMobile = useMediaQuery("(max-width: 76.5rem)");
  const iconName = isMobile ? "tmdbMobileIcon.svg" : "tmdbDesktopIcon.svg";
  const height = isMobile ? "2.5rem" : "1.25rem";
  const width = isMobile ? "3.4375rem" : "11.25rem";

  return (
    <IconContainer
      iconName={iconName}
      alt="Logo"
      height={height}
      width={width}
    />
  );
}

export default NavLogo;
