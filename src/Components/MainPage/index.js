import React from 'react';
import {styled, keyframes} from 'styled-components';
import Background from '../../Img/1-3.png'
import DangerEvent from './DangerEvent';

const MainPage = () => {
  return (
    <>
      <Main>
        {/* <DangerEvent /> */}
      </Main>
    </>
    
  );
};

const Main = styled.div`
  width: 100%;
  height: 93vh;
  width: 100%;
    height: 100vh;
    position: relative;
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