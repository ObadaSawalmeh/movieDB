import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content:center;
  background-color: #032541;
  width:100%;
  margin:0 auto;
`;

export const HeaderWrapper = styled.header`

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.5rem .5rem;
  height: 4rem;
  margin: 0 auto;
  width:100%;
  max-width:1400px;
  @media (min-width: 768px) {
    padding: 0.5rem 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

`;


export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

`;

export const CenterSection = styled.nav`
  display:flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;
