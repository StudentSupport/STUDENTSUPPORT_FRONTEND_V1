import {styled, createGlobalStyle} from 'styled-components';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import Background from './Img/1-3.png'
import { Route, Routes } from 'react-router';
import SignUp from './Components/SignUp';

function App() {
  return (
    <>
    <Header />
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="Signup" element={<SignUp />} />
    </Routes>
    </>     
  );
}
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
`
export default App;
