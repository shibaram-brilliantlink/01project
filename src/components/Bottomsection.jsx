import React from "react";
import styled from "styled-components";

function Bottomsection() {
  return (
    <StyledBottomSection>
      <Top>
        <Heading>
          HOW <span>CAN</span> I HELP YOU ?
        </Heading>
        <Content>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              maxime voluptatem earum tempore! Sint, quos. Excepturi magnam
              architecto totam magni ipsam vero assumenda deserunt, earum beatae
              nesciunt cum repudiandae corrupti officiis commodi voluptatem
              quod! Reprehenderit, voluptatum consequatur? Amet minus, veniam
              totam odio quae eaque est minima quas ducimus, omnis iste?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              officiis quaerat harum eligendi explicabo in libero natus
              perspiciatis labore quo inventore nam ipsum eos, odio quidem
              voluptate illo quibusdam consequatur obcaecati culpa. Magni
              temporibus, vel numquam voluptas voluptates animi cupiditate.
            </p>
          </div>
          <div>
            <ul>
              <hr />
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
              <hr />
              <li>
                <h3>PASSION</h3>
              </li>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>AdobeXD</li>
              <li>InVision</li>
            </ul>
          </div>
        </Content>
      </Top>
      <Bottom></Bottom>
    </StyledBottomSection>
  );
}

export default Bottomsection;

const StyledBottomSection = styled.div`
  margin-top: 10px;
  `
const Top = styled.div``
const Heading = styled.div`
  font-size: 5.2rem;
  font-weight: 500;
`

const Content = styled.div``

const Bottom = styled.div``

