import styled from 'styled-components';

export const SectionContainer = styled.div`
  padding: 1rem 1.25rem;
  border-top: 0.0625rem solid #e3e3e3;
`;

export const SectionHeader = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .5);;
  margin: 0 0 .75rem 0;
  text-transform: capitalize;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  border-radius: .25rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`;
