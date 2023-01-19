import React from "react";
import styled from "styled-components";
import HomepageItem from "./HomepageItem";


import { TShirt } from "@styled-icons/boxicons-solid"
import { DrinkToGo } from "@styled-icons/fluentui-system-filled/DrinkToGo"
import { Dog } from '@styled-icons/fa-solid/Dog' 
import { Car } from '@styled-icons/boxicons-regular/Car'
import { Diamond } from '@styled-icons/ionicons-outline/Diamond'
import { TreeFill } from '@styled-icons/bootstrap/TreeFill'
import { LampFill } from '@styled-icons/bootstrap/LampFill'
import { Basketball } from "@styled-icons/fa-solid"
import { Email } from '@styled-icons/material-rounded/Email'

const Contact = styled(Email)`
    color: white;
    width: 95px;
    height: 95px;
    margin-top: -10px;
    @media (max-width: 900px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
        margin-top: -15px;
    }
`;

const SportTeam = styled(Basketball)`
    color: white;
    width: 95px;
    height: 95px;
    margin-top: -5px;
    @media (max-width: 900px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
        margin-top: -15px;
    }
`;

const Decor = styled(LampFill)`
    color: white;
    width: 95px;
    height: 95px;
    margin-top: -5px;
    @media (max-width: 900px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
        margin-top: -15px;
    }
`;

const Christmas = styled(TreeFill)`
    color: white;
    width: 95px;
    height: 95px;
    margin-top: -10px;
    @media (max-width: 900px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
        margin-top: -15px;
    }
`;

const Jewelry = styled(Diamond)`
    color: white;
    width: 95px;
    height: 95px;
    margin-top: -10px;
    @media (max-width: 900px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
        margin-top: -15px;
    }
`;

const Decal = styled(Car)`
    color: white;
    width: 95px;
    height: 95px;
    margin-top: -10px;
    @media (max-width: 900px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
        margin-top: -15px;
    }
`;

const Pet = styled(Dog)`
    color: white;
    width: 95px;
    height: 95px;
    margin-top: -10px;
    @media (max-width: 900px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
        margin-top: -15px;
    }
`;

const Drink = styled(DrinkToGo)`
    color: white;
    width: 95px;
    height: 95px;
    margin-top: -10px;
    @media (max-width: 900px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
        margin-top: -20px;
    }
`;

const ShirtIcon = styled(TShirt)`
    color: white;
    width: 95px;
    height: 95px;
    margin-top: -10px;
    @media (max-width: 900px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 500px){
        width: 50px;
        height: 50px;
        margin-top: -15px;
    }
`;

const HomepageContainer = styled.div`   
    transform: translate(0, -30%);
    width: 80%;
    height: 700px;
    justify-content: center;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 500px){
        zIndex: -1;
    }
`

const Homepage = () =>{
    return(
        <HomepageContainer>
            <HomepageItem image = {<ShirtIcon/>} title = {"Apparel"}/>
            <HomepageItem image = {<Drink />} title = {"Drinkware"}/>
            <HomepageItem image = {<Pet />} title = {"Pets"}/>
            <HomepageItem image = {<Decal />} title = {"Decals"}/>
            <HomepageItem image = {<Jewelry />} title = {"Jewelry"}/>
            <HomepageItem image = {<Christmas />} title = {"Holiday"}/>
            <HomepageItem image = {<Decor />} title = {"Decor"}/>
            <HomepageItem image = {<SportTeam />} title = {"Teams"}/>
            <HomepageItem image = {<Contact />} title = {"Contact"}/>
        </HomepageContainer>
    );
}


export default Homepage;