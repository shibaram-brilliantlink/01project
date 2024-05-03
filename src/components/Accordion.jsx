import React, { useState } from "react";
import styled from "styled-components";
import Stagelist from "../assets/stagedata";

function Accordion() {
  const [selectedId, setSelectedId] = useState();
  function handleClick(currentid) {
    setSelectedId((previd) => (previd == currentid ? null : currentid));
  }
  return (
    <StyledAccordion>
      {Stagelist.length > 0 &&
        Stagelist.map((item) => (
          <Stage key={item.id}>
            <Div1 onClick={() => handleClick(item.id)}>
              <span>{`STAGE ${item.id}`}</span> <span>{item.name}</span>{" "}
              <span>+</span>
            </Div1>
            {selectedId === item.id && <p>{item.description}</p>}
          </Stage>
        ))}
    </StyledAccordion>
  );
}

export default Accordion;

const StyledAccordion = styled.div`
  margin-top: 3%;
`;
const Stage = styled.div`
  border-bottom: 1px solid black;
  padding: 0.8em 0 2em 0;
  p {
    font-size: clamp(
      1rem,
      calc(1rem + ((1vw - 0.203125rem) * 0.4514)),
      1.45rem
    );
    margin-left: 17%;
    text-align: justify;
    font-weight: 300;
  }
  @media (max-width: 425px) {
    padding: 0.8em 0 1em 0;
  }
`;
const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.15;
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.203125rem) * 0.4514)), 1.45rem);
  :first-child {
    font-size: 1em;
  }
  :nth-child(2) {
    display: inline-block;
    width: 70%;
    font-size: 1.1em;
    font-weight: 400;
  }
  :nth-child(3) {
    font-size: 2em;
    font-weight: 300;
  }
`;
