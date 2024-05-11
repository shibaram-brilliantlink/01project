import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
function Contactpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // console.log(errors);

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
            hello_123@gmail.com .
          </a>
        </p>
        <p>
          If social media is more your jam, you can also message me on{" "}
          <a href="https://twitter.com/i/flow/login" target="_blank">
            Twitter
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/login" target="_blank">
            LinkedIn .
          </a>
        </p>
      </Content>
      <Contactform>
        <h2>Contact Form</h2>
        <p>
          Let us know your questions, suggestions and concerns by filling out
          the contact form below.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input>
            <div>
              <label htmlFor="fname">
                First Name<Required>*</Required>
              </label>
            </div>
            {/* Errors - As no of validation increases , Lines of code for displayimg error increases*/}
            <input
              validate
              type="text"
              id="fname"
              placeholder="First Name here"
              {...register("fname", {
                required: true,
                minLength: 3,
                pattern: /^[A-Z][^0-9]+$/,
              })}
            />
            {errors.fname && errors.fname.type === "required" && (
              <Errormsg>First name is required</Errormsg>
            )}
            {errors.fname && errors.fname.type === "minLength" && (
              <Errormsg>Min 3 characters should be there.</Errormsg>
            )}
            {errors.fname && errors.fname.type === "pattern" && (
              <Errormsg>
                First letter - Capital, Numbers not allowed. i.e. Akshay, Meet.
              </Errormsg>
            )}
          </Input>
          <Input>
            <div>
              <label htmlFor="lname">
                Last Name<Required>*</Required>
              </label>
            </div>
            <input
              type="text"
              id="lname"
              placeholder="Last Name here"
              {...register("lname", {
                required: "Last name is required",
                minLength: { value: 3, message: "Min 3 characters" },
                pattern: {
                  value: /^[A-Z][^0-9]+$/,
                  message:
                    "First letter should be capital & Numbers are not allowed.",
                },
              })}
            />
            {errors.lname && <Errormsg>{errors.lname.message}</Errormsg>}
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
          <Input>
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
          </Input>
          <Input>
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
          </Input>
          <Button>
            <input type="submit" value="Submit" />
          </Button>
        </form>
      </Contactform>
    </StyledContactpage>
  );
}

export default Contactpage;
const StyledContactpage = styled.div`
  display: flex;
  gap: 3em;
  max-width: 1225px;
  justify-content: center;
  margin: 0.5em auto;
  padding-top: 2em;
`;
const Content = styled.div`
  flex: 1;
  h1 {
    font-size: 3rem;
  }
  h4 {
    padding: 1em 0;
    font-weight: 400;
    font-size: 1.4rem;
  }
  p {
    font-weight: 300;
  }
  a {
    color: darkblue;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
  p {
    line-height: 1.8;
    font-size: 1.2em;
    font-weight: 300;
    margin-top: 1em;
  }
`;
const Contactform = styled.div`
  flex: 1;
  font-size: 1.15rem;
  h2 {
    font-size: 2rem;
  }
  p {
    margin: 0.5em 0 1em 0;
    font-size: 1.2em;
  }
`;
const Required = styled.span`
  color: red;
`;
const Input = styled.div`
  width: 90%;
  margin-top: 0.8em;
  font-size: inherit;
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 4px;
    outline: none;
    margin-top: 4px;
    margin-left: 1px;
  }
  :focus {
    border: 0.5px solid blue;
    box-shadow: 0 0 3px 1px cyan;
  }
`;
const Textarea = styled.div`
  textarea {
    min-height: 150px;
    max-height: 300px;
    width: 100%;
    max-width: 600px;
    outline: none;
  }
`;
const Button = styled.div`
  width: 100%;
  margin-top: 0.8em;
  input[type="submit"] {
    color: white;
    font-size: 1.2rem;
    padding: 0.4em;
    border: 1px solid green;
    background-color: #04c1048d;
    border-radius: 3px;
  }
  input[type="submit"]:hover {
    background-color: #02aa02a1;
    border: 0.5px solid blue;
    box-shadow: 0 0 3px 1px cyan;
  }
`;
const Errormsg = styled.p`
  color: red;
  font-size: 0.8em !important;
  letter-spacing: 0.5px;
`;
