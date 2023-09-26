import {styled, createGlobalStyle} from 'styled-components';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import Background from './Img/1-3.png'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainPage />
    </>
      
  );
}
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    width: 100%;
    height: 100vh;
    position: relative;
    ::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: url(${Background});
      background-position: center;
      filter: blur(5px) brightness(75%);
    }
  }
`
export default App;
