import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

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
            <h3>SOCIALS</h3>
            <li>
              <a href="https://github.com/login" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/login/" target="_blank">
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/?next=%2Flogin%2F&source=desktop_nav"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/login" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/i/flow/login" target="_blank">
                <FaTwitter />
              </a>
            </li>
          </ul>
          <ul>
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
  margin-bottom: 2.5em;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const Top = styled.div`
  width: 75%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Heading = styled.div`
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-size: clamp(
    1.875rem,
    calc(1.875rem + ((1vw - 0.203125rem) * 4.3887)),
    6.25rem
  );
  font-weight: 800;
  span {
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
    color: transparent;
  }
`;
const Content = styled.div`
  width: 80%;
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.203125rem) * 0.4514)), 1.45rem);
  line-height: 1.45;
  font-weight: 300;
  h3 {
    font-size: 1.1em;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Para = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  p {
    text-align: justify;
    width: 48%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    p {
      width: 100%;
    }
  }
`;
const Bottom = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.75em;
  @media (max-width: 500px) {
    width: 100%;
  }
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
  width: 80%;
  @media (max-width: 500px) {
    width: fit-content;
  }
`;
const Me = styled.div`
  font-size: 14vw;
  font-weight: 700;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  color: transparent;
  width: 27%;
  line-height: 1;
  @media (max-width: 500px) {
    line-height: normal;
    margin-left: 0.2em;
  }
`;
const Contacts = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  font-weight: 300;
  ul {
    width: 25%;
    margin-left: 2em;
    font-size: clamp(16px, calc(1rem + ((1vw - 3.25px) * 0.4514)), 23.2px);
    list-style: none;
    padding-top: 1em;
  }
  ul:nth-child(1) li {
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    margin-top: 0.5em;
  }
  h3 {
    border-top: 0.5px solid black;
    padding-top: 0.3em;
  }
  a {
    color: black;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    ul {
      width: 50%;
      margin-left: 0.9em;
      padding-top: 0.5em;
    }
    h3 {
      font-size: 1.1em;
      font-weight: 450;
    }
  }
  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
    border-top: 1px solid black;
    h3 {
      border: none;
      font-size: 1em;
      padding-top: 0;
    }
    ul {
      margin-left: 0;
    }
  }
`;
