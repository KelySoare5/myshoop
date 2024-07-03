import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const Header = styled.header`
    height: 80px;
    display:flex;
    align-items: center;
    width: 100%;
    background-color: blue;
`
export const Divconteudos = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const Titulo = styled.h1`
    color: #ffffff;

`
export const Divbutton = styled.div`
    /* border: 1px solid black; */
    display: flex;
    gap: 1rem;


`
// export const DivBtnLogin = styled.div`
//     /* display: flex; */
//     border: 1px solid black;
//     align-items: center;
//     justify-items: center;

// `
interface ButtonloginPros{
    btnEntrar: boolean
}
export const Buttonlogin = styled.button<ButtonloginPros>`
    width: 70px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.btnEntrar ? 'red' : 'green'};
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2rem;
    
    transition: opacity 0.3s ease;
    &:hover{
        opacity: .7;
    }
`


export const Buttoncarrinho = styled.button`
    width: 80px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    background-color: orange;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2rem;

    transition: opacity 0.3s ease;

    &:hover{
    opacity: .7;
   }
`
