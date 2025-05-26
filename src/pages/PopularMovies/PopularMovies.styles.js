import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin: 0rem auto 5rem auto;
  padding: 0 1rem;
  max-width:87.5rem;
  gap:2rem;
  @media (max-width: 48rem) {
    width:100%;
    flex-direction: column
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  width: 17.75rem;
  background: white;
  padding: 2.25rem 1.5rem;
  height: 100vh;
  flex-direction: column;
  gap: 1.4rem;
  @media (max-width: 48rem) {
    width:100%;
    height:100%;
  }
 
`;

export const FilterHeader = styled.h2`
  font-size: 1.594rem;;
  font-weight: 600;
  width: 100%;
  color: #333;
  margin: 0;
  font-stretch: 100%;
  line-height:24px;
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 0 0;
  overflow-y: auto;
  @media (max-width: 48rem) {
    width:100%;
    padding: 1rem;
  }
`;

export const LoadMoreButton = styled.button`
  background-color: ${(props) => (props.$isActive ? "rgb( 1, 180, 228)" : '#0000080')};
  color: ${(props) => (props.$isActive ? "white" : 'rgba(0, 0, 0, .5)')};
  border: none;
  border-radius: .375rem;
  padding: .625rem 1rem;
  font-size: 1.2em;
  font-weight: 600;
  width: 100%;
  height: 100%;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: capitalize;

  &:hover {
    background-color: #032541;
    color:white;
    transform: translateY(-0.0625rem);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 .1875rem rgba(0, 123, 255, 0.25);
  }
`;