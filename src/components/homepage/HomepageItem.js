import React from "react";
import styled from "styled-components";

const Hompage_Item = styled.div`
    border: 1px solid white; 
    border-radius: 10px;  
    width: 220px;
    height: 180px;
    margin: 20px 80px;
    background-color: #b3b4b5;
    &:hover{
        border-color: #8d8e8f;
    };
    @media (max-width: 900px){
        width: 150px;
        height: 150px;
        margin: 20px;
        margin-top: 5px;
    }
    @media (max-width: 500px){
        width: 120px;
        height: 120px;
        margin: 10px;
    }
`

const HomepageItemTitle = styled.h3`
    z-index: -1;
    font-family: "SteelfishRegular";
    font-size: 35px;
    padding: 10px;
    color: white;
    justify-content: center;
    margin: auto;
    width: fit-content;
`
const HomepageImageContainer = styled.div`  
    margin-top: 10%;
`;

const HomepageTitleContainer = styled.div`
    margin-top: 20%;
`;

const HomepageItem = (props) =>{
    
    let title = props.title;
    let image = props.image;

    return(
        <Hompage_Item>
            <HomepageItemTitle>
                <HomepageImageContainer>
                    {image}
                </HomepageImageContainer>
                <HomepageTitleContainer>
                    {title}
                </HomepageTitleContainer>
            </HomepageItemTitle>
        </Hompage_Item>
    );
}

export default HomepageItem;