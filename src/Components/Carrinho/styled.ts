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
    padding: 1rem;
` 
export const CartProductList = styled.ul`
    padding: 1rem;
    list-style: none;
    gap: 1rem;
`
export const CartProducttem = styled.li`
    padding: 1rem 0;
`
export const CartTitulo = styled.p`
    font-weight: bold;
`
export const TotalCart = styled.p`
    padding: 2rem 1rem;
    font-weight: bold;
`
export const BtnRemover = styled.button`
    margin-left: 1rem;
    border-radius: 5px;
    border: none;
    background-color: violet;
    color: #000000;
    padding: 4px;

`