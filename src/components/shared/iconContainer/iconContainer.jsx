import { StyledIcon } from "./iconContainer.styles";

const IconContainer = ({
  iconName,
  alt,
  width = "24px",
  height = "24px",
  visibility,
}) => {
  const src = `/public/assets/icons/${iconName}`;

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
