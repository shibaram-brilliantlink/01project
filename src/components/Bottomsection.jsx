import React from "react";
import styled from "styled-components";

function Bottomsection() {
  return (
    <StyledBottomSection>
      <Top>
        <Heading>
          HOW <span>CAN</span> I HELP?
        </Heading>
        <Content>
          <Para>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              maxime voluptatem earum tempore! Sint, quos. Excepturi magnam
              architecto totam magni iiou mkdjfal;n jjdfdf earum beatae nesciunt
              cum?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              ipsam quidem, iure ab voluptatibus tenetur nam culpa suscipit
              dolore aut. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Velit, alias?
            </p>
          </Para>
          <List>
            <ul>
              <li>
                <h3>SKILLS</h3>
              </li>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>AdobeXD</li>
              <li>InVision</li>
              <li>ReadyMag</li>
              <li>Tilda</li>
            </ul>
            <ul>
              <li>
                <h3>PASSION</h3>
              </li>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>AdobeXD</li>
              <li>InVision</li>
            </ul>
          </List>
        </Content>
      </Top>
      <Bottom>
        <Contact>CONTACT</Contact>
        <Me>ME</Me>
        <Contacts>
          <ul>
            <hr />
            <h3>SOCIALS</h3>
            <li>Behance</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
          <ul>
            <hr />
            <h3>CONTACTS</h3>
            <li>
              <a href="tel: +9140255402454">+91 402554 02454</a>
            </li>
            <li>
              <a href="mailto: hello_123@gmail.com">hello_123@gmail.com</a>
            </li>
          </ul>
        </Contacts>
      </Bottom>
    </StyledBottomSection>
  );
}

export default Bottomsection;

const StyledBottomSection = styled.div`
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 2px solid black;
  margin-top: 6em;
  /* * {
    border: 1px solid black;
  } */
`;
const Top = styled.div`
  width: 75%;
`;
const Heading = styled.div`
  margin-top: 1em;
  font-size: 5.5vw;
  font-weight: 800;
  span {
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
    color: transparent;
  }
`;
const Content = styled.div`
  width: 80%;
  font-size: 1.3rem;
`;
const Para = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  p {
    text-align: justify;
    width: 48%;
  }
`;
const Bottom = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;

`;
const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ul {
    list-style: none;
    border-top: 0.5px solid black;
    width: 48%;
  }
`;
const Contact = styled.div`
  font-size: 14vw;
  font-weight: 700;
  width: 100%;
`;
const Me = styled.div`
  font-size: 14vw;
  font-weight: 700;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  color: transparent;
  width: 27%;
  line-height: 1;

`;
const Contacts = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  ul {
    width: 25%;
    margin-left: 2em;
    font-size: 1.45rem;
    list-style: none;
    padding-top: 1.3em;
  }
`;


