import React, { useState } from "react";
import * as S from "./Styleds";
import { FiLogIn } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

export const Navbar:React.FC = () => {



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

                <S.Buttoncarrinho>
                    Carrinho
                    <IoCartOutline />
                </S.Buttoncarrinho>
                </S.Divbutton>
                
            </S.Divconteudos>
        </S.Header>
        </>
    )

}