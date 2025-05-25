import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';

export const SectionContainer = styled.div`
  padding: 1rem 1.25rem;
  border-top: 0.0625rem solid #e3e3e3;
`;

export const SectionHeader = styled.h3`
  font-size: .875rem;
  font-weight: 600;
  color: #333333;
  margin: 0 0 .75rem 0;
  text-transform: capitalize;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  border-radius: .25rem;
`;

export const SortSelectWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2.25rem;
`;

export const SortSelect = styled.select`
  width: 100%;
  padding: .625rem .75rem;
  border-radius: .375rem;
  font-size: .75rem;
  font-weight: 600;
  border: .0625rem solid #dee2e6;
  color: #212529;
  background-color: #ffffff;
  appearance: none;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: #adb5bd;
    background-color: #f8f9fa;
  }

  option {
    padding: .5rem .75rem;
    font-size: .75rem;
    background: #fff;
  }
`;

export const SelectArrow = styled(FiChevronDown)`
  position: absolute;
  right: .75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #495057;
  transition: color 0.2s ease;

  ${SortSelect}:hover + & {
    color: #212529;
  }
`;

