import { createGlobalStyle } from 'styled-components';
import Header from './Components/common/Header';
import MainPage from './Components/ui/MainPage';
import { Route, Routes } from 'react-router';
import { useState} from 'react'

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <Header toggleSignUp={() => setShowSignUp(!showSignUp)} />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage showSignUp={showSignUp} setShowSignUp={setShowSignUp} />} />
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
