import { InputContainer } from "./SearchInput.styles";

export const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <InputContainer
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
