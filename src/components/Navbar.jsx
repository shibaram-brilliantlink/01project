import React, { useState } from "react";
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
            <Navlink to="/">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="70px"
                height="70px"
                viewBox="-96.15 -96.15 1153.80 1153.80"
                xml:space="preserve"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  stroke-width="0"
                  transform="translate(0,0), scale(1)"
                >
                  <path
                    transform="translate(-96.15, -96.15), scale(72.1125)"
                    fill="#b0b0b0"
                    d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                    strokewidth="0"
                  ></path>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="17.307"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M315.6,850.35c0-33.1-26.899-60-60-60H150c-16.5,0-30-13.5-30-30v-559.2c0-16.5,13.5-30,30-30h107.5c33.1,0,60-26.9,60-60 c0-33.1-26.9-60-60-60H150c-82.7,0-150,67.3-150,150v559.2c0,82.7,67.3,150,150,150h105.5C288.7,910.35,315.6,883.45,315.6,850.35z "></path>{" "}
                    <path d="M706,910.35h105.5c82.7,0,150-67.3,150-150v-559.2c0-82.7-67.3-150-150-150H704c-33.101,0-60,26.9-60,60 c0,33.1,26.899,60,60,60h107.5c16.5,0,30,13.5,30,30v559.2c0,16.5-13.5,30-30,30H706c-33.101,0-60,26.9-60,60 S672.899,910.35,706,910.35z"></path>{" "}
                    <path d="M674.899,686.15c17.5-27.5,26.301-57.1,26.301-88.7c0-34.8-7.301-64.1-22-87.699c-14.7-23.7-34.9-42.301-60.9-56 c-25.9-13.601-65.9-26.9-120-39.601c-54.1-12.8-88.2-25-102.2-36.8c-11-9.3-16.5-20.4-16.5-33.4c0-14.3,5.9-25.7,17.7-34.2 c18.3-13.3,43.6-19.9,75.9-19.9c31.3,0,54.8,6.2,70.399,18.6c9.601,7.6,17.101,18.2,22.601,31.8c7,17.4,24.1,28.6,42.8,27.8 l26.5-1.2c29.7-1.3,49.5-31.1,39.399-59.1c-9.1-25-23.899-46.5-44.6-64.5c-34.9-30.3-87-45.5-156.1-45.5 c-42.301,0-78.5,6.4-108.4,19.2c-29.9,12.8-52.8,31.4-68.8,55.8c-15.9,24.4-23.9,50.7-23.9,78.7c0,43.6,16.9,80.5,50.7,110.8 c24,21.5,65.9,39.699,125.5,54.5c46.3,11.5,76,19.5,89,24c19,6.8,32.4,14.699,40,23.899c7.6,9.101,11.5,20.2,11.5,33.2 c0,20.3-9.1,38-27.2,53.2c-18.2,15.2-45.1,22.7-81,22.7c-33.8,0-60.7-8.5-80.6-25.5c-13.4-11.5-23.8-27.4-31.2-47.7 c-6.8-18.9-25.6-30.7-45.6-28.8l-22.5,2.199c-27.9,2.7-46,30.4-37.7,57.101c11.4,36.5,30.1,66,56,88.3 c37.3,32.2,90.8,48.3,160.399,48.3c47.801,0,87.801-6.7,119.801-20.1C632.6,734.15,657.399,713.65,674.899,686.15z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </Navlink>
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
          <Hambuger onClick={() => setExtendedNav((current) => !current)} />
        </Navright>
      </Navmain>
      {extendedNav && (
        <Navmenuextended>
          <li>
            <Navlink to="/work">Work</Navlink>
          </li>
          <li>
            <Navlink to="/about">About</Navlink>
          </li>
          <li>
            <Navlink to="/contact">Contact</Navlink>
          </li>
        </Navmenuextended>
      )}
    </StyledNavbar>
  );
}
const StyledNavbar = styled.nav`
  margin: 2% 5% 0 5%;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.95rem;
  position: relative;
  li {
    list-style: none;
  }
  @media (min-width: 1440px) {
    font-size: clamp(1.1rem, 1.05vw, 1.875rem);
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
`;
const Navdownload = styled.div`
  position: absolute;
  left: 50%;
  top: 12px;
  transform: translate(-50%, -50%);
  &:hover {
    color: blue;
  }
`;

const Navmenuextended = styled.ul`
  font-size: 0.9rem;
  @media (min-width: 1025px) {
    display: none;
  }
`;
const Navlink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  &:hover {
    color: blue;
  }
  svg {
    height: 40px;
  }
  @media (min-width: 1500px) {
    svg {
      height: 60px;
    }
  }
`;
const Hambuger = styled(GiHamburgerMenu)`
  @media (min-width: 1025px) {
    display: none;
  }
`;
