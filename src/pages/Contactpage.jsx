import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
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
    font-size: 1.15em;
  }
`;
const Required = styled.span`
  color: red;
`;
const Input = styled.div`
  width: 90%;
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
  }
  :focus {
    border: 0.5px solid blue;
    box-shadow: 0 0 3px 1px cyan;
  }
`;
const Textarea = styled.div`
  textarea {
    width: 100%;
    max-width: 600px;
    outline: none;
    margin-top: 0.6em;
    padding: 10px;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 4px;
    font-family: sans-serif;
    font-size: 1rem;
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
