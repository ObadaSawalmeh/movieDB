// shared/DropdownSection/DropdownSection.styles.js
import styled from 'styled-components';

export const DropdownContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 .125rem .5rem rgba(0, 0, 0, .1);
  border-radius:.5rem;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const DropdownTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  text-transform: capitalize;
`;

export const DropdownIcon = styled.span`
  font-size: .75rem;
  color: #000;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
`;

export const DropdownContent = styled.div`
  border-radius: .5rem;s
  background-color: #ffffff;
`;