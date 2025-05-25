import { useGenres } from "../../../hooks/useTmdb";
import { FilterChip } from "../FilterChip/FilterChip";
import {
  GenreGrid,
  SectionContainer,
  SectionContent,
  SectionHeader,
} from "./GenreSection.styles";

export const GenreSection = ({
  selectedGenres = [],
  onGenreToggle,
  sectionTitle = "Genres",
}) => {
  const { genres, error: genresError } = useGenres();

  const handleGenreClick = (genreValue) => {
    if (onGenreToggle) {
      onGenreToggle(genreValue);
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>{sectionTitle}</SectionHeader>
      <SectionContent>
        {genresError ? (
          <div>Error loading genres: {genresError}</div>
        ) : (
          <GenreGrid>
            {genres.map((genre) => (
              <FilterChip
                key={genre.value}
                label={genre.label}
                isSelected={selectedGenres.includes(genre.value)}
                onClick={() => handleGenreClick(genre.value)}
              />
            ))}
          </GenreGrid>
        )}
      </SectionContent>
    </SectionContainer>
  );
};
