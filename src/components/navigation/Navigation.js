import React, {useState, useEffect} from "react";
import styled from "styled-components"
import {Link} from 'react-router-dom'
//Wallpaper Icon
import BCC_Wallpaper from "../../Background/BCC_Wallpaper.png"
//Hamburger Menu Icon
import { Menu } from "@styled-icons/entypo"
import { CaretDown } from '@styled-icons/boxicons-regular'
//Nav Icons
import { Home } from "@styled-icons/entypo"
import { TShirt } from "@styled-icons/boxicons-solid"
import { Basketball } from "@styled-icons/fa-solid"
import { DryCleaning } from "@styled-icons/material"
import { PersonFill } from '@styled-icons/bootstrap'
//Social icons
import { Tiktok } from "@styled-icons/boxicons-logos"
import { Instagram } from "@styled-icons/bootstrap"
import { Facebook } from "@styled-icons/entypo-social"
import { Email } from '@styled-icons/material-rounded/Email'

//Main Call
const Navigation = () => {
    const [showNav, setNav] = useState(true);
    const [activeHamburger, toggleHamburger] = useState(true)

    const SocialButtonClicked = (e) =>{
        let ButtonName = (e.currentTarget.id);
        if(ButtonName === "InstagramButton"){
            window.location.replace("https://www.instagram.com/bellascustomcrafts/")
        }else if(ButtonName === "FacebookButton"){
            window.location.replace("https://www.facebook.com/bellascustomcrafts")
        }else if(ButtonName === "TikTokButton"){
            window.location.replace("https://www.tiktok.com/@bellascustomcrafts")
        }else if(ButtonName === "EmailButton"){
            console.log("E M A I L");
        }
    }

    const toggleActive = () => {
        setNav(!showNav)
        toggleHamburger(!activeHamburger)
    };

    useEffect(() => {
        function getScreenWidth(){
            if(window.innerWidth > 1100){
                setNav(true)  
                toggleHamburger(true)
            }else{
                setNav(false)
                toggleHamburger(true)
            };
        }
        window.addEventListener("resize", getScreenWidth)
    })

    return(
        <AppContainer>
            <HeaderImage />
            <NavContainter> 
                <HamburgerDiv>
                    {activeHamburger && <Hamburger onClick={() => toggleActive()}/>}
                    {!activeHamburger && <Caret onClick={() => toggleActive()}/>}
                 </HamburgerDiv>

                <HeaderDiv>
                    <HeaderText>Bella's Custom Crafts</HeaderText>
                </HeaderDiv>

                <SocialDiv>
                    <SocialItems>
                        <SocialLink id="InstagramButton" onClick={SocialButtonClicked}><INSTAGRAM/></SocialLink>
                        <SocialLink id="FacebookButton" onClick={SocialButtonClicked}><FACEBOOK/></SocialLink>
                        <SocialLink id="TikTokButton" onClick={SocialButtonClicked}><TIKTOK/></SocialLink>
                        <SocialLink id="EmailButton" onClick={SocialButtonClicked}><EMAIL/></SocialLink>
                    </SocialItems>
                </SocialDiv>

                {showNav &&
                    <NavItemContainter>
                        <NavItem><HoverNav to="/"><HomeIcon />Home</HoverNav></NavItem>
                        <NavItem><HoverNav to="/products"><ShirtIcon />Products</HoverNav></NavItem>
                        <NavItem><HoverNav to="/teams"><SportIcon />Teams</HoverNav></NavItem>
                        <NavItem><HoverNav to="/productCare"><CareIcon />Product Care</HoverNav></NavItem>
                        <NavItem><HoverNav to="/contact"><ContactIcon />Contact Me</HoverNav></NavItem>
                        <NavItem><HoverNav to="/login"><LoginIcon />Account</HoverNav></NavItem>
                    </NavItemContainter>}
            </NavContainter>
        </AppContainer>   
    );
}

const AppContainer = styled.div`    
    text-align: center;
    height: 300px;
    height: 300px;
    @media(max-width: 1100px){
        height: 120px;
    }
`;

//Hamburger Icon
const Hamburger = styled(Menu)`   
    width: 100px;
    height: 100px;
    margin-top: -30px;
    @media(max-width: 1100px){
        margin-left: 10px;
    }
`;

