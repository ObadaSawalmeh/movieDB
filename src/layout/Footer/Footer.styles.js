import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #032541;
  color: white;
  padding: 3rem 2rem 2rem;
  width: 100%;
  
  /* Set CSS custom property for footer height calculation */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    pointer-events: none;
  }
  
  /* Approximate footer height for sticky button positioning */
  --footer-height: 220px;
  
  @media (max-width: 76.5rem) {
    --footer-height: 280px;
  }
  
  @media (max-width: 480px) {
    --footer-height: 350px;
  }
`;

export const FooterWrapper = styled.div`
  height: 100%;
  max-width: 87.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 58rem;
  
  @media (min-width: 76.5rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: 76.5rem) {
    align-items: flex-start;
    flex-shrink: 0;
  }
`;

export const JoinButton = styled.button`
  background-color: white;
  color: #235ea7;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-0.0625rem);
  }
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  flex: 1;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 76.5rem) {
    grid-template-columns: repeat(4, 1fr);
    margin-left: 2rem;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const ColumnTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 0.5rem;
  color: white;
`;

export const LinkItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.6;
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: normal;
  
  &:hover {
    color: white;
  }
`;