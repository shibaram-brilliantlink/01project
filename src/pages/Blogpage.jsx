import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import postdata from "../assets/postdata";
import { FaBookReader } from "react-icons/fa";

function Blogpage() {
  const { postid } = useParams();
  const currentPost = postdata.find((item) => item.id == postid);
  return (
    <Wrapper>
      {currentPost ? (
        <>
          <h2>
            <FaBookReader />

            <span> {currentPost.title}&nbsp;</span>
          </h2>
          <section>
            <figure>
              <img src={currentPost.imgurl} alt="Blog post image" />
              <figcaption>
                "{currentPost.title}" - image source google.com
              </figcaption>
            </figure>
            <div>
              <h3>Description</h3>
              <p>{currentPost.description}</p>
            </div>
          </section>
        </>
      ) : (
        <p>Post not found!!</p>
      )}
    </Wrapper>
  );
}

export default Blogpage;
const Wrapper = styled.div`
  padding: 0 5%;
  margin: 2em 0 3em 0;
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.203125rem) * 0.4514)), 1.45rem);
  h2 {
    font-size: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  h3 {
    font-size: 1.25em;
  }
  figure {
    margin-top: 1.5em;
    width: 40%;
    position: relative;
    overflow: hidden;
  }
  img {
    width: 100%;
    border: 0.5px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.24) 0px 2px 4px;
    margin-bottom: 0.5em;
  }
  section {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    align-items: flex-start;
  }
  section div {
    text-align: justify;
    width: 58%;
    margin-top: 1.5em;
  }
  p {
    padding-top: 0.5em;
  }
  span {
    margin-left: 0.5em;
  }
  figure::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 88%;
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
  @media (max-width: 1024px) {
    section {
      flex-direction: column;
    }
    figure {
      width: 100%;
    }
    section div {
      width: 100%;
    }
  }
  @media (max-width: 340px) {
    span {
      margin-left: 0;
    }
  }
`;
