import React from "react";
import * as S from "./Styleds";
import { FiLogIn } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

export const Navbar:React.FC = () => {
    return(
        <>
        <S.Header>
            <S.Divconteudos>
                <S.Titulo>
                    MyShoop
                </S.Titulo>

                <S.Divbutton>
                    <S.Buttonlogin>
                        Login
                        <FiLogIn />
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