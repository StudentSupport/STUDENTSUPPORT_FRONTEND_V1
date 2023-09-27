import {styled, createGlobalStyle} from 'styled-components';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import Background from './Img/1-3.png'
import { Route, Routes } from 'react-router';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

function App() {
  return (
    <>
    <Header />
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
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
