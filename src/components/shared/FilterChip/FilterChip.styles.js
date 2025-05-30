import styled from 'styled-components';

export const ChipContainer = styled.button`
  background-color: ${props => props.isSelected ? 'rgb(1, 180, 228)' : '#f8f9fa'};
  color: ${props => props.isSelected ? '#ffffff' : '#495057'};
  border: .0625rem solid ${props => props.isSelected ? 'rgb(1, 180, 228)' : '#dee2e6'};
  border-radius: 1.25rem;
  border-radius: .25rem;
  padding: .25rem .75rem;
  font-size: .875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-transform: capitalize;
  &:hover {
    background-color: ${props => props.isSelected ? '#0056b3' : '#e9ecef'};
    border-color: ${props => props.isSelected ? '#0056b3' : '#adb5bd'};
  }

  &:focus {
    outline: none;
  }
`;