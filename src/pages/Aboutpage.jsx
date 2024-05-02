import React from "react";
import styled from "styled-components";

function Aboutpage() {
  return (
    <StyledAboutpage>
      <h1>About</h1>
    </StyledAboutpage>
  );
}

export default Aboutpage;
const StyledAboutpage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  h1 {
    font-size: 16vw;
    border-bottom: 1px solid black;
  }
`;
