import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './components/utils/Theme';

const Container = styled.div`
display: flex;

`
const Main = styled.div`
flex: 7;
background-color: #181818;
`

const Wrapper = styled.div`

`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>

      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            video card
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
