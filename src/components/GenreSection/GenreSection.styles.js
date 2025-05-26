import styled from 'styled-components';

export const SectionContainer = styled.div`
  padding: 1rem 1.25rem;
  border-top: 0.0625rem solid #e3e3e3;
`;

export const SectionHeader = styled.h3`
  font-size: .875rem;
  font-weight: 600;
  color: #000;
  margin: 0 0 .75rem 0;
  text-transform: capitalize;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  border-radius: .25rem;
`;

export const GenreGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
`;