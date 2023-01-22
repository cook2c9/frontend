import React from 'react'
import Navigation from '../navigation/Navigation';
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
`;

const ProductCare = () =>{
    return(
        <AppContainer>
            <Navigation />
            PRODUCT CARE
        </AppContainer>
    );
}

export default ProductCare;