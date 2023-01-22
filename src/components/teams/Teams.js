import React from 'react'
import Navigation from '../navigation/Navigation';
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
`;

const Teams = () =>{
    return(
        <AppContainer>
            <Navigation />
            TEAMS
        </AppContainer>
    );
}

export default Teams;