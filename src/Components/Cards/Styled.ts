import styled from "styled-components";

export const StyledAside = styled.article`
    /* background-color: #2c2c2c; */
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15)

    
`
export const Card = styled.section`
    border:1px solid black;
    width: 100%;
    
    
    /* width: 30px;
    height: 20px; */
`
// export const Divimag = styled.div`
//     border: 1px solid blue;
//     width: 250px;
// `
export const Imagem = styled.img`
    height: 400px;
    width: 250px;

    object-fit: contain; //contem o objetevo nas medidas mas sem distorcer a imagem
`
export const Descricao = styled.h3`
    font-weight: 500;
    min-height: 3rem;
    font-size: 1.2rem;
    margin-top: 1rem;

`

export const DivPrecoAvaliacao = styled.div`
    display: flex;
    margin-top: 1rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const Preco = styled.span`

`
export const Avaliacao = styled.h4`

`
export const BtnAddCarrinho = styled.button`
    width: 100%;
    margin-top: 1rem;
    border-radius: 5px;
    border: none;
    background-color: blue;
    color: #ffffff;
    padding: 3px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2rem;
    &:hover{
            filter: brightness(1.5);
            transition: filter 0.3s;
        }
`
export const BtnRemoverCarrinho = styled.button`
    width: 100%;
    margin-top: 1rem;
    border-radius: 5px;
    border: none;
    background-color: violet;
    color: #000000;
    padding: 3px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2rem;

`