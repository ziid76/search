import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    color: white;
    border-width: 0px;
    border-radius: 12px;
    border-style: solid;
    border-color: white; 
    cursor: pointer;
    background: purple;
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
