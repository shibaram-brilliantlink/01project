import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <StyledCard>
      <Cardheading>
        <div>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <div>
          <button>UI/UX Design</button>
          <button>Web Design</button>
        </div>
      </Cardheading>
      <Cardimg>
        <img src={props.imgsrc} alt="Image" />
      </Cardimg>
    </StyledCard>
  );
}
export default Card;
const StyledCard = styled.div`
  width: 50%;
  padding: 2.5vw;
  border: 1px solid black;
  @media (max-width: 450px) {
    width: 100%;
  }
`;
const Cardheading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.25rem;
  h1 {
    font-size: 2em;
  }
  p {
    font-size: 1.05em;
  }
  button {
    font-size: 1.05em;
    padding: 0.4em;
    border-radius: 10px;
    border: 1px solid black;
    background-color: transparent;
    display: block;
    width: 7em;
    margin-bottom: 0.5em;
  }
  button:hover {
    background-color: black;
    color: #e9e8da;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 1.15rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.05rem;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    font-size: 1rem;
  }
`;
const Cardimg = styled.div`
  img {
    height: 33vw;
    width: 100%;
  }
  margin-top: 1em;
`;
