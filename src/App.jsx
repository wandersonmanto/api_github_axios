import React from 'react';

import { Normalize } from 'styled-normalize';

import MyRoutes from './routes';

import Theme from './styles/Theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Theme>
      <MyRoutes />
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;
