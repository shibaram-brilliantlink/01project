import React from "react";
import Card from "./Card";
import Accordion from "./Accordion";
import styled from "styled-components";
import Ingenue from "../assets/images/ingenue.jpg";
import Sony from "../assets/images/sony.png";
import Titimes from "../assets/images/tit.png";
import Empire from "../assets/images/empire.png";

function Midsection() {
  return (
    <StyledMidsection>
      <Top>
        <Banner>
          <marquee
            width="100%"
            direction="right"
            height="120px"
            scrollamount="10"
          >
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
            <span>Work</span>
          </marquee>
        </Banner>
        <Card title="INGENUE" text="Concepts for a store." imgsrc={Ingenue} />
        <Card title="SONY" text="Corporate website concepts." imgsrc={Sony} />
        <Card
          title="Irish Times"
          text="Concepts for a news site "
          imgsrc={Titimes}
        />
        <Card
          title="INGENUE"
          text="Concepts for an cloubhouse"
          imgsrc={Empire}
        />
      </Top>
      <Bottom>
        <Stagetitle>
          <Titlefill>STAGES OF WEBSITE</Titlefill>
          <Titlehollow>DEVELOPMENT</Titlehollow>
        </Stagetitle>
        <Accordion />
      </Bottom>
    </StyledMidsection>
  );
}

export default Midsection;

const StyledMidsection = styled.div`
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Banner = styled.div`
  width: 100%;
  margin-top: 2em;
  span {
    font-size: clamp(2.5rem, 3.5vw, 5rem);
    font-weight: 700;
    display: inline-block;
    margin-right: 2em;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
    color: transparent;
    text-shadow: 5px 5px 5px 5px;
  }
  span:hover {
    color: black;
  }
`;
const Bottom = styled.div`
  width: 75%;
  /* border: 1px solid black; */
`;
const Stagetitle = styled.div``;
const Titlefill = styled.div`
  font-size: 6vw;
  font-weight: bold;
  margin-top: 0.45em;
`;
const Titlehollow = styled.div`
  font-size: 6vw;
  font-weight: bold;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  color: transparent;
  line-height: 1.25;
`;
