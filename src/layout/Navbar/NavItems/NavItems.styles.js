import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  background-color: #032541;
  padding: 0 0.75rem;
  border-radius: .25rem;
  height: 2.875rem;
  gap: 0.25rem;

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: ${props => props.isActive ? '#01b4e4' : 'rgba(255, 255, 255, 0.7)'};
  background-color: ${props => props.isActive ? 'rgba(1, 180, 228, 0.1)' : 'transparent'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: .25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #ffffff;
    background-color: ${props => props.isActive ? 'rgba(1, 180, 228, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  }

  &:focus {
    outline: 0.125rem solid #01b4e4;
    outline-offset: 0.125rem;
  }
`;