import React from "react";
import styled from "styled-components";

function Contactpage() {
  return (
    <StyledContactpage>
      <h1>Contact</h1>
    </StyledContactpage>
  );
}

export default Contactpage;
const StyledContactpage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  h1 {
    font-size: 16vw;
    border-bottom: 1px solid black;
  }
`;
