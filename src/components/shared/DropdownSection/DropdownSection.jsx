// shared/DropdownSection/DropdownSection.jsx
import {
    DropdownContainer,
    DropdownContent,
    DropdownHeader,
    DropdownIcon,
    DropdownTitle,
} from "./DropdownSection.styles";

export const DropdownSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <DropdownContainer>
      <DropdownHeader onClick={onToggle}>
        <DropdownTitle>{title}</DropdownTitle>
        <DropdownIcon isOpen={isOpen}>❯</DropdownIcon>
      </DropdownHeader>
      {isOpen && <DropdownContent>{children}</DropdownContent>}
    </DropdownContainer>
  );
};
