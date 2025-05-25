import { MovieCard } from "../MovieCard/MovieCard";
import {
  ErrorContainer,
  GridContainer,
  LoadingContainer,
  NoResultsContainer,
} from "./MovieGrid.styles";

export function MovieGrid({ movies, loading, error }) {
  if (loading) {
    return (
      <LoadingContainer>
        <div>Loading movies...</div>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <div>
          <h3>Error loading movies</h3>
          <p>{error}</p>
        </div>
      </ErrorContainer>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <NoResultsContainer>
        <div>
          <h3>No movies found</h3>
          <p>Try adjusting your filters or search criteria.</p>
        </div>
      </NoResultsContainer>
    );
  }

  return (
    <GridContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </GridContainer>
  );
}
