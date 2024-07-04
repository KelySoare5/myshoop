import React, { useState } from "react";
import * as S from "./Styleds";
import { FiLogIn } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { Carrinho } from "../Carrinho/Carrinho";


export const Navbar:React.FC = () => {

    //Mudar o estado para aparecer o Conteiner do carrinho
    const [showCar, setShowCar] = useState(false)

    // Define um estado para controlar a condição
    const [btnEntrar, setBtnEntrar] = useState(false);

    // Função para alternar o estado
    const btnSairEntrar = () => {
        setBtnEntrar(!btnEntrar);
    };

        
    // const btnEntrar = false
    return(
        <>
        <S.Header>
            {/* Passando uma propriedade no componente carrinho */}
            <S.Divconteudos>
                <S.Titulo>
                    MyShoop
                </S.Titulo>

                <S.Divbutton>
                    <S.Buttonlogin btnEntrar={btnEntrar} onClick={btnSairEntrar}>
                        {btnEntrar ? (
                            <>
                            Sair 
                            <MdOutlineLogout />
                            </>)  : (
                            <>
                            Entrar 
                            <FiLogIn />
                            </>
                            )}
                    </S.Buttonlogin>

                <S.Buttoncarrinho onClick={() => {
                    setShowCar(!showCar)
                }}>
                    Carrinho
                    <IoCartOutline />
                </S.Buttoncarrinho>
                </S.Divbutton>
                
            </S.Divconteudos>
            <Carrinho showCar={showCar }/> 
        </S.Header>
        </>
    )

}