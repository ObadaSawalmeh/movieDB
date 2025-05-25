// shared/FilterChip/FilterChip.jsx
import { ChipContainer } from "./FilterChip.styles";

export const FilterChip = ({ label, isSelected, onClick }) => {
  return (
    <ChipContainer isSelected={isSelected} onClick={onClick}>
      {label}
    </ChipContainer>
  );
};
