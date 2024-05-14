import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <p>
        <span>Terms of Service</span>
        <span>Privicy Policy</span>
        <span>Do Not Sell My Information</span>
      </p>
      <p>&copy; Shikashi Kohava 2024; All Rights Reserved</p>
    </Wrapper>
  );
}

export default Footer;
const Wrapper = styled.footer`
  font-size: clamp(16px, calc(1rem + ((1vw - 3.25px) * 0.4514)), 23.2px);
  font-weight: 200;
  padding: 0 5%;
  background-color: black;
  color: #e9e8da;
  height: 100px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  /* Added to put fotter always on bottom */
  margin-top: auto;
  p:nth-child(1) {
    display: flex;
    gap: 2em;
    /* width: 50%; */
  }
  p:nth-child(2) {
    margin-left: auto;
  }
  @media (max-width: 768px) {
  }
`;
