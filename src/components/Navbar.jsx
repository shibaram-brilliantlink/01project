import React, {useState} from "react";
import styled from "styled-components";
import { TfiDownload } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [extendedNav, setExtendedNav] = useState(false);
  return (
    <StyledNavbar>
      <Navmain>
        <Navleft>
          <div>
            <Navlink to="/">SHIKASHI</Navlink>
          </div>
          <Navdownload onClick={print}>
            Download CV <TfiDownload />
          </Navdownload>
        </Navleft>
        <Navright>
          <Navmenu>
            <li>
              <Navlink to="/work">Work</Navlink>
            </li>
            <li>
              <Navlink to="/about">About</Navlink>
            </li>
            <li>
              <Navlink to="/contact">Contact</Navlink>
            </li>
          </Navmenu>
          <Hambuger onClick={() => setExtendedNav(current => !current)}  />
        </Navright>
      </Navmain>
      {extendedNav &&
      (<Navmenuextended>
        <li>
          <Navlink to="/work">Work</Navlink>
        </li>
        <li>
          <Navlink to="/about">About</Navlink>
        </li>
        <li>
          <Navlink to="/contact">Contact</Navlink>
        </li>
      </Navmenuextended>)
}
    </StyledNavbar>
  );
}
const StyledNavbar = styled.nav`
  margin: 4% 5% 0 5%;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.95rem;
  position: relative;
  li {
    list-style: none;
  }
  @media (min-width: 1440px) {
    font-size: clamp(1.10rem,1.05vw ,1.875rem)
  }
`;
const Navmain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.5em;
  margin-bottom: 0.4em;
  

`;
const Navleft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const Navright = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
`;
const Navmenu = styled.ul`
display: none;
  @media (min-width: 1025px) {
    display: flex;
    gap: 2.5em;


  }
`
const Navdownload = styled.div`
  position: absolute;
  left: 50%;
  top: 12px;
  transform: translate(-50%, -50%);
  &:hover {
    color: blue;
  }
`

const Navmenuextended = styled.ul`
  font-size: 0.90rem;
  @media (min-width: 1025px) {
    display: none;
  }
`;
const Navlink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`
const Hambuger = styled(GiHamburgerMenu)`
  @media (min-width: 1025px) {
    display: none;
  }
`

