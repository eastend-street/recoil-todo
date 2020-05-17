import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";

import TodoList from "components/TodoList";

const App = () => {
  return (
    <RecoilRoot>
      <Theme>
        <GlobalStyle />
        <h1>Recoil TODO</h1>
        <TodoList />
      </Theme>
    </RecoilRoot>
  );
};

export default App;
