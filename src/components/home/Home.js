import React from 'react'
import styled from 'styled-components'

import Navigation from '../navigation/Navigation';
import Homepage from '../homepage/Homepage'

//Styling is in App.css

const AppContainer = styled.div`
  text-align: center;
`;

const Home = () =>{
    return(
    <AppContainer>
        <Navigation />
        <Homepage />
    </AppContainer>
    );
}

export default Home;