import styled from 'styled-components';

export const StyledStickyButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  padding: 12px 24px;
  border: none;
  
  background-color: ${(props) => (props.$isActive ? "rgb(1, 180, 228)" : '#0000080')};
  color: ${(props) => (props.$isActive ? "white" : 'rgba(0, 0, 0, .5)')};
  
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  
  transform: translateY(0);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Pulse animation when active */
  ${props => props.$isActive && `
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0% {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
      50% {
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
      }
      100% {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
    }
  `}
  
  /* Slide in animation */
  animation: slideIn 0.3s ease-out;
  
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
  
  /* Mobile responsiveness */
  @media (max-width: 768px) {
    bottom: 0;
    right: 0;
    padding: 10px 20px;
    font-size: 12px;
  }
`;