import React from 'react';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <SigninPage>
      <SigninForm>
        <h1>로그인</h1>
        <InputDiv>
          <Input 
          placeholder='Student Number'
          />
          <Input 
          placeholder='Password'
          />
          <Submit>제출</Submit>
        </InputDiv>
      </SigninForm>
    </SigninPage>
  );
};

const SigninPage = styled.div`
  width: 100%;
  height: 93vh;
  background: linear-gradient(to top, #FFFFFF, #7258FA);
  display: flex;
  justify-content: center;
  align-items: center;
`
const SigninForm = styled.form`
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
const InputDiv = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
  width: 85%;
  height: 15%;
  margin-bottom: 20px;
`
const Submit = styled.button`
  width: 95%;
  height: 13%;
  background-color: #8258FA;
  border: none;
  border-radius: 5px;
  color: white;
  &:hover {
    background-color: #642EFE;
  }
`

export default SignIn;