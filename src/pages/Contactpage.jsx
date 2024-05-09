import React from "react";
import styled from "styled-components";

function Contactpage() {
  return (
    <StyledContactpage>
      <Content>
        <h1>Let's Connect</h1>
        <h4>
          Get in touch to start a conversation about your project. You can
          expect a same-day response.
        </h4>
        <p>
          Please use the adjacent contact form to beam your message straight in
          to my inbox on high priority. Alternatively, you can email me directly
          at{" "}
          <a href="mailto: hello_123@gmail.com" target="_blank">
            hello_123@gmail.com
          </a>{" "}
          (mailto). 📬
        </p>
        <p>
          If social media is more your jam, you can also message me on{" "}
          <a href="https://twitter.com/i/flow/login" target="_blank">
            Twitter
          </a>
          and{" "}
          <a href="https://www.linkedin.com/login" target="_blank">
            LinkedIn
          </a>
        </p>
      </Content>
      <Contactform>Contact formrf</Contactform>
    </StyledContactpage>
  );
}

export default Contactpage;
const StyledContactpage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
`;
const Content = styled.div``;
const Contactform = styled.div``;
