import React from "react";
import styled from "styled-components";

function Workpage() {
  return (
    <StyledWorkpage>
      <h1>Projects</h1>
    </StyledWorkpage>
  );
}

export default Workpage;
const StyledWorkpage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  h1 {
    font-size: 16vw;
    border-bottom: 1px solid black;
  }
`;
