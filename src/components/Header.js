import React, { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 64px;
  padding: 0 5%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

  span {
    font-weight: 600;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 2.5%;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;

  > li {
    list-style: none;

    & > a {
      text-decoration: none;
      font-size: 1rem;
      color: #000;
      padding: 0.25rem 0.5rem;
      &:hover {
        text-decoration: underline;
        text-underline-offset: 0.5rem;
        text-decoration-color: var(--primary);
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledBurger = styled.button`
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;

  .hamburger-top,
  .hamburger-middle,
  .hamburger-bottom {
    position: absolute;
    width: 24px;
    height: 2px;
    top: 0;
    left: 0;
    background: ${(p) => (p.menuOpen ? "#fff" : "#000")};
    transform: rotate(0);
    transition: all 0.5s;
  }

  .hamburger-middle {
    transform: translateY(7px);
  }

  .hamburger-bottom {
    transform: translateY(14px);
  }

  ${({ menuOpen }) =>
    menuOpen &&
    `
    transform: rotate(90deg);
    .hamburger-top {
      transform: rotate(45deg) translateY(6px) translateX(6px);
    }
    .hamburger-middle {
      display: none;
    }
    .hamburger-bottom {
      transform: rotate(-45deg) translateY(6px) translateX(-6px);
    }
  `}

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledMobileNav = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.menuOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  min-height: 100vh;
  padding: 5rem 0 0 3rem;
  background-color: rgba(0, 0, 0, 0.9);
  font-size: 1.25rem;
  color: white;
  text-transform: uppercase;
  transition: all 0.3s;
  li {
    list-style: none;
  }
  a {
    display: block;
    color: white;
    transition: color 0.3s;
    text-decoration: none;
  }

  a:hover {
    color: var(--primary);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);
  return (
    <StyledHeader>
      <span>WoodCraft.</span>
      <StyledNav>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Prices</a>
        </li>
      </StyledNav>
      <StyledMobileNav menuOpen={menuOpen}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Prices</a>
        </li>
      </StyledMobileNav>
      <StyledBurger onClick={toggleMenu} menuOpen={menuOpen}>
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </StyledBurger>
    </StyledHeader>
  );
};

export default Header;
