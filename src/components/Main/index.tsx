import React from "react";
import styled from "styled-components";

import TodoList from "components/TodoList";
import AddButton from "components/AddButton";

const Main: React.FC = () => {
  return (
    <Container>
      <StyledH1>Recoil Todo</StyledH1>
      <TodoList />
      <AddButton />
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  min-height: 30rem;
  margin: 3rem auto 0;
  padding: 2rem 0;
  width: 25rem;
`;

const StyledH1 = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

export default Main;
