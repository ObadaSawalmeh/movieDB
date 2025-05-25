import styled from "styled-components";

export const StyledIcon = styled.img`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  object-fit: contain;
  cursor: pointer;
  display: ${(props) => props.$visibility ? 'none' : 'block'};
  cursor: pointer;
  // handle desktop icon sizes 
  @media (min-width: 76.5rem) {
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
  }
  
  @media (max-width: 76.5rem) {
    height: ${(props) => props.$height};
  }
`;