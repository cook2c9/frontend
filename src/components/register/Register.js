import React, {useState} from 'react';
import styled from 'styled-components';

import {CreateNewUser} from "../../firebase/fire"

import Navigation from '../navigation/Navigation';

const Register = () =>{
    
    const [registerEmail, setEmail] = useState("")
    const [registerPassword, setPassword] = useState("")
    const [registerConfirmPass, setConfrimPassword] = useState("")

    const HandleCreateNewUser = () =>{
        if(registerPassword === registerConfirmPass){
            CreateNewUser(registerEmail, registerPassword);
        }else{
            alert("Passwords do not match!")
        }
    }

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
            <RegisterContainer >
                <RegisterHeader>Create an Account</RegisterHeader>

                <UserContainer>
                    <UserHeader>Email:</UserHeader>   
                    <UserInput placeholder="Enter your email address" type="input" defaultValue={registerEmail} onChange={onChangeEmail} />
                </UserContainer>

                <PassContainer>
                    <PassHeader>Password</PassHeader>
                    <PassInput placeholder="Enter your password" type="password" defaultValue={registerPassword} onChange={onChangePass} />
                </PassContainer>
                
                <ConfirmContainer>
                    <PassHeader>Confirm Password</PassHeader>
                    <PassInput placeholder="Confirm your password" type="password" defaultValue={registerConfirmPass} onChange={onChangeConfirmPass} />
                </ConfirmContainer>

                <ButtonContainer>
                    <CreateButton onClick={HandleCreateNewUser}>Sign In</CreateButton>
                </ButtonContainer>

            </RegisterContainer>
        </AppContainer>
    );
}

const AppContainer = styled.div`  
    height: 100%;    
    text-align: center;
    font-family: "SteelfishRegular";
    color: white;
`;

const RegisterContainer = styled.div`
    padding-top: 35px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #8d8e8f;
    height: 500px;
    width: 750px;  
    margin: auto;
    @media(max-width: 1100px){  
        width: 500px
    };
    @media(max-width: 600px){  
        width: 350px
    };
`;

const RegisterHeader = styled.h2`
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

const ConfirmContainer = styled.div`
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

const CreateButton = styled.button`
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

export default Register;