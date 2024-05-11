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
          </a>
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
      <Contactform>
        <form>
          <h2>Contact Form</h2>
          <p>
            Let us know your questions, suggestions and concerns by filling out
            the contact form below.
          </p>
          <Input>
            <div>
              <label htmlFor="fname">
                First Name<Required>*</Required>
              </label>
            </div>
            <input type="text" id="fname" placeholder="First Name here" />
          </Input>
          <Input>
            <div>
              <label htmlFor="lname">
                Last Name<Required>*</Required>
              </label>
            </div>
            <input type="text" id="lname" placeholder="Last Name here" />
          </Input>
          <Input>
            <div>
              <label htmlFor="email">
                Email Id<Required>*</Required>
              </label>
            </div>
            <input type="email" id="email" placeholder="Email id here" />
          </Input>
          <Input>
            <div>
              <label htmlFor="phoneno">
                Phone No<Required>*</Required>
              </label>
            </div>
            <input type="tel" id="phoneno" placeholder="Phone no here" />
          </Input>
          <Input>
            <div>
              <label htmlFor="password">
                Password<Required>*</Required>
              </label>
            </div>
            <input type="password" id="password" placeholder="Password here" />
          </Input>
          <Input>
            <div>
              <label htmlFor="cpassword">
                Confirm Password<Required>*</Required>
              </label>
            </div>
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm Password here"
            />
          </Input>
          <Selection>
            <div>
              <label htmlFor="subject">
                Subject<Required>*</Required>
              </label>
            </div>
            <select id="subject">
              <option value="hiring">For Hiring</option>
              <option value="suggestions">Suggestions</option>
              <option value="query">Query regarding specific services</option>
              <option value="complaint">Complaints</option>
              <option value="others">Others</option>
            </select>
          </Selection>
          <div>
            <div>
              <label htmlFor="message">
                Message<Required>*</Required>
              </label>
            </div>
            <Textarea>
              <textarea
                id="message"
                placeholder="Drop your message here..."
              ></textarea>
            </Textarea>
          </div>
        </form>
      </Contactform>
    </StyledContactpage>
  );
}

export default Contactpage;
const StyledContactpage = styled.div`
  padding: 0 5%;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const Content = styled.div`
  flex: 1;
`;
const Contactform = styled.div`
  flex: 1;
`;
const Required = styled.span`
  color: red;
`;
const Input = styled.div`
  input {
    width: 300px;
    padding: 10px;
    border: 0.5px solid #949494;
    border-radius: 4px;
    outline: none;
    margin-top: 4px;
    margin-left: 1px;
  }
  :focus {
    border: 0.5px solid blue;
    box-shadow: 0 0 3px 1px cyan;
  }
  /* input:valid {
    border: 0.5px solid green;
    box-shadow: 0 0 3px 1px green;
  }
  input:invalid {
    border: 0.5px solid red;
    box-shadow: 0 0 3px 1px red;
  } */
`;
const Selection = styled.div`
  select {
    width: 300px;
    padding: 10px;
    border: 0.5px solid #949494;
    border-radius: 4px;
    outline: none;
    margin-top: 4px;
    margin-left: 1px;
    position: relative;
  }
  option {
    background-color: green;
    color: red;
  }
  :focus {
    border: 0.5px solid blue;
    box-shadow: 0 0 3px 1px cyan;
  }
`;
// const Option = styled.div``;
// const Textarea = styled.textarea`
//   height: fit-content;
//   max-height: 200px;
// `;
const Textarea = styled.div`
  textarea {
    min-height: 150px;
    width: 300px;
    max-height: 300px;
    outline: none;
  }
`;
