import React from 'react'
import Navigation from '../navigation/Navigation';
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
`;

const Products = () =>{
    return(
        <AppContainer>
            <Navigation />
            PRODUCTS
        </AppContainer>
    );
}
 
export default Products;