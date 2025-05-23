import IconContainer from "../../../components/shared/iconContainer/iconContainer";
import useMediaQuery from "../../../hooks/useMediaQuery";

function NavLogo() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const iconName = isMobile ? "tmdbMobileIcon.svg" : "tmdbDesktopIcon.svg";
  const height = isMobile ? "40px" : "20px";
  const width = isMobile ? "55px" : "154px";

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
