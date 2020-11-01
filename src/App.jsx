import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const AppWrapper = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
  return (
    <AppWrapper>
      <h1>Hello world!</h1>
    </AppWrapper>
  );
}

export default hot(module)(App);
