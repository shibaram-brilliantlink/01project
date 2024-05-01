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
        <Banner>Herkjejldfdlsfkj kjldf lkjdfs k</Banner>

        <Card
          title="INGENUE"
          text="Concepts for an online womens clothing store."
          imgsrc={Ingenue}
        />
        <Card title="SONY" text="Corporate website concepts." imgsrc={Sony} />
        <Card
          title="The Irish Times"
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
  `
const Titlehollow = styled.div`
font-size: 6vw;
  font-weight: bold;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  color: transparent;
  line-height: 1.25;

`

