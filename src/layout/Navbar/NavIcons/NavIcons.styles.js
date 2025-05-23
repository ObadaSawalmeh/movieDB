// components/NavControls/NavControls.styles.js
import styled from "styled-components";

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const LanguageButton = styled.button`
  width: 28px;
  height: 26px;
  padding: 3px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: white;
    color: #032541;
  }
  @media (max-width: 768px) {
    display:none;
  }
`;

export const Badge = styled.div`
  background-color: rgb(210, 144, 1);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;