import React, {useState} from "react";
import styled from "styled-components"
//Wallpaper Icon
import BCC_Wallpaper from "../../Background/BCC_Wallpaper.png"
//Hamburger Menu Icon
import { Menu } from "@styled-icons/entypo"

//Nav Icons
import { Home } from "@styled-icons/entypo"
import { TShirt } from "@styled-icons/boxicons-solid"
import { Basketball } from "@styled-icons/fa-solid"
import { DryCleaning } from "@styled-icons/material"
import { ContactPage } from "@styled-icons/material"
//Social icons
import { Tiktok } from "@styled-icons/boxicons-logos"
import { Instagram } from "@styled-icons/bootstrap"
import { Facebook } from "@styled-icons/entypo-social"
import { Email } from "@styled-icons/material"

//Hamburger Icon
const Hamburger = styled(Menu)`   
    width: 50px;
    height: 50px;
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

const ContactIcon = styled(ContactPage)`
    color: white;
    width: 35px;
    height: 35px;
    margin-top: -10px;
    margin-right: 10px;
`;

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
    margin-left: 5%;    
    display: none;
    @media (max-width: 900px){
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
    @media (max-width: 900px){
        height: 100px;
    }
`;

const HeaderText = styled.h2`
    margin: 0;
    font-size: 72px;
    @media (max-width: 500px){
        transform: translate(0, 100px);
        font-size: 52px;
        text-align: right;
        padding-right: 35px;
    }
    @media (max-width: 900px){
        transform: translate(0, 90px);
        font-size: 52px;
    }
`;

//Div for the Social media links at top right
const SocialDiv = styled.div`
    margin-left: 80%;
    display: flex;
    transform: translate(0, -150%);
    @media (max-width: 900px){
        display: none;
    } 
`;

const SocialLink = styled.div`
    display: flex;
    width: 35px;
    height: 40px;
    margin: 3px;
`;

//Nav Links and Containers
const NavContainter = styled.div`
    font-size: 35px;
    font-family: "SteelfishRegular";
    color: white;
    height: 220px;
    transform: translate(0, -100%);
    @media (max-width: 900px){
        
    }
`;

const NavItemContainter = styled.div`
    @media (max-width: 900px){
        text-align: left;
        margin-top: 150px;
        background-color:  #b3b4b5;
    }    
`;

const NavItem = styled.div`
    display: inline-block;
    margin-left: 5%;
    padding: 2px;
    @media (max-width: 900px){
        font-size: 24px; 
        display: inline;
    }
`;

//This puts the line under the line under th nav item when hovering
const HoverNav = styled.a`
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

//Main Call
const Navigation = () => {

    const [open, setOpen] = useState(false);

    const NavButtonClicked = (e) =>{
        let ButtonName = (e.currentTarget.id);
        if(ButtonName === "HomeButton"){
            console.log("H O M E")
        }else if(ButtonName === "ProductsButton"){
            console.log("P R O D U C T S")
        }else if(ButtonName === "TeamsButton"){
            console.log("T E A M S")
        }else if(ButtonName === "CareButton"){
            console.log("C A R E")
        }else if(ButtonName === "ContactButton"){
            console.log("C O N T A C T")
        }
    }

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
    
    const Soda = () =>{
        console.log("SODAAAA");
    }

    return(
        <><HeaderImage /> 
            <NavContainter>
                <HamburgerDiv>
                    <Hamburger onClick={() => {Soda()}}/>
                 </HamburgerDiv>

                <HeaderText>Bella's Custom Crafts</HeaderText>

                <SocialDiv>
                    <SocialLink id="InstagramButton" onClick={SocialButtonClicked}><INSTAGRAM/></SocialLink>
                    <SocialLink id="FacebookButton" onClick={SocialButtonClicked}><FACEBOOK/></SocialLink>
                    <SocialLink id="TikTokButton" onClick={SocialButtonClicked}><TIKTOK/></SocialLink>
                    <SocialLink id="EmailButton" onClick={SocialButtonClicked}><EMAIL/></SocialLink>
                </SocialDiv>

                <NavItemContainter>
                    <NavItem id="HomeButton" onClick={NavButtonClicked}><HoverNav href="#"><HomeIcon />Home</HoverNav></NavItem>
                    <NavItem id="ProductsButton"><HoverNav href="#" onClick={() => setOpen(!open)}><ShirtIcon />Products</HoverNav></NavItem>
                    <NavItem id="TeamsButton" onClick={NavButtonClicked}><HoverNav href="#"><SportIcon />Teams</HoverNav></NavItem>
                    <NavItem id="CareButton" onClick={NavButtonClicked}><HoverNav href="#"><CareIcon />Product Care</HoverNav></NavItem>
                    <NavItem id="ContactButton" onClick={NavButtonClicked}><HoverNav href="#"><ContactIcon />Contact Me</HoverNav></NavItem>
                </NavItemContainter>
            </NavContainter></>   
    );
}

export default Navigation;