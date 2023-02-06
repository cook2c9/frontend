import React from 'react'
import Navigation from '../navigation/Navigation';
import styled from 'styled-components'

const ProductCare = () =>{
    return(
        <AppContainer>
            <Navigation />
                <CareHeader>Product Care</CareHeader>
            <CareDiv>
                <ProductDiv>
                    <CareItem>
                        <ItemHeader>SHIRTS</ItemHeader>
                    </CareItem>
                    <StepsDiv>
                        <StepList>
                            <Step>Turn the shirt inside-out</Step>
                            <Step>Wash on a gentle or "Cold Wash" cycle</Step>
                            <Step>Hang the shirt to try</Step>
                        </StepList>
                    </StepsDiv>
                </ProductDiv>

                <ProductDiv>
                    <CareItem>
                        <ItemHeader>SHOES</ItemHeader>
                    </CareItem>
                    <StepsDiv>
                        <StepList>
                            <Step>Shoes must be hand washed</Step>
                            <Step>Use a non-invasive, non-bleach based cleaner</Step>
                            <Step>Air dry the shoes, not washing machine or dryer safe</Step>
                        </StepList>
                    </StepsDiv>
                </ProductDiv>

                <ProductDiv>
                    <CareItem>
                        <ItemHeader>CUPS</ItemHeader>
                    </CareItem>
                    <StepsDiv>
                        <StepList>
                            <Step>Hand wash</Step>
                            <Step>*Cups are not dishwasher safe*</Step>
                            <Step>*Cups are not microwave safe*</Step>
                            <Step>Do not leave long term in a car over 90 degrees, or less than 30 degrees</Step>
                        </StepList>
                    </StepsDiv>
                </ProductDiv>
            </CareDiv>
        </AppContainer>
    );
}

//App Container
const AppContainer = styled.div`
    text-align: center;
    font-family: "SteelFishRegular";
    color: white;
`;

// Page Container
const CareDiv = styled.div`
    display: flex;
    padding: 20px;
`;

const CareHeader = styled.h1`
    margin: 0;
    font-size: 50px
`;

// Item Container
const ProductDiv = styled.div`
    background-color: #8d8e8f;
    border: 1px solid white;
    border-radius: 10px;
    margin: auto;
    width: 450px;
    height: 500px;
    @media(max-width: 1500px){
        width: 350px;
    }
`;

//Header Image
const CareItem = styled.div`
    height: 60px;
    width: 150px;
    margin: auto;
    margin-top: 25px
`;

const ItemHeader = styled.h3`
    font-size: 48px;
    margin: 0;
    @media(max-width: 1500px){
        font-size: 40px;
    }
`;

//Care Stes
const StepsDiv = styled.div`
    border: 1px solid white;
    border-radius: 10px;
    margin: auto;
    height: 300px;
    width: 300px;
    margin-top: 20px;
    @media(max-width: 1500px){
        margin-top: 10px;
        width: 250px;
    }
`;

const StepList = styled.ul`
    text-align: left;
    list-style-type: "- ";
`;

const Step = styled.li`
    padding: 10px;
    font-size: 25px;
    @media(max-width: 1500px){
        font-size: 22px;
    }
`

export default ProductCare;