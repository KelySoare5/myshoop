import styled from "styled-components";

interface ConteinerProps{
    showCar: boolean;
}
export const Aside = styled.aside<ConteinerProps>`
    background-color: #ffffff;
    position: fixed;
    top: 0;
    right: ${(props) => props.showCar ? '0' : '-350px'};
    height: 100vh;
    width: 350px;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

    transition: right .5s
    
`
export const Titulo = styled.h1`
    padding: 20px 10px;
` 

