import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from './utils/theme';

const Container = styled.div`
  display: flex;
  background-color: white;
`;
const Main = styled.div`
  flex: 7;
  backgroud-color: black;
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkMode : lightTheme}>
        <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            There will be some videos
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
