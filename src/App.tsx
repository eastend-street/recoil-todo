import React from "react";
import { RecoilRoot } from "recoil";

import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";

import Main from "components/Main";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Theme>
        <GlobalStyle />
        <Main />
      </Theme>
    </RecoilRoot>
  );
};

export default App;
