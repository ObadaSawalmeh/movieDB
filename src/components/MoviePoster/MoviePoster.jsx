import { MovieRating } from "components/MovieRating/MovieRating";
import { PosterContainer, PosterImage } from "./MoviePoster.styles";

export const MoviePoster = ({
  posterPath,
  title,
  rating,
  showRating = true,
  baseUrl = "https://image.tmdb.org/t/p/",
  posterSize = "w342",
  placeholderImage = "/placeholder-poster.jpg",
}) => {
  const getPosterUrl = (posterPath) =>
    posterPath ? `${baseUrl}${posterSize}${posterPath}` : placeholderImage;

  return (
    <PosterContainer>
      <PosterImage src={getPosterUrl(posterPath)} alt={title} loading="lazy" />
      {showRating && rating && <MovieRating rating={rating} />}
    </PosterContainer>
  );
};
