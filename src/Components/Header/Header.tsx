import React, { useState } from "react";
import * as S from "./Styleds";
import { FiLogIn } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { Carrinho } from "../Carrinho/Carrinho";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";


export const Navbar:React.FC = () => {
    //Selecionando o estado que esta guardado dentro do reducer
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
    
    const dispatch = useDispatch()
    //Mudar o estado para aparecer o Conteiner do carrinho
    const [showCar, setShowCar] = useState(false)

    // Define um estado para controlar a condição
    const [btnEntrar, setBtnEntrar] = useState(false);

    // Função para alternar o estado
    const btnSairEntrar = () => {
        setBtnEntrar(!btnEntrar);
    };

    
    const handleUserAuth = () =>{
        //usuario nao esta logado
        if (user === null){
            //Mudando/dispachando a ação de login para logout
            dispatch(
                login({
                    name: "ks",
                    email: "ks@gmail.com"
                })
            )
            //forma antiga
            // dispatch({
            //     type: "user/login",
            //     payload: {
            //         name: "ks",
            //         email: "ks@gmail.com"
            //     }
            // })
        } else {
            //mundando/dispachando o logout 
            dispatch(
                logout({}) //objeto null
            )
            //Forma antiga
            // dispatch({
            //     type: "user/logout",
            // })
        }
        console.log(user)
        
    }

    const functBtnLogin = () =>{
        btnSairEntrar()
        handleUserAuth()
    }
        
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
                    <S.Buttonlogin btnEntrar={btnEntrar} onClick={functBtnLogin}>
                        {btnEntrar ? (
                            <>
                            Logout
                            <MdOutlineLogout />
                            </>)  : (
                            <>
                            Login
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