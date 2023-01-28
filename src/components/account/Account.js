import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import Navigation from "../navigation/Navigation";

import {LogOutUser} from '../../firebase/fire';
import {getAuth} from "firebase/auth";

const Account = () =>{
    
    const [loggedIn, setLoggedIn] = useState(false)
    const currentUser = getAuth().currentUser

    useEffect(()=>{
        if(currentUser){
            setLoggedIn(true)
            console.log(currentUser.email)
        }
    })

    return(
        <AppContainer>
            <Navigation />
            <AccountContainer>
                <h2>ACCOUNT PAGE</h2>
                {!loggedIn ? <h2>Not Logged In</h2> : <h2>{currentUser.email}</h2>}
                <ButtonContainer>
                    <SignOutButton onClick={()=>{LogOutUser()}}>Sign Out</SignOutButton>
                </ButtonContainer>
            </AccountContainer>
        </AppContainer>
    );
}

const AppContainer = styled.div`  
    height: 100%;    
    text-align: center;
    font-family: "SteelfishRegular";
    color: white;
`;

const AccountContainer = styled.div`
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

const ButtonContainer = styled.div`
    width: 300px;
    margin: auto;
    padding: 20px;
`;

const SignOutButton = styled.button`
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

export default Account