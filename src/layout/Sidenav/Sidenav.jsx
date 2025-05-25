import { useSideNav } from "context/SideNavContext/SideNavContext.js";
import {
  NavItem,
  NavLink,
  NavList,
  SideNavContainer,
  SideNavContent,
} from "./Sidenav.styles.js";

import { primaryLinks, secondaryLinks } from "constants/sideNavOptions.js";

const Sidenav = () => {
  const { isOpen, closeSideNav } = useSideNav();

  return (
    <>
      <SideNavContainer isOpen={isOpen}>
        <SideNavContent>
          <NavList>
            {primaryLinks.map((link) => (
              <NavItem key={link.label}>
                <NavLink
                  href={link.href}
                  className="primary"
                  onClick={closeSideNav}
                >
                  {link.label}
                </NavLink>
              </NavItem>
            ))}

            {secondaryLinks.map((link) => (
              <NavItem key={link.label}>
                <NavLink
                  href={link.href}
                  className="secondary"
                  onClick={closeSideNav}
                >
                  {link.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </SideNavContent>
      </SideNavContainer>
    </>
  );
};

export default Sidenav;
