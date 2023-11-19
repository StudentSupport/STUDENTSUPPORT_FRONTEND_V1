import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const SignUp = ({setShowSignUp,showSignup}) => {
  // const [formData,setFormData] = useState({
  //   number:'',
  //   name:'',
  //   pw:'',
  // })
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  // const formSend = () => {
  //   axios.post('https://port-0-studentsupport-backend-v1-euegqv2bln1rgmv8.sel5.cloudtype.app/signup', {
  //   "name":formData.name,
  //   "stunum":formData.number,
  //   "password":formData.pw
  // })
  // .then((response) => {
  //   console.log(response.data)
  //   setFormData(prevState => ({
  //     ...prevState,
  //     number: '',
  //     name: '',
  //     pw: '',
  //   }));
  // }).catch((error) => {
  //   console.log('failed')
  //   alert('회원가입에 실패하였습니다.')
  // })}
  // console.log(formData)
  return (
    <SignupPage>
      <SignupForm onSubmit={(e) => e.preventDefault()}>
        <Exit onClick={() => setShowSignUp(false)} >X</Exit>
        <Title>구글로 회원가입</Title>
      </SignupForm>
    </SignupPage>
  );
};
const SignupForm = styled.form`
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
const SignupPage = styled.div`
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
const Title = styled.h2`

`
const Exit = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

export default SignUp;