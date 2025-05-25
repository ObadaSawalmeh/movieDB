import styled from 'styled-components';

export const StyledActionButton = styled.button`
  background-color: ${(props) => (props.$isActive ? "rgb(1, 180, 228)" : '#0000080')};
  color: ${(props) => (props.$isActive ? "white" : 'rgba(0, 0, 0, .5)')};
  border: none;
  border-radius: .375rem;
  padding: .625rem 1rem;
  font-size: 1.2em;
  line-height: 1;
  font-weight: 600;
  width: 100%;
  height: 100%;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: capitalize;

  &:hover {
    background-color: #032541;
    color: white;
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
