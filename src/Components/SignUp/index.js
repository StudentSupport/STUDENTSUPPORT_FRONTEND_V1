import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const SignUp = () => {

  const [formData,setFormData] = useState({
    number:'',
    name:'',
    pw:'',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const formSend = () => {
    axios.post('https://student.bssm.kro.kr/signup', {
    "name":formData.name,
    "stunum":formData.number,
    "password":formData.pw,
  })
  .then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log('failed')
  })
  }
  return (
    <SignupPage>
      <SignupForm>
        <div>
          <h1>회원가입</h1>
        </div>
        <InputDiv>
          <Input
            name='number'
            value={formData.number}
            onChange={handleChange}
            placeholder='Student Number'
            />
          <Input 
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            />
          <Input 
          name='pw'
          value={formData.pw}
          onChange={handleChange}
          placeholder='Password'
          />
        <Submit onClick={formSend}>제출</Submit>
        </InputDiv>
      </SignupForm>

    </SignupPage>
  );
};
const InputDiv = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Input = styled.input`
  width: 85%;
  height: 15%;
  margin-bottom: 20px;
`
const SignupForm = styled.form`
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
const SignupPage = styled.div`
  width: 100%;
  height: 93vh;
  background: linear-gradient(to top, #FFFFFF, #7258FA);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default SignUp;