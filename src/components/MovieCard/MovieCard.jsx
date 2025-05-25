import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import IconContainer from "components/shared/iconContainer/iconContainer";
import {
  dateFormatOptions,
  imageConfig,
  movieCardLabels,
} from "constants/movieCardInfo";
import {
  ActionMenu,
  ActionMenuItem,
  CardContainer,
  CardInfo,
  CardOverlay,
  CircularRatingWrapper,
  MoreButton,
  MovieTitle,
  PosterContainer,
  PosterImage,
  ReleaseDate,
} from "./MovieCard.styles";

export function MovieCard({ movie }) {
  const [showActionMenu, setShowActionMenu] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", dateFormatOptions);
  };

  const formatRating = (rating) => `${Math.round(rating * 10)}`;

  const getRatingColor = (rating) => {
    if (rating >= 70) return "#21d07a";
    if (rating >= 30) return "#d2d531";
    return "#db2360";
  };

  const getPosterUrl = (posterPath) =>
    posterPath
      ? `${imageConfig.baseUrl}${imageConfig.posterSize}${posterPath}`
      : "/placeholder-poster.jpg";

  const handleMoreClick = (e) => {
    e.stopPropagation();
    setShowActionMenu((prev) => !prev);
  };

  const handleActionClick = (action, e) => {
    e.stopPropagation();
    setShowActionMenu(false);
  };

  const rating = formatRating(movie.vote_average);

  return (
    <CardContainer>
      <CardOverlay className="movie-card-overlay">
        <MoreButton onClick={handleMoreClick}>
          <MoreHorizontal />
        </MoreButton>
        {showActionMenu && (
          <ActionMenu>
            <ActionMenuItem onClick={(e) => handleActionClick("addToList", e)}>
              <IconContainer
                iconName="listIcon.svg"
                alt="Add to list"
                width="1rem"
                height="1rem"
              />
              {movieCardLabels.addToList}
            </ActionMenuItem>
            <ActionMenuItem onClick={(e) => handleActionClick("favorite", e)}>
              <IconContainer
                iconName="favIcon.svg"
                alt="Favorite"
                width="1rem"
                height="1rem"
              />
              {movieCardLabels.favorite}
            </ActionMenuItem>
            <ActionMenuItem onClick={(e) => handleActionClick("watchlist", e)}>
              <IconContainer
                iconName="bookmarkIcon.svg"
                alt="Watchlist"
                width="1rem"
                height="1rem"
              />
              {movieCardLabels.watchlist}
            </ActionMenuItem>
            <ActionMenuItem onClick={(e) => handleActionClick("rating", e)}>
              <IconContainer
                iconName="starIcon.svg"
                alt="Your rating"
                width="1rem"
                height="1rem"
              />
              {movieCardLabels.yourRating}
            </ActionMenuItem>
          </ActionMenu>
        )}
      </CardOverlay>
      <PosterContainer>
        <PosterImage
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          loading="lazy"
        />
        {/* rating circular wrapper */}
        <CircularRatingWrapper>
          <CircularProgressbar
            value={rating}
            text={`${rating}%`}
            background
            backgroundPadding={4}
            styles={buildStyles({
              backgroundColor: "#081c22",
              textColor: "white",
              pathColor: getRatingColor(rating),
              trailColor: "#204529",
              textSize: "2rem",
              textWeight: "600",
            })}
          />
        </CircularRatingWrapper>
      </PosterContainer>
      <CardInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <ReleaseDate>{formatDate(movie.release_date)}</ReleaseDate>
      </CardInfo>
    </CardContainer>
  );
}
