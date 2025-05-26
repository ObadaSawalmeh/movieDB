import { ActionMenu } from "components/ActionMenu/ActionMenu";
import { MoviePoster } from "components/MoviePoster/MoviePoster";
import { actionMenuItems } from "constants/movieCardConfig";
import { useState } from "react";
import { formatDate } from "utils/dateUtils";
import {
  CardContainer,
  CardInfo,
  CardOverlay,
  MovieTitle,
  ReleaseDate,
} from "./MovieCard.styles";

export function MovieCard({
  movie,
  onActionClick,
  showActions = true,
  showRating = true,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleActionClick = (actionId, e) => {
    if (onActionClick) {
      onActionClick(actionId, movie, e);
    }
  };

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <CardContainer>
      {showActions && (
        <CardOverlay $isBlurred={isMenuOpen}>
          <ActionMenu
            items={actionMenuItems}
            onActionClick={handleActionClick}
            onMenuToggle={handleMenuToggle}
            position="top-right"
          />
        </CardOverlay>
      )}

      <MoviePoster
        posterPath={movie.poster_path}
        title={movie.title}
        rating={movie.vote_average}
        showRating={showRating}
      />

      <CardInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <ReleaseDate>{formatDate(movie.release_date)}</ReleaseDate>
      </CardInfo>
    </CardContainer>
  );
}
