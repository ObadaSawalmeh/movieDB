import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  font-family:'Source Sans Pro",Arial,sans-serif';
  @media (min-width: 769px) {
    display: none;
  }
`;

export const SideNavContainer = styled.nav`
  position: fixed;
  top: 64px;
  left: 0;
  width: 341px;
  height: 100vh;
  background: rgba( 3, 37, 65,.9);
  z-index: 1000;
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const SideNavContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;
export const NavList = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
  padding:25px 20px;
  background:rgba( 3, 37, 65,.9);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  line-height: 1;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
  
  &.primary {
    font-size: 20px;
    font-weight: 600;
    padding: 0 1.25rem 1rem 0;
  }
  
  &.secondary {
    color: rgba(255, 255, 255, .6);
    font-size: .9em;
    font-weight: 600;
    padding: .5rem  0;
  }
`;

