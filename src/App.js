import { createGlobalStyle } from 'styled-components';
import Header from './Components/common/Header';
import MainPage from './Components/ui/MainPage';
import { Route, Routes } from 'react-router';
import { useState} from 'react'

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  }

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  }

  return (
    <>
      <Header toggleSignUp={toggleSignUp} toggleSignIn={toggleSignIn} />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage 
        showSignUp={showSignUp} 
        setShowSignUp={setShowSignUp} 
        showSignIn={showSignIn}
        setShowSignIn={setShowSignIn}
        />} />
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
