import React from 'react'
import Navigation from '../navigation/Navigation';
import styled from 'styled-components'

import icon from '../../Background/icon_large.jpg'

import { Tiktok } from "@styled-icons/boxicons-logos"
import { Instagram } from "@styled-icons/bootstrap"
import { Facebook } from "@styled-icons/entypo-social"
import { Email } from '@styled-icons/material-rounded/Email'

const Contact = () =>{
    
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

    return(
        <AppContainer>
            <Navigation />
            <ContactContainer>
                
                <AboutContainer>
                    <ImageContainer>
                        <ContactImage src={icon} />
                    </ImageContainer>

                    <ContactMethodContainer>
                        <EmailContainer>Bellascustomcrafts@gmail.com</EmailContainer>
                    </ContactMethodContainer>

                    <SocialDiv>
                        <SocialItems>
                            <SocialLink id="InstagramButton" onClick={SocialButtonClicked}><INSTAGRAM/></SocialLink>
                            <SocialLink id="FacebookButton" onClick={SocialButtonClicked}><FACEBOOK/></SocialLink>
                            <SocialLink id="TikTokButton" onClick={SocialButtonClicked}><TIKTOK/></SocialLink>
                            <SocialLink id="EmailButton" onClick={SocialButtonClicked}><EMAIL/></SocialLink>
                        </SocialItems>
                    </SocialDiv>

                </AboutContainer>

                <BioContainer>
                    <BioHeader>A Bit About Bella</BioHeader>
                    <Bio>My grandpa was always so proud of all my crafts. Every time I would make something, I'd have to take it to his house to show him. He'd insist on taking my picture with my craft and tell me that it was very good (especially if it was red, as that was his favorite color). I lost my grandpa in September of 2019. I hope to spread the joy in my crafts with everyone, just as my grandpa had joy in him.</Bio>
                    <Bio>When I was little, I would go to Stampin' Up parties at my grandma's house and sit with all her friends as we ate snacks and made crafts. Ever since then I have been hooked. My grandma gave me her old Cricut machine when I was thirteen. She and my aunt helped me make scrapbooks and cards for my relatives. When I was eighteen, my grandma bought me a new Cricut machine for my birthday. To thank her, I did some research and made her a personalized shirt. I enjoyed that craft so much that I made more and more products for friends and families. Word began to spread and I was soon busy making custom products constantly. This is a wonderful hobby that I find both fun and relaxing. </Bio>
                </BioContainer>

            </ContactContainer>
        </AppContainer> 
    );
}

//App
const AppContainer = styled.div`
    font-family: "SteelfishRegular";

`;

const ContactContainer = styled.div`
    display: flex;
`;

//Logo Photo

const ImageContainer = styled.div`
    margin-left: 6%;
`

const ContactImage = styled.img`
    width: 275px;
    height: 275px;
    margin-top: 40px;
    border-radius: 20px;
    @media(max-width: 1100px){  
        width: 200px;
        height: 200px;
    };
    @media(max-width: 600px){  
        width: 100px;
        height: 100px;
    }; 
`

const AboutContainer = styled.div`
    margin-left: 15%;
`

//Bio
const BioContainer = styled.div`
    text-align: center;
    padding: 30px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #8d8e8f;
    width: 750px;
    margin-left: 6%;  
    margin-right: 6%;
    @media(max-width: 1100px){  
        width: 500px
    };
    @media(max-width: 600px){  
        width: 350px
    };    
`;

const BioHeader = styled.h1`
    color: white;
    font-size: 42px;
    margin: 0;
    @media(max-width: 1100px){  
        font-size: 36px;
    };
    @media(max-width: 600px){  
        font-size: 26px;
    }; 
`

const Bio = styled.h4`
    color: white;
    font-size: 28px;
    @media(max-width: 1100px){  
        font-size: 24px;
    };
    @media(max-width: 600px){  
        font-size: 14px;
    }; 
`;

//Contact Methods
const ContactMethodContainer = styled.div`

`

const EmailContainer = styled.p`
    padding-left: 25px;
    font-size: 24px;
    color: white;
`

const SocialDiv = styled.div`
    margin-left: 20px;
    color: white;
`

const SocialItems = styled.div`
    display: flex;
`

const SocialLink = styled.div`

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



export default Contact;