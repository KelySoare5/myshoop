import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        transition: cursor 0.3s;

        &:hover{
            filter: brightness(1.2);
            transition: filter 0.3s;
        }
    }
    
    
`