import styled from "styled-components";

export const StyledIcon = styled.img`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  object-fit: contain;
  cursor: pointer;
  display: ${(props) => props.$visibility ? 'none' : 'block'};
  
  // handle desktop icon sizes 
  @media (min-width: 768px) {
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
  }
  
  @media (max-width: 768px) {
    height: ${(props) => props.$height};
  }
`;