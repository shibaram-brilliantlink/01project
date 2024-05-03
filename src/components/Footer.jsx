import React from "react";
import styled from "styled-components";

function Footer() {
  return <StyledFooter>Shikashi Kohava @2021</StyledFooter>;
}

export default Footer;

const StyledFooter = styled.div`
  border-top: 2px solid black;
  text-align: right;
  font-size: clamp(16px, calc(1rem + ((1vw - 3.25px) * 0.4514)), 23.2px);
  padding: 2em 1em 2em 0;
  font-weight: 350;
  @media (max-width: 1024px) {
    padding: 1em;
  }
`;
