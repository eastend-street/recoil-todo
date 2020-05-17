import React from "react";
import { RecoilRoot } from "recoil";

import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";

import TodoList from "components/TodoList";
import TodoCreator from "components/TodoCreator";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Theme>
        <GlobalStyle />
        <h1>Recoil TODO</h1>
        <TodoCreator />
        <TodoList />
      </Theme>
    </RecoilRoot>
  );
};

export default App;
