// components/NavControls/NavControls.styles.js
import styled from "styled-components";

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 76.5rem) {
    gap: 2rem;
  }
`;

export const LanguageButton = styled.button`
  width: 1.75rem;
  height: 1.;
  padding: 3px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  border: .0625rem solid white;
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
  @media (max-width: 76.5rem) {
    display:none;
  }
`;

export const Badge = styled.div`
 background-color: rgb(210, 144, 1);
    min-width: 32px;
    width: 32px;
    min-height: 32px;
    height: 32px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 50%;
    color: #fff;
    font-size: .9em;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
`;