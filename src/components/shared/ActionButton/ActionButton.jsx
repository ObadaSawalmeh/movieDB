import { forwardRef } from "react";
import { StyledActionButton } from "./ActionButton.styles";

export const ActionButton = forwardRef(
  (
    {
      children,
      onClick,
      isActive = false,
      variant = "primary",
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <StyledActionButton
        ref={ref}
        onClick={onClick}
        $isActive={isActive}
        $variant={variant}
        className={className}
        {...props}
      >
        {children}
      </StyledActionButton>
    );
  }
);

ActionButton.displayName = "ActionButton";
