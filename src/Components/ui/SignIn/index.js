import React from 'react';
import styled from 'styled-components';

const SignIn = ({setShowSignIn}) => {
  return (
    <SigninPage>
      <SigninForm onSubmit={(e) => e.preventDefault()}>
      <Exit onClick={() => setShowSignIn(false)} >X</Exit>
      <Title>구글로 로그인</Title>
      </SigninForm>
    </SigninPage>
  );
};

const SigninPage = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
`
const SigninForm = styled.form`
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
`
const Exit = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`
const Title = styled.h2`

`

export default SignIn;