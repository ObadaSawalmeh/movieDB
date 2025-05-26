import styled from 'styled-components';

export const ActionMenuContainer = styled.div`
  position: relative;
  z-index: 15;
`;

export const MoreButton = styled.button`
  background: rgba(232, 232, 232, 0.9);
  border: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(26, 150, 190, 0.9);
  }

  ${props => props.$isOpen && `
    background: rgba(26, 150, 190, 0.9);
  `}

  svg {
    width: 1rem;
    height: 1rem;
    color: #333;
  }
`;

export const ActionMenuDropdown = styled.div`
  background: white;
  border-radius: .25rem;
  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, 0.2);
  min-width: 8rem;
  position: absolute;
  // different cases if we wanna use it elsewhere
  ${props => {
    switch (props.$position) {
      case 'top-left':
        return `left: -2rem; top: 3rem;`;
      case 'top-right':
      default:
        return `right: -3rem; top: 3rem;`;
      case 'bottom-left':
        return `left: -2rem; bottom: 3rem;`;
      case 'bottom-right':
        return `right: -2rem; bottom: 3rem;`;
    }
  }}
`;

export const ActionMenuItem = styled.div`
  padding: .75rem 1rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: .25rem;
  cursor: pointer;
  border-bottom: 1px solid #e3e3e3;
  font-size: .875rem;
  white-space: nowrap;
  color: rgba(0, 0, 0, .6);
  border-radius: .25rem;
  
  &:hover {
    background-color: rgb(230, 230, 230);
  }

  &:last-child {
    border-bottom: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
