import React from 'react';
import styled from 'styled-components';

const DangerEvent = () => {
  return (
    <DangerEvent_layout>
      <DangerEvent_bar>
        <DangerEvent_font>
          오늘은 @@@의 생일입니다! 축하해주세요!
        </DangerEvent_font>
      </DangerEvent_bar>
    </DangerEvent_layout>
  );

};
const DangerEvent_layout = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 15vh;

`
const DangerEvent_bar = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 95%;
height: 50%;
background-color: #ffffff;
`
const DangerEvent_font = styled.p`
font-size: 40px;
`

export default DangerEvent;