import { StyledIcon } from "./iconContainer.styles";

const IconContainer = ({
  iconName,
  alt,
  width = "1.5rem",
  height = "1.5rem",
  visibility,
}) => {
  const src = `src/assets/icons/${iconName}`;

  return (
    <StyledIcon
      src={src}
      alt={alt}
      $width={width}
      $height={height}
      $visibility={visibility}
    />
  );
};

export default IconContainer;
