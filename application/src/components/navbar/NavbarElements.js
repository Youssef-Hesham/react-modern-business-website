import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  overflow-x: hidden; /* ✅ prevent horizontal scroll from nav */

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* ✅ keeps logo & icons aligned */
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 16px; /* ✅ reduced from 24px */
  max-width: 1100px;
  overflow: hidden; /* ✅ prevents content overflow */
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  transition: all ease 0.2s;

  &:hover {
    color: #b05ffd;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 80px;
  margin: 0; /* ✅ removed margin-right: -22px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    border-bottom: 3px solid #b05ffd;
  }

  &:hover {
    color: #b05ffd;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  text-decoration: none;
  background: #b05ffd;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 900;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #b05ffd;
  }
`;
