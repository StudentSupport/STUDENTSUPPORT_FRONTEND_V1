import { createGlobalStyle } from 'styled-components';
import Header from './Components/common/Header';
import MainPage from './Components/ui/MainPage';
import { Route, Routes } from 'react-router';
import SignUp from './Components/ui/SignUp';
import SignIn from './Components/ui/SignIn';

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
