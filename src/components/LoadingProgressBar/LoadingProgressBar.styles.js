import styled from 'styled-components';

export const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  height: 3px;
  background-color: rgba(1, 180, 228, 0.1);
`;

export const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #01B4E4 0%, #032541 100%);
  width: ${props => props.progress}%;
  transition: width 0.3s ease-out;
  box-shadow: ${props =>
    props.progress > 0
      ? '0 0 10px rgba(1, 180, 228, 0.5), 0 0 5px rgba(1, 180, 228, 0.3)'
      : 'none'
  };
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
    animation: ${props => props.progress > 0 && props.progress < 100 ? 'shimmer 1.5s infinite' : 'none'};
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(100px);
    }
  }
`;