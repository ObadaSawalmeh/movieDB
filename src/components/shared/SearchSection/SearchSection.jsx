import { useState } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import {
  SearchContainer,
  SectionContainer,
  SectionContent,
  SectionHeader,
} from "./SearchSection.styles";

export const SearchSection = ({
  searchKeyword = "",
  onKeywordChange,
  onSearch,
  isActive = false,
  sectionTitle = "Keywords",
  placeholder = "Search keywords...",
}) => {
  const [localKeyword, setLocalKeyword] = useState(searchKeyword);

  const handleKeywordChange = (keyword) => {
    setLocalKeyword(keyword);
    if (onKeywordChange) {
      onKeywordChange(keyword);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>{sectionTitle}</SectionHeader>
      <SectionContent>
        <SearchContainer>
          <SearchInput
            placeholder={placeholder}
            value={localKeyword}
            onChange={handleKeywordChange}
            onEnter={handleSearch}
          />
        </SearchContainer>
      </SectionContent>
    </SectionContainer>
  );
};
