import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Navigation from "../navigation/Navigation";
import {LogOutUser, UploadPhoto} from '../../firebase/fire';

const Account = () =>{
    const [loggedIn, setLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const [userEmail, setUserEmail] = useState("You are not signed in")
    const [userProfilePhoto, setProfilePhoto] = useState("https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg")
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const user = window.localStorage.getItem("CURRENT_USER")
        const userEmailData = window.localStorage.getItem("CURRENT_USER_EMAIL")
        const userPhotoData = window.localStorage.getItem("CURRENT_USER_PROFILE_PHOTO")

        if(userEmailData && userPhotoData !== null){
            setLoggedIn(true)
           
            setCurrentUser(JSON.parse(user))
            setUserEmail(JSON.parse(userEmailData))
            setProfilePhoto(JSON.parse(userPhotoData))
        }
    }, [currentUser])

    const ChangeProfilePhoto = (e) =>{
        if(e.target.files[0]){
            setProfilePhoto(e.target.files[0])
        }
    }

    const uploadPhotoClick = () =>{
        UploadPhoto(userProfilePhoto, currentUser, setLoading)
    }
 
    return(
        <AppContainer>
            <Navigation />
            <AccountContainer>
                <AccountHeader>ACCOUNT PAGE</AccountHeader>
                {!loggedIn ? 
                //User is NOT logged in
                <LoggedOutContainer>
                    <h2>You are not logged in</h2>
                    <ButtonContainer>
                        <SignInButton>Sign In</SignInButton>
                    </ButtonContainer>
                </LoggedOutContainer>
                :
                //User is Logged in
                <LoggedInContainer>
                    <UserContainer>
                        <ProfilePhoto src={"Hello"}/>
                        <SelectPhotoFile type="file" onChange={ChangeProfilePhoto} />
                        <UploadPhotoButton disabled={loading || !userProfilePhoto} onClick={uploadPhotoClick}>Upload</UploadPhotoButton>
                        <EmailHeader>Your Email: {userEmail}</EmailHeader>
                    </UserContainer>

                    <ButtonContainer>
                        <SignOutButton onClick={()=>{LogOutUser()}}>Sign Out</SignOutButton>
                    </ButtonContainer>

                </LoggedInContainer>}
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

const LoggedInContainer = styled.div`

`;

const LoggedOutContainer = styled.div`

`;

const UserContainer = styled.div`

`;

const AccountHeader = styled.h2`
    font-size: 38px;
    margin-top: 0;
`;

const SelectPhotoFile = styled.input`

`;

const UploadPhotoButton = styled.button`

`;

const ProfilePhoto = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 90px;
`;

const EmailHeader = styled.h2`
    font-size: 24px;
    margin-top: 0;
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


export default Account