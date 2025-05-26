import styled from 'styled-components';

export const PosterContainer = styled.div`
  position: relative;
  aspect-ratio: 2/3;
  border-radius: .5rem;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .25rem .25rem 0 0;
`;
