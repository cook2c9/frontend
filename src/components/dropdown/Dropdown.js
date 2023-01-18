import React from "react";
import styled from "styled-components"

const DropdownContainer = styled.div`
    width: 550px;
    height: 205px;
    margin-top: -2%;
    margin-left: 30%;
`;
const DropdownItem = styled.div`
    width: 100%;
    height: 100%;
    background-color: #8d8e8f;
    border-radius: 5px;
    box-shadow: 5px 5px;    
`;

const Dropdown = (props) =>{
    return(
        <DropdownContainer>
            <DropdownItem>
                
            </DropdownItem>
        </DropdownContainer>
    );
}

export default Dropdown;