import React, {useState} from 'react';
import styled from 'styled-components';

import Navigation from '../navigation/Navigation';

const Login = () =>{
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfrimPassword] = useState("")

    const SubmitClicked = () =>{
        if(password === confirmPass){
            alert("Success")
        }else{
            alert("Passwords do not match")
        }
    };

    const onChangeEmail = event => {
        setEmail(event.target.value);
    };

    const onChangePass = event => {
        setPassword(event.target.value);
    };

    const onChangeConfirmPass = event => {
        setConfrimPassword(event.target.value);
    }

    return(
        <AppContainer>
            <Navigation />
            <LoginContainer >
                <LoginHeader>User Login</LoginHeader>

                <UserContainer>
                    <UserHeader>Email:</UserHeader>   
                    <UserInput placeholder="Enter your email address" type="input" defaultValue={email} onChange={onChangeEmail} />
                </UserContainer>

                <PassContainer>
                    <PassHeader>Password</PassHeader>
                    <PassInput placeholder="Enter your password" type="password" defaultValue={password} onChange={onChangePass} />
                </PassContainer>
                
                <ConfirmContainer>
                    <PassHeader>Confirm Password</PassHeader>
                    <PassInput placeholder="Confirm your password" type="password" defaultValue={confirmPass} onChange={onChangeConfirmPass} />
                </ConfirmContainer>

                <ButtonContainer>
                    <SignInButton onClick={() => SubmitClicked(email, password)}>Sign In</SignInButton>
                </ButtonContainer>

                <BottomContainer>
                    <NeedAccoutnButton>Need an Account?</NeedAccoutnButton>
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

const LoginContainer = styled.form`
    border: 1px solid white;
    border-radius: 20px;
    background-color: #8d8e8f;
    width: 600px;  
    margin: auto;
    height: 400px;
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
const UserContainer = styled.form`
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
    padding: 4px;
    &:focus{
        outline: none !important;
    }
`;

//Password Section
const PassContainer = styled.form`
    width: 300px;
    margin: auto;
    text-align: left;
`;

const ConfirmContainer = styled.form`
    width: 300px;
    margin: auto;
    text-align: left;
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
    padding: 4px;
    &:focus{
        outline: none !important;
    }
`;

//Sign in Button
const ButtonContainer = styled.form`
    border: 1px solid yellow;
`;

const SignInButton = styled.button`

`;

//Bottom Buttons
const BottomContainer = styled.div`
    border: 1px solid blue;
`;

const NeedAccoutnButton = styled.button`

`;

const ForgotPasswordButton = styled.button`

`;

export default Login;