import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  z-index: 1000;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  margin-top: 0.5rem;
`;

export const TooltipContent = styled.div`
  background-color: #ffffff;
  border: .0625rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0 .25rem 6px -.0625rem rgba(0, 0, 0, 0.1), 0 .125rem .25rem -.0625rem rgba(0, 0, 0, 0.06);
  min-width: 12rem;
  padding: 0.5rem 0;
`;

export const TooltipItem = styled.div`
  padding: 0.5rem 1rem;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  &:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;
