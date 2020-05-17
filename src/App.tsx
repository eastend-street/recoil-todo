import React from "react";
import styled from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";

import TodoList from "components/TodoList";

const App = () => {
  return (
    <Container>
      <Theme>
        <GlobalStyle />
        <h1>Recoil TODO</h1>
        <TodoList />
      </Theme>
    </Container>
  );
};

const Container = styled.div``;

export default App;
