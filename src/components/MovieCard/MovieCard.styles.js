import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  border-radius: .5rem;
  background: #fff;
  box-shadow: 0.2rem 0.2rem .5rem rgba(0, 0, 0, .1);
  border: .0625rem solid #e3e3e3;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover .movie-card-overlay {
    opacity: 1;
  }
`;

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

export const CircularRatingWrapper = styled.div`
  position: absolute;
  bottom: -1.5rem;
  left: .75rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #081c22;
  border-radius: 50%;
  padding: .125rem;
  margin-bottom:.75rem;
  font-weight:600;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: .5rem;
  padding: .5rem;
  backdrop-filter: blur(20px);
  z-index: 10;
`;

export const ActionMenu = styled.div`
  background: white;
  border-radius: .25rem;
  padding: .75rem 0;
  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, 0.2);
  min-width: 7.5rem;
  z-index: 15;
  position: absolute;
  right: -2rem;
  top: 3rem;
`;

export const ActionMenuItem = styled.div`
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: .25rem;
  cursor: pointer;
  border-bottom: 1px solid #e3e3e3;
  font-size: .875rem;
  white-space: nowrap;
  align-items: center;
  color: rgba(0, 0, 0, .6);
  border-radius: .25rem;
  &:hover {
    background-color:rgb(230, 230, 230);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
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
  font-size: .85rem;
  color: #666;
  margin: 0;
`;

export const MoreButton = styled.button`
  position: absolute;
  top: .5rem;
  right: .5rem;
  background: rgba(232, 232, 232, 0.9);
  border: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 12;

  &:hover {
    background: rgba(26, 150, 190, 0.9);
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #333;
  }
`;