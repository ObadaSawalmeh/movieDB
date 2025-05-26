import styled from 'styled-components';

export const StyledStickyButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  padding: 12px 24px;
  border: none;
  
  background-color: ${(props) => (props.$isActive ? "rgb(1, 180, 228)" : '#000080')};
  color: ${(props) => (props.$isActive ? "white" : 'rgba(0, 0, 0, .5)')};
  
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  
  display: ${props => props.$isFooterVisible ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  
  transform: translateY(0);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  transform: translateY(${props => props.$isFooterVisible ? `-${props.$footerHeight + 20}px` : '0'});
  opacity: ${props => props.$isFooterVisible ? '0.7' : '1'};
  
  /* Pulse animation when active */
  ${props => props.$isActive && `
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0% {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
      50% {
        box-shadow: 0 4px 15px rgba(1, 180, 228, 0.4);
      }
      100% {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
    }
  `}
  
  /* Slide in animation - only on initial mount */
  &.initial-mount {
    animation: slideIn 0.3s ease-out;
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @media (max-width: 48rem) {
    padding: .625rem 1.25rem;
    font-size: 1rem;
    
    &:hover {
      transform: translateY(-0.0625rem);
    }
  }
`;