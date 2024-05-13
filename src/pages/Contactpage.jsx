import React, { useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FaLink } from "react-icons/fa";
function Contactpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // console.log(errors);
  const validatePassword = (value) => {
    if (value.length < 6) {
      return "Password should be atleast 6 character";
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
    ) {
      return "Password should contain atlest one uppercase, lowercase, digit and Special character";
    }
    return true;
  };
  const validateCpassword = (value) => {
    if (watch("password") !== value) {
      //here "password" is password -value in submit data object
      return "Password did not match";
    }
    return 1;
  };
  return (
    <StyledContactpage>
      <Content>
        <h1>
          Let's <div>Connect&nbsp;</div>
          <span>
            <FaLink />
          </span>
        </h1>
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
              <Errormsg>First letter - Capital, Numbers not allowed.</Errormsg>
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
            <input
              type="email"
              id="email"
              placeholder="Email id here"
              {...register("email", {
                required: "Email id is required.",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
                  message: "Email id is invalid",
                },
              })}
            />
            {errors.email && <Errormsg>{errors.email.message}</Errormsg>}
          </Input>
          <Input>
            <div>
              <label htmlFor="phoneno">
                Phone No<Required>*</Required>
              </label>
            </div>
            <input
              type="tel"
              id="phoneno"
              placeholder="Phone no here"
              {...register("phoneno", {
                required: "Phone no is required",
                pattern: {
                  value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                  message: "Phone no is invalid. i.e. +09898955564",
                },
              })}
            />
            {errors.phoneno && <Errormsg>{errors.phoneno.message}</Errormsg>}
          </Input>
          {/* Add a Custom Validation Method for - complex validation*/}
          <Input>
            <div>
              <label htmlFor="password">
                Password<Required>*</Required>
              </label>
            </div>
            <input
              type="text"
              id="password"
              placeholder="Password here"
              {...register("password", {
                required: "Password is required",
                validate: validatePassword,
              })}
            />
            {errors.password && <Errormsg>{errors.password.message}</Errormsg>}
          </Input>
          <Input>
            <div>
              <label htmlFor="cpassword">
                Confirm Password<Required>*</Required>
              </label>
            </div>
            <input
              type="text"
              id="cpassword"
              placeholder="Confirm Password here"
              {...register("cpassword", {
                required: "Confirm password is required",
                validate: validateCpassword,
              })}
            />
            {errors.cpassword && (
              <Errormsg>{errors.cpassword.message}</Errormsg>
            )}
          </Input>
          <StyledTextarea>
            <div>
              <label htmlFor="message">
                Message<Required>*</Required>
              </label>
            </div>
            <Textarea>
              <textarea
                placeholder="Write your message here.."
                name="text"
                id="text"
                onInput={(e) =>
                  (e.target.parentNode.dataset.replicatedValue = e.target.value)
                }
              ></textarea>
            </Textarea>
            {/* <TextAreaInput placeholder="Write your message" /> */}
          </StyledTextarea>
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
  /* max-width: 1225px; */
  justify-content: center;
  margin: 4em auto;
  padding: 0 5%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  flex: 1;
  h1 {
    font-size: clamp(2rem, 1.294rem + 3.765vw, 6rem);
    line-height: 1.25;
  }
  h1 > div {
    -webkit-text-stroke-width: 1.2px;
    -webkit-text-stroke-color: black;
    color: transparent;
    display: inline-block;
  }
  h1 > span {
    font-size: clamp(
      1.5rem,
      calc(1.5rem + ((1vw - 0.203125rem) * 4.3887)),
      5rem
    );
  }
  h4 {
    padding: 1em 0;
    font-weight: 350;
    font-size: clamp(
      1.25rem,
      calc(1.25rem + ((1vw - 0.203125rem) * 0.4514)),
      2rem
    );
  }
  a {
    color: #535353;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
  p {
    line-height: 1.8;
    font-size: clamp(
      1rem,
      calc(1rem + ((1vw - 0.203125rem) * 0.4514)),
      1.45rem
    );
    font-weight: 300;
    /* margin-top: 0.5em; */
    text-align: justify;
  }
`;
const Contactform = styled.div`
  flex: 1;
  font-size: 1.15rem;
  margin-top: 1.25em;
  margin-bottom: 2em;
  h2 {
    font-size: clamp(1.4rem, 0.941rem + 2.447vw, 4rem);
  }
  p {
    margin: 0.5em 0 1em 0;
    font-size: clamp(
      1rem,
      calc(1rem + ((1vw - 0.203125rem) * 0.4514)),
      1.45rem
    );
    font-weight: 320;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  label {
    font-size: clamp(1rem, calc(1rem + ((1vw - 0.203125rem) * 0.4514)), 1.4rem);
    font-weight: 350;
    letter-spacing: 0.2px;
  }
  @media (max-width: 600px) {
    form {
      flex-direction: column;
    }
  }
`;
const Required = styled.span`
  color: red;
`;
const Input = styled.div`
  width: 48%;
  margin-top: 0.8em;
  font-size: 1.1rem;
  input {
    font-size: 1rem;
    width: 100%;
    padding: 10px;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 4px;
    outline: none;
    margin-top: 4px;
    margin-left: 1px;
    font-weight: 300;
    letter-spacing: 0.1px;
  }
  :focus {
    border: 0.5px solid blue;
  }
  label {
    font-size: clamp(1rem, calc(1rem + ((1vw - 0.203125rem) * 0.4514)), 1.4rem);
    font-weight: 350;
    letter-spacing: 0.2px;
  }
  @media (max-width: 768px) {
    label {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 4px;
  }
`;
const Button = styled.div`
  width: 95%;
  margin: 1.25em auto;
  text-align: center;

  input[type="submit"] {
    color: #e9e8da;
    font-size: 1.2rem;
    padding: 0.4em;
    border: 1px solid black;
    background-color: #000;
    border-radius: 4px;
  }
  input[type="submit"]:hover {
    background-color: transparent;
    color: black;
  }
`;
const Errormsg = styled.p`
  color: red;
  font-size: 16px !important;
  letter-spacing: 0.75px;
  text-indent: 0.25em;
  @media (max-width: 1025px) {
    font-size: 1rem !important;
  }
`;
const StyledTextarea = styled.div`
  width: 100%;
  margin-top: 0.5em;
`;
const Textarea = styled.div`
  display: grid;
  margin-top: 0.4em;
  &:after {
    /* Note the weird space! Needed to preventy jumpy behavior */
    content: attr(data-replicated-value) " ";
    /* This is how textarea text behaves */
    white-space: pre-wrap;
    /* Hidden from view, clicks, and screen readers */
    visibility: hidden;
  }
  textarea {
    overflow: hidden;
    resize: none;
    line-height: 1.4;
    padding: 0.5rem;
    font-size: 1rem;
    font-family: sans-serif;
    background-color: transparent;
    border-radius: 4px;
    outline: none;
    border: 1px solid black;
  }
  textarea,
  &:after {
    grid-area: 1 / 1 / 2 / 2;
  }
  textarea:focus {
    border: 0.5px solid blue;
  }
`;
