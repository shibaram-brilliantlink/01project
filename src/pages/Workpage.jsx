import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import posts from "../assets/postdata";
import { Link } from "react-router-dom";

function Workpage() {
  return (
    <StyledWorkpage>
      <Leftbar>
        <ul>
          <h3>All works</h3>
          {posts.map((post) => (
            <li key={post.id}>
              <span>{post.id}.</span>
              <Link to={`/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </Leftbar>
      <Blog>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              img={post.imgurl}
              date={post.date}
              minread={post.minread}
              title={post.title}
              id={post.id}
              description={post.description}
            />
          ))}
      </Blog>
      <Rightbar>
        <ul>
          <h3>Top articles</h3>
          <li key={1}>
            <span>1.</span>
            <Link to={`/1`}>HTML The Complete overview.</Link>
          </li>
          <li key={2}>
            <span>2.</span>
            <Link to={`/2`}>CSS The Complete overview.</Link>
          </li>
          <li key={3}>
            <span>3.</span>
            <Link to={`/3`}>JavaScript overview.</Link>
          </li>
        </ul>
      </Rightbar>
    </StyledWorkpage>
  );
}

export default Workpage;
const StyledWorkpage = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  gap: 1.5em;
  margin: 2em 0;
`;
const Leftbar = styled.aside`
  width: 25%;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 1em;
  font-size: 1.2rem;
  font-weight: 300;
  transition: 0.3s;
  h3 {
    font-weight: 400;
    font-size: 1.25em;
  }
  span {
    display: inline-block;
    width: 13%;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const Rightbar = styled(Leftbar)`
  font-size: 18px;
  @media (max-width: 1400px) {
    font-size: 1rem;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Blog = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1.5rem;
  width: 100%;
`;
