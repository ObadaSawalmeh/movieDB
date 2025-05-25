import Tooltip from "components/Tooltip/Tooltip";
import { navItemsOptions } from "constants/navOptions";
import { useState } from "react";
import { NavContainer, NavItem, NavLink } from "./NavItems.styles";

const NavItems = ({ activeOption = "TV Shows" }) => {
  const [currentActive, setCurrentActive] = useState(activeOption);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleNavClick = (option) => {
    setCurrentActive(option);
  };

  const handleMouseEnter = (option) => {
    setHoveredItem(option);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleTooltipOptionClick = (option, tooltipOption) => {
    console.log(`Selected ${tooltipOption} from ${option}`);
  };

  return (
    <NavContainer>
      {Object.entries(navItemsOptions).map(
        ([key, { label, tooltipOptions }]) => (
          <NavItem
            key={key}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              isActive={currentActive === label}
              onClick={() => handleNavClick(label)}
            >
              {label}
            </NavLink>
            <Tooltip
              options={tooltipOptions}
              isVisible={hoveredItem === key}
              onOptionClick={(tooltipOption) =>
                handleTooltipOptionClick(label, tooltipOption)
              }
            />
          </NavItem>
        )
      )}
    </NavContainer>
  );
};

export default NavItems;
