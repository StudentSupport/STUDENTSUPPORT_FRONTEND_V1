import React from 'react';
import {styled} from 'styled-components';
import Background from '../../../assets/1-3.png'
import DangerEvent from './DangerEvent';
import SignUp from '../SignUp';

const MainPage = ({showSignUp,setShowSignUp}) => {
  return (
    <>
      <Main>
        <DangerEvent />
        {showSignUp && <SignUp setShowSignUp={setShowSignUp} showSignUp={showSignUp} />}
      </Main>
    </>
    
  );
};

const Main = styled.div`
  transform: scale(1.02);
  width: 100%;
  height: 100vh;
  position: fixed;
    &::before {
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
`


export default MainPage;