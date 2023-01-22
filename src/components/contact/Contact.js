import React from 'react'
import Navigation from '../navigation/Navigation';
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
`;

const Contact = () =>{
    return(
        <AppContainer>
            <Navigation />
            CONTACT ME
        </AppContainer>
    );
}

export default Contact;