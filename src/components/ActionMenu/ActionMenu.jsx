import IconContainer from "components/shared/IconContainer/IconContainer";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  ActionMenuContainer,
  ActionMenuDropdown,
  ActionMenuItem,
  MoreButton,
} from "./ActionMenu.styles";

export const ActionMenu = ({
  items = [],
  onActionClick,
  onMenuToggle,
  position = "top-right",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (onMenuToggle) {
      onMenuToggle(isOpen);
    }
  }, [isOpen, onMenuToggle]);

  const handleMoreClick = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (actionId, e) => {
    e.stopPropagation();
    setIsOpen(false);
    if (onActionClick) {
      onActionClick(actionId, e);
    }
  };

  return (
    <ActionMenuContainer ref={menuRef} className={className}>
      <MoreButton onClick={handleMoreClick} $isOpen={isOpen}>
        <MoreHorizontal />
      </MoreButton>

      {isOpen && (
        <ActionMenuDropdown $position={position}>
          {items.map((item) => (
            <ActionMenuItem
              key={item.id}
              onClick={(e) => handleItemClick(item.id, e)}
            >
              <IconContainer
                iconName={item.iconName}
                alt={item.alt}
                width="1rem"
                height="1rem"
              />
              {item.label}
            </ActionMenuItem>
          ))}
        </ActionMenuDropdown>
      )}
    </ActionMenuContainer>
  );
};
