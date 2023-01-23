import React, {useState} from 'react';
import styled from 'styled-components';

import Navigation from '../navigation/Navigation';

const Login = () =>{
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SubmitClicked = (email, pass) =>{
        alert("Email: " + email + " | Password: " + pass) 
    };

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
                <LoginHeader>User Login</LoginHeader>

                <UserContainer>
                    <UserHeader>Email:</UserHeader>   
                    <UserInput placeholder="Enter your email address" type="input" defaultValue={email} onChange={onChangeEmail} />
                </UserContainer>

                <PassContainer>
                    <PassHeader>Password</PassHeader>
                    <PassInput placeholder="Enter your password" type="text" defaultValue={password} onChange={onChangePass} />
                </PassContainer>

                <SignInButton onClick={() => SubmitClicked(email, password)}>Sign In</SignInButton>

                <BottomContainer>
                    <NeedAccoutnButton>Need an Account?</NeedAccoutnButton>
                    <ForgotPasswordButton>Forgot your Password?</ForgotPasswordButton>
                </BottomContainer>

            </LoginContainer>

        </AppContainer>
    );
}

const AppContainer = styled.div`
    text-align: center;
    font-family: "SteelfishRegular";
`;

const LoginContainer = styled.form`
    border: 1px solid red;
    width: 800px;  
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
const UserContainer = styled.label`
  
`;

const UserHeader = styled.h4`
    font-size: 32px;
    text-align: left;
    padding: 0;
    margin: 0;
`;

const UserInput = styled.input`
    font-family: "SteelfishRegular";    
    font-size: 32px;
`;

//Password Section
const PassContainer = styled.label`
    margin-top: 10px;
`;

const PassHeader = styled.h4`
    font-size: 32px;
    padding: 0;
    margin: 0;
`;

const PassInput = styled.input`
    font-family: "SteelfishRegular";    
    font-size: 32px;
`;

const SignInButton = styled.button`

`;

//Bottom Buttons
const BottomContainer = styled.div`
  
`;

const NeedAccoutnButton = styled.button`

`;

const ForgotPasswordButton = styled.button`

`;

export default Login;