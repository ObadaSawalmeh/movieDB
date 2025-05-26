import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  border-radius: .5rem;
  background: #fff;
  box-shadow: 0.2rem 0.2rem .5rem rgba(0, 0, 0, .1);
  border: .0625rem solid #e3e3e3;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ $isBlurred }) =>
    $isBlurred ? 'rgba(0, 0, 0, 0.7)' : 'transparent'};
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: .5rem;
  padding: .5rem;
  backdrop-filter: ${({ $isBlurred }) =>
    $isBlurred ? 'blur(20px)' : 'none'};
  z-index: 10;
  pointer-events: auto; // Changed from none to auto so button is always clickable
`;

export const CardInfo = styled.div`
  padding: 1rem .5rem;
`;

export const MovieTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: black;
  margin: .25rem 0 .25rem 0;
`;

export const ReleaseDate = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;