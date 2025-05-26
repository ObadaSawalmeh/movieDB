import { GenreSection } from "components/GenreSection/GenreSection";
import { SearchSection } from "components/SearchSection/SearchSection";
import { SortSection } from "components/SortSection/SortSection";
import { ActionButton } from "components/shared/ActionButton/ActionButton";
import { DropdownSection } from "components/shared/DropdownSection/DropdownSection";
import { StickyButton } from "components/shared/StickyButton/StickyButton";
import { filterLabels, sortOptions } from "constants/filterConstants";
import { useElementOnScreen } from "hooks/useElementOnScreen";
import { useEffect, useRef, useState } from "react";
import { SearchContainer, SidebarContainer } from "./FilterSidebar.styles";

export const FilterSidebar = ({ onFiltersChange, initialFilters = {} }) => {
  const searchButtonRef = useRef(null);
  const isSearchButtonVisible = useElementOnScreen(searchButtonRef);

  const [selectedGenres, setSelectedGenres] = useState(
    initialFilters.selectedGenres || []
  );
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortBy, setSortBy] = useState(
    initialFilters.sortBy || "popularityDescending"
  );
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  useEffect(() => {
    if (initialFilters.selectedGenres !== undefined) {
      setSelectedGenres(initialFilters.selectedGenres);
    }
    if (initialFilters.sortBy !== undefined) {
      setSortBy(initialFilters.sortBy);
    }
    setSearchKeyword(initialFilters.searchKeyword || "");
  }, [initialFilters]);

  const handleGenreToggle = (genre) => {
    const newGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre];
    setSelectedGenres(newGenres);
  };

  const handleSearch = () => {
    const trimmedKeyword = searchKeyword.trim();

    if (onFiltersChange) {
      onFiltersChange({
        selectedGenres,
        searchKeyword: trimmedKeyword,
        sortBy,
      });
    }
  };

  const handleKeywordChange = (keyword) => {
    setSearchKeyword(keyword);

    if (onFiltersChange) {
      onFiltersChange({
        selectedGenres,
        searchKeyword: keyword.join(""),
        sortBy,
      });
    }
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const isFilterActive =
    selectedGenres.length > 0 ||
    searchKeyword.trim() !== "" ||
    sortBy !== (initialFilters.sortBy || "popularityDescending");

  return (
    <>
      <SidebarContainer>
        <DropdownSection
          title={filterLabels.sort}
          isOpen={isSortOpen}
          onToggle={() => setIsSortOpen(!isSortOpen)}
        >
          <SortSection
            sortBy={sortBy}
            onSortChange={handleSortChange}
            sortOptions={sortOptions}
            sectionTitle={filterLabels.sortResultsBy}
          />
        </DropdownSection>

        <DropdownSection
          title={filterLabels.filters}
          isOpen={isFiltersOpen}
          onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <GenreSection
            selectedGenres={selectedGenres}
            onGenreToggle={handleGenreToggle}
            sectionTitle={filterLabels.genres}
          />

          <SearchSection
            searchKeyword={searchKeyword}
            onKeywordChange={handleKeywordChange}
            onSearch={handleSearch}
            isActive={isFilterActive}
            sectionTitle={filterLabels.keywords}
            placeholder={filterLabels.keywordsPlaceholder}
          />

          <SearchContainer>
            <ActionButton
              ref={searchButtonRef}
              onClick={handleSearch}
              isActive={isFilterActive}
              disabled={!isFilterActive}
            >
              {filterLabels.search}
            </ActionButton>
          </SearchContainer>
        </DropdownSection>
      </SidebarContainer>

      <StickyButton
        onClick={handleSearch}
        isActive={isFilterActive}
        isVisible={!isSearchButtonVisible && isFilterActive}
        title="Search with current filters"
        disabled={!isFilterActive}
      >
        {filterLabels.search}
      </StickyButton>
    </>
  );
};
