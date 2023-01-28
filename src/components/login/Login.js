import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '../navigation/Navigation';

import { LoginUser } from '../../firebase/fire';

const Login = () =>{
    
    const [loginEmail, setEmail] = useState("")
    const [loginPassword, setPassword] = useState("")

    const onChangeEmail = event => {
        setEmail(event.target.value);
    };

    const onChangePass = event => {
        setPassword(event.target.value);
    };

    return(
        <AppContainer>
            <Navigation />
            <LoginContainer >
                <LoginHeader>User Login: </LoginHeader>

                <UserContainer>
                    <UserHeader>Email:</UserHeader>   
                    <UserInput placeholder="Enter your email address" type="input" defaultValue={loginEmail} onChange={onChangeEmail} />
                </UserContainer>

                <PassContainer>
                    <PassHeader>Password</PassHeader>
                    <PassInput placeholder="Enter your password" type="password" defaultValue={loginPassword} onChange={onChangePass} />
                </PassContainer>

                <ButtonContainer>
                    <SignInButton onClick={()=>{ LoginUser(loginEmail, loginPassword) } }>Sign In</SignInButton>
                </ButtonContainer>

                <BottomContainer>
                    <RegisterForm to="/register">
                        <NeedAccoutnButton onClick={()=> console.log('Button Clicked')}>Need an Account?</NeedAccoutnButton>
                    </RegisterForm>
                    <ForgotPasswordButton>Forgot your Password?</ForgotPasswordButton>
                </BottomContainer>

            </LoginContainer>
        </AppContainer>
    );
}

const AppContainer = styled.div`  
    height: 100%;    
    text-align: center;
    font-family: "SteelfishRegular";
    color: white;
`;

const LoginContainer = styled.div`
    padding-top: 35px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #8d8e8f;
    height: 450px;
    width: 750px;  
    margin: auto;
    @media(max-width: 1100px){  
        width: 500px
    };
    @media(max-width: 600px){  
        width: 350px
    };
`;

const LoginHeader = styled.h2`
    font-size: 52px;
    margin: 0;
    padding: 0;
`;

//Username Section
const UserContainer = styled.div`
    width: 300px;
    margin: auto;
    text-align: left;
`;

const UserHeader = styled.h4`
    font-size: 32px;
    padding: 0;
    margin: 0;
`;

const UserInput = styled.input`
    font-family: "SteelfishRegular";    
    font-size: 32px;
    width: 300px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    background-color: #c9c9c9;
    padding: 8px;
    color: #535454;
    &:focus{
        outline: none !important;
        border: 1px solid #535454;
        margin: -1px;
    }
    ::placeholder{
        color: #535454;
    }
`;

//Password Section
const PassContainer = styled.div`
    width: 300px;
    margin: auto;
    text-align: left;
    margin-top: 5px;
`;

const PassHeader = styled.h4`
    font-size: 32px;
    padding: 0;
    margin: 0;
`;

const PassInput = styled.input`
    font-family: "SteelfishRegular";    
    font-size: 32px;
    width: 300px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    background-color: #c9c9c9;
    padding: 8px;
    color: #535454;
    &:focus{
        border: 1px solid #535454;
        outline: none !important;
        margin: -1px;
    }
    ::placeholder{
        color: #535454;
    }
`;

//Sign in Button
const ButtonContainer = styled.div`
    width: 300px;
    margin: auto;
    padding: 20px;
`;

const SignInButton = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 12px;
    font-size: 28px;
    font-family: "SteelfishRegular";
    background-color: #c9c9c9; 
    color: #535454;
    margin-top: 10px;
    &:hover{
        border: 1px solid #535454;
    }
`;

//Bottom Buttons
const BottomContainer = styled.div`
    margin: auto;
    margin-top: 10px;
`;

const RegisterForm = styled(Link)`

`

const NeedAccoutnButton = styled.button`
    font-family: "SteelfishRegular";   
    font-size: 24px; 
    border: none;
    background: none;
    cursor: pointer;     
    margin-right: 50px;
    color: white;
    @media(max-width: 600px){
        margin-right: 25px;
    }
    &:hover{
        color: #c9c9c9;
    }
    &::after{
        content: "";
        display: block;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        height: 2px;
        width: 0px;
        background-color: white;
    };
    &:hover::after{
        width: 100%;
        transition: all 0.4s;
    }
`;

const ForgotPasswordButton = styled.button`
    font-family: "SteelfishRegular";
    font-size: 24px; 
    border: none;
    background: none;
    cursor: pointer;     
    margin-left: 50px;
    color: white;
    @media(max-width: 600px){
        margin-left: 25px;
    }
    &:hover{
        color: #c9c9c9;
    }
    &::after{
        content: "";
        display: block;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        height: 2px;
        width: 0px;
        background-color: white;
    };
    &:hover::after{
        width: 100%;
        transition: all 0.4s;
    }
`;

export default Login;