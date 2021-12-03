import React from "react";
import styled from "styled-components";

const Gif = ({ title, id, url }) => {
  return (
    <Container href={`${id}`}>
      <h4> {title}</h4>
      <img alt={title} src={url} />
    </Container>
  );
};

const Container = styled.a`
  border: 1px solid #eee;
  color: #eee;
  text-decoration: none;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin: 16px;
  width: 100%;

  img {
    object-fit: contain;
  }

  h4 {
    margin: 0;
  }
`;

export default Gif;
