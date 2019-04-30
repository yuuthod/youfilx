import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flexl;
  justify-content: center;
  font-size: 20px;
  margin-top: 20px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      WAIT...
    </span>
  </Container>
);
