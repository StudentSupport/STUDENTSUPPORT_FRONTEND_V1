import React from 'react';
import {styled, keyframes} from 'styled-components';
import Background from '../../Img/1-3.png'
import DangerEvent from './DangerEvent';

const MainPage = () => {
  return (
    <>
      <Main>
        <DangerEvent />
      </Main>
    </>
    
  );
};

const Main = styled.div`
  width: 100%;
  height: 93vh;
`


export default MainPage;