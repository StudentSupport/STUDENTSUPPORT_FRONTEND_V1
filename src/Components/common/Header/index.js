import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Header = ({toggleSignUp,toggleSignIn}) => {
  return (
    <Header_layout>
      <All_Login>
        <Main_Button to='/'>홈</Main_Button>
        <Main_Button>시간표</Main_Button>
        <Main_Button>게시판</Main_Button>
      </All_Login>
      <All_Login>
      <L_Button onClick={toggleSignIn}>로그인</L_Button>
        <L_Button onClick={toggleSignUp}>회원가입</L_Button>
      </All_Login>
    </Header_layout>
  );
};

const Header_layout = styled.header`
  background-color: #FFFFFF;
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9999;
`
const Main_Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration-line: none;
  border: none;
  background-color: #FFFFFF;
  width: 80px;
  height: 30px;
  font-size: 15px;
  border-radius: 4px;
  color: black;
  &:hover {
    background-color: #E6E6E6;
  }
`
const L_Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #FFFFFF;
  width: 80px;
  height: 30px;
  font-size: 15px;
  border-radius: 4px;
  color: #8258FA;
  &:hover {
    background-color: #E6E6E6;
  }
  &:nth-child(2) {
    background-color: #8258FA;
    color: white;
  }
  &:nth-child(2):hover {
    background-color: #642EFE;
  }
`
const All_Login = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 150px;
  padding-left: 120px;
`


export default Header;