import styled from 'styled-components';

export const CircularRatingWrapper = styled.div`
  position: absolute;
  bottom: -1.5rem;
  left: .75rem;
  width: ${props => props.$size || '2.5rem'};
  height: ${props => props.$size || '2.5rem'};
  background-color: #081c22;
  border-radius: 50%;
  padding: .125rem;
  margin-bottom: .75rem;
  font-weight: 600;
`;
