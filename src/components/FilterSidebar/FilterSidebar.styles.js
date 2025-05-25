import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 16.25rem;
  border-radius: .5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  @media (max-width: 48rem) {
    width: 100%;
    z-index: 1000;
  }
`;

export const SearchContainer = styled.div`
  padding: 1rem 1.25rem;
  border-top: 0.0625rem solid #e3e3e3;
`;  