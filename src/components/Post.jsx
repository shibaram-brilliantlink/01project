import React from "react";
import styled from "styled-components";
import { FaBookOpen } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <Wrapper key={props.id}>
      <Styledimg to={`/work/${props.id}`}>
        <div>
          <figure>
            <img src={props.img} alt="Post picture" />
          </figure>
        </div>
      </Styledimg>
      <h3>{props.title}</h3>
      <div>
        <span>{props.date}</span>
        <span>
          <FaBookOpen />
          &nbsp;
          {props.minread} min read
        </span>
      </div>
      <p>{props.description}</p>
      <p>
        <Styledlink to={`/work/${props.id}`}>
          Read More <HiOutlineArrowNarrowRight />
        </Styledlink>
      </p>
    </Wrapper>
  );
}

export default Post;
const Wrapper = styled.div`
  width: 48%;
  padding: 2%;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  letter-spacing: 0.2px;
  font-size: 20px;
  font-weight: 340;
  h3 {
    font-size: 2rem;
    font-weight: 350;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 0.2em;
  }
  span:nth-child(2) {
    display: flex;
    align-items: center;
  }
  p {
    padding: 0.2em;
  }
  p:nth-child(4) {
    height: 100px;
    overflow: hidden;
    text-align: justify;
    font-weight: 300;
  }
`;
const Styledlink = styled(Link)`
  display: flex;
  gap: 0.5em;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
  height: 25px;
  :first-child {
    font-size: 1.8rem;
    transition: 0.4s ease;
  }
  :first-child:hover {
    transform: rotate(-45deg);
  }
  &:hover {
    font-size: 22px;
    color: #545454;
  }
`;
const Styledimg = styled(Link)`
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;

    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  /* Animation effect on hover */
  figure {
    position: relative;
    overflow: hidden;
  }
  figure::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;

    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }
  figure:hover::before {
    -webkit-animation: shine 0.75s;
    animation: shine 0.75s;
  }
  @-webkit-keyframes shine {
    100% {
      left: 125%;
    }
  }
  @keyframes shine {
    100% {
      left: 125%;
    }
  }
`;
