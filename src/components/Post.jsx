import React from "react";
import styled from "styled-components";
import { FaBookOpen } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <Wrapper key={props.id}>
      <img src={props.img} alt="Post picture" />
      <h3>{props.title}</h3>
      <div>
        <span>{props.date}</span>
        <span>
          <FaBookOpen />
          {props.minread} min read
        </span>
      </div>
      <p>
        <Link to={`/${props.id}`}>
          Read More <HiOutlineArrowNarrowRight />
        </Link>
      </p>
    </Wrapper>
  );
}

export default Post;
const Wrapper = styled.div`
  img {
    height: 200px;
    width: 100%;
  }
`;
