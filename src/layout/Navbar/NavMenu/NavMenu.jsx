import IconContainer from "../../../components/shared/iconContainer/iconContainer.jsx";
import { useSideNav } from "../../../context/SideNavContext.jsx";
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
