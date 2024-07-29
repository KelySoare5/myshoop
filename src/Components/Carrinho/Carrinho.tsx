import React from "react";
import * as S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";


interface CarrinhoProps {
    showCar: boolean;
}

export const Carrinho:React.FC<CarrinhoProps> = ({showCar}) => {
    //pegando os itens do carrinho
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

    //Somando o preço dos produto adicionado no carrinho
    const totalCarrinho = cart.reduce((totalCart, product) => {
        return totalCart + product.price
    }, 0)
    
    const dispatch = useDispatch()


    return(
        <S.Aside showCar={showCar}>
            <S.Titulo>
                Carrinho
            </S.Titulo>

            {/* Renderizar os produtos do carrinho */}
            <S.CartProductList>
                {cart.map(product => (
                    <S.CartProducttem key={product.id}>
                        <S.CartTitulo>{product.title}</S.CartTitulo> - 
                        ${product.price}

                        <S.BtnRemover onClick={() => 
                            dispatch({type: "cart/remove-product", payload: product})
                        }>Remover</S.BtnRemover>
                        </S.CartProducttem>

                        
                ))}
            </S.CartProductList>

            <S.TotalCart>Total = {totalCarrinho}</S.TotalCart>
        </S.Aside>
    )
}