import React from "react";
import styled from "styled-components";
import ProfileImg from "../assets/images/serhii.png";

function Topsection() {
  return (
    <StyledTopsection>
      <div>
        <Designer>
          <Uxui>
            UX-<span>UI</span>
          </Uxui>
          <Designertext>DESIGNER</Designertext>
        </Designer>
        <Portfolio>PORTFOLIO</Portfolio>
      </div>
      <Topprofile>
        <Profileimg>
          <img src={ProfileImg} alt="Profile image" />
        </Profileimg>
        <Profileintro>
          Hii , My name is Serhii and i am a UI/UX designer. My main goal is to
          create and develope quality product that will bring profit to company.
          Meanwhile it will improve my skills.
        </Profileintro>
      </Topprofile>
    </StyledTopsection>
  );
}

export default Topsection;

const StyledTopsection = styled.div`
  padding: 0 5%;
  border-bottom: 2px solid black; 
  
`;
const Designer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1em;
`;
const Uxui = styled.div`
  font-size: 6vw;
  width: 25%;
  line-height: 1;
  text-align: right;
  padding: 0.2em;
  span {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    color: transparent;
  }
`;
const Designertext = styled.div`
  width: 75%;
  font-size: 16vw;
  font-weight: 700;
  line-height: 1.25;
`;
const Portfolio = styled.div`
  color: transparent;
  font-size: 16vw;
  line-height: 1.10;
  font-weight: 700;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
`;
const Topprofile = styled.div`
display: flex;
width: 50%;
margin: 2.5% auto;
align-items: center;
`;
const Profileimg = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`;
const Profileintro = styled.div`
 width: 50%;
 margin-left: 1%;
 font-size: 1.4rem;
 text-align: justify;
`;
