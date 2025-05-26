import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularRatingWrapper } from "./MovieRating.styles";

export const MovieRating = ({ rating, size = "2.5rem" }) => {
  const formatRating = (rating) => Math.round(rating * 10);

  const getRatingColor = (rating) => {
    if (rating >= 70) return "#21d07a";
    if (rating >= 30) return "#d2d531";
    return "#db2360";
  };

  const formattedRating = formatRating(rating);

  return (
    <CircularRatingWrapper $size={size}>
      <CircularProgressbar
        value={formattedRating}
        text={`${formattedRating}%`}
        background
        backgroundPadding={4}
        styles={buildStyles({
          backgroundColor: "#081c22",
          textColor: "white",
          pathColor: getRatingColor(formattedRating),
          trailColor: "#204529",
          textSize: "2rem",
          textWeight: "600",
        })}
      />
    </CircularRatingWrapper>
  );
};
