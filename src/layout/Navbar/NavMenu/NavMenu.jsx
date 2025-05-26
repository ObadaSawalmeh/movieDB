import IconContainer from "components/shared/IconContainer/IconContainer.jsx";
import { useSideNav } from "context/SideNavContext/SideNavContext.js";
import { Menu } from "./NavMenu.styles";

function NavMenu() {
  const { toggleSideNav } = useSideNav();

  return (
    <Menu onClick={toggleSideNav}>
      <IconContainer iconName="hamburger.svg" alt="Menu" />
    </Menu>
  );
}

export default NavMenu;
