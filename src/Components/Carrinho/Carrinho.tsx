import React from "react";
import * as S from "./styled";

interface CarrinhoProps {
    showCar: boolean;
}

export const Carrinho:React.FC<CarrinhoProps> = ({showCar}) => {

    return(
        <S.Aside showCar={showCar}>
            <S.Titulo>
                Carrinho
            </S.Titulo>
        </S.Aside>
    )
}