const Caret = styled(CaretDown)`   
    width: 100px;
    height: 100px;
    margin-top: -30px;
`;

//NAV ICONS
const HomeIcon = styled(Home)`
    color: white;
    width: 35px;
    height: 35px;
    margin-top: -10px;
    margin-right: 10px;
    border-size: 1px;
`;

const ShirtIcon = styled(TShirt)`
    color: white;
    width: 35px;
    height: 35px;
    margin-top: -10px;
    margin-right: 10px;
`;

const SportIcon = styled(Basketball)`
    color: white;
    width: 35px;
    height: 35px;
    margin-top: -10px;
    margin-right: 10px;
`;

const CareIcon = styled(DryCleaning)`
    color: white;
    width: 35px;
    height: 35px;
    margin-top: -10px;
    margin-right: 10px;
`;

const ContactIcon = styled(Email)`
    color: white;
    width: 35px;
    height: 35px;
    margin-top: -10px;
    margin-right: 10px;
`;

const LoginIcon = styled(PersonFill)`
    color: white;
    width: 35px;
    height: 35px;
    margin-top: -10px;
    margin-right: 10px;
`

//SOCIAL ICONS
const INSTAGRAM = styled(Instagram)`
    width: 35px;
    height: 35px;
    padding: 5px;
    &:hover{
        color: #8d8e8f;
    }
`;

const FACEBOOK = styled(Facebook)`
    width: 35px;
    height: 35px;
    padding: 5px;
    &:hover{
        color: #8d8e8f;
    }
`;

const TIKTOK = styled(Tiktok)`
    width: 35px;
    height: 35px;
    padding: 5px;
    &:hover{
        color: #8d8e8f;
    }
`;

const EMAIL = styled(Email)`
    width: 35px;
    height: 35px;
    padding: 5px;
    &:hover{
        color: #8d8e8f;
    }
`;

//Header

const HamburgerDiv = styled.div`    
    width: 50px;
    height: 50px;
    margin-left: 5px;    
    display: none;
    @media (max-width: 1100px){
        display: flex;
        transform: translate(0, 150px);
    }
`;

const HeaderImage = styled.div`
    background: url(${BCC_Wallpaper});
    background-color: rgba(155, 163, 171, .5);
    background-blend-mode: multiply;
    height: 280px;
    max-width: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    @media (max-width: 500px){
        height: 100px;
    }
    @media (max-width: 1100px){
        height: 100px;
    }
`;

const HeaderDiv = styled.div`
    display: inline-block;
    @media (max-width: 500px){
        width: 250px;
    }
`; 

const HeaderText = styled.h2`
    margin: 0;
    font-size: 72px;
    width: 400px;
    @media (max-width: 500px){
        transform: translate(0, 90px);
        width: 200px;
        font-size: 52px;
        text-align: right;
        padding-right: 35px;
    }
    @media (max-width: 1100px){
        transform: translate(0, 90px);
        width: 300px;
        font-size: 52px;
    }
`;

//Div for the Social media links at top right
const SocialDiv = styled.div`
    margin-left: 75%;
    display: flex;
    transform: translate(0, -150%);
    @media (max-width: 1100px){
        display: none;
    } 
`;

const SocialItems = styled.div`
    display: flex;
`;

const SocialLink = styled.div`
    display: flex;
    width: 35px;
    height: 40px;
    margin: 3px;
`;

//Nav Links and Containers
const NavContainter = styled.div`
    z-index: 1;  
    position: relative;
    font-size: 35px;
    font-family: "SteelfishRegular";
    color: white;
    height: 220px;
    transform: translate(0, -100%);
`;

const NavItemContainter = styled.div`
    z-index: 10;
    @media (max-width: 1100px){
        border: 1px solid white;
        width: 200px;
        text-align: left;
        margin-top: 10%;
        margin-left: 5%;
        background-color:  #b3b4b5;
    }   
    @media(max-width: 500px){
        margin-top: 20%;
    }
    @media(max-width: 300px){
        margin-top: 30%;
    }
`;

const NavItem = styled.div`
    display: inline-block;
    margin-left: 5%;
    padding: 2px;
    @media (max-width: 1100px){
        font-size: 24px; 
        display: inline;
    }
`;

//This puts the line under the line under th nav item when hovering
const HoverNav = styled(Link)`
    text-decoration: none;
    color: white;
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

export default Navigation;