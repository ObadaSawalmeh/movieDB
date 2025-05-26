import { MovieCard } from "components/MovieCard/MovieCard";
import {
  ErrorContainer,
  GridContainer,
  LoadingContainer,
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
  return (
    <GridContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </GridContainer>
  );
}
