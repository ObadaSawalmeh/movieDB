import {
  SectionContainer,
  SectionContent,
  SectionHeader,
  SelectArrow,
  SortSelect,
  SortSelectWrapper,
} from "./SortSection.styles";

export const SortSection = ({
  sortBy = "popularityDescending",
  onSortChange,
  sortOptions = [],
  sectionTitle = "Sort Results By",
}) => {
  const handleSortChange = (e) => {
    if (onSortChange) {
      onSortChange(e.target.value);
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>{sectionTitle}</SectionHeader>
      <SectionContent>
        <SortSelectWrapper>
          <SortSelect
            onChange={handleSortChange}
            value={sortBy}
            id="sort-select"
            name="sort-select"
          >
            {sortOptions?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SortSelect>
          <SelectArrow size={20} />
        </SortSelectWrapper>
      </SectionContent>
    </SectionContainer>
  );
};
