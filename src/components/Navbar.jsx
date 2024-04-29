import React from "react";
import styled from "styled-components";
import { TfiDownload } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <S_Navbar>

      <Left>
        <div>
          <Link to="/">SHIKASHI</Link>
        </div>
        <div>
          Download CV <TfiDownload />
        </div>
        <Menu>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <GiHamburgerMenu />
        </Menu>
      </Left>

      <Menu>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </Menu>
    </S_Navbar>
  );
}
const S_Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.95rem;
  span {
    font-size: 1.3rem;
  }
  li {
    list-style: none;
  }
`;
const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 0.5px solid gray;
  padding-bottom: 0.5em;
  margin-bottom: 0.4em;
`;
const Menu = styled.ul``;
const S_NavMain = styled.div`
  
`
// const S_NavExtended
