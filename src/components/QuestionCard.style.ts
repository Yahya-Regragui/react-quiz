import styled from "styled-components";

type ButtonWrapperProps = {
    correct:boolean;
    userClicked: boolean;

}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    display:flex;
        flex-direction:row;
        justify-content:center;
    :hover{
        opacity:0.8;
    }
    button {
        user-select:none;
        background: ${({correct, userClicked}) => 
            correct
            ? 'green': !correct && userClicked
            ? 'red' : "gray"
        }
    }

`