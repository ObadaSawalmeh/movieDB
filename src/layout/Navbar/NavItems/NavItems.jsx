import { useState } from "react";
import { navOptions } from "../../../constants/navOptions";
import { NavContainer, NavItem, NavLink } from "./NavItems.styles";

const NavItems = ({ activeOption = "TV Shows" }) => {
  const [currentActive, setCurrentActive] = useState(activeOption);

  const handleNavClick = (option) => {
    setCurrentActive(option);
  };

  return (
    <NavContainer>
      {navOptions.map((option) => (
        <NavItem key={option}>
          <NavLink
            isActive={currentActive === option}
            onClick={() => handleNavClick(option)}
          >
            {option}
          </NavLink>
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default NavItems;
