import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    
    html {
        height : 100%;
    }
    body{
        background-color: #3E3D3D;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        font-family: "josefin sans";
    }
    .number{
        width: 600px;
    }
    
    .App {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        
    }
    .App h1{
        color : #E4685B;
        font-size: 40px;
    }
    .App p{
        color : white;
    }
    .btn {
        border:none;
        border-radius : 3px;
        cursor: pointer;
        padding:5px;
    }
    .btn-start{
        background-color: #57CC99;
        color: white;
        font-weight: bold;
        padding: 5px 20px 5px 20px
    }
    .btn-quest{
        width: 500px;
        margin-top:10px;
        height:40px;
        background-color : rgba(0,0,0,50%);
        color:white;
    }
    .btn-next{
        background-color: #E4685B;
        color: white;
        margin-top:10px
    }


`